import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert("ボタン動作だよ");
  };
  const contentStyle = {
    color: "#000",
    fontSize: "26px"
  };
  return (
    <>
      <h1 style={{ color: "#f0f" }}>Webのプルタブ</h1>
      <p style={contentStyle}>
        Webのプルタブを閲覧頂き誠にありがとうございます。現在再開に向けて準備中です。
      </p>
      <ColorfulMessage color="bule">2022年5月12日 Yo Yamamoto</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
