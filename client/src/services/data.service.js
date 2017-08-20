import queries from './queries';

export default class DataService {
    constructor(apollo) {
        this.apollo = apollo;
    }

    getBooks() {
        return this.apollo.query({
            query: queries.getBooks
        }).then((response) => response.data.books);
    }

    addBook(book) {
        return this.apollo.mutate({
            mutation: queries.addBook,
            variables: book,
            // refetchQueries: [{query: queries.getBooks}]
        });
    }

    watchGetBooks() {
        return this.apollo.client.watchQuery({
            query: queries.getBooks
        });
    }

    getUsers() {
        return this.apollo.query({
            query: queries.getUsers
        }).then((response) => response.data.users);
    }

    getUserByContactNo(user) {
        return this.apollo.query({
            query: queries.getUserByContactNo,
            variables: user
        }).then((response) => response.data.userByContactNo);
    }

    addUser(user) {
        return this.apollo.mutate({
            mutation: queries.addUser,
            variables: user,
            // refetchQueries: [{query: queries.getUsers}]
        });
    }

    watchGetUsers() {
        return this.apollo.client.watchQuery({
            query: queries.getUsers
        });
    }

    getTransactions() {
        return this.apollo.query({
            query: queries.getTransactions
        }).then((response) => response.data.transactions);
    }

    createTransaction(data) {
        return this.apollo.mutate({
            mutation: queries.createTransaction,
            variables: data,
            refetchQueries: [{query: queries.getTransactions}]
        });
    }
}
DataService.$inject = ['apollo']