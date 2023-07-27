import { NoticesCategoriesList } from '../../components/Notice/NoticesCategoriesList/NoticesCategoriesList';
import { NoticeSearch } from '../../components/Notice/NoticesSearch/NoticesSearch';
import Buttons from 'components/Buttons/Buttons';
import css from './NoticesPage.module.css';

export default function NoticesPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Find your favorite pet</h1>
      <NoticeSearch />
      <Buttons></Buttons>
      <NoticesCategoriesList />
    </div>
  );
}
