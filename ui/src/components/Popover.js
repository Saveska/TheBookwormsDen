import padlock from "../images/padlock.png";
import cart from "../images/cart.png";
import wishlist from "../images/wishlist.png";
import React, { useState, useEffect } from "react";



export function NoAuthPopover({ entityName, navigate }) {
	return (
		<div
			role='tooltip'
			className='inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm popover-content'
		>
			<div className='px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg'>
				<h3 className='text-gray-900'>{`You can't use the ${entityName} yet`}</h3>
			</div>
			<div className='flex flex-col items-center gap-2 p-5'>
				<p>
					This feature requires you to{" "}
					<button
						className='text-pink-400 hover:underline'
						onClick={() => navigate("/auth")}
					>
						login
					</button>{" "}
					first.
				</p>
				<div>
					<img alt='padlock' width='80' height='106' src={padlock}></img>
				</div>
			</div>
		</div>
	);
}

export function EmptyPopover({ entityName }) {
	return (
		<div
			role='tooltip'
			className='inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm popover-content'
		>
			<div className='px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg'>
				<h3 className='text-gray-900'>{`Your ${entityName} is empty`}</h3>
			</div>
			<div className='flex flex-col items-center gap-2 p-5'>
				<p>Add items from the menu below</p>
				<div>
					<img
						alt={entityName}
						width='80'
						height='80'
						src={entityName === "cart" ? cart : wishlist}
					></img>
				</div>
			</div>
		</div>
	);
}

export function CartPopover({ navigate, refreshCartItems }) {
  const [cartItems, setCartItems] = useState([]);
  const [len,setLen] = useState(0)

  
  useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCart);
      setLen(storedCart.length)
    }, []);

  const removeFromCart = (bookId) => {
      const updatedCart = cartItems.filter(book => book.id !== bookId);
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      refreshCartItems();
  };

  return (
      <div
          role='tooltip'
          className='inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm popover-content'
      >
          <div className='px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg'>
              <h3 className='text-gray-900'>{`Your have ${len} items in your cart`}</h3>
          </div>

          <div className='flex flex-col'>
              <ul className='font-medium text-gray-900 bg-white'>
                  {cartItems.map((book) => (
                      <li
                          className='w-full px-4 py-2 border-b border-gray-200'
                          key={book.id}
                      >
                          <div className='flex flex-row justify-between'>
                              <div>{book.title}</div>
                              <div>${book.price}</div>
                              <button
                                  className='text-red-500 hover:underline'
                                  onClick={() => removeFromCart(book.id)}
                              >
                                  Delete
                              </button>
                          </div>
                      </li>
                  ))}
              </ul>
              <div className='flex items-center justify-center my-5'>
                  <button
                      className='inline-flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5'
                      type='button'
                      onClick={() => navigate("/checkout")}
                  >
                      <svg
                          className='w-5 h-5 me-2'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                      >
                          <path
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='2'
                              d='M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z'
                          />
                      </svg>
                      Go to checkout
                  </button>
              </div>
          </div>
      </div>
  );
}


export function WishlistPopover({refreshWishlistItems} ) {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [len,setLen] = useState(0)
    const [flag,setFlag] = useState(false)
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) ;
        setWishlistItems(storedWishlist);
        setLen(wishlistItems.length)
       
    }, [flag]);

    const removeFromWishlist = (bookId) => {
        const updatedWishlist = wishlistItems.filter(book => book.id !== bookId);
        setWishlistItems(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        setFlag((prev)=>!prev)
        refreshWishlistItems();
    };

    return (
        <div
            role='tooltip'
            className='inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm popover-content'
        >
            <div className='px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg'>
                <h3 className='text-gray-900'>{`Your have ${len} items in your wishlist`}</h3>
            </div>

            <div className='flex flex-col'>
                <ul className='font-medium text-gray-900 bg-white'>
                    {wishlistItems.map((book) => (
                        <li
                            className='w-full px-4 py-2 border-b border-gray-200'
                            key={book.id}
                        >
                            <div className='flex flex-row justify-between'>
                                <div>{book.title}</div>
                                <div>${book.price}</div>
                                <button
                                    className='text-red-500 hover:underline'
                                    onClick={() => removeFromWishlist(book.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

