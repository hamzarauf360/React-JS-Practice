import React from 'react';


const UserInput = (props) => {  // the component to display the paragrpahs in it
   return(
   <div>
        <input onChange={props.changed} value={props.startingName} style={props.style}></input>
    </div>
   );
}

export default UserInput;
