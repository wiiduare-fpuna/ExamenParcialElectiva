$("#btnCarga").click(function () {
    $("#modalCarga").modal("show");
 });
 
 $("#btnGuardar").click(function () {
    console.log($("#txtId").val())
    console.log($("#txtIcliente").val());
    console.log($("#txtAsignacion").val());
    console.log($("#txtCaducidad").val());
    console.log($("#txtAsignado").val());
    console.log($("#txtUtilizado").val());
    console.log($("#txtSaldo").val());
    console.log($("#txtMonto").val());
    vaciar();
    $("#modalCarga").modal("hide");
 });
 
 $("#btnCerrar").click(function () {
    vaciar();
    $("#modalCarga").modal("hide");
 });
 
 function vaciar() {
    $("#txtId").val("");
    $("#txtIcliente").val("");
    $("#txtAsignacion").val("");
    $("#txtCaducidad").val("");
    $("#txtAsignado").val("");
    $("#txtUtilizado").val("");
    $("#txtSaldo").val("");
    $("#txtMonto").val("");
 }