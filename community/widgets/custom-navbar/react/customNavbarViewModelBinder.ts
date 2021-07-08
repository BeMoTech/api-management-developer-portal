import {Bag} from "@paperbits/common";
import {IWidgetBinding} from "@paperbits/common/editing";
import {EventManager} from "@paperbits/common/events";
import {StyleCompiler} from "@paperbits/common/styles";
import {ViewModelBinder} from "@paperbits/common/widgets";
import {CustomNavbarModel} from "../customNavbarModel";
import {CustomNavbar} from "./customNavbar";

export class CustomNavbarViewModelBinder implements ViewModelBinder<CustomNavbarModel, CustomNavbar> {
	constructor(private readonly eventManager: EventManager) {
	}

	public async createWidgetBinding(model: CustomNavbarModel, viewModel: CustomNavbar, bindingContext: Bag<any>): Promise<IWidgetBinding<CustomNavbarModel>> {
		const binding: IWidgetBinding<CustomNavbarModel> = {
			model: model,
			name: "custom-navbar",
			editor: "custom-navbar-editor",
			readonly: false,
			flow: "block",
			draggable: true,
			displayName: "Be:Mo navbar",
			applyChanges: async () => {
				await this.modelToViewModel(model, viewModel, bindingContext);
				this.eventManager.dispatchEvent("onContentUpdate");
			},
			onCreate: async () => {
				await this.modelToViewModel(model, viewModel, bindingContext);
			}
		}

		return binding;
	}

	public async modelToViewModel(model: CustomNavbarModel, viewModel: CustomNavbar, bindingContext?: Bag<any>): Promise<CustomNavbar> {
		return viewModel;
	}

	public canHandleModel(model: CustomNavbarModel): boolean {
		return model instanceof CustomNavbarModel;
	}
}