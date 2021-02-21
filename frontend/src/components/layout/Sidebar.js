import NuevoProyecto from "../Home/NuevoProyecto";
import ListadoProyectos from "../Home/ListadoProyectos";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        <span>Proyect</span>AME😍
      </h1>

      <NuevoProyecto />

      <div className="proyectos">
        <h2>Mis proyectos</h2>
        <ListadoProyectos />
      </div>
    </aside>
  );
};

export default Sidebar;
