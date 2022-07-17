import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ViewTask from './Viewtask';
import { Typography} from '@mui/material';
function Search(){
    const {id, result} = useParams();
    //CHANGE URL TO SEND TO SEARCH FUNCTION ONCE PARAMS CONFIRMED
    const url1 = `http://localhost:9000/task/getTaskWithStatus/${id}?status=TODO`
    const url2 = `http://localhost:9000/task/getTaskWithStatus/${id}?status=DOING`
    const url3 = `http://localhost:9000/task/getTaskWithStatus/${id}?status=DONE`

    const [taskData1, setTask1] = useState([]);
    const [taskData2, setTask2] = useState([]);
    const [taskData3, setTask3] = useState([]);

    useEffect(function () {
        fetch(url1,{method:'GET'})
        .then(response => response.json())
        .then(task => {
            setTask1(task);
        });

    },[url1]);

    useEffect(function () {
        fetch(url2,{method:'GET'})
        .then(response => response.json())
        .then(task => {
            setTask2(task);
        });

    },[url2]);

    useEffect(function () {
        fetch(url3,{method:'GET'})
        .then(response => response.json())
        .then(task => {
            setTask3(task);
        });

    },[url3]);

    //Add way for user to clear search!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    return(
    <section>
        
        <div>
            <Typography variant='h2' component='h2'>TODO</Typography>
            <ViewTask task={taskData1}/>
        </div>    
        <div>
            <Typography variant='h2' component='h2'>DOING</Typography>   
            <ViewTask task={taskData2}/>
        </div>   
        <div>
            <Typography variant='h2' component='h2'>DONE</Typography>
            <ViewTask task={taskData3}/>
        </div>   
    </section>
    )
}

export default Search;