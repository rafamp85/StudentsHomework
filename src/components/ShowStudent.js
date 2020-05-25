import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { showStudentsAction, getStudentEdit, deleteStudentnAction } from '../actions/studentAction';

const ShowStudent = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect( () => {
    // consultar la API
    const listStudents = () => dispatch( showStudentsAction() );
    listStudents();
    // eslint-disable-next-line
  }, []);

  const students = useSelector( state => state.students );

  const redirectDetail = student => {
    dispatch( getStudentEdit(student) );
    history.push(`/student/detail/${student.id}`);
  };

  const confirmDeleteStudent = id => {
  Swal.fire({
    title: 'Are you sure?',
    text: "If you delete the student, you can't get it again",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.value) {
      // pasar al action
      dispatch( deleteStudentnAction(id) );
    }
  });
};

  return(
    <Fragment>
      <h2 className="text-center my-5">Page 2</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Phone</th>
            <th scope="col">GPA</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.students.map( student => (
            <tr>
              <td>
                <button
                  type="button"
                  onClick={ () => redirectDetail(student) }
                  className="btn btn-primary mr-2">
                  {student.firstname}
                </button>
              </td>
              <td>{student.lastname}</td>
              <td>{student.phone}</td>
              <td>{student.gpa}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={ () => confirmDeleteStudent(student.id) }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="btn btn-secondary mr-2"
        onClick = { () => history.push('/') }
      >Close &times;</button>

    </Fragment>
  );
}
export default ShowStudent;
