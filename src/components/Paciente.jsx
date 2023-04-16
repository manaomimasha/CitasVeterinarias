
 const Paciente =  ({pacientE}) => {

    const {nombre, propietario,fecha, sintomas} = pacientE

 return (

  <div className=" bg-white shadow-md rounded-xl m-3 px-5 py-10 ">

       <p className="uppercase text-grey-700 mb-3 font-bold "> Nombre mascota:  {""}
         <span className="font-normal normal-case"> {pacientE.nombre}</span>
      </p>
      
      <p className="uppercase text-grey-700 mb-3 font-bold "> Propietario:  {""}
      <span className="font-normal normal-case"> {propietario}</span>   </p>

      <p className="uppercase text-grey-700 mb-3 font-bold "> Email:  {""}
         <span className="font-normal normal-case"> lala@lala.com </span>      </p>

   <p className="uppercase text-grey-700 mb-3 font-bold "> Fecha Alta:  {""}
      <span className="font-normal normal-case">{fecha}</span>   </p>

     <p className="uppercase text-grey-700 mb-3 font-bold "> Sintomas:  {""}
        <span className="font-normal normal-case"> {sintomas}</span>
       </p>

    </div>
  )
}

 export default Paciente
