import React from 'react';
import IconButton from '@material-ui/core/IconButton';
//import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForever from '@material-ui/icons/DeleteForever';


export default function FCStudentItem(props) {

  function btnSendId2Remove() {
    props.sendId2RemoveFromSI(props.student.id);
  }

  // function sendId2RemoveFromSL2() {
  //   props.sendId2RemoveFromSL2(props.student.id);
  // }

  console.log(props.student.Show());
  return (
    
    <div style={{
      border: 'solid green 2px',
      margin: 10,
      padding: 10,
      borderRadius: 5
    }}>
      <p>id={props.student.id} name={props.student.name}
        <IconButton aria-label="delete" onClick={btnSendId2Remove}>
          <DeleteForever style={{ fontSize: 40, color: 'red' }}  />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => props.sendId2RemoveFromSL2(props.student.id)} >
          <DeleteForever style={{ fontSize: 40, color: 'orange' }}/>
        </IconButton>
      </p>
    </div>
  )
}
