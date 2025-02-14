import { MouseEventHandler, ReactElement, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// Creates a custom type (interface) that we can use as a regular type.
interface IBook {
  audience: string;
  author: string;
  color: string;
  id: number;
  pages: number;
  plot: string;
  publisher: string;
  title: string;
  year: number;
}

export function StartPage(): ReactElement {
  const [books, setBooks] = useState<IBook[]>([]); // With TS typing
  const navigate = useNavigate();

  const handleOnClick: MouseEventHandler<HTMLElement> = (e) => {
    const target = e.target as HTMLElement; // Type casting to HTMLElement
    if (target.tagName !== 'BUTTON') return;

    // Programmic navigation, use the useNavigate hook. There are many use case for programmic navigation.
    navigate(`/products/${target.id}`);
  };

  const fetchBooks = async () => {
    const response = await fetch(
      'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books'
    );

    const booksData = await response.json();
    return booksData;
  };

  // First parameter is the callback function that is invoked, and the second is the dependency array. If it's an empty array, the effect will only run on the FIRST render.
  useEffect(() => {
    fetchBooks().then((booksData) => setBooks(booksData));
    console.log('useEffect run');
  }, []);

  return (
    <main className="start-page" onClick={handleOnClick}>
      <h1>Start Page</h1>
      <button id="1">Go to product with id: 1</button>
      <button id="2">Go to product with id: 2</button>
      <button id="3">Go to product with id: 3</button>
      <button id="4">Go to product with id: 4</button>

      {/* If you can, use Links or NavLinks instead. It's better for browser accessibility and other stuff like semantics. */}
      {/* <NavLink to="/products/4">
        <button id="4">Go to product with id: 4</button>
      </NavLink> */}

      <hr />
      <h2>Books</h2>

      {/* Short circuit expression */}
      {books.length === 0 && <section className="books">No Books...</section>}

      {/* Usually I would have create a component called Book, and let the map function return a Book
      component instead and pass down props. */}
      {books.length > 0 && (
        <section className="books">
          {books.map((book) => (
            <article className="book" key={book.id}>
              <p>{book.title}</p>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
