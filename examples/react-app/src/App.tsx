import React, { useState } from 'react';

const App: React.FC = () => {
  const [dog, setDog] = useState({ name: 'domi', breed: 'puddle' });

  // Types get inferred
  // const [name, setName] = useState('domi');
  // const [breed, setBreed] = useState('puddle');
  // const dog: Dog = {
  //   name,
  //   breed
  // };

  // You can also specify the type
  // const [age, setAge] = useState<string>('2');
  // setAge(undefined);

  // You can let a variable be undefined like this
  // const [isAmazing, setIsAmazing] = useState<boolean | undefined>();
  // setIsAmazing(undefined);

  return (
    <div className="App">
      <p>Dog component here: </p>

      <p>Can i get intellisense inside callback functions?</p>
      <p>Form Component here: </p>
    </div>
  );
};

export default App;
