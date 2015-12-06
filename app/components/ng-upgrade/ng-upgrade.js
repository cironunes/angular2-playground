System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var NgUpgradeCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgUpgradeCmp = (function () {
                function NgUpgradeCmp() {
                }
                NgUpgradeCmp = __decorate([
                    core_1.Component({
                        selector: 'ng-upgrade',
                        templateUrl: 'app/components/ng-upgrade/ng-upgrade.html',
                        styleUrls: ['app/components/ng-upgrade/ng-upgrade.css'],
                        providers: [],
                        directives: [],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgUpgradeCmp);
                return NgUpgradeCmp;
            })();
            exports_1("NgUpgradeCmp", NgUpgradeCmp);
        }
    }
});
//# sourceMappingURL=ng-upgrade.js.map