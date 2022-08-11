import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Memory from './Memory';

const AllMemories = () => {

    const [memory, setMemory] = useState([]);

    const getRequest = async () => {
        const res = await axios.get('http://localhost:5000/memories/getallmemories');
        const data = await res.data;
        return data;
    }

    useEffect(() => {
        getRequest().then((data)=>setMemory(data.memories));
    }, []);
    

  return (
    <>
        {
            memory.map((memory, i)=>{
                return <div key={i} className="memorycard-des">
                    <Memory memory={memory}/>
                </div>
            })
        }
    </>
  )
}

export default AllMemories