import {IInjectorModule, IInjector} from "@paperbits/common/injection";
import {CustomNavbarEditor} from "./react/design/customNavbarEditor";
import {CustomNavbarHandlers} from "./customNavbarHandlers";
import {CustomNavbar, CustomNavbarViewModelBinder} from "./react";
import {CustomNavbarModelBinder} from "./customNavbarModelBinder"

/**
 * Inversion of control module that registers design-time dependencies.
 */
export class CustomNavbarDesignModule implements IInjectorModule {
	public register(injector: IInjector): void {
		injector.bind("customNavbarEditor", CustomNavbarEditor);
		injector.bindToCollection("widgetHandlers", CustomNavbarHandlers);
		injector.bind("customNavbar", CustomNavbar);
		injector.bindToCollection("modelBinders", CustomNavbarModelBinder);
		injector.bindToCollection("viewModelBinders", CustomNavbarViewModelBinder);
	}
}
