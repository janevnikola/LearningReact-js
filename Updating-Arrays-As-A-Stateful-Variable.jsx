import React,{useState} from "react" 

function MyComponent(){

    const [foods, setFoods] = useState(["Banana", "Gyro", "Sandwich"]);

    function handleAddFood(){
//pri onClick ne mozeme da koristime event.target.value bidejki ne e event driven
        const newFood=document.getElementById("foodInput").value;
        document.getElementById("foodInput").value=""; //setirame input elementot da bide prazno posle klikanjeto
        setFoods(prevFoods => [...prevFoods, newFood]); //rabotime so previous state na foods variable i go koristime spread operatorot za da append newFood
    }
    
    function handleRemoveFood(index){ //spored daden index brisime od nizata foods

        setFoods(foods.filter((element, i) => i!==index)); //go koristime .fileter() metodot (funkcijata) koja sto prima element i index spored koj se filtrira, no
      //koristime arrow funkcija i proveruvame dali index ne e ednakov spored tipot i vrednosta so i 
    }
    
 return(
    <>
    <div>
        <h2>List of food:</h2>
        <ul>
        {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter your food"/>
        <button onClick={handleAddFood}>Add food</button>
    </div>
    </>
 );   
}

export default MyComponent;
