import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// Action
import { addNewStudentAction } from '../actions/studentAction';

const CreateStudent = ({history}) => {
  const [ firstname, saveFirstname ] = useState('');
  const [ lastname, saveLastname ] = useState('');
  const [ street, saveStreet ] = useState('');
  const [ city, saveCity ] = useState('');
  const [ phone, savePhone ] = useState('');
  const [ gpa, saveGPA ] = useState('');

  const dispatch = useDispatch();
  const addStudent = student => dispatch( addNewStudentAction( student ) );

  const submitStudent = e => {
    e.preventDefault();

    // validate
    if ( firstname.trim() === '' || lastname.trim() === '' ) {
      console.log('Campos vacios');
      return;
    }

    // Add student
    addStudent({
      id: uuidv4(),
      firstname,
      lastname,
      street,
      city,
      phone,
      gpa
    });

    history.push('/student/show');
  };

  return(
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add New Student
            </h2>

            <form
              onSubmit={submitStudent}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="FirstName"
                  name="firstname"
                  value={firstname}
                  onChange={ e => saveFirstname(e.target.value) }
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="lastname"
                  value={lastname}
                  onChange={ e => saveLastname( e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street Name/Number"
                  name="street"
                  value={street}
                  onChange={ e => saveStreet( e.target.value )}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  name="city"
                  value={city}
                  onChange={ e => saveCity( e.target.value )}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={ e => savePhone( e.target.value )}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="GPA"
                  name="gpa"
                  value={gpa}
                  onChange={ e => saveGPA( e.target.value )}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-text-uppercase d-block w-100"
              >
                Add
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>

  );
}
export default CreateStudent;
