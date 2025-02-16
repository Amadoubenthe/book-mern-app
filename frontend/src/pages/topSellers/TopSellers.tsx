import { useEffect, useState } from "react";
import booksData from "../../../public/books.json";
import BookCard from "../books/BookCard";
import { Book } from "../../models/book.model";
import { useGetBooksQuery } from "../../redux/features/cart/booksApi";

function TopSellers() {
  const [books, setBooks] = useState<Book[]>([]);
  const [categories, setcategories] = useState<string[]>([]);

  // const { data } = useGetBooksQuery();

  const { data, error, isLoading } = useGetBooksQuery();

  console.log("data: ", data);
  console.log("error: ", error);
  console.log("isLoading: ", isLoading);

  useEffect(() => {
    fetch("books.json")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        const categories = booksData.map((book) => book.category);
        const uniqueCategories = [...new Set(categories)];
        setcategories(uniqueCategories);
      });
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
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default TopSellers;
