import React from 'react';

export default function FCStudent(props) {

  let num = 7;
  num++;
  console.log(num);
  //props.age=19; //ERROR! props are read only!

  return (
    <div style={{ margin: 20, border: 'solid black 2px' }}>
      Student2 <br />
        name: {props.name} { props.name === "avi" && ' is the great:)'} <br />
        age:  {props.age*2}<br />
        inRup {props.inRup} { props.inRup ? 'Yes' : 'No'}
    </div>
  );

  // if (props.age === 7) {
  //   return (
  //     <div style={{ margin: 20, border: 'solid black 2px' }}>
  //       Student2 <br />
  //         name: {props.name} { props.name !== "avi" && ' is the great:)'} <br />
  //         age:  {props.age*2}<br />
  //         inRup {props.inRup} { props.inRup ? 'Yes' : 'No'}
  //     </div>
  //   );
  // }
  // else {
  //   return (
  //     <div>not 7</div>
  //   );
  // }


}