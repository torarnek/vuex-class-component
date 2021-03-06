import { VuexModule } from "./module";
import { ActionContext } from 'vuex';
export declare type ActionDescriptor = TypedPropertyDescriptor<(payload?: any) => Promise<any>>;
export interface ActionRegister {
    name: string;
    descriptor: ActionDescriptor;
}
export interface ActionOption {
    mode?: "mutate" | "raw";
}
export declare function action(options?: ActionOption): any;
export declare function action(target: any, key: string, descriptor: ActionDescriptor): any;
export declare function getRawActionContext<T extends VuexModule, R>(thisArg: ThisType<T>): ActionContext<T, R>;
export declare function getMutatedActions(cls: typeof VuexModule): Record<any, any>;
