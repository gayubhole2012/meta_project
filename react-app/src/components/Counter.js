import { useMealsListContext } from "../providers/MealsProvider";

const Counter = ()  => {
  const { meals } = useMealsListContext();
  return (
<div>
  <h3> Numbers of Meals: {meals.length }</h3>
  </div>
  );
}

export default Counter;
