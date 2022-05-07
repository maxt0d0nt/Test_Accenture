import { Link } from 'react-router-dom';
import { Question } from '../components/Question';
import './Home.css';


export const Home = () => {
  return (

    <> 
    <div className='welcome'>
      <h1>Welcome to Insight,</h1>
      <h3>Uncover the Power of Psychological Safety with InsightScan</h3>
     
      <h5> Please answer the following questions: </h5>
    </div>
    

    
      <div className='container-home'>
      <form action='/data' onSubmit=""> 
        <div className='col'>
            <div className="row">
              < Question
              question="If you make a mistake on this team. 
              It is often hold agains you?" />
            </div>

            <div class="row">
              < Question
              question="It is safe to take a risk on this team?" />
            </div>

            <div class="row">
              < Question
              question="Working with members of this team, my unique skills and talents are valued and utilized?" />
            </div>
          </div>

          <div className='Btn'>
          <Link to="/data">
          <button type="button" class="btn btn-danger btn-lg">Submit</button>
          </Link>
          </div>
          </form>
        </div>
     
  </>
    

  )
}



