import React from 'react';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.body.classList.add('not-found')
    return () => {
        document.body.classList.remove('not-found')
    }
}, [])


  return (


    <section className="notfoundblock" >
      <div className="container">
        <img src="images/404.jpg" alt="Notfound" />
      </div>
    </section>

  );
};
 
export default NotFound;