import {IModelBinder} from "@paperbits/common/editing";
import {CustomNavbarModel} from "./customNavbarModel";
import {Contract} from "@paperbits/common";
import {CustomNavbarContract} from "./customNavbarContract";

/**
 * This is a class that helps to prepare the model using data described
 * in the contract.
 */
export class CustomNavbarModelBinder implements IModelBinder<CustomNavbarModel> {
	public canHandleContract(contract: Contract): boolean {
		return contract.type === "custom-navbar";
	}

	public canHandleModel(model: any): boolean {
		return model instanceof CustomNavbarModel;
	}

	public async contractToModel(contract: CustomNavbarContract): Promise<CustomNavbarModel> {
		const model = new CustomNavbarModel();
		// model.property = contract.property;
		return model;
	}

	public modelToContract(model: CustomNavbarModel): Contract {
		const contract: CustomNavbarContract = {
			type: "custom-navbar",
			// property: model.property
		};

		return contract;
	}
}
