import React from 'react';


const UserOutput = (props) => {  // the component to display the paragrpahs in it
   return(
   <div className="userinfo">
        <p className="paras">User Name: {props.userName}</p>
        <p className="paras">{props.children}</p>
    </div>
   );
}


export default UserOutput;




