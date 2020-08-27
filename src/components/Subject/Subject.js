import React from 'react';
import './Subject.css';
const Subject = (props) => {
    //console.log(props);
    const {courseName, courseFee, duration,img} =props.subject;
    return (
       <div className="subject">
           <div>
             <img src={img} alt=""/>
           </div>
           <div className="subject-courseName">

           <h4>{courseName}</h4>
           
           <p>Course Fee:${courseFee}</p>
           <p><small>Duration:{duration}</small></p>
           <button 
             className="main-button"
             onClick ={() =>props.handleAddSubject(props.subject)}
             >
             Enroll Now</button>
           </div>
        </div>
    );
};

export default Subject;