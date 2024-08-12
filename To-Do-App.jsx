import React, {useState} from "react"

function ToDoList(){
    
    const [tasks, setTasks] = useState(["Eat breakfast", "Do your homework", "Take a shower"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
       if(newTask.trim()!==""){
        setTasks(prevTasks => [...prevTasks, newTask]);
       }
       else{
        alert("You cant add an empty task");
       }
    }

    function deleteTask(index){
        setTasks(prevTasks=>(tasks.filter((element, i)=>i!==index)));

    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks= [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] =[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks= [...tasks];
            [updatedTasks[index],updatedTasks[index+1]] =[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    
    return(

        <>
            <div className="toDoListContainer">
                <h1>To-do list</h1>
                <ul>
                    {tasks.map((task, index) => <li key={index}>{task}
                    <button onClick={()=>deleteTask(index)}>Delete</button>
                    <button onClick={()=>moveTaskUp(index)}>Up</button>
                    <button onClick={()=>moveTaskDown(index)}>Down</button>
                    </li>)}
                </ul>
                <div>
                    <input type="text"value={newTask} placeholder="Enter your task" onChange={handleInputChange}/>
                    <button className="addButton" onClick={addTask}>Add task</button>
                </div>
            </div>
        </>

    );
}


export default ToDoList;
