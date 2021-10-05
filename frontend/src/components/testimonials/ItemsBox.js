// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';

// import Item from './Item';
// import { breakpoints, colors } from '../../styles';
// import { v4 as uuidv4 } from 'uuid';
// import koziol1 from '../../assets/koziol1.png';
// import Slider2 from 'infinite-react-carousel';

// const ItemsBoxContainer = styled.div`
//   /* display: flex; */
//   padding: 100px 0;
//   overflow-x: hidden;

//   width: 100%;
//   max-width: 250px;
//   margin: 0 auto;
//   transition: all 1s;

//   /* border: 2px solid red; */

//   position: relative;

//   @media ${breakpoints().sm} {
//     max-width: 600px;
//   }

//   @media ${breakpoints().md} {
//     max-width: 900px;
//   }

//   @media ${breakpoints().lg} {
//     max-width: 1200px;
//   }
// `;

// const OverFlow = styled.div`
//   width: 100%;
//   height: 300px;
//   /* display: flex; */
//   transition: all 1s;
// `;

// const data = [
//   {
//     id: 1,
//     name: 'Grzegorz Borowski',
//     img: koziol1,
//     company: 'Wawel Apartments',
//     url: '#',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
//   },
//   {
//     id: 2,
//     name: 'Magdalena Makuch',
//     img: koziol1,
//     company: 'Record Consultings',
//     url: '#',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
//   },
//   {
//     id: 3,
//     name: 'Mariusz Mariusz',
//     img: koziol1,
//     company: 'Doctor QBud',
//     url: '#',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
//   },
//   {
//     id: 4,
//     name: 'Dominika Dominika',
//     img: koziol1,
//     company: 'Inspektor budowy',
//     url: '#',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
//   },
//   {
//     id: 5,
//     name: 'Wojciech Matuszny',
//     img: koziol1,
//     company: 'Eco Masuria',
//     url: '#',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
//   },
//   {
//     id: 6,
//     name: 'Ten ZeSzkolenia',
//     img: koziol1,
//     company: 'Ubezpieczenia',
//     url: '#',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
//   },
// ];

// let item;
// let itemWidth;

// function ItemsBox({ data, handleRemove }) {
//   const [width, setWidth] = useState(null);
//   const [state, setState] = useState([
//     {
//       id: 1,
//       name: 'Grzegorz Borowski',
//       img: koziol1,
//       company: 'Wawel Apartments',
//       url: '#',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
//     },
//     {
//       id: 2,
//       name: 'Magdalena Makuch',
//       img: koziol1,
//       company: 'Record Consultings',
//       url: '#',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
//     },
//     {
//       id: 3,
//       name: 'Mariusz Mariusz',
//       img: koziol1,
//       company: 'Doctor QBud',
//       url: '#',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
//     },
//     {
//       id: 4,
//       name: 'Dominika Dominika',
//       img: koziol1,
//       company: 'Inspektor budowy',
//       url: '#',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
//     },
//     {
//       id: 5,
//       name: 'Wojciech Matuszny',
//       img: koziol1,
//       company: 'Eco Masuria',
//       url: '#',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
//     },
//     {
//       id: 6,
//       name: 'Ten ZeSzkolenia',
//       img: koziol1,
//       company: 'Ubezpieczenia',
//       url: '#',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cupiditate perspiciatis animi? Quis accusamus sed aliquid quo corrupti, tempora necessitatibus?',
//     },
//   ]);

//   useEffect(() => {
//     item = Array.from(document.querySelectorAll('.overflow div'))[0];
//     itemWidth = item.clientWidth + item.offsetLeft * 2;
//     setWidth(itemWidth);
//   }, []);

//   const handleClick = (e) => {
//     // console.log(items);
//     // console.log(margin);
//     // console.log(width);
//     // items.map((el) => (el.style.left = `${el.offsetLeft - margin - width}px`));
//     // items.map((el) => console.dir(el));
//     const newState = state;
//     const shift = state.shift();
//     setState((prev) => [...newState, shift]);
//     console.log(state);
//   };

//   return (
//     <ItemsBoxContainer>
//       <OverFlow className="overflow">
//         <Slider2 dots slidesToShow={4}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           {/* {state &&
//             state.map((el) => <Item key={uuidv4()} data={el} width={width} />)} */}
//         </Slider2>
//       </OverFlow>
//       <button onClick={handleClick}>click</button>
//     </ItemsBoxContainer>
//   );
// }

// export default ItemsBox;
