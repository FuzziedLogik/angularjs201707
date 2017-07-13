angular.module('users')
.component('userForm', {
    templateUrl: 'app/users/user-form/user-form.component.html',
    controller: function(){
        var self = this;
        self.user = {
            name: ''
        };

        self.save = function(){
            console.log(self.userForm ," saved");
        }

    } 
})