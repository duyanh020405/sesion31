import React, { Component } from 'react'
interface State{
    company:string
}
export default class Bt4 extends Component<{},State>{
    constructor(props:{}){
        super(props)
        this.state = {
            company:"Học code để đi làm"
        }
    }
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<State>, nextContext: any): boolean {
        return false
    }
    click=()=>{
        this.setState({company:"RikkeiSoft"})
    }
  render() {
    return (
      <div>
      <h4>Bai 4</h4>
        Slogan: "{this.state.company}"
        <br />
        <button onClick={this.click}>Change state</button>
      </div>
    )
  }
}