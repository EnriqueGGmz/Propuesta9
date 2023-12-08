sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/Device",
	"sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/ui/core/UIComponent",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Device, JSONModel, MessageBox,UIComponent) {
        "use strict";

        var sResponsivePaddingClasses = "sapUiResponsivePadding--header sapUiResponsivePadding--content sapUiResponsivePadding--footer";

        return Controller.extend("store.controller.StoreView", {
            onInit: function () {

                var sUrl = "#" + this.getOwnerComponent().getRouter().getURL("page2");
                var oProductsModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/products.json")),
				iPagesCount = 1;

			if (Device.system.desktop) {
				iPagesCount = 3;
			} else if (Device.system.tablet) {
				iPagesCount = 2;
			}

			var oSettingsModel = new JSONModel({ pagesCount: iPagesCount });
			oProductsModel.setSizeLimit(6);

			this.getView().setModel(oSettingsModel, "settings");
			this.getView().setModel(oProductsModel, "products");
            },

            onToPage2 : function (oEvent) {
               
                let item = oEvent.getSource().getBindingContext('invoice').getObject();
                let oRouter =  sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("TargetStoreViewSecond",{productId : item.id});
            },


            onShowTextInfo: function (cont) {
                if( cont > 0 ){ 

                    MessageBox.information("Información", {
                        title: "Disponibilidad",
                        id: "messageBoxId1",
                        details: " Producto disponible en el inventario " + cont,
                        contentWidth: "100px",
                        styleClass: sResponsivePaddingClasses
                    });

                }else{

                    MessageBox.information("Información", {
                        title: "Disponibilidad",
                        id: "messageBoxId1",
                        details: " Producto fuera de stock " + cont,
                        contentWidth: "100px",
                        styleClass: sResponsivePaddingClasses
                    });


                }

            }, 
    
        });
    });
