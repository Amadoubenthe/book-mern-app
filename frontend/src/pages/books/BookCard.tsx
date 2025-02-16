import { useDispatch } from "react-redux";
import { getImgUrl } from "../../utils/getImgUrl";
import { Book } from "../../models/book.model";
import { addCart } from "../../redux/features/cart/cartSlice";
import { useGetBookByIdQuery } from "../../redux/features/cart/booksApi";

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  const {
    data = [],
    error,
    isLoading,
  } = useGetBookByIdQuery("67b1d2eca955d5a0751ac239");

  console.log("data 1 67b1d2eca955d5a0751ac239 : ", data);
  console.log("error 1: ", error);
  console.log("isLoading 1: ", isLoading);

  const dispatch = useDispatch();

  const handleAddToCart = (cart: Book) => {
    dispatch(addCart(cart));
  };

  return (
    <div className="h-56 rounded-2xl shadow flex gap-1">
      <img className="" src={`${getImgUrl(book.coverImage)}`} alt="Tata" />
      <div className="flex flex-col justify-between pl-1">
        <h2 className="text-lg md:text-md font-bold">{book.title}</h2>
        <p className="text-gray-600 ">
          {book?.description.length > 80
            ? `${book.description.slice(0, 80)}...`
            : book?.description}
        </p>
        <div className="text-gray-500 text-xs">
          <span className="text-gray-600 font-extrabold">Price:</span>
          <span className="ml-4">{book.oldPrice}</span>
        </div>
        <button
          type="button"
          onClick={() => handleAddToCart(book)}
          className="btn-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default BookCard;
