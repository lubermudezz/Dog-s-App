import React, { useState } from 'react'
import S from './page.module.css';


const Paginación = ({page, setPage, maxPage}) => {
  const [input, setInput] = useState(1)


  const nextPage = () => {

      setInput(parseInt(page)+1)
      setPage(parseInt(page)+1 )
    
  }

  const previousPage = () => {
    setInput (parseInt(page)-1)
    setPage (parseInt(page)-1)
  }
  
  const onKeyDown = (e) => {
     let value = parseInt(e.target.value)
      let valueN = Math.round(value)
      
   if(e.keyCode === 13) {
    if(valueN < 1 || isNaN(parseInt(valueN)) || valueN > maxPage) {
      return alert (`No existe la página número ${valueN} o no está ingresando un número válido`)
    } else {
   
      setPage(valueN)
      setInput(page)
      //return console.log(`Página actual: ${valueN}`)
    }
    
    } 
  }

  const onChange = (e) => {
    setPage(e.target.value)
    setInput(page) 
  }

  return (
    <div>
       
        <div className={S.pageDiv}>
          <button onClick={previousPage} disabled={page === 1 || page < 1 } >ANTERIOR</button>
          <input 
          
          name="page" 
          autoComplete='off'
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          value={page} />
          <button onClick={nextPage} disabled={page === maxPage} >SIGUIENTE</button>

       </div>
    </div>
    
    
  )
}

export default Paginación