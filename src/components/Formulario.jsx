import { useState, useEffect } from "react"
import Mensaje from "./Mensaje"

const Formulario = ({ pacientes, setPacientes, paciente }) => {

   const [nombre, setNombre] = useState('');
   const [propietario, setPropietario] = useState('');
   const [email, setEmail] = useState('');
   const [fecha, setFecha] = useState('');
   const [sintomas, setSintomas] = useState('');
   const [error, setError] = useState(false);

   useEffect( () => {
      if (Object.keys(paciente).length > 0) {
         setNombre(paciente.nombre)
         setPropietario(paciente.propietario)
         setEmail(paciente.email)
         setFecha(paciente.fecha)
         setSintomas(paciente.sintomas)
      }
   }, [paciente]
   )

   const generarId = () => {

      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36);

      return random + fecha
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if ([nombre, propietario, email, fecha, sintomas].includes('')) {
         console.log("Error")
         setError(true)
      }
      else { setError(false) }

      const objetoPaceiente = {
         nombre,
         propietario,
         email,
         fecha,
         sintomas,
         id: generarId()
      }

      setPacientes([...pacientes, objetoPaceiente])
      // //cambiar mail YNOMBRe  :
      // setPacientes({nombre, email})

      setNombre("")
      setPropietario("")
      setEmail("")
      setFecha("")
      setSintomas("")

   }

   return (
      <div className='md:w-1/2 lg:w-2/5 mx-5 my-1'>

         <h1 className='text-black font-bold text-3xl  text-center '>Seguimiento de Pacientes</h1> {""}
         <p className='text-xl mt-5 text-center'>Añade pacientes y <span className='text-indigo-600 font-bold'> Administrelos</span></p>

         <form
            onSubmit={handleSubmit}
            className='shadow-md bg-white py-10 px-5 rounded-lg mt-10 mb-10'
         >

            {error &&
               < Mensaje mensaje=" TODOS LOS CAMPOS SON OBLIGATORIOS" />
            }

            <label htmlFor="mascota"
               className='uppercase font-bold text-grey-300 '>
               Nombre Mascota</label>
            <input
               type="text" id='mascota' className='w-full border-2 p-2 placeholder-gray-400 rounded-md mt-2 mb-5' placeholder=' Nombre de la Mascota'
               value={nombre}
               onChange={(e) => {
                  setNombre(e.target.value)
               }}
            />

            <label htmlFor="prop"
               className='uppercase font-bold  text-grey-700 '>
               Nombre Propietario
            </label>
            <input
               type="text"
               id='prop'
               className='w-full border-2 p-2 placeholder-gray-400 rounded-md mt-2 mb-2'
               placeholder=' Su Nombre'
               value={propietario}
               onChange={e => {
                  setPropietario(e.target.value)

               }}
            />
            <label htmlFor="email"
               className='uppercase font-bold  text-grey-700 '>
               Email
            </label>
            <input
               type="email"
               id='email'
               className='w-full border-2 p-2 placeholder-gray-400 rounded-md mt-2 mb-5 '
               placeholder=' Su Email'

               value={email}
               onChange={(e) => {
                  setEmail(e.target.value)

               }}

            />

            <label htmlFor="alta"
               className='uppercase font-bold  text-grey-700 '>
               Fecha Alta
            </label>

            <input
               type="date"
               id='alta'
               className='w-full border-2 p-2 placeholder-gray-400 rounded-md mt-2  mb-5'

               value={fecha}
               onChange={(e) => {
                  setFecha(e.target.value)

               }}

            />

            <label htmlFor="sintomas"
               className='uppercase font-bold  text-grey-700 '>
               Describe los Sintomas
            </label>
            <input
               type="textarea"
               id='sintomas'
               className='w-full border-2 p-2 placeholder-gray-400 rounded-md mt-2 '
               placeholder='Describe los Sintomas'
               value={sintomas}
               onChange={e => setSintomas(e.target.value)}

            />

            <input type="submit"
               className='p-3 w-full bg-indigo-600  hover:bg-indigo-700 transition-colors text-white uppercase font-bold cursor-pointer  mb-2 mt-5 '
               value={ paciente.id ? "Guardar Paciente" : "Agregar Paciente"} />


         </form>
      </div>
   )
}

export default Formulario
