import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { CiSearch } from 'react-icons/ci';
import { MdClear } from 'react-icons/md';
import css from './NoticesSearch.module.css';

export const NoticeSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('query');
  const [keyWord, setKeyWord] = useState(searchValue || '');

  const handleSearchChange = event => {
    setKeyWord(event.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const query = keyWord.trim().toLocaleLowerCase();
    if (query === '') {
      setSearchParams({});
      Notiflix.Notify.info('Please enter something');
      return;
    }
    setSearchParams({ query: query });
    setKeyWord('');
  };

  const handleInputClear = event => {
    setSearchParams('');
    setKeyWord('');
  };

  return (
    <form className={css.noticeSearchForm} onSubmit={handleFormSubmit}>
      <div className={css.noticeSearchFormInputWrappper}>
        <input
          className={css.noticeSearchInput}
          name="word"
          value={keyWord}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          onChange={handleSearchChange}
        />
        <button type="submit" className={css.noticeSearchFormButton}>
          <CiSearch className={css.noticeSearchFormButtonIcon} />
        </button>
        {keyWord.length > 0 && (
          <button
            className={css.noticeClearFormButton}
            onClick={handleInputClear}
          >
            <MdClear className={css.noticeClearFormButtonIcon} />
          </button>
        )}
      </div>
    </form>
  );
};
