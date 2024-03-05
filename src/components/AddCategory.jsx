import { useState } from 'react';
import PropTypes from 'prop-types';
const AddCategory = ({ addcategory }) => {
  const [inputValue, setinputValue] = useState('');

  const onInputChange = (value) => {
    setinputValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    /**
     * Si usamos return retorna la funcion
     * y no se ejecuta el resto
     */
    if (inputValue.trim().length <= 1) return;
    addcategory(inputValue);
    setinputValue('');
  };
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type='text'
        placeholder='Buscar Gif'
        onChange={(event) => {
          onInputChange(event.target.value);
        }}
        value={inputValue}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  addcategory: PropTypes.func.isRequired,
};

export default AddCategory;
