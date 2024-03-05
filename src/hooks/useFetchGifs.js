import { getGifs } from '../helpers/getGifs';
import { useState,useEffect } from 'react';

/**
 * Devolvemos  un objeto con dos  atributos 
 * los cuales van a ser las imagenes que vamos a cargar
 * y si estan cargadas o no
 * esto lo hacemos aqui ya que esta logica de llamar a cada 
 * endpoint para devolver las imagenes actualizadas se 
 * puede repetir, extraemos esta logica a parte en un hooks 
 * para ahorrarnos tener que escribir esta logica en todos
 * los componentes que lo necesite
 */
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading,setIsLoading]=useState(true);

    const addImages=async(category)=>{

        const listImages=await getGifs(category);
        setImages(listImages)
        setIsLoading(false)
       
    }

    useEffect(()=>{
        addImages(category,setImages);
         
      },[])
  return (
    {
        images,
        isLoading
    }
  )
}


