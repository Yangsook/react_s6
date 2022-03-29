import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* 유효한 입력값만 추가될 수 있게 하기위해 inValid 클래스를 (동적으로) 추가 */}
      {/* <div className={"form-control inValid"></div> */}
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        {/* <input
          style={{
            borderColor: !isValid ? 'red' : '#ccc',
            background: !isValid ? 'salmon' : 'transparent'
          }}
          type="text"
          onChange={goalInputChangeHandler}
        /> */}
        <input type="text" onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;