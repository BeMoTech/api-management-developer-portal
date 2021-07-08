import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { CustomNavbarModelBinder } from "./customNavbarModelBinder";
import { CustomNavbar, CustomNavbarViewModelBinder } from "./react";

/**
 * Inversion of control module that registers publish-time dependencies.
 */
export class CustomNavbarPublishModule implements IInjectorModule {
    public register(injector: IInjector): void {        
        injector.bind("customNavbar", CustomNavbar);
        injector.bindToCollection("modelBinders", CustomNavbarModelBinder);
        injector.bindToCollection("viewModelBinders", CustomNavbarViewModelBinder);
    }
}
