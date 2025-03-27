import { getGifs } from '../helpers/getGif';


export const GifGrid = ({ category }) => {
  
  getGifs( category );

  return (
    <>
      <h3>{ category }</h3>
      
    </>
  )
}

