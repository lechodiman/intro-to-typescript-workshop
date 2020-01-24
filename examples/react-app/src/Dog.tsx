import React, { Fragment } from 'react';

interface DogProps {
  dog: {
    name: string;
    breed: string;
  };
  isAmazing: boolean;
}

const Dog: React.FC<DogProps> = ({ dog: { breed, name }, isAmazing }) => {
  return (
    <Fragment>
      <p>Dog name: {name}</p>
      <p>Dog breed: {breed}</p>
      {isAmazing ? (
        <p> This dog is amazing</p>
      ) : (
        <p>All dogs are amazing anyways</p>
      )}
    </Fragment>
  );
};

export default Dog;
