import { useEffect, useState } from "react";
import BookCard from "../books/BookCard";
import { useGetBooksQuery } from "../../redux/features/cart/booksApi";

function TopSellers() {
  const [categories, setcategories] = useState<string[]>([]);
  const { data = [], error, isLoading } = useGetBooksQuery();

  useEffect(() => {
    const categories = data.map((book) => book.category);
    const uniqueCategories = [...new Set(categories)];
    setcategories(uniqueCategories);
  }, [data]);

  if (error) {
    return <div>error</div>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {data.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default TopSellers;
