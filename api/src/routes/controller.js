const axios = require ('axios');
const {YOUR_API_KEY} = process.env;
const {Dog, Temperament} = require('../db')


const setAllTemps = async () => {
    const tempApi = await axios.get("https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}")
    const arrTemps = tempApi.data.map(e => e.temperament);
    let arr = new Set()
    arrTemps.forEach(e => {if(e){e.split(",").map(e => arr.add(e.trim()))}});
    let result = Array.from(arr)
    let lastArr = result.map( (temperament,i) => {return {name :temperament, id:i}})
    Temperament.bulkCreate(lastArr)
    console.log("Temperamentos cargados correctamente")
}

const getAllTemps = async (req, res) => {
    let allTemps = await Temperament.findAll()
    // let allNames = allTemps.map(e => e.name)
    return res.send(allTemps)
}

const apiList = async () => {
    let infoApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
    let dogsApi = infoApi.data.map(e => {
        return {
            name: e.name,
            temp: e.temperament,
            id: e.id,
            image: e.image.url,
            height: e.height.imperial,
            weight: e.weight.imperial 
        }   
   
    })
    return dogsApi;
}

const dbList = async () => {
      let dogsDb = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: [ 'name' ],
            through: { attributes: [] }
        }
    })

    return dogsDb;
}

const breedsList = async (req, res) => {
    let {name} = req.query
    let dbDogs = await dbList()
    let apiDogs = await apiList()
    let allDogs = [...dbDogs, ...apiDogs]
    if(name) {
        let searchByName = allDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
        if(!searchByName.length) {
            return res.json({err: `No existe ninguna raza que coincida con el parámetro ingresado: ${name}`})
        } else {
            return res.json(searchByName)
        }
    } 
    return res.send(allDogs)
}



const findDogById = async (req, res) => {
    let {dogId} = req.params
    let dbDogs = await dbList()
    let apiDogs = await apiList()
    let allDogs = [...dbDogs, ...apiDogs] 
    if (dogId) {
        let searchByDogId = allDogs.filter(e => e.id == dogId)
        if(!searchByDogId.length) {
            return res.json({err: `No existe ninguna raza con ID que coincida con el parámetro ingresado: ${dogId}`})
        } else {
            return res.json(searchByDogId)
        }
    } 
}

const createNewDog = async (req, res) => {
    let { name, height, weight, life_span, createdInDb, temperaments } = req.body;

    if (!name || !height || !weight) return res.status(404).send("Falta enviar datos obligatorios")
    try {
        let dogCreated = await Dog.create({
            name,
            height,
            weight,
            life_span,
            createdInDb,
        })
        const temp = await Temperament.findAll({where: {name: temperaments}})
        const newT = await dogCreated.addTemperament(temp)
        res.send(newT)
    } catch (error) {
        return res.status(404).send("Error en alguno de los datos provistos")
    }
}
  


module.exports = {
    breedsList,
    findDogById,
    setAllTemps,
    getAllTemps,
    createNewDog
}