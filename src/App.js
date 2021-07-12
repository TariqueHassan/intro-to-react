import logo from './logo.svg';
import './App.css';
import HelloWorld from './final/HelloWorld';
import Task2 from './final/Task2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task3 from './final/Task3';
import {Task4} from './final/Task4';
import ComponentC from './final/ComponentC';
import ComponentB from './final/ComponentB';
import {Button} from 'react-bootstrap';
import React, {useState} from 'react';
import { UserContext } from './final/UserContext';
import ParentRedux from './final/suh_Components/ParentRedux';
import Task5RR from './final/Task5RR';
import Task6 from './final/Task6';
import Task7Formic from './final/Task7Formic';
import FormicExample from './final/suh_Components/FormicExample';
import Task6Reducer from './final/Task6Reducer';
import Task8Controlled from './final/Task8Controlled';
import Task8Uncontrolled from './final/Task8Uncontrolled';
import IncrementOnClick from './final/HoCExample/IncrementOnClick';
import IncrementOnHover from './final/HoCExample/IncrementOnHover';
import JustifyContent from './final/FlexPractice/JustifyContent';
import AlignItems from './final/FlexPractice/AlignItems';
import AlignSelf from './final/FlexPractice/AlignSelf';
import FormDB from './final/Form/FormDB';

function App() {
// const [value, setValue] = useState(0);

  return (
    <div>
      <FormDB />

      {/* <AlignSelf /> */}
      {/* <AlignItems /> */}
      {/* <JustifyContent /> */}

      {/* <IncrementOnClick />
      <IncrementOnHover /> */}
      {/* <Task8Controlled /> */}
      {/* <Task8Uncontrolled /> */}
      {/* <Task6Reducer /> */}
      {/* <Task5RR/> */}
      {/* <Task6/> */}
     {/* <Task7Formic />  */}

      {/* <FormicExample /> */}
      {/* <HelloWorld name="Tarique" lname="Hassan!" list={["prduct1","product2","product3"]}/> */}
      {/* <Task2 /> */}
      {/* <Task3 /> */}
      {/* <Task4 /> */}

      {/* <Button onClick={()=>setValue(value+1)}>Increment</Button>
      <h1>Component App</h1>
      <h4>{value}</h4>

      <UserContext.Provider  value={[{value,setValue},"Tarique"]} >
        
        <ComponentB />
        <ComponentC/>
      </UserContext.Provider> */}

      {/* <UserContext.Provider  value={[{value,setValue},"Tarique"]} >
        <ComponentC />
      </UserContext.Provider> */}
{/* 
      <UserContext.Provider  value={{value,setValue}} >
        <ComponentC />
      </UserContext.Provider>
       */}
    </div>
  );
}

export default App;
