import { IInjector, IInjectorModule } from "@paperbits/common/injection";
import { CustomNavbarRuntime } from "./react/runtime";

/**
 * Inversion of control module that registers runtime-time dependencies.
 */
export class CustomNavbarRuntimeModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("customNavbarRuntime", CustomNavbarRuntime);
    }
}
