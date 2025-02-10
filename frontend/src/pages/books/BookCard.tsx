import { useDispatch } from "react-redux";
import { addCart, CartState } from "../../redux/slice/cartSlice";
import { getImgUrl } from "../../utils/getImgUrl";

interface BookCardProps {
  book: CartState;
}

function BookCard({ book }: BookCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = (cart: CartState) => {
    dispatch(addCart(cart));
  };

  return (
    <div className="h-52 rounded-2xl shadow overflow-hidden flex gap-4">
      <img className="" src={`${getImgUrl(book.coverImage)}`} alt="Tata" />
      <div className="pt-5">
        <h2 className="text-lg font-bold mb-2">{book.title}</h2>
        <p className="font-light text-sm mb-2">{book.description}</p>
        <div className="text-gray-500 text-xs my-4">
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
