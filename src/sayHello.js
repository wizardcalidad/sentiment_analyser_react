import React from 'react';

function Hello(){
    const sayHello = () => {
        console.log("hello");
    };
    return(
        <div>
            <h3>The Hello Component</h3>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    )
}

export default Hello;