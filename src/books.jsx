import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './books.css';

const Books = ({ addToBasket, filter }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://openlibrary.org/subjects/programming.json?limit=40');
        const booksWithPrices = response.data.works.map(book => ({
          ...book,
          price: (Math.random() * (50 - 10) + 10).toFixed(2)
        }));

        
        const discountedBooks = booksWithPrices
          .sort(() => 0.5 - Math.random())
          .slice(0, 20)
          .map(book => ({
            ...book,
            discountPrice: (book.price * 0.8).toFixed(2)
          }));

       
        const finalBooks = booksWithPrices.map(book => {
          const discountBook = discountedBooks.find(b => b.key === book.key);
          return discountBook ? discountBook : book;
        });

        
        const booksWithCovers = finalBooks.filter(book => book.cover_id);

        setBooks(booksWithCovers);
      } catch (error) {
        console.error('Error fetching data from Open Library API:', error);
      }
    };

    fetchBooks();
  }, []);

  const getFilteredBooks = () => {
    switch (filter) {
      case 'discounted':
        return books.filter(book => book.discountPrice);
      case 'bestsellers':
        return books.slice(0, 10);
      case 'newarrivals':
        return books.slice(10, 20);
      case 'recommended':
        return books.slice(20, 30);
      case 'popular':
        return books.slice(30, 40);
      default:
        return books;
    }
  };

  const getFilterTitle = () => {
    switch (filter) {
      case 'discounted':
        return 'Endirimlər';
      case 'bestsellers':
        return 'Ən Çox Satılanlar';
      case 'newarrivals':
        return 'Yeni Gələnlər';
      case 'recommended':
        return 'Təklif olunanlar';
      case 'popular':
        return 'Məşhur Kitablar';
      default:
        return 'Bütün  Kitablar';
    }
  };

  const filteredBooks = getFilteredBooks();

  return (
    <div>
      <h1>{getFilterTitle()}</h1>
      <ul className="book-list">
        {filteredBooks.map(book => (
          <li key={book.key} className="book-item">
            {book.cover_id ? (
              <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt={book.title} />
            ) : (
              <div className="placeholder">
                <div>Şəkil yoxdur</div>
                <div>{book.title}</div>
              </div>
            )}
            <div className="book-details">
              <h2>{book.title}</h2>
              <p className="book-price">
                {book.discountPrice ? (
                  <>
                    <span className="original-price">${book.price}</span>
                    <br />
                    <span className="discount-price">${book.discountPrice}</span>
                  </>
                ) : (
                  <span>${book.price}</span>
                )}
              </p>
              <button onClick={() => addToBasket(book)}>Səbətə əlavə et</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
