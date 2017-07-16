System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeartService;
    return {
        setters:[],
        execute: function() {
            HeartService = (function () {
                function HeartService() {
                    this.noOfLikes = 10;
                }
                HeartService.prototype.getLikes = function () {
                    return this.noOfLikes;
                };
                HeartService.prototype.AddLikes = function (likes) {
                    this.noOfLikes += likes;
                };
                return HeartService;
            }());
            exports_1("HeartService", HeartService);
        }
    }
});
//# sourceMappingURL=heart.service.js.map