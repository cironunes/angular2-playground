System.register(['angular2/testing', './ng-upgrade'], function(exports_1) {
    var testing_1, ng_upgrade_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (ng_upgrade_1_1) {
                ng_upgrade_1 = ng_upgrade_1_1;
            }],
        execute: function() {
            testing_1.describe('NgUpgrade Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(ng_upgrade_1.NgUpgradeCmp).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=ng-upgrade.spec.js.map