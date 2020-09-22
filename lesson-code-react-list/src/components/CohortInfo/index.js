import React from 'react';
import StudentInfo from '../StudentInfo';

const CohortInfo = (props) => {
  const { date, students } = props;

  return (
    <div className='container'>
      <p>
        Cohort start date: <strong>{new Date(date).toDateString()}</strong>
      </p>
      <h3>Students</h3>
      {students !== undefined && students.map(student => (
        <StudentInfo key={student.name} name={student.name} age={student.age} />
      ))}
    </div>
  );
}

export default CohortInfo;
