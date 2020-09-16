import React from 'react';

const Validation = (props) => {
    return (
        // //This is preferrable// let validationMessage = "Text long enough";
        //
        // if (props.inputLength <= 5) {
        //      validationMessage = "Text too short"
        // }

        <div>
            {/* <p>{validationMessage}</p> */}
            {
                props.inputLength > 5 ?
                <p>Text long enough</p> :
                <p>Text too short!</p>
            }
        </div>
    )
}

export default Validation;