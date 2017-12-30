kanbanApp.factory('UserService', [
    'DbService', 'UserModalService', 'ValidatorService', function (dbService, userModalService, validatorService) {

        let updateUser = function (userList, existingUser, newUser) {
            existingUser.ssoId = newUser.getSsoId;
            existingUser.username = newUser.getUsername;
            existingUser.role = newUser.getRole;
            existingUser.pictureUrl = newUser.getPictureUrl;
        };

        let saveOrUpdateUser = function (userList) {
            let newUser = userModalService.readUserFromModal();
            let isExisting = validatorService.isExistingUser(userList, newUser);

            if (!isExisting) {
                userList.push(newUser);
            } else {
                let existingUser = userList.filter(user => user.getSsoId == newUser.getSsoId);
                updateUser(userList, existingUser[0], newUser);
            }
        };

        return {
            initDb: function (userList) {
                dbService.initUserDb(userList);
            },

            saveUser: function (userList) {
                saveOrUpdateUser(userList);
            },

            updateModal: function (userList, userId) {
                userModalService.updateUserModal(userList, userId);
            },

            clearModal: function () {
                userModalService.clearUserModal();
            },

        }

    }]);