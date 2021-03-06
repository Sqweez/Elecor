<template>
    <div class="orders-container">
        <v-btn color="primary" class="button-add" v-if="user.role_id === 3 || user.role_id === 4">
            Экспорт данных
            <v-icon>mdi-file-excel-box</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            clearable
            append-icon="mdi-account-search"
            label="Поиск"
            class="mb-2"
            single-line
            hide-details
        ></v-text-field>
        <v-data-table
            v-if="orders"
            no-results-text="Нет результатов"
            no-data-text="Нет данных"
            :footer-props="{
                                'items-per-page-options': [10, 15, {text: 'Все', value: -1}],
                                'items-per-page-text': 'Записей на странице',
                            }"
            :headers="orderHeaders"
            :search="search"
            :items="orders"
        >
            <template v-slot:item.client="{item}">
                <div class="d-flex justify-content-between align-items-center">
                    <span>{{ item.client }}</span>
                    <v-btn icon @click="showClientPage(item)" v-if="item.client_id">
                        <v-icon>mdi-eye</v-icon>
                    </v-btn>
                </div>
            </template>

            <template v-slot:item.action="{ item }">
                <div v-if="item.is_worked">
                    <h4 class="green--text">Отработано</h4>
                </div>
                <div v-else>
                    <v-btn color="primary" @click="showMessageModal(item)" v-if="item.client_id || item.push_token">
                        Ответить
                        <v-icon>mdi-message</v-icon>
                    </v-btn>
                    <v-btn color="success" @click="showCommentModal(item)">Отработано
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                </div>
            </template>
            <template v-slot:item.comment="{ item }">
                <i>{{ item.comment }}</i>
            </template>
            <template slot="footer.page-text" slot-scope="{pageStart, pageStop, itemsLength}">
                {{ pageStart }}-{{ pageStop }} из {{ itemsLength }}
            </template>
        </v-data-table>
        <MessageModal
            :state="messageModal"
            v-on:modalClosed="messageModal = false; currentOrder = null"
            v-on:sendMessage="sendMessage"
        />
        <CommentModal
            :state="commentModal"
            v-on:onCancel="commentModal = false; currentOrder = null;"
            v-on:onSave="changeOrderStatus"
        />
    </div>
</template>

<script>
    import MessageModal from "../../Modals/MessageModal/MessageModal";
    import {sendPushToClient} from "../../../api/client/clientApi";
    import showToast from "../../../utils/Toast";
    import CommentModal from "../../Modals/CommentModal/CommentModal";
    import ACTIONS from "../../../store/actions";

    export default {
        components: {MessageModal, CommentModal},
        methods: {
            closeMessageModal() {
                this.showMessageModal = false;
            },
            showMessageModal(e) {
                this.messageModal = true;
                this.currentOrder = e;
            },
            showCommentModal(e) {
                this.commentModal = true;
                this.currentOrder = e;
            },
            async changeOrderStatus(e) {
                await this.$store.dispatch(ACTIONS.CHANGE_ORDER_STATUS, {
                    id: this.currentOrder.id,
                    is_worked: true, ...e,
                    user_id: this.$store.getters.user.id,
                });
                this.commentModal = false;
                showToast('Статус заявки изменен!');
            },
            showClientPage(item) {
                this.$router.push({name: 'clients.show', params: {userId: item.client_id}});
            },
            async sendMessage(e) {
                const push = {};
                if (this.currentOrder.client_id) {
                    push.client_id = this.currentOrder.client_id;
                } else {
                    push.push_token = this.currentOrder.push_token;
                    push.isGuest = true;
                }

                const _push = {...push, ...e};

                await sendPushToClient(_push);
                this.currentOrder = null;
                this.messageModal = false;
                showToast('Сообщение отправлено!');
            }
        },
        computed: {
            orders() {
                return this.$store.getters.orders;
            },
            user() {
                return this.$store.getters.user;
            },
            orderHeaders() {
                const headers = [
                    {text: 'Контрагент', value: 'client', sortable: false},
                    {text: 'Телефон', value: 'phone', sortable: false},
                    {text: 'Комментарий клиента', value: 'client_comment', sortable: false},
                    {text: 'Дата', value: 'date', sortable: false},
                    {text: 'Услуга', value: 'service', sortable: false},
                    {text: 'Комментарий', value: 'comment', sortable: false},
                ];

                if (this.user.role_id === 3 || this.user.role_id === 4) {
                    headers.push({text: 'Действие', value: 'action', sortable: false})
                }

                return headers;
            }
        },
        data: () => ({
            currentOrder: null,
            messageModal: false,
            commentModal: false,
            search: '',
        })
    }
</script>
