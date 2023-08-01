import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { fetchNews } from '../redux/news/newsOperations';
import {
  selectIsLoading,
  selectError,
  selectNews,
  selectTotalPages,
} from '../redux/news/newsSelector';

import css from './NewsPage.module.css';

import NewsForm from 'components/News/NewsForm';
import NewsList from 'components/News/NewsList';
import Loader from 'components/Loader/Loader';

const NewsPage = () => {
  const dispatch = useDispatch();
  const newsItems = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);

  const [searchQuery, setSearchQuery] = useState('');
  const [activePage, setActivePage] = useState(0);

  const handleSearchChange = value => {
    setSearchQuery(value);
    setActivePage(0);
  };

  useEffect(() => {
    dispatch(fetchNews({ searchQuery }));
  }, [dispatch, searchQuery]);

  const handlePageClick = ({ selected }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const page = selected + 1;
    setActivePage(selected);
    dispatch(fetchNews({ searchQuery, page }));
  };

  return (
    <>
      <h1 className={css.title}>News</h1>
      <NewsForm handleSearchChange={handleSearchChange} />
      {isLoading && !error && <Loader />}
      {newsItems.length > 0 && <NewsList news={newsItems} />}
      {newsItems.length > 0 && (
        <div className={css.paginationWrapper}>
          <ReactPaginate
            previousLabel={<BsArrowLeft />}
            nextLabel={<BsArrowRight />}
            pageCount={Math.ceil(totalPages) || 0}
            onPageChange={handlePageClick}
            containerClassName={css.pagination}
            activeClassName={css.paginationActive}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            breakLabel={'...'}
            forcePage={activePage}
          />
        </div>
      )}
    </>
  );
};

export default NewsPage;