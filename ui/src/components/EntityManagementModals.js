import React, { useState, useEffect } from "react";

export const NewArticleModal = ({ isOpen, onClose, onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const booksData = JSON.parse(localStorage.getItem("books")) || [];

    const newBook = {
      id: booksData.length + 1,
      title,
      author,
      category,
      price: parseFloat(price),
      description,
    };

    booksData.push(newBook);
    localStorage.setItem("books", JSON.stringify(booksData));

    // update state in ArticleTable
    onAddBook(newBook);

    setTitle("");
    setAuthor("");
    setCategory("");
    setPrice("");
    setDescription("");

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 close-modal"
      onClick={(e) => {
        onClose();
        e.stopPropagation();
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative z-50 w-full max-w-2xl mx-auto bg-white shadow-lg p-10"
      >
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-xl text-gray-900">Add a new Article</h2>
          </div>
          <button
            className="text-gray-400 transition hover:text-gray-600"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form className="mx-auto" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_title"
              id="floating_title"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label
              htmlFor="floating_title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_author"
              id="floating_author"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            <label
              htmlFor="floating_author"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Author
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_category"
              id="floating_category"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <label
              htmlFor="floating_category"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Category
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_price"
              id="floating_price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <label
              htmlFor="floating_price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm text-gray-500"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="outline-none block p-2.5 w-full text-sm text-gray-500 bg-gray-50 border border-gray-300 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Set a description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export const EditArticleModal = ({
  isOpen,
  onClose,
  existingArticle,
  onEditBook,
}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (existingArticle) {
      setTitle(existingArticle.title);
      setAuthor(existingArticle.author);
      setCategory(existingArticle.category);
      setPrice(existingArticle.price);
      setDescription(existingArticle.description);
    }
  }, [existingArticle]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      ...existingArticle,
      title,
      author,
      category,
      price: parseFloat(price),
      description,
    };

    // update state in ArticleTable
    onEditBook(updatedBook);

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 close-modal"
      onClick={(e) => {
        onClose();
        e.stopPropagation();
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative z-50 w-full max-w-2xl mx-auto bg-white shadow-lg p-10"
      >
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-xl text-gray-900">Add a new Article</h2>
          </div>
          <button
            className="text-gray-400 transition hover:text-gray-600"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form className="mx-auto" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_title"
              id="floating_title"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label
              htmlFor="floating_title"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_author"
              id="floating_author"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
            <label
              htmlFor="floating_author"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Author
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_category"
              id="floating_category"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <label
              htmlFor="floating_category"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Category
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_price"
              id="floating_price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <label
              htmlFor="floating_price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-pink-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm text-gray-500"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="outline-none block p-2.5 w-full text-sm text-gray-500 bg-gray-50 border border-gray-300 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Set a description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export const DeleteArticleModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center w-screen h-screen bg-black bg-opacity-50 close-modal"
      onClick={(e) => {
        onClose();
        e.stopPropagation();
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative z-50 w-full max-w-md mx-auto bg-white shadow-lg p-10"
      >
        <h2 className="text-xl text-gray-900 mb-6">Confirm Deletion</h2>
        <p className="text-gray-700 mb-6">
          Are you sure you want to delete this article?
        </p>
        <div className="flex justify-end">
          <button
            className="text-gray-500 hover:text-gray-700 mr-4"
            onClick={() => onClose()}
          >
            No
          </button>
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => {
              onDelete();
              onClose();
            }}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};
