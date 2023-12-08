sap.ui.define( ["sap/ui/core/mvc/Controller"], 

function (Controller) {
	"use strict";

	return Controller.extend("store.controller.StoreViewSecond", {
		onInit : function () {

			let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetStoreViewSecond").attachPatternMatched(this._onRouteMatched,this);
		},

		_onRouteMatched : function (oEvent){
			let oArgs;
			let oView;
			oArgs = oEvent.getParameter(("arguments"));
			let valor = oArgs.productId - 1;
			oView = this.getView();
			oView.bindElement({
				path: `invoice>/${valor}`
			})


		},
	});

});