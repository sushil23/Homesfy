export default class BooksController {
    constructor(books, dataService, $route, $scope) {
        this.$route = $route;
        this.$scope = $scope;
        this.dataService = dataService;
        this.getBooksObservable = this.dataService.watchGetBooks();
        this.books = books;
        this.selectedUser = "";
    }
    openModal() {
        $('.add-book').modal('show');
        $('.add-book').off('hidden.bs.modal').on('hidden.bs.modal', function () {
            this.title = "";
            this.author = "";
        });
    }
    add() {
        var book = {
            name: this.title,
            author: this.author
        }
        this.dataService.addBook(book).then((data) => {
            $('.add-book').modal('hide');

            this.title = "";
            this.author = "";

            this.getBooksObservable.refetch().then((res) => {
                this.books = res.data.books;
                this.$scope.$apply();
            });
        });
    }
    initTransaction(type, id) {
        this.transType = type;
        this.bookId = id;

        $('.find-user').modal('show');
        $('.find-user').off('hidden.bs.modal').on('hidden.bs.modal', function () {
            this.transType = "";
            this.bookId = "";
            this.userContactNo = "";
            this.selectedUserName = "";
            this.selectedUserId = "";
        });
    }
    createTransaction() {
        var data = {
            transType: this.transType,
            bookId: this.bookId,
            selectedUserId: this.selectedUserId
        };
        this.dataService.createTransaction(data).then((res) => {
            $('.find-user').modal('hide');
            this.getBooksObservable.refetch().then((res) => {
                this.books = res.data.books;
                this.$scope.$apply();
            });
        });
    }
    findUser() {
        var user = {
            contactNo: this.userContactNo
        };
        this.dataService.getUserByContactNo(user).then((user) => {
            this.selectedUserName = user.name;
            this.selectedUserId = user._id;
        });
    }
}
BooksController.$inject = ['books', 'dataService', '$route', '$scope'];