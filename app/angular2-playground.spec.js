System.register(['angular2/testing', '../app/angular2-playground'], function(exports_1) {
    var testing_1, angular2_playground_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (angular2_playground_1_1) {
                angular2_playground_1 = angular2_playground_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [angular2_playground_1.Angular2PlaygroundApp]; });
        }
    }
});
//# sourceMappingURL=angular2-playground.spec.js.map