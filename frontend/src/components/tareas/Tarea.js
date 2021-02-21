import React, { useContext } from "react";
import tareaContext from "../../context/tarea/tareaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Tarea = ({ tarea }) => {
  const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = useContext(tareaContext);

  const { proyectoSeleccionado } = useContext(proyectoContext);

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const handleOnClick = (id) => {
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
          eliminarTarea(id);
          obtenerTareas(proyectoSeleccionado[0].id);
          swalWithBootstrapButtons.fire("Eliminado!", "Se ha eliminado la tarea.", "success");
          return;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancelado!", "Uff, eso estuvo cerca!", "error");
        }
      });
  };

  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    cambiarEstadoTarea(tarea);
  };

  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo" onClick={() => cambiarEstado(tarea)}>
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={() => cambiarEstado(tarea)}>
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={() => seleccionarTarea(tarea)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button type="button" className="btn btn-secundario" onClick={() => handleOnClick(tarea.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Tarea;
