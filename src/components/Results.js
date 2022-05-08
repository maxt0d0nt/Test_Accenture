import React, { useEffect, useState }from 'react'
import { RadialBar } from './Radialbar';
import { RadialTotal } from './RadialTotal';



export const Results = () => {

  const [posts, setPosts] = useState(null)

  

      useEffect(() => {
        fetch('http://localhost:8000/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
      },[])


  return (
    <>
    <div class="container">
      
        <div class="row">
            <div class="col-sm-6 d">
              {posts && < RadialBar
              valorA={posts[0].valorA}
              valorB={posts[0].valorB}
              valorC={posts[0].valorC}
                        />}
    
              </div>
            <div class="col-sm-6">
            {posts && < RadialTotal
                        valorTotal={posts[0].valorTotal} />}
            </div>
          </div>
    </div>
    </>
  )
}
