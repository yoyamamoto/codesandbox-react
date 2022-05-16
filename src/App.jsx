import React from "react";

const App = () => {
  const onClickButton = () => {
    alert("ボタン動作だよ");
  };
  return (
    <>
      <h1 style={{}}>Webのプルタブ</h1>
      <p>
        Webのプルタブを閲覧頂き誠にありがとうございます。現在再開に向けて準備中です。
      </p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
