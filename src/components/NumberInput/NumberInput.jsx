import React from 'react';
import * as S from './NumberInput.style';

const NumberInput = ({ id, labelText, onChange, value, placeholder }) => {
  return (
    <S.FormDiv>
      <label htmlFor={id}>{labelText}</label>
      <input
        type='number'
        name={id}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </S.FormDiv>
  );
};

export default NumberInput;
