//1)
import React, { Component } from 'react'
import Child from './Child';

//2)
class App extends Component {
  
  // initializing all local variables
  constructor(props) {
    console.log("PARENT-CONSTRUCTOR");
    super(props);

    this.state = {
      a : "A",
      b : "B",
      loading : true
    };
  };

  handleClick = () => {

  }

  // this runs upon mounting (only once upon first mount which is virtual dom initializing)
  componentDidMount() {
    console.log("PARENT-INSIDE DID-MOUNT");
    this.setState({
      loading : true
    });
  }

  // this function responsible if the component has to update (re-render)
  shouldComponentUpdate(newProps,newState) {
    console.log("PARENT-INSIDE SHOULD UPDATE");
    // console.log("PARENT-NEW-STATE",newState);
    // console.log("PARENT-CURRENT-STATE",this.state);
    // if(newState.loading === this.state.loading) {
    //   return false; // no re-render
    // };
    return true;
  };

  // after re-render 
  componentDidUpdate(prevProps,prevState) {
    console.log("PARENT-INSIDE DID UPDATE");
    // console.log("PARENT-PREV-STATE",prevState);
    // console.log("PARENT-CURRENT-STATE",this.state);
  };

  promiseClick = (n) => { // number (n)
    return new Promise((resolve,reject) => {
      if(n > 10) {
        resolve({
          status : "SUCCESS",
          error : false
        });
      } else {
        reject({
          status : "FAILURE",
          error : true
        })
      };
    });
  }

  render() { 
    // virtual dom initializing (copy of the real dom)
    console.log("PARENT-INSIDE RENDER");

    // mounting stage (first time), then upon changing the local states or props, it re-renders
    return ( 
      <div>
        <h2>APP COMPONENT</h2>
        {/* <Child parentProp={this.state.loading} /> */}
        <button
        onClick={() => {
          this.setState({
            a : "AA",
            b : "BB"
          });
        }}
        >Change PARENT loading state (SYNCHRONOUS)</button>

        
        <button
        onClick={() => {
            this.promiseClick(19).then(response => {
               if(!response.error) {
                 this.setState({
                   a : "AA",
                 });
                 console.log("BETWEEN SetStates");
                 this.setState({
                  b : "BB"
                });

               }
            })
            .catch(err => {
              console.log("ERR",err);
            })
        }}
        >Change PARENT loading state (PROMISE)</button>
        <Child></Child>
      </div>
    );
  }
}

//3)
export default App;