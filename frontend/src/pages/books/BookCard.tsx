import { useDispatch } from "react-redux";
import { getImgUrl } from "../../utils/getImgUrl";
import { Book } from "../../models/book.model";
import { addCart } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router";

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = (cart: Book) => {
    dispatch(addCart(cart));
  };

  return (
    <div className="h-56 rounded-2xl shadow flex gap-1">
      <Link to={`books/${book._id}`}>
        <img
          className="max-w-52 h-[100%]"
          src={`${getImgUrl(book.coverImage)}`}
          alt={book.title}
        />
      </Link>
      <div className="flex flex-col justify-between p-1">
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
        <div>
          <button
            type="button"
            onClick={() => handleAddToCart(book)}
            className="btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
