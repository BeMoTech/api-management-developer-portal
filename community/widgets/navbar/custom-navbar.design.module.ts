import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { CustomNavbarEditorViewModel } from "./ko/customNavbarEditorViewModel";
import { CustomNavbarHandlers } from "./customNavbarHandlers";
import { CustomNavbarViewModel } from "./ko/customNavbarViewModel";
import { CustomNavbarViewModelBinder } from "./ko/customNavbarViewModelBinder";

import {  } from "./index";

/**
 * Inversion of control module that registers design-time dependencies.
 */
export class CustomNavbarDesignModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("widget", CustomNavbarViewModel);
        injector.bind("widgetEditor", CustomNavbarEditorViewModel);
        injector.bindToCollection("modelBinders", CustomNavbarViewModelBinder);
        injector.bindToCollection("viewModelBinders", CustomNavbarViewModelBinder);
        injector.bindToCollection("widgetHandlers", CustomNavbarHandlers);
    }
}
