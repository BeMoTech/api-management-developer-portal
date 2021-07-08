import {IInjectorModule, IInjector} from "@paperbits/common/injection";
import {CustomNavbar} from "./customNavbar";
import {CustomNavbarModelBinder} from "../customNavbarModelBinder";
import {CustomNavbarViewModelBinder} from "./customNavbarViewModelBinder";

export class CustomNavbarModule implements IInjectorModule {
	public register(injector: IInjector): void {
		injector.bind("customNavbar", CustomNavbar);
		injector.bindToCollection("modelBinders", CustomNavbarModelBinder);
		injector.bindToCollection("viewModelBinders", CustomNavbarViewModelBinder);
	}
}