import React, { useState } from 'react';
const Bai11_12 = () => {
  const [listTodo, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setList([...listTodo, inputValue]);
      setInputValue('');
    } else {
      alert("Không được để trống");
    }
  };
  const changeInfor = (find: string) => {
    const index = listTodo.findIndex(item => item === find);
    if (index !== -1) {
      const newValue = prompt("Nhập giá trị mới:");
      if (newValue !== null) {
        const newList = [...listTodo];
        newList[index] = newValue;
        setList(newList);
      }
    } else {
      console.log("Không tìm thấy công việc cần thay đổi");
    }
  };
  const deleteItem = (find: string) => {
    const index = listTodo.findIndex(item => item === find);
    if (index !== -1) {
      const newList = [...listTodo];
      newList.splice(index, 1);
      setList(newList);
    } else {
      console.log("Không tìm thấy công việc cần xóa");
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  

  return (
    <div>
      <h4>Bai11,12</h4>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={addItem}>Add</button>
      <p>Các công việc :</p>
      <table>
  <tbody>
    {listTodo.map((item, index) => (
      <tr key={index}>
        <td><input type="checkbox" name="" id="" /></td>
        <td>{item}</td>
        <td><button onClick={() => changeInfor(item)}>Sửa</button></td>
        <td><button onClick={() => deleteItem(item)}>Xóa</button></td>
      </tr>
    ))}
  </tbody>
</table>

      
    </div>
  );
};

export default Bai11_12;
