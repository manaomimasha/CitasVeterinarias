import ListadoPacientes from "./components/ListadoPacientes"
import Formulario from "./components/Formulario"
import Header from "./components/Header"


import { useState, useEffect } from "react"


function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  return (

    <div className=" container mx-auto mt-20" >

      <Header />

      <div className="md:flex mt-12">

        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente= {paciente}

        />

        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}         
        />

      </div>

    </div>
  )
}

export default App
