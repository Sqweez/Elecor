<?php

namespace App\Http\Controllers\Api;

use App\Client;
use App\ClientType;
use App\Connection;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Service\DebtService;
use App\Http\Controllers\Service\PushService;
use App\Http\Resources\ClientsResource;
use App\Http\Resources\ConnectionResource;
use App\Http\Resources\DebtResource;
use App\Http\Resources\SingleClientResource;
use App\Message;
use App\Payment;
use App\Phone;
use App\Service;
use App\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;

class ClientController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index() {

        return ClientsResource::collection(Client::with(['type', 'connections' => function ($query) {
            return $query->where('is_deleted', false);
        }])->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return ClientsResource
     */
    public function store(Request $request) {
        $phones = $request->get('phones');
        $client = $request->except('phones');
        if (!$client['photo']) {
            $client = $request->except(['phones', 'photo']);
        }
        $client_id = $this->createClient($client, $phones);

        return new ClientsResource(Client::find($client_id));
    }

    private function createPhones($id, $phones) {
        foreach ($phones as $phone) {
            $data = ['phone' => $phone, 'client_id' => $id];
            Phone::create($data);
        }
    }

    private function createClient($client, $phones): int {
        $client_id = Client::create($client)->id;
        if (count($phones) > 0) {
            $this->createPhones($client_id, $phones);
        }
        return $client_id;
    }

    /**
     * Display the specified resource.
     *
     * @param $client
     * @return SingleClientResource
     */
    public function show($client) {
        return new SingleClientResource(Client::where('id', $client)->with(['phones', 'type', 'connections', 'bonus_transactions', 'bonus_transactions.connection'])->first());
    }

    public function deleteTransaction($id) {
        $transaction = Transaction::find($id);
        $transaction->delete();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Client $client
     * @param \Illuminate\Http\Request $request
     * @return SingleClientResource
     */
    public function update(Client $client, Request $request) {
        $data = $request->except('phones');
        $client->update($data);
        $client_id = $data['id'];
        $phones = $request->get('phones');
        $this->updatePhones($client_id, $phones);
        return new SingleClientResource($client);
    }

    private function updatePhones($id, $phones) {
        Phone::where('client_id', $id)->delete();
        foreach ($phones as $phone) {
            $data = ['phone' => $phone, 'client_id' => $id];
            Phone::create($data);
        }
    }

    public function updateClient(Client $client, Request $request) {
        $data = $request->all();
        $result = $client->update($data);
        return $client;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return Response
     */
    public function destroy($id) {
        $client = Client::find($id);
        $this->deletePhoto($client['photo']);
        $conn = Connection::where('client_id', $id);
        $conn->delete();
        $client->delete();
        return null;
    }

    private function deletePhoto($url) {
        if ($url === 'uploads/no_client_photo.jpg') {
            return null;
        }
        Storage::disk('public')->delete($url);
    }

    public function getTypes() {
        return ClientType::all();
    }

    public function createClients(Request $request) {
        $data = $request->get('clients');
        $clients = json_decode($data, true);
        foreach ($clients as $client) {
            $phones = $client['phones'];
            unset($client['phones']);
            $this->createClient($client, $phones);
        }
    }

    public function push(Request $request) {
        $pushMessage = $request->except(['push_token']);
        $isGuest = $request->get('isGuest');
        $client_id = $request->get('client_id');
        $pushToken = PushService::getToken($client_id);

        if (!$pushToken) {
            return response()->json([], 200);
        }

        PushService::sendPush($pushMessage, $pushToken);
        if ($isGuest) {
            return 1;
        }
        return $this->storeMessage($pushMessage);
    }

    private function storeMessage($message) {
        $_message = $message;
        $_message['mailing_id'] = 0;
        return Message::create($_message);
    }

    private function getMailingId(): int {
        $last_message = Message::all()->last();
        if (!$last_message) {
            $mailing_id = 1;
        } else {
            $mailing_id = $last_message['mailing_id'] + 1;
        }
        return $mailing_id;
    }


    /*public function parseClients() {
        $clientsFile = Storage::disk('public')->get('users.json');

        $clientsData = json_decode($clientsFile, true);

        $services = Service::all()->toArray();

        $serviceNames = array_map(function ($i) {
            return $i['name'];
        }, $services);

        $clientsData = array_map(function ($i) use ($serviceNames, $services) {
            $keys = array_keys($i);
            $index = count($i) - 1;
            $service = $keys[$index];
            $service_key = array_search($service, $serviceNames);
            $service_id = $services[$service_key]['id'];
            $i['date_start'] = Carbon::parse($i['dogovordatanach'])->format('Y-m-d');
            $i['service_id'] = $service_id;
            $i['trademark'] = $services[$service_key]['trademark_default'];
            $i['client_type'] = $i['vidklienta'] === 'Юридические лица' ? 3 : 1;
            $i['price'] = intval($i[$service]);;
            $i['balans'] = intval($i['balans']);
            return $i;
        }, $clientsData);


        foreach ($clientsData as $clientsDatum) {
            $name = $clientsDatum['klient'];
            $client = Client::where('name', $name)->first();
            $client_id = null;
            if (!$client) {
                $client = ['name' => $name, 'client_type' => $clientsDatum['client_type']];

                if (array_key_exists('Телефон', $clientsDatum)) {
                    $phone = [str_replace(' ', '', $clientsDatum['Телефон'])];
                } else {
                    $phone = [];
                }
                $client_id = $this->createClient($client, $phone);
            } else {
                $client_id = $client->id;
            }

            $connection = ['client_id' => $client_id, 'user_id' => 1, 'service_id' => $clientsDatum['service_id'], 'address' => $clientsDatum['ulica'] . " " . $clientsDatum['zdanie'], 'trademark' => $clientsDatum['trademark'], 'personal_account' => $clientsDatum['licshet'], 'price' => $clientsDatum['price'], 'date_start' => $clientsDatum['date_start']];

            $connection_id = Connection::create($connection)->id;

            if ($clientsDatum['balans'] !== 0) {
                $transaction = ['connection_id' => $connection_id, 'balance_change' => $clientsDatum['balans'], 'user_id' => 1, 'is_visible' => false];

                Transaction::create($transaction);

            }
        }

    }*/

    public function getDebt(Request $request) {
        $clientDebts = DebtService::getDebtsOld($request);

        $totalClientsDebt = $clientDebts->reduce(function ($client_a, $client_c) {
            return $client_a + collect($client_c->connections)->reduce(function ($connection_a, $connection_c) {
                    return $connection_a + $connection_c->balance;
                }, 0);
        }, 0);

        return ['debts' => DebtResource::collection($clientDebts), 'total_debt' => $totalClientsDebt];

    }

    public function getLanguages() {
        return collect(Client::LANGUAGES)->values();
    }

    public function getGenders() {
        return collect(Client::GENDERS)->values();
    }

    public function clear() {
        Client::truncate();
        Transaction::truncate();
        Connection::truncate();
        Phone::truncate();
        Payment::truncate();
    }

}
