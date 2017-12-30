kanbanApp.factory('ValidatorService', [function () {

    return {
        isExistingUser: function (userList, newUser) {
            let users = userList.filter(user => user.getSsoId == newUser.getSsoId);
            return users.length !== 0;
        },
        isExistingCard: function (cardList, newCard) {
            let cards = cardList.filter(c => c.getId == newCard.getId);
            return cards.length !== 0;
        }

    }

}]);