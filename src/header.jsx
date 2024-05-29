import React, { useState, useEffect } from 'react';
import './header.css';

const Header = ({ basket, removeFromBasket }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = basket.reduce((sum, book) => sum + parseFloat(book.price), 0);
      setTotalPrice(total.toFixed(2));
    };

    calculateTotalPrice();
  }, [basket]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='header'>
      <div className="leftHeader">
        <svg fill="#e70808" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-42.64 -42.64 559.09 559.09" xml:space="preserve" stroke="#e70808"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4 c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8 c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6 c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5 c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26 c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9 c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806 C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20 c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6 c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1 c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3 c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5 c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8 c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9 l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1 C420.456,377.706,420.456,388.206,410.256,398.806z"></path> <path d="M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2 c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11 S248.656,111.506,256.056,112.706z"></path> <path d="M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11 c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2 c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"></path> </g> </g> </g></svg>
        <p className="phone">050-694-1206</p>
        <svg className='Whatsapp' fill="#e50b0b" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 308.00 308.00" xml:space="preserve" stroke="#e50b0b"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>
        <svg className='inistagram' fill="#e60f0f" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" xml:space="preserve" stroke="#e60f0f"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_504_"> <path id="XMLID_505_" d="M38.52,0.012h222.978C282.682,0.012,300,17.336,300,38.52v222.978c0,21.178-17.318,38.49-38.502,38.49 H38.52c-21.184,0-38.52-17.313-38.52-38.49V38.52C0,17.336,17.336,0.012,38.52,0.012z M218.546,33.329 c-7.438,0-13.505,6.091-13.505,13.525v32.314c0,7.437,6.067,13.514,13.505,13.514h33.903c7.426,0,13.506-6.077,13.506-13.514 V46.854c0-7.434-6.08-13.525-13.506-13.525H218.546z M266.084,126.868h-26.396c2.503,8.175,3.86,16.796,3.86,25.759 c0,49.882-41.766,90.34-93.266,90.34c-51.487,0-93.254-40.458-93.254-90.34c0-8.963,1.37-17.584,3.861-25.759H33.35v126.732 c0,6.563,5.359,11.902,11.916,11.902h208.907c6.563,0,11.911-5.339,11.911-11.902V126.868z M150.283,90.978 c-33.26,0-60.24,26.128-60.24,58.388c0,32.227,26.98,58.375,60.24,58.375c33.278,0,60.259-26.148,60.259-58.375 C210.542,117.105,183.561,90.978,150.283,90.978z"></path> </g> </g></svg>
      </div>
      <div className="rightHeader">
        <svg className='basket' onClick={toggleModal} fill="#ff0a0a" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 496 496" xml:space="preserve" stroke="#ff0a0a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M88,284.272c-13.232,0-24,10.768-24,24v128c0,13.232,10.768,24,24,24s24-10.768,24-24v-8H96v8c0,4.416-3.584,8-8,8 s-8-3.584-8-8v-128c0-4.416,3.584-8,8-8s8,3.584,8,8v104h16v-104C112,295.04,101.232,284.272,88,284.272z"></path> <path d="M168,284.272c-13.232,0-24,10.768-24,24v128c0,13.232,10.768,24,24,24s24-10.768,24-24v-8h-16v8c0,4.416-3.584,8-8,8 s-8-3.584-8-8v-128c0-4.416,3.584-8,8-8s8,3.584,8,8v104h16v-104C192,295.04,181.232,284.272,168,284.272z"></path> <path d="M248,284.272c-13.232,0-24,10.768-24,24v128c0,13.232,10.768,24,24,24s24-10.768,24-24v-8h-16v8c0,4.416-3.584,8-8,8 c-4.416,0-8-3.584-8-8v-128c0-4.416,3.584-8,8-8s8,3.584,8,8v104h16v-104C272,295.04,261.232,284.272,248,284.272z"></path> <path d="M473.944,286.152L464,282.248v-13.976c17.648,0,32-14.352,32-32s-14.352-32-32-32H32c-17.648,0-32,14.352-32,32 s14.352,32,32,32v184c0,22.056,17.944,40,40,40h352c22.056,0,40-17.944,40-40v-96.28c17.856-1.432,32-16.256,32-34.48v-3.008 C496,304.112,487.344,291.416,473.944,286.152z M464,220.272c8.824,0,16,7.176,16,16c0,8.824-7.176,16-16,16h-76.304l-81.456-32 H464z M448,268.272v7.688l-19.576-7.688H448z M248,220.272c8.824,0,16,7.176,16,16c0,8.824-7.176,16-16,16 c-8.824,0-16-7.176-16-16C232,227.448,239.176,220.272,248,220.272z M32,252.272c-8.824,0-16-7.176-16-16c0-8.824,7.176-16,16-16 h188.448c-2.752,4.728-4.448,10.144-4.448,16s1.696,11.272,4.448,16H32z M448,452.272c0,13.232-10.768,24-24,24H72 c-13.232,0-24-10.768-24-24v-184h190.44l68.816,28.04c-2.056,3.568-3.256,7.656-3.256,11.96v128c0,13.232,10.768,24,24,24 s24-10.768,24-24V314.536l32,13.04v108.696c0,13.232,10.768,24,24,24s24-10.768,24-24v-8h-16v8c0,4.416-3.584,8-8,8 c-4.416,0-8-3.584-8-8V334.088l16,6.52v71.664h16v-65.144l16,6.52V452.272z M320,436.272v-128c0-2.224,0.968-4.264,2.52-5.744 l13.424,5.464c0,0.096,0.056,0.184,0.056,0.28v128c0,4.416-3.584,8-8,8C323.584,444.272,320,440.688,320,436.272z M480,321.512 c0,10.344-8.416,18.76-18.76,18.76c-2.44,0-4.824-0.472-7.08-1.384l-187.784-76.504c8.216-5.8,13.624-15.312,13.624-26.112 c0-3.432-0.688-6.68-1.688-9.784l189.792,74.56c7.224,2.84,11.896,9.696,11.896,17.456V321.512z"></path> <rect x="208" y="156.272" width="16" height="32"></rect> <polygon points="208,35.816 208,140.272 224,140.272 224,29.816 248,20.816 272,29.816 272,172.272 288,172.272 288,35.816 309.184,43.768 314.816,28.776 248,3.728 181.184,28.776 186.816,43.768 "></polygon> <rect x="96" y="172.272" width="16" height="16"></rect> <rect x="32" y="100.272" width="16" height="88"></rect> <polygon points="32,67.816 32,84.272 48,84.272 48,61.816 72,52.816 96,61.816 96,156.272 112,156.272 112,67.816 133.184,75.768 138.816,60.776 72,35.728 5.184,60.776 10.816,75.768 "></polygon> <rect x="448" y="156.272" width="16" height="32"></rect> <polygon points="384,83.816 384,188.272 400,188.272 400,77.816 424,68.816 448,77.816 448,140.272 464,140.272 464,83.816 485.184,91.768 490.816,76.776 424,51.728 357.184,76.776 362.816,91.768 "></polygon> <rect x="328" y="172.272" width="16" height="16"></rect> <rect x="328" y="108.272" width="16" height="48"></rect> <rect x="152" y="156.272" width="16" height="16"></rect> <rect x="152" y="92.272" width="16" height="48"></rect> </g> </g> </g> </g></svg>
     
      </div>
         {isModalOpen && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close-button' onClick={toggleModal}>&times;</span>
            {basket.length > 0 ? (
              <>
                <ul>
                  {basket.map((book, index) => (
                    <li key={index}>
                      <p>{book.title} - ${book.price}</p>
                      <button onClick={() => removeFromBasket(index)}>səbətdən çıxart</button>
                    </li>
                  ))}
                </ul>
                <div className='total-price'>
                  <h3>Ümumi məbləğ: ${totalPrice}</h3>
                </div>
              </>
            ) : (
              <p>Səbət boşdur</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;