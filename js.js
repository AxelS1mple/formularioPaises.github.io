function cargarPais() {
    var paisSelect = document.getElementById("pais");
    var estadoSelect = document.getElementById("estado");

    // Limpiar opciones actuales
    estadoSelect.innerHTML = '<option value="seleccionar" disabled selected>Seleccionar Estado</option>';
    

    // Cargar opciones basadas en el pais seleccionado
    if (paisSelect.value === "mexico") {
        var estadosMexico = ["Hidalgo", "Pachuca", "Torreon"];
        cargarOpciones(estadoSelect, estadosMexico);
    } else if (paisSelect.value === "canada") {
        var estadosCanada = ["Ontario", "Quebec", "Alberta"];
        cargarOpciones(estadoSelect, estadosCanada);
    }
}

function cargarMunicipios() {
    var estadoSelect = document.getElementById("estado");
    var municipioSelect = document.getElementById("municipio");
    var localidadSelect = document.getElementById("localidad");

    // Limpiar opciones actuales
    municipioSelect.innerHTML = '<option value="seleccionar" disabled selected>Seleccionar Municipio</option>';

    localidadSelect.innerHTML = '<option value="seleccionar" disabled selected>Seleccionar Localidad</option>';

    // Cargar opciones basadas en el estado seleccionado
    if (estadoSelect.value === "Hidalgo") {
        var municipiosHidalgo = ["Tula", "El Llano", "San Miguel"];
        cargarOpciones(municipioSelect, municipiosHidalgo);
    }
}

function cargarLocalidades() {
    var municipioSelect = document.getElementById("municipio");
    var localidadSelect = document.getElementById("localidad");

    localidadSelect.innerHTML = '<option value="seleccionar" disabled selected>Seleccionar Localidad</option>';

    // Cargar opciones basadas en el municipio seleccionado
    if (municipioSelect.value === "Tula") {
        var localidadesTula = ["Tula Centro", "Tula Norte", "Tula Sur"];
        cargarOpciones(localidadSelect, localidadesTula);
    }
}

function cargarOpciones(selectElement, opcionesArray) {
    // Agregar opciones al elemento select
    opcionesArray.forEach(function (opcion) {
        var option = document.createElement("option");
        option.value = opcion;
        option.text = opcion;
        selectElement.add(option);
    });
}