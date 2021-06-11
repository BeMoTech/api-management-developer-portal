import { Bag } from "@paperbits/common";
import { EventManager } from "@paperbits/common/events";
import { IWidgetBinding } from "@paperbits/common/editing";
import { widgetName, widgetDisplayName, widgetEditorSelector } from "../constants";
import { CustomNavbarViewModel } from "./customNavbarViewModel";
import { ViewModelBinder } from "@paperbits/common/widgets";
import { CustomNavbarModel } from "../customNavbarModel";

/**
 * This class describes how the model needs to be presented (as a view model)
 * in a specific UI framework.
 */
export class CustomNavbarViewModelBinder implements ViewModelBinder<CustomNavbarModel, CustomNavbarViewModel>  {
    constructor(private readonly eventManager: EventManager) { }

    public async updateViewModel(model: CustomNavbarModel, viewModel: CustomNavbarViewModel): Promise<void> {
        // viewModel.property(model.value)
    }

    public async modelToViewModel(model: CustomNavbarModel, viewModel?: CustomNavbarViewModel, bindingContext?: Bag<any>): Promise<CustomNavbarViewModel> {
        if (!viewModel) {
            viewModel = new CustomNavbarViewModel();

            const binding: IWidgetBinding<CustomNavbarModel> = {
                name: widgetName,
                displayName: widgetDisplayName,
                readonly: bindingContext ? bindingContext.readonly : false,
                model: model,
                editor: widgetEditorSelector,
                draggable: true,
                applyChanges: async () => {
                    await this.updateViewModel(model, viewModel);
                    this.eventManager.dispatchEvent("onContentUpdate");
                }
            };

            viewModel["widgetBinding"] = binding;
        }

        this.updateViewModel(model, viewModel);

        return viewModel;
    }

    public canHandleModel(model: CustomNavbarModel): boolean {
        return model instanceof CustomNavbarModel;
    }
}
