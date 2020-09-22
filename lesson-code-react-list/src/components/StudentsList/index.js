import React from 'react';
// import { Component } from 'react';
// import React, { Component } from 'react';

// const Component = React.Component;
// const { Component } = React;

class StudentsList extends React.Component {
  // ✅ state is always object
  state = {
    students: ['Kevin', 'Kayla', 'Veronica', 'Gustavo']
  };

  render() {
    const { students } = this.state;
    return (
      <>
        {/* <ul>
          {students.map((student, index) => {
            return <li key={index}>{student}</li>;
          })}
        </ul> */}
        {/* <ul>
          {students.map((student, index) => <li key={index}>{student}</li>)}
        </ul> */}

        {/* Having the index as a key prop is actually an anti-pattern and shouldn't be used 
        but in the case of array of string we don't have much options. 
        When we iterate over an array of objects, we should use as key prop some of the unique 
        properties such as object_id.  */}
        <h2>Students list</h2>
        <i>(an example with an array of strings)</i>

        {students.map((student, index) => {
          return <h3 key={index}>{student}</h3>;
        })}
      </>
    );
  }
}

export default StudentsList;
