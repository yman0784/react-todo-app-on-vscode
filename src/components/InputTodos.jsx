import React from "react";

const InputTodos = (props) => {
  const { inputText, onChange, onClick } = props;

  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={inputText}
        onChange={onChange}
      ></input>
      <button onClick={onClick}>追加</button>
    </div>
  );
};

export default InputTodos;
