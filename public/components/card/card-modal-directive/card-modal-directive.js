kanbanApp.directive('cardModalDirective', function () {
    return {
        restrict: 'E',
        scope: {
            savecard: '=',
            clearcardmodal: '='
        },
        templateUrl: 'components/card/card-modal-directive/card-modal-view.html'
    };

});