

$("#btnNuevo").click(function () {
    $("#modalPuntos").modal("show");
 });
 
 $("#btnGuardar").click(function () {
    console.log($("#txtConcepto").val())
    console.log($("#txtPuntos").val());
    vaciar();
    $("#modalPuntos").modal("hide");
 });
 
 $("#btnCerrar").click(function () {
    vaciar();
    $("#modalPuntos").modal("hide");
 });
 
 function vaciar() {
    $("#txtConcepto").val("");
    $("#txtPuntos").val("");
    
 }