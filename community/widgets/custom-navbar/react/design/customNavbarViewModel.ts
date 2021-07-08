import * as ko from "knockout";
import template from "./customNavbar.html";
import { Component } from "@paperbits/common/ko/decorators";

@Component({
	selector: "custom-navbar",
	template: template
})
export class CustomNavbarViewModel {
	public readonly runtimeConfig: ko.Observable<string>;

	constructor() {
		this.runtimeConfig = ko.observable();
	}
}