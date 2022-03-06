import { useState } from "react";
import "./styles.css";

// 受控组件案例
export default function App() {
  const [value, setValue] = useState({ amount: 0, type: "人民币" });
  const handleChange = (event) => {
    console.log(event.target.value);
    setValue({ ...value, amount: event.target.value });
  };
  const selectChange = (event) => {
    console.log(event.target.value);
    setValue({ ...value, type: event.target.value });
  };
  return (
    <div className="App">
      <input value={value.amount} onChange={handleChange} />
      <select defaultValue={value.type} onChange={selectChange}>
        <option value="人民币">人民币</option>
        <option value="美元">美元</option>
      </select>
    </div>
  );
}
