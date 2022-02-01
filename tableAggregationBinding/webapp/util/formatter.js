sap.ui.define([
    "sap/ui/core/format/NumberFormat"
],function(NumberFormat){
    return{
        convertName:function(value){
            if(value){
                var sName=value.toUpperCase();
                return sName;
            }

        }
    };
});