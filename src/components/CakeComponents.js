import React from "react";
import { buyCake } from "../redux/cake/cakeAcion";
import { useSelector, useDispatch } from "react-redux";

const CakeComponents = () => {
  const totalCakes = useSelector(state => state.cake.numOfCakes);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number Of Cakes - {totalCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default CakeComponents;
