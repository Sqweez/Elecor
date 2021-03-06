<template>
    <v-card>
        <v-card-title>
            {{ title }}
        </v-card-title>
        <v-overlay v-model="overlay">
            <v-progress-circular indeterminate size="48" color="primary">
            </v-progress-circular>
        </v-overlay>
        <v-card-text>
            <div class="clients-details">
                <h4>
                    Всего клиентов: {{ clientsCount }}
                </h4>
                <v-btn color="primary" class="button-add" @click="showAddClientModal = true" v-if="user.role_id === 1 || user.role_id === 3">
                    Добавить клиента
                    <v-icon>mdi-account-plus</v-icon>
                </v-btn>
                <v-btn color="success" class="button-add" v-if="user.role_id === 3" @click="exportClientModal = true">
                    Экспорт клиентов
                    <v-icon>mdi-file-excel-box</v-icon>
                </v-btn>
                <v-btn color="success" class="button-add" @click="showImportModal = true" v-if="user.role_id === 3">
                    Импорт клиентов
                    <v-icon>mdi-file-excel-box</v-icon>
                </v-btn>
                <v-btn color="success" class="button-add" @click="parseBalance" v-if="user.role_id === 1 || user.role_id === 3">
                    Пополнить баланс
                    <v-icon>mdi-cash</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <div
                    class="text-center d-flex align-items-center justify-content-center"
                    style="min-height: 651px"
                    v-if="!clients">
                    <v-progress-circular
                        indeterminate
                        size="65"
                        color="primary"
                    ></v-progress-circular>
                </div>
                <v-text-field
                    v-if="clients"
                    v-model="search"
                    outlined
                    solo
                    clearable
                    append-icon="mdi-account-search"
                    label="Поиск клиента"
                    single-line
                    hide-details
                ></v-text-field>
                <v-select
                    label="Тип клиента"
                    v-if="clients"
                    :items="subjects"
                    item-text="type"
                    item-value="id"
                    v-model="client_type"
                ></v-select>
            </div>
            <v-data-table
                v-if="clients"
                @click:row="rowClick"
                no-results-text="Нет результатов"
                no-data-text="Нет данных"
                :page="CURRENT_PAGE"
                @update:page="updatePage"
                :footer-props="{
                'items-per-page-options': [10, 15, {text: 'Все', value: -1}],
                'items-per-page-text': 'Записей на странице',
            }"
                :headers="headers"
                :items="clients"
                :search="search"
            >
                <template v-slot:item.personalAccount="{ item }">
                <span v-if="!item.connections.length">
                    Данные отсутствуют
                </span>
                    <ul>
                        <li v-for="(i, index) of item.connections" :key="index">{{ i.personal_account }}</li>
                    </ul>
                </template>
                <template v-slot:item.address="{ item }">
                <span v-if="!item.connections.length">
                    Данные отсутствуют
                </span>
                    <ul>
                        <li v-for="(i, index) of item.connections" :key="index">{{ i.address }}</li>
                    </ul>
                </template>
                <template v-slot:item.trademark="{ item }">
                 <span v-if="!item.connections.length">
                    Данные отсутствуют
                </span>
                    <ul>
                        <li v-for="(i, index) of item.connections" :key="index">{{ i.trademark }}</li>
                    </ul>
                </template>
                <template slot="footer.page-text" slot-scope="{pageStart, pageStop, itemsLength}">
                    {{ pageStart }}-{{ pageStop }} из {{ itemsLength }}
                </template>
            </v-data-table>
        </v-card-text>
        <AddClientModal :state="showAddClientModal" v-on:onSave="saveUser" v-on:onClose="closeModal"/>
        <ImportClientsModal :state="showImportModal" v-on:onClose="showImportModal = false"
                            v-on:onSave="onClientImported"/>
        <ParseBalanceModal :state="showParseBalanceModal" v-on:onClose="showParseBalanceModal = false" v-on:onSave="onBalanceImported" />
        <ExportClientsModal :state="exportClientModal" v-on:cancel="exportClientModal = false;" v-on:submit="onExportSubmit"/>
    </v-card>
</template>

<script>
    import {mapGetters} from 'vuex';
    import showToast from "../../utils/Toast";
    import AddClientModal from "../Modals/AddClientModal/AddClientModal";
    import ImportClientsModal from "../Modals/ImportClientsModal/ImportClientsModal";
    import GETTERS from "../../store/getters";
    import ParseBalanceModal from "../Modals/ParseBalanceModal/ParseBalanceModal";
    import ExportClientsModal from "../Modals/v2/ExportClientsModal/ExportClientsModal";
    import axios from 'axios';
    export default {
        components: {ExportClientsModal, AddClientModal, ImportClientsModal, ParseBalanceModal},
        props: {
            title: {
                type: String,
                default: 'Данные'
            }
        },
        computed: {
            ...mapGetters([GETTERS.CLIENTS_COUNT, 'user', "CURRENT_PAGE"]),
            clients() {
                if (this.client_type === -1) {
                    return this.$store.getters[GETTERS.CLIENTS];
                } else {
                    return this.$store.getters[GETTERS.CLIENTS].filter(client => client.client_type === this.client_type);
                }
            },
            subjects() {
                return [{type: 'Все', id: -1}, ...this.$store.getters.getSubjects];
            },
        },
        data: () => ({
            showAddClientModal: false,
            showImportModal: false,
            showLoader: false,
            search: '',
            showParseBalanceModal: false,
            exportClientModal: false,
            pageNumber: 1,
            overlay: false,
            client_type: -1,
            headers: [
                {
                    text: 'Контрагент',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: 'лиц счета',
                    value: '_personalAccounts',
                    visible: false,
                    align: ' d-none'
                },
                {
                    text: 'адреса',
                    value: '_addresses',
                    visible: false,
                    align: ' d-none'
                },
                {
                    text: 'торговые наименования',
                    value: '_trademarks',
                    visible: false,
                    align: ' d-none'
                },
                {text: 'Лицевой счет', value: 'personalAccount', sortable: false},
                {text: 'Адрес', value: 'address', sortable: false},
                {text: 'Торговое наименование', value: 'trademark', sortable: false}
            ],
        }),
        methods: {
            async rowClick(e) {
                await this.$router.push({name: 'clients.show', params: {userId: e.id}})
            },
            updatePage(page) {
                this.$store.commit('setCurrentPage', page);
            },
            closeModal() {
                this.showAddClientModal = false;
            },
            async saveUser(e) {
                this.showAddClientModal = false;
                showToast('Клиент успешно добавлен!');
                await this.$router.push({name: 'clients.show', params: {userId: e.id}})
            },
            onClientImported() {
                this.showImportModal = false;
                showToast('Клиенты успешно импортированы!');
            },
            parseBalance() {
                this.showParseBalanceModal = true;
            },
            onBalanceImported() {
                this.showParseBalanceModal = false;
                showToast('Данные по балансу успешно обновлены!');
            },
            async onExportSubmit(query) {
                this.exportClientModal = false;
                this.overlay = true;
                const { data } = await axios.get(`/api/export/clients?${query}`);
                const link = document.createElement('a');
                link.href = data;
                link.click();
                this.overlay = false;
            }
        },
        watch: {
            pageNumber(value) {
                console.log(value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .clients-details {
        margin: 4px 16px 8px;
    }

    .button-add {
        margin: 10px 0;
        width: 240px;
    }
</style>
