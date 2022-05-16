import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const contentStyle = {
    color: "#000",
    fontSize: "26px"
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1 style={{ color: "#000" }}>Webのプルタブ</h1>
      <p style={contentStyle}>
        Webのプルタブを閲覧頂き誠にありがとうございます。現在再開に向けて準備中です。
      </p>
      <ColorfulMessage color="bule">2022年5月12日 Yo Yamamoto</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップボタン</button>
      <p>{num}</p>
    </>
  );
};

export default App;
