import React, { useEffect, useState }from 'react'
import { RadialBar } from './Radialbar';
import { RadialTotal } from './RadialTotal';



export const Results = () => {

  const [posts, setPosts] = useState("")

      useEffect(() => {
        fetch('http://localhost:8000/range')
        .then(response => response.json())
        .then(data => setPosts(data));
      },[])

      const arrayLast = posts.length - 1
      
  return (
    <>
    <div className="container">
      
        <div className="row">
            <div className="col-sm-6 d">
              {posts && < RadialBar
              valorA={posts[arrayLast].myRangeA}
              valorB={posts[arrayLast].myRangeB}
              valorC={posts[arrayLast].myRangeC}
                        />}
    
              </div>
            <div className="col-sm-6">
            {posts && < RadialTotal
                        valorTotal={(posts[arrayLast].myRangeA + posts[arrayLast].myRangeB + posts[arrayLast].myRangeC) / 3} />}
            </div>
          </div>
    </div>
    </>
  )
}
