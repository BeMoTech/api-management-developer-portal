import template from "./custom-navbar-runtime.html";
import { Component, RuntimeComponent, OnMounted, OnDestroyed } from "@paperbits/common/ko/decorators";
import { widgetRuntimeSelector } from "../../constants";
import { MDCMenu } from "@material/menu";

@RuntimeComponent({
    selector: widgetRuntimeSelector
})
@Component({
    selector: widgetRuntimeSelector,
    template: template
})

export class CustomNavbarRuntime {
	public avatarMenu: MDCMenu;

	@OnMounted()
    public async initialize(): Promise<void> {
		this.avatarMenu = new MDCMenu(document.querySelector('.mdc-menu'));
    }

	public toggleMenu(): void {
		this.avatarMenu.open = !this.avatarMenu.open;
	}

	@OnDestroyed()
    public async dispose(): Promise<void> {
        // Your cleanup widget logic
    }
}
