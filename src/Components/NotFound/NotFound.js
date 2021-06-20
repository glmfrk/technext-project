import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container-full">
           <div className="container mb-5">
                <h1 className="m-5"> Soory, Page Not Found....</h1>
                <h3 className="m-5">Pls Go Back to <Link to="/">Home</Link></h3>
           </div>
        </div>
    );
};

export default NotFound;