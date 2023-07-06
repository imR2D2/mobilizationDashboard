import Inputs from "./Inputs";
import { users, dataMunicipios } from "../../data/dataUsers";

const Dropdawn = () => {
  const nombres = users.map((usuario) => usuario.nombre);
  const municipios = dataMunicipios.map((municipios) => municipios.nombre)

  return (
    <>
      <Inputs nombres={nombres} municipios={municipios} />
    </>
  );
};


export default Dropdawn;
