import { useState } from "react";
import { AddCategory } from "./components/AddCategory";


// https://developers.giphy.com/
const apiKey = 'rPmkD9LhBgMLCBpps3DJJ0tjNnl0KiLv';

export const GifExpertApp = () => {

const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

const onAddCategory = () => {
  // setCategories( cat => [...cat, 'Valorant']);
  setCategories(['Valorant', ...categories]);
}




  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory />


        {/* Listado de Gig */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
          {
            categories.map( category => {
              return <li key={ category }>{ category }</li>
            })
          }

          {/* <li>ABC</li> */}
        </ol>
            {/* Gif Item */}




    </>
  )
}
