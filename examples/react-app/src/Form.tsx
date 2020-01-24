import React, { useRef, Fragment } from 'react';

// You can set up correct types by hovering over jsx attributes
interface FormProps {
  // How did I know this was the type?
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = ({ handleNameChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Fragment>
      <input ref={inputRef} onChange={handleNameChange} />
    </Fragment>
  );
};

export default Form;
