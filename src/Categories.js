import React from 'react';
import Checkbox from './Checkbox.js';

export default function Categories(props){
    
return(
    <>
    <div className='categoryContainer'>
    {props.categories.map(category => {
      return (<Checkbox
        label={category}
        isChecked={props.checkedCategories.includes(category)}
        onCheckboxChange={props.handleCheckboxChange}
        key={category}
      />)
    })}
    {props.userCategories.map(category => {
      return (<Checkbox
        label={category}
        isChecked={props.checkedCategories.includes(category)}
        onCheckboxChange={props.handleCheckboxChange}
        key={category}
      />)
    })}
  </div> 
  </>
)
}

