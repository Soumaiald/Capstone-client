// import React from 'react';
// import styled from 'styled-components';

// const SideNavWrapper = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     height: 100vh;
//     width: 200px;
//     background-color: #333;
//     color: white;
//     padding: 20px;
//     box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
//     z-index: 1000;
// `;

// const SideNav = ({ isOpen, onClose }) => {
//     return (
//         <SideNavWrapper style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
//             <ul>
//                 <li><a href="/" onClick={onClose}>Home</a></li>
//                 <li><a href="/about" onClick={onClose}>About</a></li>
//                 <li><a href="/contact" onClick={onClose}>Contact</a></li>
//             </ul>
//         </SideNavWrapper>
//     );
// };

// export default SideNav;


import React from 'react';

const NavSide = ({ categories = [], isOpen, onClose, onCategorySelect }) => {
  return (
    <aside className={`nav-side ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>Close</button>
      <h2>Categories</h2>
      <ul>
        {categories.length > 0 ? (
          categories.map(category => (
            <li key={category} onClick={() => onCategorySelect(category)}>
              {category}
            </li>
          ))
        ) : (
          <li>No categories found</li>
        )}
      </ul>
    </aside>
  );
};

export default NavSide;

