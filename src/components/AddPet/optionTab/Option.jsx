import css from './optionTab.module.css';
import React from 'react';

let values = [
  { id: 1, value: 'your pet' },
  { id: 2, value: 'sell' },
  { id: 3, value: 'lost/found' },
  { id: 4, value: 'in good hands' },
];
const Option = ({ setOption, current, setError, setAction }) => {
  function onClick(val) {
    setOption(val.id);
    setAction(val.value);

    setError({});
  }

  return (
    <div className={css.optionWrap}>
      {values.map(val => {
        return (
          <button
            type="button"
            key={val.id}
            onClick={() => onClick(val)}
            className={
              css.radioBtn + ' ' + (current === val.id ? css.active : '')
            }
          >
            {val.value}
          </button>
        );
      })}
    </div>
  );
};

export default Option;
