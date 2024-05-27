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
        <span className="font-medium">Article</span> entity:
      </p>
      <ul className="list-disc list-inside">
        <li>You can create new Articles which users can purchase</li>
        <li>
          You can edit an Article's title, author, price and description
          (changes will be propagated to existing{" "}
          <span className="font-medium">Wishlists</span> and{" "}
          <span className="font-medium">Orders</span> which contain that
          Article)
        </li>
        <li>
          You can delete Articles (which will remove them from all containing{" "}
          <span className="font-medium">Orders</span> and{" "}
          <span className="font-medium">Wishlists</span>)
        </li>
      </ul>
    </div>
  );
}

export function ArticleTable() {
  return (
    <div className="relative mb-12">
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
          </tr>
        </thead>
        <tbody>
          {booksData.map((book) => {
            return (
              <tr className="bg-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {book.id}
                </th>
                <td className="px-6 py-4">{book.title}</td>
                <td className="px-6 py-4">{book.author}</td>
                <td className="px-6 py-4">{book.category}</td>
                <td className="px-6 py-4">${book.price}</td>
                <td className="px-6 py-4">{book.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
