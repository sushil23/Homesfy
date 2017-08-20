export default class UsersController {
    constructor(users, dataService, $route, $scope) {
        this.$route = $route;
        this.$scope = $scope;
        this.dataService = dataService;
        this.getUsersObservable = this.dataService.watchGetUsers();
        this.users = users;
    }
    openModal() {
        $('.add-user').modal('show');
    }
    add() {
        var user = {
            userName: this.userName,
            name: this.name,
            email: this.email,
            contactNumber: this.contactNo
        }
        this.dataService.addUser(user).then((data) => {
            $('.add-user').modal('hide');

            this.userName = "";
            this.name = "";
            this.email = "";
            this.contactNo = "";

            this.getUsersObservable.refetch().then((res) => {
                this.users = res.data.users;
                this.$scope.$apply();
            });
        });
    }
}
UsersController.$inject = ['users', 'dataService', '$route', '$scope'];