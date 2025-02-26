import { useParams } from "react-router";
import { getImgUrl } from "../../utils/getImgUrl";
import { useGetBookByIdQuery } from "../../redux/features/cart/booksApi";

export default function SingleBook() {
  const { id } = useParams();
  const { data: book = {}, isLoading, isError } = useGetBookByIdQuery(id!);

  if (isError) {
    return (
      <div className="text-red-500">
        Erreur lors de la récupération du livre.
      </div>
    );
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!book) {
    return (
      <div className="text-gray-500">
        Aucune donnée disponible pour ce livre.
      </div>
    );
  }

  return (
    <div className="">
      <div className="w-[32rem] m-auto p-2 shadow-lg rounded-lg">
        <img src={`${getImgUrl(book.coverImage)}`} alt={book.title} />
        <div>
          <div className="mt-2">
            <span className="font-semibold">Autor: </span>
            <span>{book.category}</span>
          </div>
          <div className="mt-2">
            <span className="font-semibold">Published: </span>
            <span>{book.category}</span>
          </div>
          <div className="mt-2">
            <span className="font-semibold">Categorie: </span>
            <span>{book.category}</span>
          </div>
          <div className="mt-2">
            <span className="font-semibold">Description: </span>
            <span>{book.description}</span>
          </div>
        </div>
        <button type="button" className="btn-primary mt-2">
          Add to cart
        </button>
      </div>
    </div>
  );
}
