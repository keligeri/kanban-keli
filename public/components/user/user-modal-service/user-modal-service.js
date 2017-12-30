kanbanApp.factory('UserModalService', [function () {

    return {
        readUserFromModal: function () {
            let username = document.getElementById('user-name').value;
            let ssoId = document.getElementById('user-ssoId').value;
            let role = document.getElementById('user-role').value;
            let picture = document.getElementById('user-picture').value;

            return new User(0, username, role, ssoId, picture);
        },
        updateUserModal: function (userList, userId) {
            let user = userList.filter(user => user.getId === userId)[0];
            document.getElementById('user-ssoId').value = user.getSsoId;
            document.getElementById('user-name').value = user.getUsername;
            document.getElementById('user-role').value = user.getRole;
            document.getElementById('user-picture').value = user.getPictureUrl;
        },
        clearUserModal: function () {
            document.getElementById('user-ssoId').value = "";
            document.getElementById('user-name').value = "";
            document.getElementById('user-role').value = "";
            document.getElementById('user-picture').value = "";
        }
    };

}]);

