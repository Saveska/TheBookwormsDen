import React, { useState, useEffect } from "react";
import ordersData from "../data/ordersData";
import usersData from "../data/usersData";
import wishlistsData from "../data/wishlistsData";
import {
  EditArticleModal,
  NewArticleModal,
  DeleteArticleModal,
  EditOrderModal,
} from "./EntityManagementModals";

export function ArticleIntro() {
  return (
    <div id="howdy-content">
      <h1 className="mb-4 text-xl leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
        Howdy, admin
      </h1>
      <p className="mb-5 font-normal text-gray-500">
        The following actions are available for the{" "}
        <span className="font-semibold">Article</span> entity:
      </p>
      <ul className="text-gray-500 list-disc list-inside">
        <li>You can create new Articles which users can purchase</li>
        <li>
          You can edit an Article's title, author, price and description
          (changes will be propagated to existing{" "}
          <span className="font-semibold">Wishlists</span> and{" "}
          <span className="font-semibold">Orders</span> which contain that
          Article)
        </li>
        <li>
          You can delete Articles (which will remove them from all containing{" "}
          <span className="font-semibold">Orders</span> and{" "}
          <span className="font-semibold">Wishlists</span>)
        </li>
      </ul>
    </div>
  );
}

export function ArticleTable() {
  const [booksData, setBooksData] = useState([]);
  useEffect(() => {
    const storedBooksData = JSON.parse(localStorage.getItem("books")) || [];
    setBooksData(storedBooksData);
  }, []);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const handleAddBook = (newBook) => {
    const updatedBooksData = [...booksData, newBook];
    setBooksData(updatedBooksData);
    localStorage.setItem("books", JSON.stringify(updatedBooksData));
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const handleEditClick = (book) => {
    setSelectedBook(book);
    setIsEditModalOpen(true);
  };
  const handleEditBook = (updatedBook) => {
    const updatedBooksData = booksData.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooksData(updatedBooksData);
    localStorage.setItem("books", JSON.stringify(updatedBooksData));
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteClick = (book) => {
    setSelectedBook(book);
    setIsDeleteModalOpen(true);
  };
  const handleDeleteBook = () => {
    const updatedBooksData = booksData.filter(
      (book) => book.id !== selectedBook.id
    );
    setBooksData(updatedBooksData);
    localStorage.setItem("books", JSON.stringify(updatedBooksData));

    // update orders
    let updatedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    for (let order of updatedOrders) {
      const updatedArticles = order.articles.filter(
        (articleId) => articleId !== selectedBook.id
      );
      order.articles = updatedArticles;
    }
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // update wishlists
    let updatedWishlists = JSON.parse(localStorage.getItem("wishlists")) || [];
    for (let wishlist of updatedWishlists) {
      const updatedArticles = wishlist.articles.filter(
        (articleId) => articleId !== selectedBook.id
      );
      wishlist.articles = updatedArticles;
    }
    localStorage.setItem("wishlists", JSON.stringify(updatedWishlists));

    setSelectedBook(null);
  };

  return (
    <div className="relative">
      <div className="flex flex-row justify-end">
        <button
          onClick={() => setIsCreateModalOpen(true)}
          href="#"
          type="button"
          className="mb-10 inline-flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5"
        >
          <svg
            className="w-5 h-5 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m-7 7V5"
            />
          </svg>
          New article
        </button>
        <NewArticleModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onAddBook={handleAddBook}
        />
      </div>
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {booksData.map((book) => {
            return (
              <tr className="odd:bg-white even:bg-gray-50" key={book.id}>
                <th
                  scope="row"
                  className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap"
                >
                  {book.id}
                </th>
                <td className="px-6 py-4">{book.title}</td>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.category}</td>
                <td className="px-6 py-4">${book.price}</td>
                <td className="px-6 py-4">
                  {book.description.toString().substring(0, 20)}...
                </td>
                <td className="flex items-center px-6 py-4">
                  <a
                    onClick={() => handleEditClick(book)}
                    href="#"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    onClick={() => handleDeleteClick(book)}
                    href="#"
                    className="font-semibold text-red-600 hover:underline ms-3"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditArticleModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        existingArticle={selectedBook}
        onEditBook={handleEditBook}
      />
      <DeleteArticleModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDeleteBook}
      />
    </div>
  );
}

export function OrderIntro() {
  return (
    <div id="howdy-content">
      <h1 className="mb-4 text-xl leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
        Howdy, admin
      </h1>
      <p className="mb-5 font-normal text-gray-500">
        The following actions are available for the{" "}
        <span className="font-semibold">Order</span> entity:
      </p>
      <ul className="text-gray-500 list-disc list-inside">
        <li>You can edit the status of the Order</li>
      </ul>
    </div>
  );
}

export function OrderTable() {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    const storedOrderData = JSON.parse(localStorage.getItem("orders")) || [];
    setOrderData(storedOrderData);
  }, []);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const handleEditClick = (order) => {
    setSelectedOrder(order);
    setIsEditModalOpen(true);
  };
  const handleEditOrder = (updatedOrder) => {
    const updatedOrdersData = ordersData.map((order) =>
      order.id === updatedOrder.id ? updatedOrder : order
    );
    setOrderData(updatedOrdersData);
    localStorage.setItem("orders", JSON.stringify(updatedOrdersData));
  };

  return (
    <div className="relative">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              User ID
            </th>
            <th scope="col" className="px-6 py-3">
              Shipping address
            </th>
            <th scope="col" className="px-6 py-3">
              Articles
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order) => {
            return (
              <tr className="odd:bg-white even:bg-gray-50" key={order.id}>
                <th
                  scope="row"
                  className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap"
                >
                  {order.id}
                </th>
                <td className="px-6 py-4">{order.userId}</td>
                <td className="px-6 py-4">{order.shippingAddress}</td>
                <td className="px-6 py-4">
                  {order.articles.map((article, idx) =>
                    idx === order.articles.length - 1
                      ? article.toString()
                      : article.toString() + ", "
                  )}
                </td>
                <td className="px-6 py-4">{order.status}</td>
                <td className="flex items-center px-6 py-4">
                  <a
                    onClick={() => handleEditClick(order)}
                    href="#"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditOrderModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        existingOrder={selectedOrder}
        onEditOrder={handleEditOrder}
      />
    </div>
  );
}

export function UserIntro() {
  return (
    <div id="howdy-content">
      <h1 className="mb-4 text-xl leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
        Howdy, admin
      </h1>
      <p className="mb-5 font-normal text-gray-500">
        No actions available here
      </p>
    </div>
  );
}

export function UserTable() {
  return (
    <div className="relative">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              First name
            </th>
            <th scope="col" className="px-6 py-3">
              Last name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Phone number
            </th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => {
            return (
              <tr className="odd:bg-white even:bg-gray-50" key={user.id}>
                <th
                  scope="row"
                  className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap"
                >
                  {user.id}
                </th>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.firstName}</td>
                <td className="px-6 py-4">{user.lastName}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4">{user.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function WishlistIntro() {
  return (
    <div id="howdy-content">
      <h1 className="mb-4 text-xl leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
        Howdy, admin
      </h1>
      <p className="mb-5 font-normal text-gray-500">
        No actions available here
      </p>
    </div>
  );
}

export function WishlistTable() {
  const [wishlistData, setWishlistData] = useState([]);
  useEffect(() => {
    const storedWishlistData =
      JSON.parse(localStorage.getItem("wishlists")) || [];
    setWishlistData(storedWishlistData);
  }, []);
  return (
    <div className="relative">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              User ID
            </th>
            <th scope="col" className="px-6 py-3">
              Articles
            </th>
          </tr>
        </thead>
        <tbody>
          {wishlistData.map((wishlist) => {
            return (
              <tr
                className="odd:bg-white even:bg-gray-50"
                key={wishlist.userId}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap"
                >
                  {wishlist.userId}
                </th>
                <td className="px-6 py-4">
                  {wishlist.articles.map((article, idx) =>
                    idx === wishlist.articles.length - 1
                      ? article.toString()
                      : article.toString() + ", "
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
