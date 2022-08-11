import React from 'react'
import { Link } from 'react-router-dom';

const Memory = (props) => {

    const { _id, image, place, state, date } = props.memory;

    return (
        <>
            <div className="card" style={{ "width": "18rem" }}>
                <img src={image} className="card-img-top" alt={place} style={{ "height": "140px" }} />
                <div className="card-body text-center">
                    <h5 className="card-title">{place}</h5>
                    <p className="card-text">State :- {state}</p>
                    <p className='card-text'>Date :- {date}</p>
                    <div className="card-btn text-center my-2">
                        <Link to={`/updatememory/${_id}`}><button className='btn btn-primary mx-3'>Edit</button></Link>
                        <Link to={`/deletememory/${_id}`}><button className='btn btn-danger'>Delete</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Memory