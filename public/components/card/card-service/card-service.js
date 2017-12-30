kanbanApp.factory('CardService', ['DbService', 'CardModalService', 'ValidatorService',
    function (dbService, cardModalService, validatorService) {

        let updateCard = function (cardList, newCard) {
            let existingCard = cardList.filter(c => c.getId == newCard.getId)[0];
            existingCard.id = newCard.getId;
            existingCard.name = newCard.getName;
            existingCard.description = newCard.getDescription;
        };

        return {
            initDb: function (cardList) {
                dbService.initCardDb(cardList);
            },

            saveCard: function (cardList) {
                let card = cardModalService.readCardFromModal();
                let isExisting = validatorService.isExistingCard(cardList, card);
                if (!isExisting) {
                    cardList.push(card);
                } else {
                    updateCard(cardList, card);
                }
            },

            deleteCard: function (cardList, cardId) {
                return cardList.filter(card => card.getId !== cardId);
            },

            updateModal: function (cardList, cardId) {
                cardModalService.updateCardModal(cardList, cardId);
            },

            clearModal: function () {
                cardModalService.clearCardModal();
            },

            associateCardWithUser: function (card, user) {
                card.getUsersList.push(user);
            },

            deleteUserFromCard: function (card, user) {
                card.usersList = card.usersList.filter(u => u.getId != user.getId);
            },

            changeCardStatus: function (card, status) {
                card.setStatus = status;
            }
        }

    }]);















