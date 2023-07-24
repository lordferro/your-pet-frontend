import mainMob from '../../images/mainMob.png';
import mainMobRet from '../../images/mainMob@2x.png';
import mainTab from '../../images/mainTab.png';
import mainTabRet from '../../images/mainTab@2x.png';
import mainDesc from '../../images/mainDesc.png';
import mainDescRet from '../../images/mainDesc@2x.png';

import css from './Main.module.css';

export const Main = () => {
  return (
    <div className={css.mainPage}>
      <h1 className={css.mainPageTittleMob}>
        Take good care of <br /> your small pets
      </h1>

      <h1 className={css.mainPageTittleDesc}>
        Take good care <br />
        of your small <br />
        pets
      </h1>
      <div className={css.pictureWrapper}>
        <picture>
          <source
            srcset={`${mainMob}, ${mainMobRet} 2x`}
            type="image/png"
            media="(max-width: 480px)"
            alt={'main page pets'}
          />

          <source
            srcset={`${mainTab}, ${mainTabRet} 2x`}
            type="image/png"
            media="(max-width:768px)"
            alt={'main page pets'}
          />

          <source
            srcset={`${mainDesc}, ${mainDescRet} 2x`}
            type="image/png"
            media="(min-width: 1280px)"
            alt={'main page pets'}
          />

          <img
            className={css.mainPetsPicture}
            src={`${mainMob}`}
            alt={'main page pets'}
          />
        </picture>
      </div>
    </div>
  );
};
