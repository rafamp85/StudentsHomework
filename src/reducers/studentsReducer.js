import {
  CREATE_STUDENT_SUCCESS,
  SHOW_STUDENTS_SUCCESS,
  GET_STUDENT_EDIT,
  DELETE_STUDENT_SUCCESS
} from '../types';


const initialState = {
  students: [
    { id: 1, firstname: 'John', lastname: 'Lennon', address: 'Imagine 11', city: 'New York', phone: '111-1111', gpa: 'C' },
    { id: 2, firstname: 'Paul', lastname: 'McCartney', address: 'Get Back 22', city: 'Los Angeles', phone: '222-2222', gpa: 'A' },
    { id: 3, firstname: 'George', lastname: 'Harrison', address: 'While My Guitar Gently Weeps 33', city: 'London', phone: '333-3333', gpa: 'A' },
    { id: 4, firstname: 'Ringo', lastname: 'Starr', address: 'I Wanna Be Your Man 44', city: 'Liverpool', phone: '444-4444', gpa: 'B' },
    { id: 5, firstname: 'George', lastname: 'Martin', address: 'StreetX 55', city: 'Liverpool', phone: '555-5555', gpa: 'D' },
  ],
  studentedit: null
};


export default function ( state = initialState, action ) {
  switch (action.type) {
    case CREATE_STUDENT_SUCCESS:
      return{
        ...state,
        students: [...state.students, action.payload]
      };

    case SHOW_STUDENTS_SUCCESS:
      return{
          ...state,
      };

    case GET_STUDENT_EDIT:
      return {
        ...state,
        studentedit: action.payload
      };

    case DELETE_STUDENT_SUCCESS:
      return {
        ...state,
        students: state.students.filter( student => student.id !== action.payload )
      };

    default:
      return state;
  }
}
