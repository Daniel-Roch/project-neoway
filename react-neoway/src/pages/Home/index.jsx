import {useState} from 'react'

import './style.css'

const Home = ()=> {
  const [valueInput, setValueInput] = useState("")
  const [options, setOption] = useState("CPF")

  const sendInput = () =>{
    console.log(valueInput)
    console.log(options)
  }

  return (
    <main className="main-home">
        <h1 className="title-home">Informe seu CPF/CNPJ para validação:</h1>
        <input className="input-home" type="text" value={valueInput} onChange={ e => setValueInput(e.target.value)}/>
        
        <select value={options} onChange={e => setOption(e.target.value)}>
          <option value={"CPF"}>CPF</option>
          <option value={"CNPJ"}>CNPJ</option>
        </select>

        <button className="btn-home" onClick={sendInput}>Enviar</button>
    </main>
  )
}

export default Home