

$("#btnNuevo").click(function () {
   $("#modalCliente").modal("show");
});

$("#btnGuardar").click(function () {
   console.log($("#txtNombre").val())
   console.log($("#txtApellido").val());
   console.log($("#txtCI").val());
   console.log($("#txtTipo").val());
   console.log($("#txtNacionalidad").val());
   console.log($("#txtEmail").val());
   console.log($("#txtTelefono").val());
   console.log($("#txtNacimiento").val());
   vaciar();
   $("#modalCliente").modal("hide");
});

$("#btnCerrar").click(function () {
   vaciar();
   $("#modalCliente").modal("hide");
});

function vaciar() {
   $("#txtNombre").val("");
   $("#txtApellido").val("");
   $("#txtCI").val("");
   $("#txtTipo").val("");
   $("#txtNacionalidad").val("");
   $("#txtEmail").val("");
   $("#txtTelefono").val("");
   $("#txtNacimiento").val("");
}