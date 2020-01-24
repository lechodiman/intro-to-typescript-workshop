import React, { Fragment } from 'react';

interface Dog {
  name: string;
  breed: string;
}

interface Props {
  dog: {
    name: string;
    breed: string;
  };
  isAmazing: boolean;
}

const Dog: React.FC<Props> = ({ dog: { name, breed }, isAmazing }) => {
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
