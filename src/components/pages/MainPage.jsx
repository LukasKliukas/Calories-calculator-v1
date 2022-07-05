import React from 'react';

const MainPage = () => {
  var myData = {
    weight: 112,
    height: 189,
    age: 29,
  };

  function caloriesCounterBMR() {
    let totalCal = 0;
    totalCal = 10 * myData.weight + 6.25 * myData.height - 5 * myData.age + 5;
    return totalCal;
  }

  let resultBMR = caloriesCounterBMR();
  let roundResult = Math.round(resultBMR);

  return (
    <div>
      <form>
        <label htmlFor='weight'>Svoris</label>
        <input type='number' id='weight' onChange={() => {}} />
        <button>Submit</button>
      </form>
      {resultBMR} Calories
    </div>
  );
};

export default MainPage;
