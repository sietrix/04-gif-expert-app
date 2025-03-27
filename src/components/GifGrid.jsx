import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGif';


export const GifGrid = ({ category }) => {

  const [counter, setCounter] = useState(10);

  useEffect( () => {
    getGifs( category );
  }, []);
  

  return (
    <>
      <h3>{ category }</h3>
      
    </>
  )
}

