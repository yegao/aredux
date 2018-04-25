import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {store} = this.props;
    const num = store.getState();
    return (
      <div>
        <h1>{num}</h1>
        <button onClick={()=>{store.dispatch({type: 'ADD'})}}/>
      </div>
    )
  }
}
