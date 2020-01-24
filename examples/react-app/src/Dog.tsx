import React, { Fragment } from 'react';

interface Dog {
  name: string;
  breed: string;
}

interface DogProps {
  dog: Dog;
  isAmazing: boolean;
}

const Dog: React.FC<DogProps> = ({ dog: { name, breed }, isAmazing }) => {
  return (
    <Fragment>
      <p>Dog name: {name}</p>
      <p>Dog breed: {breed}</p>
      {isAmazing ? (
        <div> This dog is amazing</div>
      ) : (
        <div>All dogs are amazing anyways</div>
      )}
    </Fragment>
  );
};

export default Dog;
