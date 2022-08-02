import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { getDogByName } from '../../redux/actions/actions';
import S from "./search.module.css"

const SearchBar = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    
    function onChange (e) {
        e.preventDefault()
        setInput(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getDogByName(input))
        
    }

    function onKeyDown(e) {
        if(e.keyCode === 13) handleSubmit(e)
    }

    return (
    <div className={S.divSearch}>
        
        <input
        name='search'
        placeholder='Ingrese la raza que desea buscar'
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
      
        />
        {/* <link><button onClick={(e) => handleSubmit(e)} >SEARCH</button></link> */}
        
        {input !== '' ? (
            <Link to="/dogs/search" >
                <button onClick={(e) => handleSubmit(e)} >SEARCH</button>
            </Link>
        ) : (
            <Link to="/dogs">
                <button onClick={(e) => handleSubmit(e)}>SEARCH</button>
            </Link>
        )}

    </div>
  )
}

export default SearchBar