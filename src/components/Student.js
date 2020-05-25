import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import image from '../blankProfile.png';

// Redux
import { useSelector } from 'react-redux';

const Student = () => {

  const history = useHistory();

  const [student, saveStudent] = useState({
    id: 0,
    firstname: '',
    lastname: '',
    street: '',
    city: '',
    phone: '',
    gpa: ''
  });

  const studentedit = useSelector( state => state.students.studentedit );

  useEffect( () => {
    saveStudent( studentedit );
  }, [studentedit]);


  const { firstname, lastname, address, city, phone, gpa } = student;

  return(
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={image} alt="Blank" />
        </div>
        <div className="one-half column">
          <p>Firt Name: {firstname}<span></span></p>
          <p>Last Name: {lastname}<span></span></p>
          <p>Street Number/Name: {address}<span></span></p>
          <p>City: {city}<span></span></p>
          <p>Phone number: {phone}<span></span></p>
          <p>GPA: {gpa}<span></span></p>

          <button
            className="btn btn-secondary mr-2"
            onClick = { () => history.push('/') }
          >Close &times;</button>
        </div>
      </div>
    </div>
  );
}
export default Student;
