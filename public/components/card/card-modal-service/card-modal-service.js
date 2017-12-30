kanbanApp.factory("CardModalService", [function () {

    return {
        readCardFromModal: function () {
            let id = document.getElementById('task-id').value;
            let name = document.getElementById('task-name').value;
            let desc = document.getElementById('task-desc').value;

            return new Card(id, name, desc, "new-status");
        },

        clearCardModal: function() {
            document.getElementById('task-id').value = "";
            document.getElementById('task-name').value = "";
            document.getElementById('task-desc').value = "";
        },

        updateCardModal: function (cardList, cardId) {
            let card = cardList.filter(card => card.getId === cardId)[0];
            document.getElementById('task-id').value = card.getId;
            document.getElementById('task-name').value = card.getName;
            document.getElementById('task-desc').value = card.getDescription;
        },
    };

}]);