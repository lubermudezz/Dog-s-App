import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemperaments, postNewDog } from "../../redux/actions/actions";
import S from "./createdog.module.css"
import IMG from "../images/perripng.png"

export default function CreateNewDog () {
    
    const [temp, setTemp] = useState([])
    const [dog, setDog] = useState ({
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        life_span: "",
        temperaments: []
    })
 

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllTemperaments())
        //dispatch(getAllTemperaments())
    }, [dispatch])

    const temps = useSelector(state => state.temperaments)


    function handleChange (e) {
        e.preventDefault()
        if(e.target.name) {
            let perri = {...dog}
            perri[e.target.name] = e.target.value
            setDog(perri)
        } else {return console.log('sad')}
        
        let perri = {...dog}
        perri[e.target.name] = e.target.value;
        setDog(perri);
    }
    function handleTemp (e) {
        e.preventDefault()
        if (!temp?.includes(e.target.value)) {
            setTemp([...temp, e.target.value]);
      
            let addTemp = { ...dog };
            addTemp["temperaments"] = [...addTemp["temperaments"], e.target.value];
            setDog(addTemp);
          } 
    }

    function handleSubmit (e) {
  
        dispatch(postNewDog(dog))
        alert('perrito nuevo')
    }
    
    return (
        
        <div className={S.form}>
            <h1>LET'S CREATE YOUR DOG!</h1>
            <div className={S.flex}>
                <img src={IMG} alt="perrito" />
                <form onSubmit={(e) => handleSubmit(e)} >
                    <br/>
                    <label>Dog Name:</label>
                    <input type="text" name="name" value={dog.name} onChange={(e) => handleChange(e)}></input>
                    <label>Height:</label>
                    <input type="text" name="height" value={dog.height} onChange={(e) => handleChange(e)}></input> 
                    <label>Weight:</label>
                    <input type="text" name="weight" value = {dog.weight} onChange={(e) => handleChange(e)}/>
                    <label>Life Span:</label>
                    <input type="text" name="life_span" value={dog.life_span} onChange={(e) => handleChange(e)} />
                            <label>Temperament</label>                            
                            <select onChange={(e) => handleTemp(e)} >
                                <option>Select Temperament</option>
                                    {temps ? temps.map(e => {return (
                                        <option key={e.id} value={e.name}>{e.name}</option>
                                    )}) : console.log ('sadx2')}
                            </select>
                    <br/>
                    <button type="submit">CREATE</button>

                </form>
                
            </div>
        </div>
    )
}

/*
    FORMULARIO CONTROLADO: validaciones con JS
        - Name
        - Max and min height
        - Max and min weight
        - Life span
        - Select / Add temp
        - Boton --> crear nueva raza

*/ 