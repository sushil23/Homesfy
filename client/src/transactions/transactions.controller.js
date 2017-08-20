export default class TransactionsController {
    constructor(transactions) {
        this.transactions = transactions;
    }
}
TransactionsController.$inject = ['transactions']