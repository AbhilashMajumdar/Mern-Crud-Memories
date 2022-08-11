import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteMemory = () => {

    const history = useNavigate();

    const id = useParams().id;

    const deleteRequest = async ()  => {
        const res = await axios.delete(`http://localhost:5000/memories/deletememory/${id}`).catch(err=>console.log(err));
        const data = await res.data;
        return data;
    }

    useEffect(()=>{
        deleteRequest().then(()=>history('/getallmemories'));
    }, [id]);

  return (
    <>
    
    </>
  )
}

export default DeleteMemory