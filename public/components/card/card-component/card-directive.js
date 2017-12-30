kanbanApp.directive('cardDirective', function () {
    return {
        restrict: 'E',
        scope: {
            card: '=',
            deleteuserfromcard: '=',
            updatecardmodal: '=',
            deletecard: '='
        },
        templateUrl: 'components/card/card-component/card-view.html'
    };

});