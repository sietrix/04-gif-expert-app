import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


// https://developers.giphy.com/
const apiKey = 'rPmkD9LhBgMLCBpps3DJJ0tjNnl0KiLv';

export const GifExpertApp = () => {

const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

const onAddCategory = ( newCategory ) => {

  if( categories.includes(newCategory) )  return;

  // setCategories( cat => [...cat, 'Valorant']);
  setCategories([newCategory, ...categories]);
}




  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) }
      />

      {
        categories.map( (category) => (
          <GifGrid 
            key={ category } 
            category={ category } 
          />
        ))
      }

         




    </>
  )
}
