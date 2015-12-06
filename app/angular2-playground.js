System.register(['angular2/core', 'angular2/router', './components/hello/hello', './components/ng-upgrade/ng-upgrade'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, hello_1, ng_upgrade_1;
    var Angular2PlaygroundApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hello_1_1) {
                hello_1 = hello_1_1;
            },
            function (ng_upgrade_1_1) {
                ng_upgrade_1 = ng_upgrade_1_1;
            }],
        execute: function() {
            Angular2PlaygroundApp = (function () {
                function Angular2PlaygroundApp() {
                }
                Angular2PlaygroundApp = __decorate([
                    core_1.Component({
                        selector: 'angular2-playground-app',
                        providers: [],
                        templateUrl: 'app/angular2-playground.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: []
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/', component: hello_1.HelloCmp, name: 'HelloCmp' }),
                        new router_1.Route({ path: '/ng-upgrade', component: ng_upgrade_1.NgUpgradeCmp, name: 'NgUpgradeCmp' })
                    ]), 
                    __metadata('design:paramtypes', [])
                ], Angular2PlaygroundApp);
                return Angular2PlaygroundApp;
            })();
            exports_1("Angular2PlaygroundApp", Angular2PlaygroundApp);
        }
    }
});
//# sourceMappingURL=angular2-playground.js.map