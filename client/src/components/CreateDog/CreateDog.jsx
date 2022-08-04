import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTemperaments, postNewDog } from "../../redux/actions/actions";
import S from "./createdog.module.css"
import IMG from "../images/perripng.png"

export default function CreateNewDog () {
    
    const [temp, setTemp] = useState([])
    const [dog, setDog] = useState ({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        temperaments: []
    })
 
    const [send, setSend] = useState(false)
    const [validName, setValidName] = useState(false)
    const [validWeight, setValidWeight] = useState (false)
    const [validHeight, setValidHeight] = useState(false)


    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllTemperaments())
        //dispatch(getAllTemperaments())
    }, [dispatch])

    const temps = useSelector(state => state.temperaments)


    function handleChange (e) {
        e.preventDefault()
         if (e.target.name == 'name') {
             let nombre = e.target.value            
             console.log(nombre)

             if(/^([0-9])*$/.test(nombre) || nombre == '') {
                setValidName(false)
                 console.log('el usuario ingreso caracteres inválidos')
             } else {
                let perri = {...dog}
                perri[e.target.name] = e.target.value
                setValidName(true)
                setDog(perri)
             }
        }

        if (e.target.name == 'weight') {
            let valor = e.target.value 
            if(/^[0-9]*$/.test(valor) == false || valor == '') {
                setValidWeight(false)
                console.log('el usuario ingresó caracteres inválidos')
            } else {
                let perri = {...dog}
                 perri[e.target.name] = e.target.value
                 setValidWeight(true)
                 setDog(perri)
            }
        }

        if (e.target.name == 'height') {
            let valor = e.target.value 
            if(/^[0-9]*$/.test(valor) == false || valor == '') {
                setValidHeight(false)
                console.log('el usuario ingresó caracteres inválidos')
            } else {
                let perri = {...dog}
                 perri[e.target.name] = e.target.value
                 setValidHeight(true)
                 setDog(perri)
            }
        }


        if(e.target.name) {
            let perri = {...dog}
            perri[e.target.name] = e.target.value
            setDog(perri)
        } else {return console.log('error en el post')}
        
        let perri = {...dog}
        perri[e.target.name] = e.target.value;
        setDog(perri);

        if(validName && validHeight && validWeight) {setSend(true)} else {
            setSend(false)
        }
    
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
        alert('Perrito creado correctamente')
    }
    
    return (
        
        <div className={S.form}>
            <h1>LET'S CREATE YOUR DOG!</h1>
            <div className={S.flex}>
                <img src={IMG} alt="perrito" />
                <form onSubmit={(e) => handleSubmit(e)} id="createForm" >
                    <br/>
                    <p>Los campos marcados con * son obligatorios</p>
                    <label>Dog Name: *</label>
                    <input type="text" placeholder="ingrese sólo letras" name="name" value={dog.name} onChange={(e) => handleChange(e)}></input>
                    <label>Height: *</label>
                    <input type="text" name="height" placeholder="ingrese sólo números" value={dog.height} onChange={(e) => handleChange(e)}></input> 
                    <label>Weight: *</label>
                    <input type="text" name="weight" placeholder="ingrese sólo números" value = {dog.weight} onChange={(e) => handleChange(e)}/>
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
                    <button type="submit" disabled={send === false} >CREATE</button>

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