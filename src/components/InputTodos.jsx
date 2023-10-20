import React from "react";

const InputTodos = (props) => {
  const { inputText, onChange, onClick, disabled } = props;

  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={inputText}
        onChange={onChange}
        disabled={disabled}
      ></input>
      <button onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};

export default InputTodos;
