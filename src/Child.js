//1)
import React, { Component } from 'react'

//2)
class Child extends Component {
  
  constructor(props) {
    console.log("CHILD-CONSTRUCTOR");
    super(props);

    this.state = {
      loading : false
    };
  };

  handleClick = () => {

  }

  // this runs upon mounting (only once upon first mount which is virtual dom initializing)
  componentDidMount() {
    console.log("CHILD-INSIDE DID-MOUNT");
    this.setState({
      loading : true
    });
  }

  // this function responsible if the component has to update (re-render)
  shouldComponentUpdate(newProps,newState) {
    console.log("CHILD-INSIDE SHOULD UPDATE");
    console.log("CHILD-NEW-PROPS",newProps);
    console.log("CHILD-CURRENT-PROPS",this.props);

    if(newState.loading === this.state.loading) {
      return false; // no re-render
    };

    return true;
  };

  // after re-render
  componentDidUpdate(prevProps,prevState) {
    console.log("CHILD-INSIDE DID UPDATE");
    console.log("CHILD-PREV-PROPS",prevProps);
    console.log("CHILD-CURRENT-PROPS",this.props);
  };

  render() { 
    // virtual dom initializing (copy of the real dom)
    console.log("CHILD-INSIDE RENDER")

    // mounting stage (first time), then upon changing the local states or props, it re-renders
    return ( 
      <div>
        <h2>CHILD COMPONENT</h2>
        <button
        onClick={() => {
          this.setState({
            loading : false
          });
        }}
        >Change CHILD loading state</button>
      </div>
    );
  }
}

//3)
export default Child;