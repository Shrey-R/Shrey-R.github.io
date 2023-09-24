import React, { useState } from 'react';
import Line from '../Line';
import styles from './styles.module.css';

const NavBar = ({ data  , setCategories , categories}) => {
  const [openItemId, setOpenItemId] = useState(null);

  const handleProductsClick = (itemId) => {
    setOpenItemId(prevItemId => (prevItemId === itemId ? null : itemId));
  };

  const handleCatogeries = (childItem) => {
    setCategories(childItem);
  }
  console.log(data,'atad')
  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about', child: ['Company', 'Career'] },
    {
      name: 'Our Products',
      id: 'product',
      child: data
    },
    { name: 'Contact Us', id: 'contact', child: ['+91 1234567890', 'Shopkart@gmail.com'] }
  ];

  return (
    <nav>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginRight: '450px', marginTop: '10px', height: '120px' }}>
        {navbar.map(item => (
          <div key={item.id} style={{ position: 'relative' }}>
            <span style={{ fontSize: '20px', fontWeight: '600' , cursor:'pointer'}} onClick={() => handleProductsClick(item.id)}>
              {item?.name}
            </span>
            {item?.child && openItemId === item.id && (
              <div style={{ display: 'flex', flexDirection: 'column', width: '150px', position:'absolute' }} 
              className={styles.child_item_container}>
                <Line width='120px' />
                {item?.child.map((childItem, ind) => (
                  <span 
                  className={styles.child_item}
                  style={{ fontWeight: '400', padding: '1px 0',
                                cursor:'pointer',
                                backgroundColor : categories===childItem? 'white': '',
                                color : categories===childItem? 'black': '',
                }} onClick={()=>handleCatogeries(childItem)} key={ind}>{childItem}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

