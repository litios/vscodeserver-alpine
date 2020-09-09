"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../common/util");
var options = util_1.getOptions();
require("./pages/error.css");
require("./pages/global.css");
require("./pages/login.css");
if ("serviceWorker" in navigator) {
    var path = util_1.normalize(options.csStaticBase + "/dist/serviceWorker.js");
    navigator.serviceWorker
        .register(path, {
        scope: options.base || "/",
    })
        .then(function () {
        console.log("[Service Worker] registered");
    });
}
//# sourceMappingURL=register.js.map