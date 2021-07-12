import React from 'react';

export class List extends React.Component{

    render(){
        let titleText = "Favourite "+this.props.type;
        if(this.props.children instanceof Array)
            titleText+="s";
            
        return (
            <div>
                <ul>
                    <h1>{titleText}</h1>
                    <li>{this.props.children}</li>
                </ul>

            </div>
        );
    }
    
}

{/* 
<List type="Living Rock Singer">
  <li>el 1</li>
  <li>el 2</li>
</List>
<List type="Living Pop Singer">
  <li>l2 el 1</li>
  <li>l2 el 2</li>
</List> */}
