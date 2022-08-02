import React, { useState } from 'react'
import S from './page.module.css';


const Paginación = ({page, setPage}) => {
  const [input, setInput] = useState(1)

  const nextPage = () => {
    setInput(parseInt(input)+1)
    setPage(parseInt(page)+1 )
  }

  const previousPage = () => {
    setInput (parseInt(input)-1)
    setPage (parseInt(page)-1)
  }
  
  const onKeyDown = (e) => {
     let value = parseInt(e.target.value)
      let valueN = Math.round(value)
      
   if(e.keyCode === 13) {
    if(valueN < 1 || isNaN(parseInt(valueN))) {
      return alert (`No existe la página número ${valueN} o no está ingresando un número válido`)
    } else {
   
      setPage(valueN)
      setInput(valueN)
      //return console.log(`Página actual: ${valueN}`)
    }
    
    } 
  }

  const onChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
       
        <div className={S.pageDiv}>
          <button onClick={previousPage} disabled={page === 1 || page < 1} >ANTERIOR</button>
          <input 
          
          name="page" 
          autoComplete='off'
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          value={input} />
          <button onClick={nextPage}>SIGUIENTE</button>

       </div>
    </div>
    
    
  )
}

export default Paginación