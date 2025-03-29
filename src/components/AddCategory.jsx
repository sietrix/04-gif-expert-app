import PropTypes from 'prop-types';
import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState( '' );

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        // console.log(event.target.value);

    };

    const onSubmit = (event) => {
      event.preventDefault();
      if( inputValue.trim().length <= 1) return;
     
      // insertamos el input primero y luego el resto que había
      //setCategories( categories => [ inputValue, ...categories]);
      onNewCategory( inputValue.trim() );
      setInputValue(''); // limpiamos el input
      
    }


  return (


    <form onSubmit={ onSubmit } aria-label='form'>
      <input 
          type="text"
          placeholder="Buscar gifs"
          value={ inputValue }
          onChange={ onInputChange }
      />
    </form>


  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired

};