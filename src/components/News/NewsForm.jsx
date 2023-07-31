import { useState } from 'react';

import { BsSearch } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';

import styles from './newsList.module.scss';

const NewsForm = ({ handleSearchChange }) => {
  const [search, setSearch] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();
    handleSearchChange(search);
  };

  const handelInputChange = event => {
    setSearch(event.currentTarget.value.toLowerCase().trim());
  };

  const handleClearClick = event => {
    setSearch('');
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.formContainer}>
        <input
          type="text"
          placeholder="Search"
          className={styles.input}
          onChange={handelInputChange}
          value={search}
          autoComplete="off"
          autoFocus
        />

        <button className={styles.btnSearch} type="submit">
          <BsSearch />
        </button>

        {search.length > 0 && (
          <button className={styles.btnClear} onClick={handleClearClick}>
            <RxCross1 />
          </button>
        )}
      </div>
    </form>
  );
};

export default NewsForm;