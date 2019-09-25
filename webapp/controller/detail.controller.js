sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("zsan.ElementBinding.controller.detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf zsan.ElementBinding.view.detail
		 */
		onInit: function () {
		    debugger;
			var oModel = sap.ui.getCore().getModel("local_model");
            
			this.getView().byId("inp1").setValue(oModel.oData.name);
			this.getView().byId("inp2").setValue(oModel.oData.city);
			this.getView().byId("inp3").setValue(oModel.oData.place);
			this.getView().byId("inp4").setValue(oModel.oData.type);
		},
		


		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf zsan.ElementBinding.view.detail
		 */
			// onBeforeRendering: function() {

			// }

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf zsan.ElementBinding.view.detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf zsan.ElementBinding.view.detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});