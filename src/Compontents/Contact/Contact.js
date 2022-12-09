import React, {Fragment, useRef } from "react";
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
    <Fragment>
      <h1 className={classes.header}>Have query? We will get back to you :D </h1>
      <form onSubmit={submitHandler} className={classes.form}>
        <label className={classes.label}> Name</label> 
        <input id="username" type="text" name="username" ref={usernameRef} required /><br></br>
        <label className={classes.label}> EmailId</label>
        <input id="email" type="email" name="emailId" ref={emailRef} required /><br></br>
        <label className={classes.label}> Phone Number</label>
        <input id="phonenumber" type="tel" name="phonenumber" ref={phoneRef}/> <br></br>
        <button className={classes.button}>Submit</button>
      </form>
    </Fragment>
  );
};

export default Contact;