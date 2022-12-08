import React, {useRef } from "react";
import classes from './Contact.module.css';

const Contact = (props) => {
    const usernameRef = useRef('');
  const phoneRef = useRef('');
  const emailRef = useRef('');
    async function submitHandler (event) {
        event.preventDefault();
        const contact = {
            name: usernameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
        }
        console.log(contact)

        const response = await fetch(
            "https://booking-id-default-rtdb.firebaseio.com/contact.json",
            {
              method: "POST",
              body: JSON.stringify(contact),
              headers: {
                "Content-type": "application/json",
              },
            }
          );
          const data = await response.json();
          console.log(data);

    }

  return (
    <section className={classes.contact}>
      <h1>Have query? We will get back to you :D</h1>
      <form onSubmit={submitHandler}>
        <label> Name</label>
        <input id="username" type="text" name="username" ref={usernameRef} required />
        
        <label> EmailId</label>

        <input id="email" type="email" name="emailId" ref={emailRef} required />
        
        <label> Phone Number</label>
        <input id="phonenumber" type="number" name="phonenumber" ref={phoneRef}/>
        
        <button> Book </button>
      </form>
    </section>
  );
};

export default Contact;