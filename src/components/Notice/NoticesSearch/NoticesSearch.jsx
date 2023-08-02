import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { MdClear } from 'react-icons/md';
import css from './NoticesSearch.module.css';

export const NoticeSearch = ({ handleSearchChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('searchQuery');
  const [keyWord, setKeyWord] = useState(searchValue || '');

  const handelInputChange = event => {
    console.log(keyWord);
    setKeyWord(event.currentTarget.value.toLowerCase().trim());
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    handleSearchChange(keyWord);

    setSearchParams({ searchQuery: keyWord });
  };

  const handleInputClear = event => {
    setSearchParams('');
    setKeyWord('');
    handleSearchChange('');
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
          onChange={handelInputChange}
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
