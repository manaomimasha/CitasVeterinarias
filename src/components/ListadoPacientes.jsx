import Paciente from './Paciente'

const ListadoPacientes = ( {pacientes}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h1 className=' text-black font-bold text-3xl  text-center '>Listado de Pacientes</h1>
      <p className=' text-xl text-center mt-5 mb-10'> {""}
        Administra tus  <span className='font-bold text-indigo-600 mb-5'> Pacientes y Citas</span></p>

      { pacientes.map ( (pac) => (
        <Paciente 
        pac= {pac}
        />
      ))}
      


    </div>
  )
}

export default ListadoPacientes

