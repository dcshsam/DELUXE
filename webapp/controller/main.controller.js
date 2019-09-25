sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("zsan.ElementBinding.controller.main", {
		onInit: function () {
            
		},
		onItemPress: function(oEvent){
			
		var	sPath = oEvent.getParameter("listItem").getBindingContextPath();
		 debugger;
		 var path = "animals>" + sPath;
		var oSimple = this.getView().byId("SimpleForm");
		oSimple.bindElement(path);
		// var sel_Data = {
		// 	              "name":this.getView().getModel("animals").getProperty(sPath).name,
		// 	              "city":this.getView().getModel("animals").getProperty(sPath).city,
		// 	              "place":this.getView().getModel("animals").getProperty(sPath).place,
		// 	              "type":this.getView().getModel("animals").getProperty(sPath).type
			
			
		//       };
		
		//      var oModel = new sap.ui.model.json.JSONModel();
		//      oModel.setData(sel_Data);
		//      sap.ui.getCore().setModel(oModel,"local_model");
		//      debugger;
		//      sap.ui.core.UIComponent.getRouterFor(this).navTo("detail");    
		
		},
		onSave: function(oEvent){
			debugger;
		}
		
	});
});