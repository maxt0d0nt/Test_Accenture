
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './Home.css';


export const Home = () => {

  const [myRangeA, setMyRangeA] = useState(50)
  const [myRangeB, setMyRangeB] = useState(50)
  const [myRangeC, setMyRangeC] = useState(50)

    const handleSubmit = (e) => {
    e.preventDefault();

    let range ={ myRangeA: Number(myRangeA), myRangeB: Number(myRangeB), myRangeC: Number(myRangeC) }
      
      fetch('http://localhost:8000/range', {
        method: 'POST',
        headers: {"Content-type":"application/json"},
        body: JSON.stringify(range)
      }).then(response => response.json())
      .then( data => {console.log("Success!!")})
      .catch(error => console.log(error))

      }
  
  return (

    <>                       
    <div className='welcome'>
      <h1>Welcome to Insight,</h1>
      <h3>Uncover the Power of Psychological Safety with InsightScan</h3>
     
      <h5> Please answer the following questions: </h5>
      
    </div>
    
   
    
      <div className='container-home'>
      <form onSubmit={handleSubmit}> 
        <div className='col'>
            <div className="row">
            <div className="question-item">
                <h3>If you make a mistake on this team. It is often hold against you?</h3>
                <p>Please answer with a scale from 0 to 100</p>
                  <div className='slider-container'>
                    <div className='question-slider'>
                      <label for="customRange2" className="form-label"></label>
                      <input type="range" onChange={(e) => setMyRangeA(e.target.value)} value={myRangeA.value} className="form-range"  min={0} max={100}  id="customRange1" />
                      <div className='value' id="ary">Value:{myRangeA}</div>
                    </div>
                  </div>
            </div>
            </div>

            <div className="row">
            <div className="question-item">
                <h3>It is safe to take a risk on this team?</h3>
                <p>Please answer with a scale from 0 to 100</p>
                  <div className='slider-container'>
                    <div className='question-slider'>
                      <label for="customRange2" className="form-label"></label>
                      <input type="range" onChange={(e) => setMyRangeB(e.target.value)} value={myRangeB.value} className="form-range"  min={0} max={100}  id="customRange2" />
                      <div className='value' id="ary">Value:{myRangeB}</div>
                    </div>
                  </div>
            </div>
            </div>

            <div className="row">
            <div className="question-item">
                <h3>Working with members of this team, my unique skills and talents are valued and utilized?</h3>
                <p>Please answer with a scale from 0 to 100</p>
                  <div className='slider-container'>
                    <div className='question-slider'>
                      <label for="customRange2" className="form-label"></label>
                      <input type="range" onChange={(e) => setMyRangeC(e.target.value)} value={myRangeC.value} className="form-range"  min={0} max={100}  id="customRange3" />
                      <div className='value' id="ary">Value:{myRangeC}</div>
                    </div>
                  </div>
            </div>
            </div>
          </div>

          <div className='Btn'>
          <button className="btn btn-outline-success btn-lg">Submit</button>
          </div>

          <div className='Btn'>
          <Link to="/data">
          <button className="btn btn-outline-secondary btn-lg">Show Result</button>
          </Link>
          </div>
      </form>
          
  </div>
  </>
  )
}



