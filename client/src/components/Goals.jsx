
import React, { useState } from 'react';
import '../App.css';
import './Goals.css';
import GoalsForm from './GoalsForm';

const Goals = () => {


  
  return (
    <>
    <div className="section-header">
      <h1>Follow your goals</h1>
      <p className="section-description">
        Never give up. Just catch it! 
      </p>
    </div>

    <div className='form'>
    <GoalsForm/>
    </div>
    </>
)

}
export default Goals;


// import React, { useState } from 'react';

// function getDate() {
//   const today = new Date();
//   const month = today.getMonth() + 1;
//   const year = today.getFullYear();
//   const date = today.getDate();
//   return `${month}/${date}/${year}`;
// }

// function App() {
//   const [currentDate, setCurrentDate] = useState(getDate());

//   return (
//     <div>
//       <h1>Today's Date</h1>
//       <p>{currentDate}</p>
//     </div>
//   );
// }
