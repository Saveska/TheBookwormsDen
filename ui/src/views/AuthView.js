import React, { useState } from "react";
import bookIllustration from "../images/book-illustration.jpg";
import Navbar from "../components/Navbar";
import { LoginForm, RegisterForm } from "../components/AuthForms";

const AuthView = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <Navbar dynamicStyles="sticky top-0 z-10" />
      <div className="flex flex-col md:flex-row items-center p-4 md:p-8">
        <div className="flex-1 w-full md:w-1/2 p-4">
          <div className="mb-10 text-center">
            {showRegister ? (
              <p>
                Already have an account?{" "}
                <button
                  className="text-pink-400"
                  onClick={() => setShowRegister(false)}
                >
                  Back to login
                </button>
              </p>
            ) : (
              <>
                <p>
                  Login to be able to buy books, add them to your wishlist and
                  much more.
                </p>
                <p>
                  Don't have an account?{" "}
                  <button
                    className="text-pink-400"
                    onClick={() => setShowRegister(true)}
                  >
                    Register now
                  </button>
                </p>
              </>
            )}
          </div>
          {showRegister ? <RegisterForm /> : <LoginForm />}
        </div>
        <div className="flex-1 w-full md:w-1/2 p-4">
          <img
            src={bookIllustration}
            alt="Flying"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthView;
