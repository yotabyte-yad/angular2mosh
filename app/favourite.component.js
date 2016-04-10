System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FavouriteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FavouriteComponent = (function () {
                function FavouriteComponent() {
                    this.isFavourite = false;
                    this.change = new core_1.EventEmitter();
                }
                FavouriteComponent.prototype.onClick = function () {
                    this.isFavourite = !this.isFavourite;
                    this.change.emit({ newValue: this.isFavourite });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FavouriteComponent.prototype, "isFavourite", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FavouriteComponent.prototype, "change", void 0);
                FavouriteComponent = __decorate([
                    core_1.Component({
                        selector: 'favourite',
                        templateUrl: 'app/favourite.template.html',
                        styles: ["\n      .glyphicon-star{\n        color:orange; \n      }  \n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FavouriteComponent);
                return FavouriteComponent;
            }());
            exports_1("FavouriteComponent", FavouriteComponent);
        }
    }
});
//# sourceMappingURL=favourite.component.js.map