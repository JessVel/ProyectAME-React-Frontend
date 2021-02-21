import React, { useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import CrearAnimation from "../animation/crear";
import tareaContext from "../../context/tarea/tareaContext";
import Swal from "sweetalert2";

const ListadoTareas = () => {
  const { proyectoSeleccionado, eliminarProyecto, listaProyectos } = useContext(proyectoContext);

  const { tareasProyecto } = useContext(tareaContext);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  if (!proyectoSeleccionado) {
    if (listaProyectos.length === 0) {
      return (
        <div>
          <h2>No hay proyectos, comienza creando uno!</h2>
          <CrearAnimation />
        </div>
      );
    } else {
      return <h2>Selecciona un proyecto🚀</h2>;
    }
  }

  const handleOnClick = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Estas seguro?",
        text: "No podrás revertir esta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          eliminarProyecto(proyectoSeleccionado[0].id);
          swalWithBootstrapButtons.fire("Eliminado!", "Se ha eliminado la tarea.", "success");
          return;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancelado!", "Uff, eso estuvo cerca!", "error");
        }
      });
  };
  return (
    <>
      <div className="contenedor-listado">
        <h2 className="proyecto-title">Proyecto: {proyectoSeleccionado[0].nombre}</h2>

        <button type="button" className="btn btn-eliminar" onClick={handleOnClick}>
          Eliminar Proyecto &times;
        </button>
      </div>

      <ul className="listado-tareas">{tareasProyecto.length === 0 ? <li style={{ textAlign: "center" }}>No hay tareas</li> : tareasProyecto.map((tarea) => <Tarea key={tarea.id} tarea={tarea} />)}</ul>
    </>
  );
};

export default ListadoTareas;
