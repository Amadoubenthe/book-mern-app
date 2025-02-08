import { useEffect, useState } from "react";
import booksData from "../../../public/books.json";
import book1 from "../../assets/books/book-1.png";

const categories = booksData.map((book) => book.category);
const uniqueCategories = [...new Set(categories)];

function TopSellers() {
  const [books, setBooks] = useState([]);
  console.log(uniqueCategories);
  console.log("books: ", books);

  useEffect(() => {
    fetch("books.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="py-10">
      <h1>Top Sellers</h1>
      <div className="mb-8 flex items-center">
        <select
          name="category"
          id="category"
          className="border border-gray-300 rounded-md p-2"
        >
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {/* Carsd container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="h-52 rounded-2xl shadow-2xl overflow-hidden flex gap-4">
          <img className="" src={book1} alt="Tata" />
          <div className="pt-5">
            <h2 className="text-lg font-bold mb-2">Can coffee make</h2>
            <p className="font-light text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia
            </p>
            <div className="text-gray-500 text-xs my-4">
              <span className="text-gray-600">Price:</span>
              <span className="ml-2">100 euro</span>
            </div>
            <button className="btn-primary">Add to cart</button>
          </div>
        </div>
        <div className=" h-52 rounded-2xl shadow-2xl overflow-hidden flex gap-4">
          <img className="" src={book1} alt="Tata" />
          <div className="pt-5">
            <h2 className="text-lg font-bold mb-2">Can coffee make</h2>
            <p className="font-light text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia
            </p>
            <div className="text-gray-500 text-xs my-4">
              <span className="text-gray-600">Price:</span>
              <span className="ml-2">100 euro</span>
            </div>
            <button className="btn-primary">Add to cart</button>
          </div>
        </div>
        <div className=" h-52 rounded-2xl shadow-2xl overflow-hidden flex gap-4">
          <img className="" src={book1} alt="Tata" />
          <div className="pt-5">
            <h2 className="text-lg font-bold mb-2">Can coffee make</h2>
            <p className="font-light text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia
            </p>
            <div className="text-gray-500 text-xs my-4">
              <span className="text-gray-600">Price:</span>
              <span className="ml-2">100 euro</span>
            </div>
            <button className="btn-primary">Add to cart</button>
          </div>
        </div>
        <div className=" h-52 rounded-2xl shadow-2xl overflow-hidden flex gap-4">
          <img className="" src={book1} alt="Tata" />
          <div className="pt-5">
            <h2 className="text-lg font-bold mb-2">Can coffee make</h2>
            <p className="font-light text-sm mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia
            </p>
            <div className="text-gray-500 text-xs my-4">
              <span className="text-gray-600">Price:</span>
              <span className="ml-2">100 euro</span>
            </div>
            <button className="btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSellers;
