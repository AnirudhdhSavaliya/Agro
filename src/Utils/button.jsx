import React from 'react';
import { Link } from 'react-router-dom'; 

function Button() {
  return (
   <>
    <div className="button1" >
      <Link to="/" className="btn-get-in-touch ">
        Discover
      </Link> 
    </div>
    </>
  );
}

export default Button;
