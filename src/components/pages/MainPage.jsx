import React from 'react';
import { useState } from 'react';

const MainPage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');

  function caloriesCounter() {
    var myData = {
      weight: weight,
      height: height,
      age: age,
    };

    function caloriesCounterBMR() {
      let totalCal = 0;
      totalCal = 10 * myData.weight + 6.25 * myData.height - 5 * myData.age + 5;
      return totalCal * 1.2;
    }

    let resultBMR = caloriesCounterBMR();
    let roundResult = Math.round(resultBMR);

    return roundResult;
  }

  function submitHandler(event) {
    event.preventDefault();
    setResult(caloriesCounter());
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor='weight'>Svoris</label>
        <input
          type='number'
          id='weight'
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />
        <label htmlFor='height'>Ūgis</label>
        <input
          type='number'
          id='height'
          onChange={(e) => setHeight(e.target.value)}
          value={height}
        />
        <label htmlFor='age'>Amžius</label>
        <input
          type='number'
          id='age'
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <button>Pateikti</button>
      </form>
      {result} Calories
    </div>
  );
};

export default MainPage;
