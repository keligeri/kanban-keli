kanbanApp.controller('MainController', ['$scope', 'UserService', 'CardService', 'dragulaService',
    function ($scope, userService, cardService, dragulaService) {

        $scope.userList = [];
        $scope.cardList = [];


        // DRAGULA -----------------------
        dragulaService.options($scope, 'bag-user', {
            copy: true,
            accepts: function (el, target, source, sibling) {
                let userId = el.getElementsByTagName('img')[0]
                    .getAttribute('data-userid');
                let targetChildren = target.childNodes;

                return cardIsAlreadyContainUser(targetChildren, userId);
            }
        });

        $scope.initDb = function () {
            cardService.initDb($scope.cardList);
            userService.initDb($scope.userList);
        }();

        $scope
            .$on('bag-card.drop', function (e, el, target) {
                let cardTag = el[0].getElementsByTagName('div')[0];
                let cardId = cardTag.getAttribute('data-taskid');
                let newStatus = target[0].getAttribute('id');

                cardTag.setAttribute('data-status', newStatus);

                let currentCard = getCardById(cardId);
                cardService.changeCardStatus(currentCard, newStatus);
            });

        $scope
            .$on('bag-user.drop', function (e, el, target) {
                if (target == null) {
                    return;
                }

                let userId = el[0].getElementsByTagName('img')[0]
                    .getAttribute('data-userid');
                let cardId = target[0].getAttribute('data-taskid');

                el[0].parentNode.removeChild(el[0]);

                let card = getCardById(cardId);
                let user = getUserById(userId);

                cardService.associateCardWithUser(card, user);
                $scope.$parent.$apply();
            });

        // USER -----------------------
        $scope.saveUser = function () {
            userService.saveUser($scope.userList);
        };

        $scope.updateUserModal = function (userId) {
            userService.updateModal($scope.userList, userId);
        };

        $scope.clearUserModal = function () {
            userService.clearModal();
        };

        $scope.deleteuserfromcard = function(cardId, userId) {
            let card = getCardById(cardId);
            let user = getUserById(userId);

            cardService.deleteUserFromCard(card, user);
        };

        // CARD -----------------------
        $scope.updatecardmodal = function (cardId) {
            cardService.updateModal($scope.cardList, cardId);
        };

        $scope.clearcardmodal = function () {
            cardService.clearModal();
        };

        $scope.savecard = function () {
            cardService.saveCard($scope.cardList);
        };

        $scope.deletecard = function (cardId) {
            $scope.cardList = cardService.deleteCard($scope.cardList, cardId);
        };

        let cardIsAlreadyContainUser = function (target, userId) {
            let targetChild = Array.from(target);

            return targetChild.filter(
                child => child.childNodes[0] != null && child.childNodes[0].getAttribute('data-userid') === userId)
                .length === 0;
        };

        let getCardById = function (taskId) {
            return $scope.cardList.filter(task => task.getId == taskId)[0];
        };

        let getUserById = function (userId) {
            return $scope.userList.filter(user => user.getId == userId)[0];
        };

    }]);
