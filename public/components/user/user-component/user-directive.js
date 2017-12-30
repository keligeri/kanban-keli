kanbanApp.directive('userDirective', function () {
    return {
        restrict: 'E',
        scope: {
            user: '='
        },
        templateUrl: 'components/user/user-component/user-view.html'
    };
});