import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks';
import { ReactComponent as PlusSmall } from '../../images/plus-small.svg';
import { ReactComponent as Plus } from '../../images/plus.svg';
import { ReactComponent as Filter } from '../../images/filters-3.svg';
import { ReactComponent as Down } from '../../images/chevron-down.svg';
import { ReactComponent as Tick } from '../../images/tick.svg';
import css from './Buttons.module.css';

import { useNavigate } from 'react-router-dom';
import ModalWindow from '../shared/AttentionModal';

const Buttons = ({ handleCategoryChange }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [menuAgeOpen, setMenuAgeOpen] = useState(false);
  const [menuGenderOpen, setMenuGenderOpen] = useState(false);
  const [modalAcessWindow, setmodalAcessWindow] = useState(false);

  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  const handleFilterClick = () => {
    if (!filterOpen) {
      setFilterOpen(true);
    }
    if (filterOpen) {
      setFilterOpen(false);
    }

    if (menuAgeOpen) {
      setMenuAgeOpen(false);
    }

    if (menuGenderOpen) {
      setMenuGenderOpen(false);
    }
  };

  const handleAgeClick = () => {
    if (!menuAgeOpen) {
      setMenuAgeOpen(true);
    }

    if (menuAgeOpen) {
      setMenuAgeOpen(false);
    }
  };

  const handleGenderClick = () => {
    if (!menuGenderOpen) {
      setMenuGenderOpen(true);
    }

    if (menuGenderOpen) {
      setMenuGenderOpen(false);
    }
  };


  const handleCategoryFilterClick = event => {
    handleCategoryChange(event.target.innerText);
  };

  const handleAddPetClick = () => {
    if (!isLoggedIn) {
      setmodalAcessWindow(true);
      return;
    }

    navigate('/add-pet');
  };

  return (
    <div className={css['btn-group']}>
      <div className={css.buttons}>
        <button
          type="button"
          className={css.btn}
          onClick={handleCategoryFilterClick}
          autoFocus
        >
          sell
        </button>
        <button
          type="button"
          className={css.btn}
          onClick={handleCategoryFilterClick}
        >
          lost/found
        </button>
        <button
          type="button"
          className={css.btn}
          onClick={handleCategoryFilterClick}
        >

          in good hands
        </button>

        {isLoggedIn && (
          <div className={css['btn-auth']}>

            <button
              type="button"
              className={css.btn}
              onClick={handleCategoryFilterClick}
            >
              favorite ads
            </button>
            <button
              type="button"
              className={css.btn}
              onClick={handleCategoryFilterClick}
            >

              my ads
            </button>
          </div>
        )}
      </div>

      <div className={css['sub-buttons']}>
        {/* Filter */}

        <button
          type="button"
          className={css['btn-filter']}
          onClick={handleFilterClick}
        >
          Filter{' '}
          <span className={css['icon-filter']}>
            <Filter />
          </span>
        </button>
        <button
          type="button"
          className={css['btn-mob-filter']}
          onClick={handleFilterClick}
        >
          <span className={css['icon-filter']}>
            <Filter />
          </span>
        </button>

        {/* Add Pet */}
        <button
          type="button"
          className={css['btn-add']}
          onClick={handleAddPetClick}
        >
          Add Pet{' '}
          <span className={css['icon-plus']}>
            <PlusSmall />
          </span>
        </button>
        <button type="button" className={css['btn-mob-add']}>
          {' '}
          <span className={css['icon']}>
            <Plus />
          </span>
          Add pet
        </button>
      </div>

      {/* Filter- menu */}

      {filterOpen && (
        <div className={css['filter-menu']}>
          <p className={css.title}>Filters</p>

          <div className={css['age-menu']}>
            <div className={css['title-menu']} onClick={handleAgeClick}>
              <button type="button" className={css['btn-menu']}>
                <span className={css['icon-down']}>
                  <Down />
                </span>
              </button>
              <span>By age</span>
            </div>
            {menuAgeOpen && (
              <div className={css.form}>
                <div className={css.age}>
                  <input
                    className={css.input}
                    type="checkbox"
                    name="age"
                    value="age"
                    id="0"
                  />
                  <label className={css.label} for="age">
                    {' '}
                    <span className={css['icon-check']}>
                      <Tick />
                    </span>{' '}
                    3-12 m
                  </label>
                </div>

                <div className={css.age}>
                  <input
                    className={css.input}
                    type="checkbox"
                    name="age"
                    value="age"
                    id="1"
                  />
                  <label className={css.label} for="age">
                    <span className={css['icon-check']}>
                      <Tick />
                    </span>{' '}
                    up to 1 year
                  </label>
                </div>

                <div className={css.age}>
                  <input
                    className={css.input}
                    type="checkbox"
                    name="age"
                    value="age"
                    id="2"
                  />
                  <label className={css.label} for="age">
                    <span className={css['icon-check']}>
                      <Tick />
                    </span>{' '}
                    up to 2 year
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className={css['gender-menu']}>
            <div className={css['title-menu']} onClick={handleGenderClick}>
              <button type="button" className={css['btn-menu']}>
                <span className={css['icon-down']}>
                  <Down />
                </span>
              </button>
              <span>By gender</span>
            </div>

            {menuGenderOpen && (
              <div className={css.form}>
                <div className={css.gender}>
                  <input
                    className={css.input}
                    type="checkbox"
                    name="gender"
                    value="gender"
                    id="female"
                  />
                  <label className={css.label} for="gender">
                    <span className={css['icon-check']}>
                      <Tick />
                    </span>{' '}
                    female
                  </label>
                </div>

                <div className={css.gender}>
                  <input
                    className={css.input}
                    type="checkbox"
                    name="gender"
                    value="gender"
                    id="male"
                  />
                  <label className={css.label} for="gender">
                    <span className={css['icon-check']}>
                      <Tick />
                    </span>{' '}
                    male
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {modalAcessWindow && (
        <ModalWindow onClose={() => setmodalAcessWindow(false)} />
      )}
    </div>
  );
};

export default Buttons;
