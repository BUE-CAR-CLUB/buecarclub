import { useContext, useState } from "react"
import { CarContext } from "../../../../CarContext"


const CarEdit = ({car,onSubmit}) => {
    const {editCars}=useContext(CarContext)
    const [price,setPrice]=useState(car.price)
    const [description,setDescription]=useState(car.description)

    const handleChangePrice=(e)=>{
        setPrice(e.target.value)
    }
    const handleChangeDescription=(e)=>{
        setDescription(e.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        onSubmit()
        editCars(car.id,price,description)
    }

  return (
    <form className="car-edit" onSubmit={handleSubmit}>
        <label>Price</label>
        <input type="text" className="input" value={price} onChange={handleChangePrice} />
        <label>Description</label>
        <input type="text" className="input" value={description} onChange={handleChangeDescription} />
        <button className="button">CHANGE SAVE</button>
    </form>
  )
}
export default CarEdit