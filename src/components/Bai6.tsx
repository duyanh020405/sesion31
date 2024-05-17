import React, { Component } from 'react'

export default class Bai6 extends Component {
  render() {
    return (
      <div>
        <h4>Bai 6</h4>
        {
           <p>Để thực hiện chức năng thay đổi tiêu đề của tab trình duyệt mỗi khi component 
            được mount vào trong DOM, bạn có thể sử dụng 
            lifecycle method componentDidMount() trong class component của React.
            <br />

           Phương thức này được gọi sau khi component được mount vào DOM, 
           cho phép bạn thực hiện các thao tác liên quan đến DOM sau khi component đã được hiển thị trên trình duyệt.</p>
        }
        
      </div>
    )
  }
}


class MyComponent extends Component {
  componentDidMount() {
    
    document.title = 'New Page Title';
  }

  render() {
    return (
      <div>
        {/* Nội dung của component */}
      </div>
    );
  }
}
// Trong ví dụ này, khi component được mount vào DOM, phương thức
//  componentDidMount() sẽ được gọi và tiêu đề của tab trình duyệt sẽ 
//  được thay đổi thành 'New Page Title'. Điều này giúp cung cấp một trải nghiệm 
//  người dùng tốt hơn bằng cách cung cấp thông 
// tin chi tiết hơn về nội dung của trang.


