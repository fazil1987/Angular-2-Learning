System.register(['angular2/core', './heart.service'], function(exports_1, context_1) {
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
    var core_1, heart_service_1;
    var HeartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heart_service_1_1) {
                heart_service_1 = heart_service_1_1;
            }],
        execute: function() {
            HeartComponent = (function () {
                function HeartComponent(heartService) {
                    this.heartService = heartService;
                    this.isClicked = false;
                    this.noOfLikes = heartService.getLikes();
                }
                HeartComponent.prototype.onClick = function () {
                    this.isClicked = !this.isClicked;
                    this.heartService.AddLikes(this.isClicked ? 5 : -1);
                    this.noOfLikes = this.heartService.getLikes();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeartComponent.prototype, "isClicked", void 0);
                HeartComponent = __decorate([
                    core_1.Component({
                        selector: 'heart',
                        template: "\n    <button [class.btn-primary]=\"isClicked\" [textContent]=\"isClicked ? 'Unlike' : 'Like' \" (click)=\"onClick()\"></button>\n    <h2>{{ noOfLikes }}</h2>\n    ",
                        providers: [heart_service_1.HeartService]
                    }), 
                    __metadata('design:paramtypes', [heart_service_1.HeartService])
                ], HeartComponent);
                return HeartComponent;
            }());
            exports_1("HeartComponent", HeartComponent);
        }
    }
});
//# sourceMappingURL=heart.component.js.map