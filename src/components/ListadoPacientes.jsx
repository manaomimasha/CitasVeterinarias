import Paciente from './Paciente'

const ListadoPacientes = ({ pacientes, setPaciente }) => {
  
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {pacientes.length ?
        <><h1 className=' text-black font-bold text-3xl  text-center '>Listado de Pacientes</h1>
          <p className=' text-xl text-center mt-5 mb-10'> {""}
            Administra tus  <span className='font-bold text-indigo-600 mb-5'> Pacientes y Citas</span></p> </> :

        <>

          <h1 className=' text-black font-bold text-3xl  text-center '> Aún no hay Pacientes</h1>
          <p className=' text-xl text-center mt-5 mb-10'> {""}
            Añade pacientes <span className='font-bold text-indigo-600 mb-5'> y aparecerán aquí </span></p>

        </>
      }

      {
        pacientes.map((paciente) =>
        (
          <Paciente
            key={pacientE.id}
            paciente={paciente}
            setPaciente={setPaciente}
          />
        ))}

    </div>
  )
}

export default ListadoPacientes

