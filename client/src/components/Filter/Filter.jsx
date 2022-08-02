import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTemperaments } from '../../redux/actions/actions'
import S from "./filter.module.css"

const Filter = ({setFilter, setTempSearch, setPage}) => {
  const temps = useSelector(state => state.temperaments)
  const dispatch = useDispatch()

  function filterDogs(e) {
    e.preventDefault(e)
    setPage(1)
    setFilter(e.target.value)
  }

    useEffect(() => {
    dispatch(getAllTemperaments())
    //dispatch(getAllTemperaments())
  }, [dispatch])

  function filterTemp(e) {
    setPage(1)
    setTempSearch(e.target.value)
    
  }

    return (
    <div>
        <select onChange={(e) => filterDogs(e)} className={S.filter} >
            <option>FILTER DOGS BY BREED</option>
            <option value="All" >All Breeds</option>
            <option value="Our" >Our Breeds</option>
            <option value="Your" >Your Breeds</option>
        </select>
        <select onChange={(e) => filterTemp(e)} className={S.filter}>
          <option>FILTER DOGS BY TEMPERAMENT</option>
          {temps ? temps.map((e) => {
            return <option key={e.id} value={e.name}>{e.name}</option>
          }) : console.log('no hay temperamentos cargados')}
        </select>
    </div>
  )
}

export default Filter