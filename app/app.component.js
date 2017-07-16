System.register(['angular2/core', './Favorites/Favorites.component', './Exercise2/heart.component', './like.component', './VoterComponent/voter.component'], function(exports_1, context_1) {
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
    var core_1, Favorites_component_1, heart_component_1, like_component_1, voter_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Favorites_component_1_1) {
                Favorites_component_1 = Favorites_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                    this.message = "test";
                }
                AppComponent.prototype.handle = function ($event) {
                    console.log($event);
                    this.message = $event.newValue;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: " <favorites [isFavorite]=\"post.isFavorite\" (change)=\"handle($event)\"></favorites>\n                <label>{{message}}</label>\n                <heart [isClicked] = \"false\" ></heart>\n                <heart [isClicked] = \"false\" ></heart>\n                <like [totalLikes] = 70></like>\n\n                <voter></voter>\n                ",
                        directives: [Favorites_component_1.FavoritesComponent, heart_component_1.HeartComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map