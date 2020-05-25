import {
  CREATE_STUDENT_SUCCESS,
  SHOW_STUDENTS_SUCCESS,
  GET_STUDENT_EDIT,
  DELETE_STUDENT_SUCCESS
} from '../types';

import Swal from 'sweetalert2';

// Add Students
export function addNewStudentAction ( student ) {
  return (dispatch) => {

    try {
      dispatch( addStudentSuccess(student) );

      // Alerta
      Swal.fire(
        'Correct',
        'The new student has been added',
        'success'
      );

    } catch (error) {
      console.log(error);

      // aleta de error
      Swal.fire({
        icon: 'error',
        title: 'Error adding student',
        text: 'Something failed, try again'
      });
    }
  }
}

const addStudentSuccess = student => ({
    type: CREATE_STUDENT_SUCCESS,
    payload: student
});

// Show Students
export function showStudentsAction() {
  return (dispatch) => {
    dispatch( showStudents() );
  };
}

const showStudents = () => ({
  type: SHOW_STUDENTS_SUCCESS,
  payload: true
});

// Get Student to Edit
export function getStudentEdit( student ) {
  return (dispatch) => {
    dispatch( getStudent(student) );
  }
}

const getStudent = student => ({
  type: GET_STUDENT_EDIT,
  payload: student
});

// Delete Students
export function deleteStudentnAction( id ) {
  return (dispatch) => {
    dispatch( deleteStudent(id) );

    try {

      // si se elimina
      Swal.fire({
        title: 'Deleted',
        text: 'The student has been deleted.',
        icon: 'success'
      });

    } catch (error) {
      console.log(error);
    }
  }
}

const deleteStudent = id => ({
    type: DELETE_STUDENT_SUCCESS,
    payload: id
})
