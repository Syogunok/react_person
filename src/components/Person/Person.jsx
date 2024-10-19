import React from 'react';
import '../../App.scss';

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  return (
    <div className="Person">
      <p className="Person__name">My name is {name}.</p>
      <p className="Person__age">I am {age} years old.</p>
      {isMarried ? (
        <p className="Person__partner">
          My {sex === 'm' ? 'wife' : 'husband'} is {partnerName}.
        </p>
      ) : (
        <p className="Person__partner">I am not married.</p>
      )}
    </div>
  );
};
