import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateMemory = () => {

    const history = useNavigate();

    const [memory, setMemory] = useState({
        image: "",
        place: "",
        state: "",
        date: ""
    });

    const { image, place, state, date } = memory;

    const id = useParams().id;

    const getRequest = async () => {
        const res = await axios.get(`http://localhost:5000/memories/getmemory/${id}`);
        const data = await res.data;

        const { image, place, state, date } = data.memory;
        setMemory({ image, place, state, date });
    }

    useEffect(() => {
        getRequest()
    }, [id]);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setMemory({ ...memory, [name]: value });
    }

    const putRequest = async () => {
        const res = await axios.put(`http://localhost:5000/memories/updatememory/${id}`, {
            image : String(image),
            place : String(place),
            state : String(state),
            date : String(date)
        });
        const data = await res.data;
        return data;
    }

    const updateData = (e) => {
        e.preventDefault();
        putRequest().then((data)=>window.alert(data.message)).then(()=>history('/getallmemories'));
    }

    const cancel = () => {
        history('/getallmemories');
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-4 col-8 bg-primary addmemory">
                    <div className='text-center text-light pt-4'>
                        <h3>Update a Memory</h3>
                    </div>
                    <form action="" className='form-des '>
                        <div className="mb-2">
                            <input type="text"
                                placeholder='Enter Memory Image url'
                                className='form-control'
                                name='image'
                                value={image}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="mb-2">
                            <input type="text"
                                placeholder='Enter Place'
                                className='form-control'
                                name='place'
                                value={place}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="mb-2">
                            <input type="text"
                                placeholder='Enter State'
                                className='form-control'
                                name='state'
                                value={state}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="mb-2">
                            <input type="date"
                                placeholder='Select Date'
                                className='form-control'
                                name='date'
                                value={date}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="form-btn text-center py-3">
                            <button className='btn btn-light mx-3' onClick={cancel}>Cancel</button>
                            <button className='btn btn-light' onClick={updateData}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UpdateMemory