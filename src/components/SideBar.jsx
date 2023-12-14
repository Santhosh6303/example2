import React from 'react';

const SideBar = ({count,price}) => {
  return (
    <div className='money'>
        <ol>
        {price.reverse().map((item,index) => (

          <li className={(16-count === index + 1)?"MoneyListitemActive":"MoneyListitem"} style={{}} ><span className='index'>{index + 1}</span>$ {item}</li>
        ))}
        </ol>
    </div>
  );
};

export default SideBar;