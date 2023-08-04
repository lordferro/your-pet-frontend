import { useMemo, useState } from 'react';
import Calendar from 'react-calendar';
import css from './UserForm.module.css';
import 'react-calendar/dist/Calendar.css';
import { ReactComponent as CameraImg } from '../../images/camera.svg';
import CheckImg from '../../images/check.svg';
import OutImg from '../../images/out.svg';
import CrossImg from '../../images/cross.svg';
import { useRef } from 'react';
import { useEffect } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import LogoutModal from '../shared/LogoutModal';
import Notiflix from 'notiflix';

export const UserForm = ({ readonly, user, onSubmit, saveNewAvatar }) => {
  const [avatarURL, setAvatarURL] = useState();
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [birthDate, setBirthDate] = useState(user.birthDate || '00.00.0000');
  const [phone, setPhone] = useState(user.phone || '');
  const [city, setCity] = useState(user.city || '');
  const [isBirthdayChanging, setIsBirthdayChangin] = useState(false);
  const [isLogoutConfirmShow, setIsLogoutConfirmShow] = useState(false);

  useEffect(() => {
    setAvatarURL(null);
    setName(user.name);
    setEmail(user.email);
    setBirthDate(user.birthDate);
    setPhone(user.phone);
    setCity(user.city);
  }, [user]);

  const inputPhotoRef = useRef();
  const inputPhoneRef = useRef();

  const dispatch = useDispatch();

  const formatedBirthday = useMemo(() => {
    if (birthDate?.split('0').length !== 9) {
      return moment(birthDate, 'DD-MM-YYYY');
    }

    if (!readonly) {
      return moment();
    }

    return '';
  }, [readonly, birthDate]);

  const avatarUrl = useMemo(() => {
    if (avatarURL) return URL.createObjectURL(avatarURL);

    return user.avatarURL;
  }, [avatarURL, user.avatarURL]);

  const onChangeName = event => {
    setName(event.target.value);
  };
  const onChangeEmail = event => {
    setEmail(event.target.value);
  };
  const onChangePhone = event => {
    const phone = event.target.value;
    const digits = /^[0-9_]+$/;

    if (phone.length === 1) {
      if (phone === '+') {
        setPhone(phone);
        return;
      } else if (digits.test(phone)) {
        setPhone('+' + phone);
      }
    } else if (phone.length > 1 && phone.length <= 13) {
      if (digits.test(phone[phone.length - 1])) {
        setPhone(phone);
      }
    }
  };

  const onChangeCity = event => {
    setCity(event.target.value);
  };

  const onBirthdayChange = newDate => {
    setBirthDate(moment(newDate).format('DD.MM.YYYY'));
    setIsBirthdayChangin(false);
  };

  const onSubmitClick = event => {
    event.preventDefault();

    if (
      isNaN(moment(birthDate, 'DD.MM.YYYY')) ||
      moment().year() - moment(birthDate, 'DD.MM.YYYY').year() === 0
    ) {
      setIsBirthdayChangin(true);
      return;
    }

    if (phone.length < 13) {
      inputPhoneRef.current.focus();
    }

    const formData = {
      name,
      email,
      birthDate: moment(birthDate, 'DD.MM.YYYY').format('DD-MM-YYYY'),
      phone,
      city,
      userAvatar: avatarURL,
    };
    onSubmit(formData);
  };

  const onLoadFile = () => {
    inputPhotoRef.current.click();
  };

  const onFileSelect = event => {
    const file = event.target.files[0];
    if (file.size > 1024 * 1024 * 3) {
      Notiflix.Notify.warning('You should select files up to 3 Mb');
      return;
    }
    setAvatarURL(file);
  };

  const onCancelNewAvatar = () => {
    setAvatarURL(null);
  };

  const onShowCalendar = event => {
    if (readonly) return;
    event.stopPropagation();
    setIsBirthdayChangin(presState => !presState);
  };

  const onCalendarBlur = event => {
    if (!event.target.classList.contains('react-calendar__navigation__arrow')) {
      setIsBirthdayChangin(false);
    }
  };

  useEffect(() => {
    if (isBirthdayChanging) {
      window.addEventListener('click', onCalendarBlur);
    } else {
      window.removeEventListener('click', onCalendarBlur);
    }

    return () => window.removeEventListener('click', onCalendarBlur);
  }, [isBirthdayChanging]);

  const onToggleLogoutConfirmModal = () => {
    setIsLogoutConfirmShow(prevState => !prevState);
  };

  const onLogout = () => {
    dispatch(logOut());
  };

  const onConfirmAvatar = () => {
    saveNewAvatar(avatarURL);
  };

  return (
    <>
      <div className={css.card}>
        <form className={css.form} onSubmit={onSubmitClick}>
          <div className={css.avatarContainer}>
            <img
              src={avatarUrl}
              className={[
                css.avatar,
                readonly ? css.avatarReadonlyON : css.avatarReadonlyOFF,
              ].join(' ')}
              alt="profile"
            />
            <input
              type="file"
              ref={inputPhotoRef}
              value=""
              onChange={onFileSelect}
              style={{ display: 'none' }}
            />
            {!readonly &&
              (avatarURL ? (
                <div className={css.btnDual}>
                  <button
                    type="button"
                    className={css.btnConfirm}
                    onClick={onConfirmAvatar}
                  >
                    <img
                      src={CheckImg}
                      className={css.iconCheck}
                      alt="check"
                    ></img>
                    Confirm
                  </button>
                  <button
                    type="button"
                    onClick={onCancelNewAvatar}
                    className={css.btnConfirm}
                  >
                    <img
                      src={CrossImg}
                      className={css.iconCross}
                      alt="cross"
                    ></img>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className={css.btnEdit}
                  onClick={onLoadFile}
                >
                  <CameraImg className={css.iconCamera}></CameraImg>
                  Edit photo
                </button>
              ))}
          </div>

          <div className={css.inputContainer}>
            <div className={css.formField}>
              <p className={css.label}>Name:</p>
              <input
                type="text"
                value={name}
                onInvalid={() => 'message'}
                onChange={onChangeName}
                readOnly={readonly}
                className={css.input}
                required
              />
            </div>

            <div className={css.formField}>
              <p className={css.label}>Email:</p>
              <input
                type="email"
                value={email}
                onChange={onChangeEmail}
                className={css.input}
                readOnly={readonly}
                required
              />
            </div>

            {formatedBirthday && (
              <div className={css.formField}>
                <p className={css.label}>Birthday:</p>
                {isBirthdayChanging ? (
                  <Calendar
                    className={css.calendar}
                    calendarType="iso8601"
                    onChange={onBirthdayChange}
                    value={
                      formatedBirthday ? formatedBirthday.toDate() : new Date()
                    }
                  />
                ) : (
                  <input
                    type="text"
                    value={
                      formatedBirthday
                        ? formatedBirthday.format('DD.MM.YYYY')
                        : moment().format('DD.MM.YYYY')
                    }
                    onClick={onShowCalendar}
                    className={css.input}
                    readOnly={true}
                  />
                )}
              </div>
            )}

            {(phone || !readonly) && (
              <div className={css.formField}>
                <p className={css.label}>Phone:</p>
                <input
                  type="tel"
                  ref={inputPhoneRef}
                  value={phone}
                  onChange={onChangePhone}
                  className={css.input}
                  readOnly={readonly}
                  placeholder="+380000000000"
                  required
                />
              </div>
            )}

            {(city || !readonly) && (
              <div className={css.formField}>
                <p className={css.label}>City:</p>
                <input
                  type="text"
                  value={city}
                  onChange={onChangeCity}
                  className={css.input}
                  readOnly={readonly}
                  placeholder="Zaporizhzhia"
                  required
                />
              </div>
            )}

            {readonly ? (
              <button
                type="button"
                className={css.btnOut}
                onClick={onToggleLogoutConfirmModal}
              >
                <img src={OutImg} className={css.iconOut} alt="check" />
                Log Out
              </button>
            ) : (
              <button type="submit" className={css.btnSubmit}>
                Save
              </button>
            )}
          </div>
        </form>
      </div>
      {isLogoutConfirmShow && (
        <LogoutModal onClose={onToggleLogoutConfirmModal} onLogout={onLogout} />
      )}
    </>
  );
};
