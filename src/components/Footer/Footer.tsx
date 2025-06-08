const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-5">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-bold mb-2">About Us</h3>
        <p className="text-sm mb-4">
          We are committed to providing the best products and services to our
          customers.
        </p>
        <div className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
