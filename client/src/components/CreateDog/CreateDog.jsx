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
        image: "",
        temperaments: []
    })
 

    const [send, setSend] = useState(false)
    const [validName, setValidName] = useState(false)
    const [validWeight, setValidWeight] = useState (false)
    const [validHeight, setValidHeight] = useState(false)
    const [minW, setMinW] = useState('')
    const [maxW, setMaxW] = useState('')
    const [minH, setMinH] = useState('')
    const [maxH, setMaxH] = useState('')

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllTemperaments())
    }, [dispatch])

    const temps = useSelector(state => state.temperaments)


    function handleChange (e) {
        e.preventDefault()
         
        if (e.target.name == 'name') {
             let nombre = e.target.value            

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

        if (e.target.name == 'minW' || e.target.name == 'maxW') {
            if(/^[0-9]*$/.test(e.target.value) == false || e.target.value == '' ) {
                setValidWeight(false)
                console.log('el usuario ingresó caracteres inválidos')
            } else if(e.target.name == 'maxW') {
                setMaxW(e.target.value)
  
            } else if (e.target.name == 'minW'){
                setMinW(e.target.value)
            }
        }

        if(minW && maxW ) {
            let perri = {...dog}
            perri.weight = `${minW} - ${maxW}`
            setDog(perri);    
            setValidWeight(true)            
            
        }

        if (e.target.name == 'minH' || e.target.name == 'maxH') {
            let valor = e.target.value 
            if(/^[0-9]*$/.test(valor) == false || valor == '') {
                setValidHeight(false)
                console.log('el usuario ingresó caracteres inválidos')
            } else if(e.target.name == 'minH') {
                setMinH (e.target.value)
            } else if (e.target.name == 'maxH') {
                setMaxH(e.target.value)
            }
        }

        if(minH  && maxH ) {
            let perri = {...dog}
            perri.height = `${minH} - ${maxH}`
            setDog(perri);    
            setValidHeight(true)            
            
        }


        if(e.target.name != 'minW' && e.target.name != 'maxW') {
            let perri = {...dog}
            perri[e.target.name] = e.target.value
            setDog(perri)
        } else {return console.log('error en el post')}
        
        let perri = {...dog}
        perri.weight = `${minW} - ${maxW}`
        perri[e.target.name] = e.target.value;
        setDog(perri);

        if(validName && validHeight && validWeight) {
            setSend(true)
        } else {
            setSend(false)
        }
    
    }
    function handleTemp (e) {
        e.preventDefault()
    let temper = document.getElementById('temps')

        if (!temp?.includes(e.target.value)) {
            setTemp([...temp, e.target.value]);
      
            let addTemp = { ...dog };
            addTemp["temperaments"] = [...addTemp["temperaments"], e.target.value];
            setDog(addTemp);

            temper.innerHTML = `${addTemp.temperaments}`
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
                    <label className={S.dogName}>Dog Name: *</label>
                    <input className={S.dogNameInput} type="text" placeholder="ingrese sólo letras" name="name" value={dog.name} onChange={(e) => handleChange(e)}></input>

                        <div className={S.minMax}>
                            <label>Min Height: *</label>
                            <input type="text" name="minH" placeholder="ingrese un valor mayor a 0" value = {minH} onChange={(e) => handleChange(e)}></input>
                            <label>Max Height: *</label>
                            <input type="text" name="maxH" placeholder="ingrese un valor mayor a 0" value ={maxH} onChange={(e) => handleChange(e)}></input>
                        </div> 
                      
                        <div className={S.minMax}>
                            <label>Min Weight: *</label>
                            <input type="text" name="minW" placeholder="ingrese un valor mayor a 0" value = {minW} onChange={(e) => handleChange(e)}></input>
                            <label>Max Weight: *</label>
                            <input type="text" name="maxW" placeholder="ingrese un valor mayor a 0" value ={maxW} onChange={(e) => handleChange(e)}></input>
                        </div> 
                       
                    <label>Life Span:</label>
                    <input type="text" name="life_span" value={dog.life_span} onChange={(e) => handleChange(e)} />
                            <label>Temperament</label>                            
                            <select onChange={(e) => handleTemp(e)} >
                                <option>Select Temperament</option>
                                    {temps ? temps.map(e => {return (
                                        <option key={e.id} value={e.name} >{e.name}</option>
                                        // <option key={e.id} value={e.name}>{e.name}</option>
                                    )}) : console.log ('sadx2')}
                            </select>
                            <span id='temps' className={S.spanTemp}></span>
                    <br></br>
                    <p>Los campos marcados con * son obligatorios</p>

                    <button type="submit" disabled={send === false} className={S.buttonCreate} >CREATE</button>

                </form>
                
            </div>
        </div>
    )
}




