import React, { useState } from 'react';
import './App.css';
import Header from './header';
import MainNav from './mainNav';
import SplideSlider from './SplideSlider';
import Books from './books';
import Footer from './footer';

function App() {
  const images = [
    "https://media.istockphoto.com/id/949118068/photo/books.jpg?s=1024x1024&w=is&k=20&c=CDrLRc8X_JrFr-uDbNKrOKrmfIV_M2Af7z1Hb3cYEvY=",
    "https://media.istockphoto.com/id/454144317/photo/books.jpg?s=2048x2048&w=is&k=20&c=SrQRTjCjS3hvOPthH06jXfi9x1_N5nA4BrgV7sVTiFo=",
    "https://media.istockphoto.com/id/512277759/photo/old-and-new-books-4.jpg?s=2048x2048&w=is&k=20&c=zTF1_SAFpZ5AJAWwNfK_fOfTiPeoWKdjzfaKe5UiQs0=",
    "https://media.istockphoto.com/id/688111072/photo/stack.jpg?s=2048x2048&w=is&k=20&c=AkxJ4Vfhy3ZbjpA5BneqhzIzkHZQ3wCOzUDtfj8evbY=",
    "https://media.istockphoto.com/id/171554027/photo/world-of-books.jpg?s=2048x2048&w=is&k=20&c=K6ZGR-gKc2ocgzCCzaJ90Dx-KpuobxuDbkltuMR3Kak=",
    "https://media.istockphoto.com/id/698733848/tr/foto%C4%9Fraf/kitaplar.jpg?s=2048x2048&w=is&k=20&c=G04gRBY_noLi2iol045NfyfZIJU54Ahvsw1aBn-tRKg="
  ];

  const [basket, setBasket] = useState([]);
  const [filter, setFilter] = useState('all');

  const addToBasket = (book) => {
    setBasket([...basket, book]);
  };

  const removeFromBasket = (index) => {
    const newBasket = basket.filter((_, i) => i !== index);
    setBasket(newBasket);
  };

  return (
    <div className="container">
      <Header basket={basket} removeFromBasket={removeFromBasket} />
      <MainNav filter={filter} setFilter={setFilter} />
      <SplideSlider images={images} />
      <Books addToBasket={addToBasket} filter={filter} />
      <Footer/>
    </div>
  );
}

export default App;
