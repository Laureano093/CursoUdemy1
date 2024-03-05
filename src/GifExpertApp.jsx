import { useState } from "react"

import {AddCategory,GifGrid} from './components'

const GifExpertApp = () => {
    const [categories, setCategories] = useState([])

    const addCategory=(categorie)=>{

        if(categories.find(c=>c===categorie)) return
        
        setCategories([...categories,categorie])
    }

  return (
    <>
      <h1>Gif Expert App</h1> 
      
      <AddCategory addcategory={addCategory}></AddCategory>
         
         <div className="card-grid">
  
        {
            categories.map((categorie)=>(

                <GifGrid key={categorie} category={categorie}></GifGrid>
            ))
        }

        </div>
      
    </>
  )
}

export default GifExpertApp
