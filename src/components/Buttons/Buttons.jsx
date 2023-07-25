import React from 'react';
import { useState } from 'react';
import { ReactComponent as PlusSmall } from "../../images/plus-small.svg";
import { ReactComponent as Plus } from "../../images/plus.svg";
import { ReactComponent as Filter } from "../../images/filters-3.svg";
import { ReactComponent as Down } from "../../images/chevron-down.svg";
import css from "./Buttons.module.css"


const Buttons = () => {

   const [filterOpen, setFilterOpen] = useState(false); 
   

   const handleFilterClick = () => {
      if (!filterOpen) {
          setFilterOpen(true);
      }
      if (filterOpen) {
         setFilterOpen(false);
      }       
   };
   
  
    return (
      <div className={css['btn-group']}>
         <div className={css.buttons}>
            <button type="button" className={css.btn} autoFocus>sell</button>  
            <button type="button" className={css.btn}>lost/found</button>
            <button type="button" className={css.btn}>in good hands</button>
            <div className={css['btn-auth']}>
                <button type="button" className={css.btn}>favorite ads</button>
                <button type="button" className={css.btn}>my ads</button>
            </div>
            
         </div> 
         <div className={css['sub-buttons']}>
            <button type="button" className={css['btn-filter']} onClick={handleFilterClick}>Filter <span className={css['icon-filter']}><Filter /></span></button> 
            <button type="button" className={css['btn-mob-filter']}><span className={css['icon-filter']}><Filter /></span></button> 
            <button type="button" className={css['btn-add']}>Add Pet <span className={css['icon-plus']}><PlusSmall /></span></button> 
            <button type="button" className={css['btn-mob-add']}> <span className={css['icon']}><Plus /></span>Add pet</button>  
          </div>   

          {filterOpen && (<div className={css['filter-menu']} >
             <p className={css.title}>Filters</p>
             <div className={css['age-menu']}>
                <button type="button" className={css['btn-menu']}><span className={css['icon-down']}><Down /></span></button>
                <span>By age</span>
             </div>
             <div className={css['gender-menu']}>
                <button type="button" className={css['btn-menu']}><span className={css['icon-down']}><Down /></span></button>
                <span>By gender</span>
             </div>
          </div>)} 
      </div>
    
);
};

export default Buttons;