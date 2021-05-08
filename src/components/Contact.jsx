import React, {useState} from "react";
import imgsrc from "./images/contact.png";

const Contact = () => {

    const [data, setData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const InputEvent = (e) => {
        const {name, value} = e.target;
        setData((prevVal) => {
            return{
                ...prevVal,
                [name]: value,
            }
        })
    }

    // const formsubmit = (e) => {
    //     e.preventDefault();
    //     alert(`Thankyou ${data.name} for filling up the form!`)
    // }

    // onSubmit={formsubmit} 

  return (
    <>
      <section className="contact-container mb-5">
      <div className="contact-img-div">
          <img className="contact-img" src={imgsrc}/>
      </div>
        <div className="contact-heading">
          <h1>Contact Me</h1>
        </div>
        <div className="form-container">
          <form action="mailto:riyag0841@gmail.com" method="POST" enctype="text/plain" name="EmailForm">
            <div class="form-group">
              <label for="exampleInputEmail1">Full Name</label>
              <input
                name="name"
                type="text"
                class="form-control"
                onChange={InputEvent}
                value={data.name}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
              />
              <label for="exampleInputEmail1">Phone</label>
              <input
                name="number"
                type="number"
                value={data.number}
                class="form-control"
                onChange={InputEvent}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Mobile Number"
              />
                 <label for="exampleInputEmail1">Email Address</label>
              <input
               name="email"
                type="email"
                onChange={InputEvent}
                value={data.email}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="name@example.com"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" >Message</label>
              <textarea className="form-control" onChange={InputEvent} name="message" value={data.message} placeholder="Please give your feedback to my portfolio.." id="exampleFormControlTextarea1"
              rows="3"></textarea>
            </div>
           
              
           
            <button type="submit" class="btn-email-me btn-space">
              Submit form
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
