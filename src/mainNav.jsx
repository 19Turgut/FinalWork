// MainNav.jsx

import React, { useState } from 'react';
import "./mainNav.css";
import logo from "./logo.png";

function MainNav({ filter, setFilter }) {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showAboutInfo, setShowAboutInfo] = useState(false);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleContactClick = () => {
    setShowContactInfo(!showContactInfo);
    setShowAboutInfo(false); 
  };

  const handleAboutClick = () => {
    setShowAboutInfo(!showAboutInfo);
    setShowContactInfo(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className="img-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav">
          <select className='select' value={filter} onChange={handleFilterChange}>
            <option value="all">Bütün kitablar</option>
            <option value="discounted">Endirimlər</option>
            <option value="bestsellers">Ən Çox Satılanlar</option>
            <option value="newarrivals">Yeni Gələnlər</option>
            <option value="recommended">Təklif olunanlar</option>
            <option value="popular">Məşhur Kitaplar</option>
          </select>
          <h3 onClick={handleContactClick}>Bizimlə əlaqə</h3>
          <h3 onClick={handleAboutClick}>Haqqımızda</h3>
        </div>
      </div>
      {showContactInfo && (
        <div className="contact-info">
          <h2>TB BOOKS</h2>
          <p>Əlaqə vasitələrimiz:</p>
          <ul>
            <li>Telefon: 050-694-1206</li>
            <li>Email: tbbooks@gmail.com</li>
            <li>Adres: Naxçıvan MR , Məmməd Araz,23</li>
          </ul>
        </div>
      )}
      {showAboutInfo && (
        <div className="about-info">
          <h2>TB BOOKS</h2>
          <p>Biz kimik:</p>
          <p>TB BOOKS kitabsevərlərə mühəndisliyə aid olan  sevimli kitablarını təklif etməyə çalışan e-ticarət platformasıdır.</p>
          <p>Məqsədimiz kitabsevərlərin kitab oxumaq vərdişini təşviq etmək və ehtiyaclarını ödəməkdir.</p>
        </div>
      )}
    </div>
  );
}

export default MainNav;
