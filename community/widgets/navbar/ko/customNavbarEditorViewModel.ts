import * as ko from "knockout";
import template from "./customNavbarEditorView.html";
import { WidgetEditor } from "@paperbits/common/widgets";
import { Component, OnMounted, Param, Event, OnDestroyed } from "@paperbits/common/ko/decorators";
import { CustomNavbarModel } from "../customNavbarModel";
import { widgetEditorSelector } from "../index";

@Component({
    selector: widgetEditorSelector,
    template: template
})
export class CustomNavbarEditorViewModel implements WidgetEditor<CustomNavbarModel> {
    @Param()
    public model: CustomNavbarModel;

    @Event()
    public onChange: (model: CustomNavbarModel) => void;

    @OnMounted()
    public async initialize(): Promise<void> {
        // Your initialization logic
    }

    private applyChanges(): void {
        this.onChange(this.model);
    }

    @OnDestroyed()
    public async dispose(): Promise<void> {
        // Your cleanup widget logic
    }
}
