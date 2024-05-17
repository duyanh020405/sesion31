import React, { Component } from 'react'
interface Props {

}
interface State{
    name:string,
    age:number,
    loading:boolean
    count:number
}
export default class ClassComponent extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state ={
            name:"Duy Anh",
            age:25,
            loading:true,
            count:0
        }
    }
    componentDidMount(): void {
        console.log("Chay sau khi component duoc render lan dau");
        /*
         componentDidMount duoc chay sau khi component render
         cac UI duoc cap nhat vao Dom
         Đây là nơi lí tưởng để thực hiện các việc xử lí như cal API lấy dữ liệu
         và hiển thị
        */
        
    }
    // dùng các phương thức mặc định react cung cấp 
    componentWillMount(): void {
        console.log("chạy sau khi contructor khởi tạo xong giá trị state!")
    }
    /*
    trong phuong thuc componentWillMount co the tinh toan lai state nhung luu y
    cai thoi gian chuyen tu phuong thuc componentWillMount den phuong thuc 
    */
   handleClick=()=>{
    this.setState({
     count:this.state.count +1
    })
   }

   //CÁC PHƯƠNG THỨC CUNG CẤP -updating
   shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
     // Băt buộc phải return thnahf true hoặc false
     // Nếu không gọi return thì mặc định là true
     console.log("shouldComponentUpdate");
     return true

   }
   componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
     console.log("componentWillupdate được gọi ");
     
   }
   componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
     console.log("componentDidlupdate được gọi ");
     
   }


  render() {
    /*
    this.setState({})
    */
  //  this.setState({
  //   name:"HONGGGG"
  //  })
    console.log("reder lan dau");
    
    return (
      <div>
        <p>Xin chaooooo {this.state.name}</p>
        <button onClick={this.handleClick}>Change State</button>
        <p>Count : {this.state.count}</p>
      </div>
    )
  }
}
