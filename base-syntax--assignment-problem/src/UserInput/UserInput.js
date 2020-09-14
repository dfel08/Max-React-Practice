import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.userInput}/>
        </div>
    )
}

export default UserInput;