import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export const Contact = ()=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handling the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // what should i do so just im printing on the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };  
    return (
        <div id="contactID" className="container-fluid pt-5">
            <div id="Contact" className="container mt-5 mb-5 rounded">
    <div className="heading mt-5"
      style={{alignItems:"center", textDecoration:"none", color:"#291C3A", display:"flex", fontSize:"40px", fontWeight:"500", gap: "10px"}}>
      contact
      <div className="line" style={{border: "0.25px solid #291C3A", width: "70px"}}></div>
    </div>
    
    <div className="container mt-5">
      <div className="row d-flex flex-row text-cener flex-wrap row">
        <div className="col col-12 col-md-12 col-sm-12 col-lg-6">
          <div className="mb-5" style={{fontSize: "44px", fontWeight:"500"}}>
            {"Let's discuss"}
            <br/>
            <h1>on something <span style={{color:"darkmagenta"}}>cool</span> together</h1>
          </div>
          <p style={{color:"#291C3A"}}>I'm Intersting in ...</p>
            <div className="d-flex justify-content-around flex-wrap">
                <h5 style={{backgroundColor:"#291C3A",borderRadius:"5px",color:"white",padding:"5px "}}>
                    Ecommerce Website
                </h5>
                <h5 style={{border:"1px solid #291C3A",borderRadius:"5px",padding:"5px"}}>Potfolio</h5>
                <h5 style={{border:"1px solid #291C3A",borderRadius:"5px",padding:"5px"}}>Saas Websites</h5>
                <h5 style={{border:"1px solid #291C3A",borderRadius:"5px",padding:"5px"}}>Landing pages</h5>
                <h5 style={{border:"1px solid #291C3A",borderRadius:"5px",padding:"5px"}}>Blog Website</h5>
                <h5 style={{border:"1px solid #291C3A",borderRadius:"5px",padding:"5px"}}>Responsive Website</h5>
            </div>
           
        </div>
        <div className="col col-12 col-md-12 col-sm-12 col-lg-6 mt-5">
          <div className="form flex-sm-column">
            <form className="d-flex flex-column flex-sm-column"
              onsubmit={handleSubmit}>
              <input className="form-input" size="59" type="text" name="name" placeholder="Your name 😉"
                required onChange={setName} />
              <br />
              <br />
              <input className="form-input" size="59" type="email" name="email" placeholder="Your email 📧 "
                required  onChange={setEmail}/>
              <br />
              <textarea name="message" id="message" cols="62" rows="10" required
                placeholder="Your message.🙌" onChange={setMessage}></textarea>
              <br />
              <input type="submit" value="SUBMIT" name="submit" style={{border: "3px solid white",
                    borderRadius: "5px",
                    padding: "7px",
                    color: "white",
                    backgroundColor: "#331C52",
               }} />
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>

        </div>
    )
}