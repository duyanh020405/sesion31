import React, { Component } from 'react'
interface Props{
    item:string
}
interface State{
    item:string
}
export default class Bai5 extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            item:"Open the form"
        }
    }
    changeItem=()=>{
        if(this.state.item ==="Open the form"){
            this.setState({item:"Close the form"})
        }
        else{
            this.setState({item:"Open the form"})
        }

    }
  render() {
    return (
      <div>
        <h4>Bai 5</h4>
        <p>{this.state.item}</p>
        <button onClick={this.changeItem}>Change item</button>
      </div>
    )
  }
}

