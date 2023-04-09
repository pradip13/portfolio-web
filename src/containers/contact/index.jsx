import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Contact = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [desc, setDesc] =useState("")

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!name || !email || !desc) return alert("please fill all input");
   else{
      localStorage.setItem('email',JSON.stringify(email));
      localStorage.setItem('name',JSON.stringify(name) );
      localStorage.setItem('desc',JSON.stringify(desc));
      console.log('saved in local storage');
    
  }

    setName("")
    setEmail("")
    setDesc("")

  }
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  value={name}
                  className="inputName"
                  type={"text"}
                  onChange={(e)=> setName(e.target.value)}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                  value={desc}
                  onChange={(e)=> setDesc(e.target.value)}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
