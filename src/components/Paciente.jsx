const Paciente = ({ paciente, setPaciente }) => {

   const { nombre, propietario, email, fecha, sintomas } = paciente
   console.log(paciente)
   return (
      <div className=" bg-white shadow-md rounded-xl m-3 px-5 py-10 ">

         <p className="uppercase text-grey-700 mb-3 font-bold "> Nombre mascota:  {""}
            <span className="font-normal normal-case"> {nombre}
            </span>
         </p>

         <p className="uppercase text-grey-700 mb-3 font-bold "> Propietario:  {""}
            <span className="font-normal normal-case"> {propietario}
            </span>   </p>

         <p className="uppercase text-grey-700 mb-3 font-bold "> Email:  {""}
            <span className="font-normal normal-case">
               {email}
            </span>      </p>

         <p className="uppercase text-grey-700 mb-3 font-bold "> Fecha Alta:  {""}
            <span className="font-normal normal-case">
               {fecha}
            </span>   </p>

         <p className="uppercase text-grey-700 mb-3 font-bold "> Sintomas:  {""}
            <span className="font-normal normal-case">
               {sintomas}
            </span>
         </p>
         <div className=" flex justify-between mt-7 ">

            <button
               type="button"
               className="py-2 px-10 bg-indigo-800 hover:bg-indigo-600 uppercase font-bold text-white  rounded-lg "
               onClick={() => ( setPaciente(paciente)  )}>
               Editar
            </button>


            <button
               type="button"
               className="py-2 px-10 bg-red-800 hover:bg-red-600 uppercase font-bold text-white  rounded-lg ">
               Eliminar
            </button>

         </div>
      </div>
   )
}

export default Paciente
