System.register(['angular2/core', 'angular2/platform/browser', 'angular2/router', './app/angular2-playground'], function(exports_1) {
    var core_1, browser_1, router_1, angular2_playground_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_playground_1_1) {
                angular2_playground_1 = angular2_playground_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(angular2_playground_1.Angular2PlaygroundApp, [
                router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=app.js.map