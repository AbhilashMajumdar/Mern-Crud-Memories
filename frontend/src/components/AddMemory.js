import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddMemory = () => {

    const history = useNavigate();

    const [memory, setMemory] = useState({
        place: "",
        state: "",
        date: "",
        image: ""
    });

    const { place, state, date, image } = memory;

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setMemory({ ...memory, [name]: value });
    }

    const postRequest = async () => {
        const res = await axios.post('http://localhost:5000/memories/addmemory', {
            image : String(image),
            place : String(place),
            state : String(state),
            date : String(date)
        });
        const data = await res.data;
        return data;
    }

    const addData = (e) => {
        e.preventDefault();
        postRequest().then((data)=>window.alert(data.message)).then(()=>history('/getallmemories'))
    }

    const resetData = () => {
        setMemory({
            place: "",
            state: "",
            date: "",
            image: ""
        });
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-4 col-8 bg-primary addmemory">
                    <div className='text-center text-light pt-4'>
                        <h3>Add a Memory</h3>
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
                            <button className='btn btn-light mx-3' onClick={resetData}>Reset</button>
                            <button className='btn btn-light' onClick={addData}>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddMemory