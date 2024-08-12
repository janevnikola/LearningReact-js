import React,{useState} from "react"


function MyComponent(){

    let currentYear = new Date();
    
    const [cars, setCars] =useState([]);//niza od cars
    const [carYear, setCarYear]=useState(currentYear.getFullYear());//year za sekoja car poedinecno
    const [carMake, setCarMake] =useState(""); //make za sekoja car poedinecno
    const [carModel, setCarModel] =useState(""); //model za sekoja car poedinecno

    function handleAddCar(){
        const newCar={year: carYear, make: carMake, model: carModel};
        setCars(prevCars => [...prevCars, newCar]);

    }
    function handleRemoveCar(index){
       setCars(prevCars=>(prevCars.filter((element, i)=>i!==index)));
    }

    function handleYearChange(event){
        setCarYear(event.target.value);

    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        setCarModel(event.target.value);
    }

    return(
        <>
            <div>
                <h2>List of car objects</h2>
                <ul>
                    {cars.map((car, index) =><li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
                </ul>
                <input type="number" value={carYear} onChange={handleYearChange}/><br/>
                <input type="text" value={carMake} placeholder="Enter the make of your car" onChange={handleMakeChange}/><br/>
                <input type="text" value={carModel} placeholder="Enter the model of your car" onChange={handleModelChange}/><br/>
                <button onClick={handleAddCar}>Add new car</button>
                
            </div>
        </>

    );
}


export default MyComponent;
