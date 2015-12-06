System.register(['angular2/testing', './hello'], function(exports_1) {
    var testing_1, hello_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (hello_1_1) {
                hello_1 = hello_1_1;
            }],
        execute: function() {
            testing_1.describe('Hello Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(hello_1.HelloCmp).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=hello.spec.js.map