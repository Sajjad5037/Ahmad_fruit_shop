import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side */}
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Royal Dry Fruits. All rights reserved.
        </p>

        {/* Right side - Social links + WhatsApp */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=61580322822684"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300"
          >
            Twitter
          </a>

          {/* Chat with us on WhatsApp */}
          <a
            href="https://wa.me/923004112884"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-semibold hover:text-green-500 space-x-2"
          >
            <span>
              Need help? <strong>Chat with us</strong>
            </span>
            <svg
              className="w-8 h-8"
              fill="#25D366"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 0 5.373 0 12c0 2.12.554 4.1 1.52 5.84L0 24l6.24-1.64A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12 0-3.19-1.25-6.19-3.48-8.52zM12 21.75a9.72 9.72 0 01-5.2-1.52l-.37-.22-3.7.97.99-3.63-.24-.37A9.72 9.72 0 012.25 12 9.75 9.75 0 1112 21.75zm5.25-7.5c-.23-.12-1.36-.67-1.57-.74-.21-.07-.37-.12-.53.12-.16.23-.63.74-.77.9-.14.16-.28.18-.51.06-.23-.12-.97-.36-1.85-1.14-.68-.61-1.14-1.36-1.28-1.59-.14-.23-.015-.35.1-.46.1-.1.23-.28.34-.42.11-.14.15-.23.23-.38.08-.14.04-.26-.02-.38-.07-.12-.53-1.28-.73-1.76-.19-.46-.38-.4-.53-.41l-.45-.01c-.15 0-.38.06-.58.28-.2.21-.76.74-.76 1.81 0 1.07.78 2.11.89 2.26.11.16 1.55 2.36 3.75 3.31 2.2.96 2.2.64 2.6.6.4-.04 1.36-.55 1.55-1.08.19-.53.19-.99.13-1.08-.06-.09-.21-.15-.44-.27z"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
