import React from 'react';
import ReactDOM from 'react-dom';

// Component class starts here:
class Owl extends React.Component{
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }
  scream2() {
    alert('Voilaaaaaaaaaaa!!!!!');
  }
  
  render(){
    const owls = [
        {
            title: 'Excellent Owl',
            src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg',
            w:500,
            h:600
        },
        {
            title: 'Excellent Owl',
            src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg',
            w:500,
            h:600
        }, {
            title: 'Excellent Owl',
            src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg',
            w:500,
            h:600
        },
        
    ];

    

    return (
      <div>
        <button onClick={()=>{this.scream();this.scream2()}}>click</button>
        {
            owls.map((owl) =>
            <>
                <h1>{owl.title}</h1>
                <img 
                src = {owl.src}
                alt = {owl.title}
                width = {owl.w}
                height = {owl.h}
                />
              </>  
            )
            
        }

        
        
      </div>
    );
  }
}

export default Owl;