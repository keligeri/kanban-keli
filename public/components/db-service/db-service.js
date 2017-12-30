kanbanApp.factory('DbService', [function () {

    let ROLE_LIST = ['DEVELOPER', 'PO', 'CONTRACTOR'];

    let createUserInstances = function () {
        let user1 = new User(0, "name", ROLE_LIST[Math.floor(Math.random() * 3)], "123456789", "https://randomuser.me/api/portraits/men/41.jpg");
        let user2 = new User(0, "name2", ROLE_LIST[Math.floor(Math.random() * 3)], "987654321", "https://randomuser.me/api/portraits/men/43.jpg");
        let user3 = new User(0, "name3", ROLE_LIST[Math.floor(Math.random() * 3)], "504024778", "https://randomuser.me/api/portraits/women/43.jpg");
        let user4 = new User(0, "name4", ROLE_LIST[Math.floor(Math.random() * 3)], "505024553", "https://randomuser.me/api/portraits/women/40.jpg");

        return [user1, user2, user3, user4];
    };

    return {
        initUserDb: function (userList) {
            let users = createUserInstances();
            users.forEach(user => userList.push(user));
        },
        initCardDb: function (cardList) {
            let card1 = new Card('GE0001', 'card-component-name', 'card-component-descriptions', 'new-status');
            let card2 = new Card('GE0002', 'NAme of the tusk', 'Desc', 'in-progress-status');
            let card3 = new Card('GE0003', 'card-component three name', 'descdescdescdesc', 'in-review-status');
            let card4 = new Card('GE0004', 'card-component four name', 'descdescdescdesc', 'in-pm-review-status');
            let card5 = new Card('GE0005', 'card-component five name', 'HelloWorld!', 'completed-status');
            let card6 = new Card('GE0006', 'card-component six name', 'HelloWorld!', 'completed-status');
            cardList.push(card1);
            cardList.push(card2);
            cardList.push(card3);
            cardList.push(card4);
            cardList.push(card5);
            cardList.push(card6);
        }
    }


}]);