import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Barra from "../layout/Barra";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";
import AuthContext from "../../context/authentication/authContext";

const Home = () => {
  const { authenticUser } = useContext(AuthContext);

  useEffect(() => {
    authenticUser();
  }, []);

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Barra />

        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
