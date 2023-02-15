import React from "react";

function Contact() {

  
  return (
    <>
      <div className="contact-conatiner d-flex justify-content-center">
        <div className="query ">
          <div className="cont1">
            <div className="head con-head" style={{margin:"0px", height: "57px"}}>Ask Query</div>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label email">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control input"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="query" className="form-label">
                  Query
                </label>
                <input
                  type="text"
                  className="form-control input"
                  name="query"
                  id="query"
                />
              </div>

              <button type="submit" className="btn btn-primary" >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="corp ">
          <div className="head con-head">CONTACT US</div>
          <ul className="list">
            <li>arpiitkumar02@gamil.com</li>
            <li>+9112345xyz</li>
            <li>B-80 AnandVihar NewDelhi, 201310</li>
          </ul>
        </div>
        <div className="corp  ">
          <div className="head con-head">CORPORATION</div>
          <ul className="list">
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Company</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
