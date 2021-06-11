import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { CustomNavbarViewModel } from "./ko/customNavbarViewModel";
import { CustomNavbarModelBinder } from "./customNavbarModelBinder";
import { CustomNavbarViewModelBinder } from "./ko/customNavbarViewModelBinder";


/**
 * Inversion of control module that registers publish-time dependencies.
 */
export class CustomNavbarPublishModule implements IInjectorModule {
    public register(injector: IInjector): void {        
        injector.bind("widget", CustomNavbarViewModel);
        injector.bindToCollection("modelBinders", CustomNavbarModelBinder);
        injector.bindToCollection("viewModelBinders", CustomNavbarViewModelBinder);
    }
}
