import React, { Component } from 'react'
interface Props{
    item:string
}
interface State{
    item:string
}

export default class Bai3 extends Component<Props,State> {
  constructor(props:Props){
    super(props);
      this.state ={
        item :"Rikkei academy"
    }
  }
  change =()=>{
    if(this.state.item ==="Rikkei academy"){
      this.setState({item:"Rikkei Soft"})
    }
    else{
      this.setState({item:"Rikkei academy"})
    }
  }
  render() {
    return (
      <div>
        <h4>Bai 3</h4>
        <p>Ket qua :{this.state.item}</p>
        <button onClick={this.change}>xem var</button>
      </div>
    )
  }
}
