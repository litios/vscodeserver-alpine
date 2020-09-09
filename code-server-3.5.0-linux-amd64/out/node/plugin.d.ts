import { Args } from "./cli";
import { HttpServer } from "./http";
export declare type Activate = (httpServer: HttpServer, args: Args) => void;
export interface Plugin {
    activate: Activate;
}
export declare const loadPlugins: (httpServer: HttpServer, args: Args) => Promise<void>;
