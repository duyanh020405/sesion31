import React, { Component } from 'react'
interface State{
    company:string
}
export default class Bt7 extends Component<{},State>{
    constructor(props:{}){
        super(props)
        this.state = {
            company:"Interface rendering"
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
      <h4>Bai 7</h4>
        Mess: "{this.state.company}"
        <br />
        <button onClick={this.click}>Change props</button>
      </div>
    )
  }
}