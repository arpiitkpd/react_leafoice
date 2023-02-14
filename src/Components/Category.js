import React from "react";
import "../App.css";

function Category(props) {
  return (
    <>
    
        <div className="health" style={{margin:"0px 5px 0px 5px"}}>
          <div className={`${props.url}`}></div>
           <a href="/">{props.heading} &rarr; </a>
           
        </div>
        
      
    </>
  );
}

export default Category;
