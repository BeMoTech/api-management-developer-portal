import * as ko from "knockout";
import template from "./customNavbarEditor.html";
import {CustomNavbarModel} from "../../customNavbarModel";
import {Component, OnMounted, Param, Event} from "@paperbits/common/ko/decorators";
import {WidgetEditor} from "@paperbits/common/widgets";
import {ChangeRateLimit} from "@paperbits/common/ko/consts";

@Component({
	selector: "custom-navbar-editor",
	template: template
})
export class CustomNavbarEditor implements WidgetEditor<CustomNavbarModel> {
	@Param()
	public model: CustomNavbarModel;

	@Event()
	public onChange: (model: CustomNavbarModel) => void;

	@OnMounted()
	public async initialize(): Promise<void> {
	}
}