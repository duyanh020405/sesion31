import React, { useState } from 'react'
import Test from './components/Test'
import ClassComponent from './components/ClassComponent'
import A from './components/A'
import Bt1 from './components/Bai1'
import Bt2 from './components/Bai2'
import Bt3 from './components/Bai3'
import Bt4 from './components/Bai4'
import Bt5 from './components/Bai5'
import Bt6 from './components/Bai6'
import Bt7 from './components/Bai7'
import Bt8 from './components/Bai8'
export default function App() {
  const [active, setActive] = useState<boolean>(true)

  const remove = () => {
    setActive(false)
  };

  return (
    <div>
      <Test />
      {/* App lifecycle: vòng đời của class components
          Functional component không có vòng đời,
          vd: 1 con người sẽ có vòng đời
          Class component cũng sẽ có cuộc đời riêng của nó
          1. Giai đoạn: 4 giai đoạn
            Gd1: khởi tạo
            Gd2: mounting (gắn vào giao diện)
            Gd3: updating (cập nhật)
            Gd4: unmounting (gỡ bỏ khỏi giao diện)
            
            Giai đoạn 2:
            + thì chạy các phương thức sau
              1. componentWillMount()
              2. render() => không nên setState
              3. componentDidMount =>
                {
                  có thể thực hiện nhiều lần
                  - Khi xảy ra update 
                  ==> khi dữ liệu props nhận về thay đổi hoặc dữ liệu state thay đổi thì
                  giai đoạn updating xayr ra
                }
            Giai đoạn 3: update
              {
                1. shouldComponentUpdate
                2. componentWillUpdate
                3. render
                4. componentDidUpdate
              }
            Giai đoạn 4: unmounting
              {
                => thuc hien  1 lan
                cung cap phuong thuc
                componentWillUnmount : thường dùng để xử lí các vấn đề như 

              }
      */}
      <ClassComponent />
      {active && <A />}
      <button onClick={remove}>Remove A</button>
      <div>
        <h3>BAI TAP VE NHA</h3>
        <Bt1></Bt1>
        <Bt2></Bt2>
        <Bt3></Bt3>
        <Bt4></Bt4>
        <Bt5></Bt5>
        <Bt6></Bt6>
        <Bt7></Bt7>
        <Bt8></Bt8>

      </div>
    </div>
  );
}
