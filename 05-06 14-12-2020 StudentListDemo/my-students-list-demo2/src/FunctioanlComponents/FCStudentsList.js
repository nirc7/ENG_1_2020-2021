import React from 'react';
import FCStudentItem from './FCStudentItem';

export default function FCStudentsList(props) {

  function sendId2Remove(id) {
    props.sendId2RemoveFromSL(id);
  }

  let studentList2Show = props.students.map(student =>
    <FCStudentItem
      key={student.id}
      student={student}
      sendId2RemoveFromSL2={props.sendId2RemoveFromSL2}
      sendId2RemoveFromSI={sendId2Remove}
    />);

  return (
    <div>
      {studentList2Show}
    </div>
  );
}
