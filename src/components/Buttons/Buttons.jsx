import React from 'react';
import { ReactComponent as Plus } from "../../images/plus-small.svg";
import { ReactComponent as Filter } from "../../images/filters-3.svg";
import css from "./Buttons.module.css"


const Buttons = () => {
  
    return (
      <div className={css['btn-group']}>
         <div className={css.buttons}>
            <button type="button" className={css.btn} autoFocus>sell</button>  
            <button type="button" className={css.btn}>lost/found</button>
            <button type="button" className={css.btn}>in good hands</button>
            <button type="button" className={css.btn}>favorite ads</button>
            <button type="button" className={css.btn}>my ads</button>
         </div> 
         <div className={css['sub-buttons']}>
            <button type="button" className={css['btn-filter']}>Filter <span className={css['icon-filter']}><Filter /></span></button>  
            <button type="button" className={css['btn-add']}>Add Pet <span className={css['icon-plus']}><Plus /></span></button>                
         </div>             
      </div>
    
);
};

export default Buttons;