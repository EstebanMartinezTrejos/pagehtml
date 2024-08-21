/* Se adicciona un "event listener" para cuando se cargue todo el contenido
de la pagina*/
document.addEventListener("DOMContentLoaded", () => {

    //se obtiene referencia a la lista dinamica:
    const taskList = document.getElementById("taskList");

    //referencia al elemento seleccionado de la lista:
    let selectedTask = null;

    // se adicciona event listener para cuando se haga click en el boton de agregar tarea:
    document.getElementById("addTask").addEventListener(  "click",() => {
      const textoTarea = prompt("Ingrese el nombre de la tarea");
      if(textoTarea)
      {
        //crea un nuevo elemento HTML de tipo "li"
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;
        //se le adicciona el handler de seleccion a la nueva tarea creada:
        taskList.appendChild(nuevaTarea);
        selectTaskHandler(nuevaTarea);

      }
    } );
});
