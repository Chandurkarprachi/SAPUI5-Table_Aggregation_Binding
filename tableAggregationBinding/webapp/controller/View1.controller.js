sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'tableAggregationBinding/util/formatter',
    'sap/ui/table/Row'

], function(Controller, JSONModel, formatter,Row) {
    'use strict';
    
    return Controller.extend("tableAggregationBinding.controller.View1",{

        onInit:function()
        {
            this.Row="";
            this.oView=this.getView();
            var oModel= new JSONModel("model/data.json");
            this.oView.setModel(oModel);

           // var oProd=this.getView().byId("productDetails");
            this.getView().byId("productForm").bindElement("/products/0");
        },

        // formatter 
        formatter:formatter,
        onRowClick:function(oEvent){
            this.index = oEvent.getParameter("rowIndex");
            //using oevent obj we get address of the row
            var eleAddress=oEvent.getParameter("rowContext").getPath();
          //after getting address of row get object of simple form
            var oForm=this.getView().byId("productForm");
            //bind element directly to simple form
            oForm.bindElement(eleAddress);
           
        },
        onDeleteData:function(){
            var oModel=this.getView().getModel();
            var aData=oModel.getProperty("/products");
            aData.splice(this.index,1);
            oModel.setProperty("/products",aData);
        }
        
    });
});