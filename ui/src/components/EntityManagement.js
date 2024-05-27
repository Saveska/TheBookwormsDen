import React from "react";
import booksData from "../data/booksData";

export function ArticleIntro() {
  return (
    <div id="howdy-content">
      <h1 className="mb-4 text-2xl leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
        Howdy, admin
      </h1>
      <p className="font-normal text-gray-500 mb-5">
        The following actions are available for the{" "}
        <span className="font-semibold">Article</span> entity:
      </p>
      <ul className="list-disc list-inside">
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
  return (
    <div className="relative">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
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
              <tr className="bg-white" key={book.id}>
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
                    href="#"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
                  <a
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
    </div>
  );
}
