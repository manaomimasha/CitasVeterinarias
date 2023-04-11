

const Paciente = () => {
  return (

    <div className=" bg-white shadow-md rounded-xl m-3 px-5 py-10 ">
      <p className="uppercase text-grey-700 mb-3 font-bold "> Nombre mascota:  {""}
        <span className="font-normal normal-case"> Hook</span>
      </p>
      
      <p className="uppercase text-grey-700 mb-3 font-bold "> Propietario:  {""}
        <span className="font-normal normal-case"> Maria</span>
      </p>
      <p className="uppercase text-grey-700 mb-3 font-bold "> Email:  {""}
        <span className="font-normal normal-case"> correo@correo.com</span>
      </p>
      <p className="uppercase text-grey-700 mb-3 font-bold "> Fecha Alta:  {""}
        <span className="font-normal normal-case"> 11-4-23</span>
      </p>
      <p className="uppercase text-grey-700 mb-3 font-bold "> Sintomas:  {""}
        <span className="font-normal normal-case"> No quiere tomar agua</span>
      </p>

    </div>
  )
}

export default Paciente
