import { NoticesCategoriesList } from '../components/Notice/NoticesCategoriesList/NoticesCategoriesList';
import { NoticeSearch } from '../components/Notice/NoticesSearch/NoticesSearch';
import Buttons from 'components/Buttons/Buttons';

export default function NoticesPage() {
  return (
    <div>
      <h1>Find your favorite pet</h1>
      <NoticeSearch />
      <Buttons></Buttons>
      <NoticesCategoriesList />
    </div>
  );
}
