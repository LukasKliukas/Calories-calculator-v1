import React from 'react';
import { useState } from 'react';
import * as S from './MainPage.style';

const MainPage = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState('');
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
      return totalCal;
    }

    let resultBMR = caloriesCounterBMR();
    let resultWithActivity = resultBMR * activity;
    let roundResult = Math.round(resultWithActivity);

    return roundResult;
  }

  function submitHandler(event) {
    event.preventDefault();
    setResult(caloriesCounter());
  }

  function handleChange(event) {
    setActivity(event.target.value);
  }

  return (
    <S.WrapperDiv>
      <S.Form onSubmit={submitHandler}>
        <label htmlFor='weight'>Svoris :</label>
        <input
          type='number'
          id='weight'
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
        />
        <label htmlFor='height'>Ūgis :</label>
        <input
          type='number'
          id='height'
          onChange={(e) => setHeight(e.target.value)}
          value={height}
        />
        <label htmlFor='age'>Amžius :</label>
        <input
          type='number'
          id='age'
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <label for='activity'>Pasirinkite savo aktyvumo lygį :</label>
        <select
          name='activity'
          id='activity'
          value={activity}
          onChange={handleChange}
        >
          <option value='1'>Jokio aktyvumo (BMR) </option>
          <option value='1.2'>
            Sėdimas darbas: šiek tiek arba jokio aktyvumo
          </option>
          <option value='1.37522'>
            Lengvas aktyvumas: treniruotės 1-3 kartus/savaitę
          </option>
          <option value='1.46525'>
            Vidutinis aktyvumas: treniruotės 4-5 kartus/savaitę
          </option>
          <option value='1.54984'>
            Didelis aktyvumas: kasdienės treniruotės arba intensyvios
            treniruotės 3-4 kartus/savaitę
          </option>
          <option value='1.72507'>
            Labai didelis aktyvumas: intensyvios treniruotės 6-7 kartus/savaitę
          </option>
          <option value='1.9'>
            Ekstra didelis aktyvumas: labai intensyvios treniruotės/fizinis
            darbas kasdien
          </option>
        </select>
        <button>Pateikti</button>
      </S.Form>
      <S.CaloriesResultH1>{result} Kalorijos (KCAL) </S.CaloriesResultH1>
      <S.CaloriesResultH1>
        {result && Math.round(result * 0.9)} Vidutinis svorio metimas - 0.25
        kg/savaitę
      </S.CaloriesResultH1>
    </S.WrapperDiv>
  );
};

export default MainPage;
