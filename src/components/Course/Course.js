import React, { useState } from 'react';
import Data from '../../fakeData/Education';

import './Course.css';
import Subject from '../Subject/Subject';
import Cart from '../Cart/Cart';


const Course = () => {
const [subjects] = useState(Data);
const [cart, setCart] = useState([]);

   const handleAddSubject =(subject) =>{
       console.log('Subject added', subject);
       const newCart =[...cart, subject];
       setCart(newCart);
   }
    return (
        <div className="course-container">
          <div className="subject-container">
              
            {
             subjects.map(subject => <Subject 
                handleAddSubject ={handleAddSubject}
                subject ={subject}
                ></Subject>)
            }
               
           </div>
           <div className="cart-container">
              <Cart cart={cart}></Cart>
               
           </div>
         </div>
    );
};

export default Course;