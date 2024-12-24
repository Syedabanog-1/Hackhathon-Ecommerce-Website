import Link from 'next/link';

function MobileMenu() {
  return (
    <div className="mobile-menu bg-white shadow-md p-4">
      <ul>
        <li>
          <Link href="/">
            <a className="block py-2 hover:bg-gray-100">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a className="block py-2 hover:bg-gray-100">Shop</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a className="block py-2 hover:bg-gray-100">Product</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="block py-2 hover:bg-gray-100">About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="block py-2 hover:bg-gray-100">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="block py-2 hover:bg-gray-100">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a className="block py-2 hover:bg-gray-100">Login/Register...</a>
          </Link>
        </li>
        </ul>
    </div>
  );
}

export default MobileMenu;
