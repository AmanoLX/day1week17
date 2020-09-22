import React from 'react';
import './App.css';

// example: iterating over an array of strings
import StudentsList from './components/StudentsList';

// more common way: iteration over an array of objects
import CohortInfo from './components/CohortInfo';

// example of data
import cohorts from './data/cohorts.json'

function App() {
  return (
    <div className='App container'>
      <StudentsList />
      <hr />
      <h2>Cohorts list</h2>
      <i>(an example with an array of objects)</i>

      {cohorts.map(cohort => (
        <CohortInfo key={cohort.id} date={cohort.date} students={cohort.students} />
      ))}
    </div>
  );
}

export default App;
