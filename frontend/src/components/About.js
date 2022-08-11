import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className='text-center'>
          <h3>My name is Abhilash Majumdar</h3>
          <h4>I am a MERN Stack Developer, currently working in Cognizant.</h4>
          <h5>Mail :- abhilashmajumdar306@gmail.com</h5>
          <h5>Mobile No :- 7872909202</h5>
          <h6 className='mt-3'>
            <a href='https://www.facebook.com/abhilash.majumdar.1' target={'_blank'}><i className="bi bi-facebook mx-2" style={{ "fontSize": "30px" }}></i></a>

            <a href='https://web.whatsapp.com/' target={'_blank'}><i className="bi bi-whatsapp mx-3" style={{ "fontSize": "30px" }}></i></a>

            <a href='https://www.instagram.com/_abhilash_majumdar_/' target={'_blank'}><i className="bi bi-instagram mx-3" style={{ "fontSize": "30px" }}></i></a>

            <a href='https://github.com/AbhilashMajumdar' target={'_blank'}><i className="bi bi-github mx-3" style={{ "fontSize": "30px" }}></i></a>

            <a href='https://www.linkedin.com/in/abhilash-majumdar-b20b0112a/' target={'_blank'}><i className="bi bi-linkedin" style={{ "fontSize": "30px" }}></i></a>
          </h6>
        </div>
      </div>
    </>
  )
}

export default About