import css from './progressBar.module.css';
const ProgressBar = ({ step, current }) => {
  const textStyle = {
    first: { color: 'grey' },
    secound: { color: 'grey' },
    third: { color: 'grey' },
  };
  const barStyle = {
    first: { backgroundColor: 'grey' },
    secound: { backgroundColor: 'grey' },
    third: { backgroundColor: 'grey' },
  };
  if (step === 1) {
    textStyle.first.color = '#54adff';
    barStyle.first.backgroundColor = '#54adff';
  } else if (step === 2) {
    textStyle.first.color = '#00C3AD';
    barStyle.first.backgroundColor = '#00C3AD';

    textStyle.secound.color = '#54adff';
    barStyle.secound.backgroundColor = '#54adff';
  } else if (step === 3) {
    textStyle.first.color = '#00C3AD';
    barStyle.first.backgroundColor = '#00C3AD';

    textStyle.secound.color = '#00C3AD';
    barStyle.secound.backgroundColor = '#00C3AD';

    textStyle.third.color = '#54adff';
    barStyle.third.backgroundColor = '#54adff';
  }

  return (
    <div
      className={
        (step === 3) & (current === 2) ||
        (step === 3) & (current === 3) ||
        (step === 3) & (current === 4)
          ? css.progressBar1
          : css.progressBar
      }
    >
      <ul className={css.progresList}>
        <li className={css.listItem}>
          <h2 style={textStyle.first} className={css.tabtitle}>
            Choose option
          </h2>
          <div style={barStyle.first} className={css.bar}></div>
        </li>

        <li className={css.listItem}>
          <h2 style={textStyle.secound} className={css.tabtitle}>
            Personal details
          </h2>
          <div style={barStyle.secound} className={css.bar}></div>
        </li>

        <li className={css.listItem}>
          <h2 style={textStyle.third} className={css.tabtitle}>
            More info
          </h2>
          <div style={barStyle.third} className={css.bar}></div>
        </li>
      </ul>
    </div>
  );
};

export default ProgressBar;
