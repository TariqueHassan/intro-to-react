import React from 'react';

function HelloWorld(props){
    return (
        <div>
            <h1>Hello, {props.name} {props.lname}</h1>
            <p>Products {props.list}</p>
            <ol>
                {
                    props.list.map((product)=>(
                    <li>{product}</li> 
                        )
                    )
                }

            </ol>
        </div>
    );
}

export default HelloWorld;