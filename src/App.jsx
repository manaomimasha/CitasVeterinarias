import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"
import Header from "./components/Header"


import { useState, useEffect } from "react"


function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (

    <div className=" container mx-auto mt-20" >

      <Header />

      <div className="md:flex mt-12">

        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente= {paciente}
          setPaciente={setPaciente}
          
        />

        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente} 
          eliminarPaciente={eliminarPaciente}        
        />

      </div>

    </div>
  )
}

export default App
