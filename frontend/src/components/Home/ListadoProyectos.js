import { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import EmptyAnimation from "../animation/empty";

const ListadoProyectos = () => {
  const { listaProyectos, obtenerProyectos } = useContext(proyectoContext);

  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line
  }, []);

  if (listaProyectos.length === 0)
    return (
      <div>
        <EmptyAnimation />
      </div>
    );

  return (
    <ul className="listado-proyectos">
      {listaProyectos.map(item => (
        <Proyecto key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
