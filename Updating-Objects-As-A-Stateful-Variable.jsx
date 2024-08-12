import React,{useState} from "react"
import MyComponentStyles from "./MyComponent.module.css"

function MyComponent(){

    const [car, setCar] = useState({year: 2024, make: "BMW", model: "M4"});


    function handleYearChange(event){
        setCar(prevCar =>({...prevCar, year: event.target.value}));
    }

    function handleMakeChange(event){
        setCar(prevCar => ({...prevCar, make: event.target.value}));
    }

    function handleModelChange(event){
        setCar(prevCar => ({...prevCar, model: event.target.value}));
    }
    
    return(

        <>
            <div className={MyComponentStyles.carContainer}>
                <p>Your car year is: {car.year}<br/> Your car make is: {car.make} <br/>Your car model is: {car.model}</p>
                <label>Enter the year of your car: </label>
                <input type="number" value={car.year} onChange={handleYearChange} />
                <br/>
                <label>Enter the car make: </label>
                <input type="text" value={car.make} onChange={handleMakeChange}></input>
                <br/>
                <label>Enter your car model: </label>
                <input type="text" value={car.model} onChange={handleModelChange}/>
            </div>
        </>
    );
}

export default MyComponent;
