import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    active: true
  };

  toggleParagraph = () => {
    //using state passing a function instead of an object
    this.setState(previousState => ({
      active: !previousState.active
    }));
  };

  render() {
    const isLoggedIn = true;
    const age = 26;
    const { active } = this.state;
    //If else example 
    // let element = "";
    // if(active){
    //   element = "Active is true";
    // }else{
    //   element = "Active is false";
    // }
    return (
      <div className='App'>
        <button onClick={this.toggleParagraph}>Toggle Paragraph</button>
        {/* "using if else to conditionally render an elemenet" */}
        {/* {element} */}

        <p className={active ? 'paragraph-hidden' : ''}>
          <h1> Hi all the active attribute is {`${active}`}</h1>
        </p>

        <p style={{ display: active ? 'block' : 'none' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, similique?
        </p>

        {active && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, similique?</p>}

        {(isLoggedIn && <span>Welcome logged in user!</span>) || <strong>User is not logged in.</strong>}
        <p>{(10 > 15 && 'The first value is larger.') || 'The second value is larger.'}</p>
        {(age < 20 && (
          <div>
            <span>I'm very young.</span>
          </div>
        )) ||
          (age < 90 && (
            <div>
              <span>I'm at an okay age.</span>
            </div>
          )) || (
            <div>
              <span>I'm very old.</span>
            </div>
          )}
      </div>
    );
  }
}

export default App;
