import { useState } from "react";


// https://developers.giphy.com/
const apiKey = 'rPmkD9LhBgMLCBpps3DJJ0tjNnl0KiLv';

export const GifExpertApp = () => {

const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

console.log(categories);




  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}


        {/* Listado de Gig */}
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
