import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  const contentStyle = {
    color: "#000",
    fontSize: "26px"
  };
  return (
    <>
      <h1 style={{ color: "#000" }}>Webのプルタブ</h1>
      <p style={contentStyle}>
        Webのプルタブを閲覧頂き誠にありがとうございます。現在再開に向けて準備中です。
      </p>
      <ColorfulMessage color="bule">2022年5月12日 Yo Yamamoto</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップボタン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ﾟДﾟ)</p>}
    </>
  );
};

export default App;
