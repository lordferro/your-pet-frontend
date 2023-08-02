import { NoticesCategoriesList } from '../../components/Notice/NoticesCategoriesList/NoticesCategoriesList';
import { NoticeSearch } from '../../components/Notice/NoticesSearch/NoticesSearch';
import Buttons from 'components/Buttons/Buttons';
import css from './NoticesPage.module.css';
import {
  fetchFavoriteNotices,
  fetchNotices,
  fetchUserNotices,
} from 'redux/notices/operations';
import {
  selectError,
  selectIsLoading,
  selectNotices,
} from 'redux/notices/selectors';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import Loader from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { setFilter } from 'redux/categoryFilter/slice';

export default function NoticesPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [category, setCategory] = useState('sell');

  const [searchQuery, setSearchQuery] = useState('');

  const notices = useSelector(selectNotices);

  const isLoading = useSelector(selectIsLoading);

  const user = useSelector(selectUser);

  const error = useSelector(selectError);

  const [activePage, setActivePage] = useState(0);

  const limit = 12;

  const totalPages = Math.ceil(notices?.length / limit);

  const handleFilterChange = useCallback(
    (filterName, filterValue) => {
      dispatch(setFilter({ filterName, filterValue }));
    },
    [dispatch]
  );

  const handleSearchChange = value => {
    setSearchQuery(value);
  };

  const handleCategoryChange = value => {
    const categoryFilter = value;

    setActivePage(0);
    switch (categoryFilter) {
      case 'lost/found':
        navigate('/notices/lost-found');
        setCategory('lost/found');
        break;

      case 'in good hands':
        navigate('/notices/for-free');
        setCategory('in good hands');
        break;

      case 'favorite ads':
        navigate('/notices/favorite');
        setCategory('favorite');
        break;

      case 'my ads':
        navigate('/notices/own');
        setCategory('own');
        break;

      default:
        navigate('/notices/sell');
        setCategory('sell');
        break;
    }
    setSearchQuery('');
  };

  const handlePageClick = ({ selected }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActivePage(selected);
  };

  useEffect(() => {
    handleFilterChange('category', category);
    setActivePage(0);
  }, [category, dispatch, handleFilterChange]);

  useEffect(() => {
    handleFilterChange('page', activePage + 1);
  }, [activePage, dispatch, handleFilterChange]);

  useEffect(() => {
    setActivePage(0);
    handleFilterChange('searchQuery', searchQuery);
  }, [searchQuery, dispatch, handleFilterChange]);

  useEffect(() => {
    const fetchData = () => {
      if (category === 'favorite') {
        dispatch(fetchFavoriteNotices());
      } else if (category === 'own') {
        dispatch(fetchUserNotices());
      } else dispatch(fetchNotices());
    };
    fetchData();
  }, [category, isLoggedIn, user, dispatch, searchQuery, activePage]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Find your favorite pet</h1>
      <NoticeSearch handleSearchChange={handleSearchChange} />
      <Buttons handleCategoryChange={handleCategoryChange} />
      {!notices.length && (
        <div className={css.title}>
          <p>There is no information on your request.</p>
        </div>
      )}

      {isLoading && !error ? (
        <Loader />
      ) : (
        <NoticesCategoriesList cards={notices} />
      )}

      {category !== 'favorite' &&
        category !== 'own' &&
        notices &&
        totalPages > 1 &&
        notices.length > 0 && (
          <div className={css.wrapper}>
            <ReactPaginate
              previousLabel={<BsArrowLeft />}
              nextLabel={<BsArrowRight />}
              pageCount={totalPages}
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
    </div>
  );
}
