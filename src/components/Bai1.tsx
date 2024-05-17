import React, { Component } from 'react'
interface Props {

}
interface State{
    name:string
}
export default class Bai1 extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state={
            name:"Duy Anh"
        }
    }
  render() {
    return (
      <div>
        <h4>Bai 1</h4>
        <p>Ten tao : {this.state.name}</p>
      </div>
    )
  }
}
