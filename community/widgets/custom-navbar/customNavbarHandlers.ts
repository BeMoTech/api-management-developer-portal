﻿import { IWidgetOrder, IWidgetHandler } from "@paperbits/common/editing";
import { CustomNavbarModel } from "./customNavbarModel";

/**
 * Handlers giving the editor required context to manupulate the widget. For example,
 * it describes how the widget gets created, how it responds to drag'n'drop events,
 * what contextual commands is supports, etc.
 */
export class CustomNavbarHandlers implements IWidgetHandler {
    /**
     * This method invoked when the widget gets added to the content.
     */
    public async getWidgetOrder(): Promise<IWidgetOrder> {
        const widgetOrder: IWidgetOrder = {
            name: "customNavbar",
			displayName: "Be:Mo navbar",
			category: "Be:Mo widgets",
            requires: ["html", "js"],
            iconClass: "paperbits-puzzle-10",

            /**
             * This method invoked when the widget gets added to the content.
             */
            createModel: async () => { 
                const model = new CustomNavbarModel();
                // model.property = "< initial value >";
                return model;
            }
        };

        return widgetOrder;
    }
}