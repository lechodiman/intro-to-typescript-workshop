import React, { useState } from 'react';
import Dog from './Dog';
import Form from './Form';

const App: React.FC = () => {
  // Types get inferred

  // const [name, setName] = useState('domi');
  // const [breed, setBreed] = useState('puddle');
  // const dog: Dog = {
  //   name,
  //   breed
  // };

  const [dog, setDog] = useState<Dog>({ name: 'domi', breed: 'puddle' });

  // You can also specify the type
  // const [age, setAge] = useState<string>('2');
  // setAge(undefined);

  // You can let a variable be undefined like this
  // const [isAmazing, setIsAmazing] = useState<boolean | undefined>();
  // setIsAmazing(undefined);

  return (
    <div className="App">
      <Dog dog={dog} isAmazing={true}></Dog>

      {/* <p>Can i get intellisense inside callback functions?</p> */}
      {/* <Form handleNameChange={(e) => e. }></Form> */}
    </div>
  );
};

export default App;
