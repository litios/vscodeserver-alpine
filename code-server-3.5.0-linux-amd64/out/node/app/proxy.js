"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyHttpProvider = void 0;
var http_1 = require("../../common/http");
var http_2 = require("../http");
/**
 * Proxy HTTP provider.
 */
var ProxyHttpProvider = /** @class */ (function (_super) {
    __extends(ProxyHttpProvider, _super);
    function ProxyHttpProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProxyHttpProvider.prototype.handleRequest = function (route, request) {
        return __awaiter(this, void 0, void 0, function () {
            var port;
            return __generator(this, function (_a) {
                if (!this.authenticated(request)) {
                    if (this.isRoot(route)) {
                        return [2 /*return*/, { redirect: "/login", query: { to: route.fullPath } }];
                    }
                    throw new http_1.HttpError("Unauthorized", http_1.HttpCode.Unauthorized);
                }
                // Ensure there is a trailing slash so relative paths work correctly.
                if (this.isRoot(route) && !route.fullPath.endsWith("/")) {
                    return [2 /*return*/, {
                            redirect: route.fullPath + "/",
                        }];
                }
                port = route.base.replace(/^\//, "");
                return [2 /*return*/, {
                        proxy: {
                            strip: route.providerBase + "/" + port,
                            port: port,
                        },
                    }];
            });
        });
    };
    ProxyHttpProvider.prototype.handleWebSocket = function (route, request) {
        return __awaiter(this, void 0, void 0, function () {
            var port;
            return __generator(this, function (_a) {
                this.ensureAuthenticated(request);
                port = route.base.replace(/^\//, "");
                return [2 /*return*/, {
                        proxy: {
                            strip: route.providerBase + "/" + port,
                            port: port,
                        },
                    }];
            });
        });
    };
    return ProxyHttpProvider;
}(http_2.HttpProvider));
exports.ProxyHttpProvider = ProxyHttpProvider;
//# sourceMappingURL=proxy.js.map