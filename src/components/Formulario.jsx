import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>

      <h1 className='text-black font-bold text-3xl  text-center '>Seguimiento de Pacientes</h1> {""}
      <p className='text-lg mt-5 text-center'>Añade pacientes y <span span className='text-indigo-600 font-bold'> Administrelos</span></p>

      <form action="" className='shadow-md bg-white py-10 px-5 rounded-lg mt-10'>

        <label htmlFor="mascota" className='uppercase font-bold text-grey-300 '>  Nombre Mascota</label>
        <input type="text" id='mascota' className='w-full border-2 p-2 placeholder-gray-400 rounded-md mt-2 mb-5' placeholder=' Nombre de la Mascota' />

        <label htmlFor="prop" 
           className='uppercase font-bold  text-grey-700 '>  
           Nombre Propietario
        </label>
        <input 
            type="text" 
            id='prop' 
            className='w-full border-2 p-2 placeholder-gray-400 rounded-md mt-2 mb-5' 
            placeholder=' Su Nombre'
         />
 <label htmlFor="email" 
           className='uppercase font-bold  text-grey-700 '>  
           Email
        </label>
        <input 
            type="email" 
            id='email' 
            className='w-full border-2 p-2 placeholder-gray-400 rounded-md mt-2 mb-5 ' 
            placeholder=' Su Nombre'
         />

        <label htmlFor="alta" 
           className='uppercase font-bold  text-grey-700 '>  
           Alta
        </label>
        <input 
            type="date" 
            id='alta' 
            className='w-full border-2 p-2 placeholder-gray-400 rounded-md mt-2  mb-5' 
            placeholder=' Su Nombre'
         />

<label htmlFor="email" 
           className='uppercase font-bold  text-grey-700 '>  
           Describe los Sintomas
        </label>
        <input 
            type="textarea" 
            id='email' 
            className='w-full border-2 p-2 placeholder-gray-400 rounded-md mt-2 ' 
            placeholder='Describe los Sintomas'
         />

      </form>
    </div>
  )
}

export default Formulario
