import React, { Fragment } from 'react';

// You can set up correct types by hovering over jsx attributes
interface FormProps {
  // How did I know this was the type?
  handleNameChange: () => void;
}

const Form: React.FC<FormProps> = ({ handleNameChange }) => {
  return (
    <Fragment>
      <input onChange={handleNameChange} />
    </Fragment>
  );
};

export default Form;
