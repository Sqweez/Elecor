<template>
    <div>
        <v-overlay v-model="overlay">
            <v-progress-circular indeterminate size="48" color="primary">
            </v-progress-circular>
        </v-overlay>
        <v-card>
            <v-card-title>
                Дебиторская задолженность
            </v-card-title>
            <v-card-text class="p-3">
                <div
                    class="text-center d-flex align-items-center justify-content-center"
                    style="min-height: 651px"
                    v-if="clients === null">
                    <v-progress-circular
                        indeterminate
                        size="65"
                        color="primary"
                    ></v-progress-circular>
                </div>
                <div v-if="clients !== null">
                    <h3>Общая задолженность: {{total_debt * -1 | money}}</h3>
                    <v-divider class="mt-4"></v-divider>
                    <v-btn color="primary mt-4" v-if="user.role_id !== 2" @click="exportModal = true">Экспорт данных
                        <v-icon>mdi-file-excel-box</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-text-field
                        class="p-3"
                        v-model="search"
                        clearable
                        append-icon="mdi-account-search"
                        label="Поиск"
                        single-line
                        hide-details
                    ></v-text-field>
                    <v-data-table
                        @click:row="rowClick"
                        no-results-text="Нет результатов"
                        no-data-text="Нет данных"
                        :footer-props="{
                        'items-per-page-options': [10, 15, {text: 'Все', value: -1}],
                        'items-per-page-text': 'Записей на странице',
                    }"
                        :headers="headers"
                        :items="clients"
                        :search="search"
                    >
                        <template v-slot:item.personal_account="{ item }">
                            <ul>
                                <li v-for="(i, index) of item.connections" :key="index">{{ i.personal_account }}</li>
                            </ul>
                        </template>
                        <template v-slot:item.address="{ item }">
                            <ul>
                                <li v-for="(i, index) of item.connections" :key="index">{{ i.address }}</li>
                            </ul>
                        </template>
                        <template v-slot:item.trademark="{ item }">
                            <ul>
                                <li v-for="(i, index) of item.connections" :key="index">{{ i.trademark }}</li>
                            </ul>
                        </template>
                        <template v-slot:item.debt="{ item }">
                            <ul>
                                <li v-for="(i, index) of item.connections" :key="index">{{ i.debt | money }}</li>
                            </ul>
                        </template>
                        <template v-slot:item._personalAccounts="{ item }">
                            <p v-for="(i, index) of item.connections" :key="index">
                                {{ i.personal_account }}
                            </p>
                        </template>
                        <template slot="footer.page-text" slot-scope="{pageStart, pageStop, itemsLength}">
                            {{ pageStart }}-{{ pageStop }} из {{ itemsLength }}
                        </template>
                    </v-data-table>
                </div>
            </v-card-text>
        </v-card>
        <ExportDebtsModal
            @cancel="exportModal = false"
            @submit="exportDebts"
            :state="exportModal" />
    </div>
</template>

<script>
    import {getDebts} from "../../../api/client/clientApi";
    import axios from "axios";
    import ExportDebtsModal from "../../Modals/v2/ExportDebtsModal/ExportDebtsModal";

    export default {
        components: {ExportDebtsModal},
        async mounted() {
            const response = await getDebts();
            this.clients = response.debts;
            this.total_debt = response.total_debt;
        },
        computed: {
            user() {
                return this.$store.getters.user;
            }
        },
        data: () => ({
            clients: null,
            overlay: false,
            search: '',
            total_debt: 0,
            exportModal: false,
            headers: [
                {
                    text: 'Контрагент',
                    align: 'left',
                    sortable: false,
                    value: 'name',
                },
                {text: 'Лицевой счет', value: 'personal_account', sortable: false},
                {text: 'Адрес', value: 'address', sortable: false},
                {text: 'Торговое наименование', value: 'trademark', sortable: false},
                {text: 'Задолженность', value: 'debt', sortable: false},
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
            ],
        }),
        methods: {
            rowClick(e) {
                window.open(window.origin + '/clients/' + e.id, '_blank');
            },
            openInNewTab(e) {
                this.$router.push({name: 'clients.show', params: {userId: e.id}})
            },
            async exportDebts(queryParams = "") {
                this.overlay = true;
                this.exportModal = false;
                const { data } = await axios.get(`/api/export/debts?${queryParams}`);
                const link = document.createElement('a');
                link.href = data;
                link.click();
                this.overlay = false;
            },
           /* async exportData(e) {
                this.overlay = true;
                this.exportModal = false;
                const getParams = this.isMTK ? '&mtk=1' : '';
                const { data } = await axios.get(`/api/export/debts?date=${e}${getParams}`);
                const link = document.createElement('a');
                link.href = data;
                link.click();
                this.overlay = false;
                this.isMTK = false;
            }*/
        }
    }
</script>

<style scoped>

</style>
