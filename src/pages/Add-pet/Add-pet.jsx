import AddPet from 'components/AddPet/AddPet';
import css from './Addpet.module.css';
import BackgroundImg from 'components/shared/BackgroundImg';

export default function Addpet() {
  return (
    <BackgroundImg>
      <div className={css.mainDiv}>
        <AddPet />
      </div>
    </BackgroundImg>
  );
}
