import { useState } from 'react'


export const AddCategory = ({ setCategories }) => {

    const [ inputValue, setInputValue ] = useState( '' );

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        // console.log(event.target.value);

    };

    const onSubmit = (event) => {
      event.preventDefault();
      // console.log(inputValue);
      if( inputValue.trim().length <= 1) return;
      // insertamos el input primero y luego el resto que había
      setCategories( categories => [ inputValue, ...categories]);
      setInputValue(''); // limpiamos el input
      
    }


  return (


    <form onSubmit={ onSubmit }>
      <input 
          type="text"
          placeholder="Buscar gifs"
          value={ inputValue }
          onChange={ onInputChange }
      />
    </form>


  )
}
