import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCreams/iceCreamsAction";

function IceCreamComponent() {
  const totalIcecreams = useSelector(state => state.iceCream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of totalIcecreams : {totalIcecreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>BUY ICECREAM</button>
    </div>
  );
}

export default IceCreamComponent;
