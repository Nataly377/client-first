import React from 'react'

import  { useState } from 'react';

const Contact = () => {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (name.trim() && email.trim() && message.trim()) {
      console.log('Form submitted:', { name, email, message });
      alert('Thank you for contacting us! We will get back to you within 24 hours.');

      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Please fill in all fields.');
    }
  };
  
  return (
    <>
    <div className="contact container d-flex ">
    <div className="me-5">
        <h2>Have a Question ?
        Get in Touch with us 👋</h2>
        <p className="mt-4 mb-5">Fill up the Form  and ou team will get back to within 24 hrs</p>
<form className="contform">
   <div className="input  d-flex justify-content-between mb-4">
    <div> 
        <input className="form-control" style={{backgroundColor: 'transparent', border: '1px solid white', color: 'white'}} id="name" placeholder="Name" /> 
    </div>
    <div>
        <input className="form-control" style={{backgroundColor: 'transparent', border: '1px solid white', color: 'white'}} id="email" placeholder="Email" /> 
    </div>
  </div>
        <textarea className="form-control" style={{backgroundColor: 'transparent', border: '1px solid white', color: 'white'}} id="floatingTextarea" placeholder="Message"></textarea>
</form>
     <button className="contbutton mt-5">
        <img src="img/Button.png" />
    </button> 
    </div>
    <div className="contimg">
        <img src="img/Contact Image 1.png" alt="img contact" />
    </div>
    <div>    
        <img src="img/Contact Image 2.png" alt=" img contact" />
    </div>
</div> 
</>
  )
}

export default Contact