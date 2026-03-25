'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaShoppingCart, FaStore } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/cart', label: 'Cart', icon: <FaShoppingCart className="inline ml-1" /> },
  { href: '/checkout', label: 'Checkout' },
  { href: '/contact', label: 'Contact Us' },
];

const Header = () => {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `text-white transition-all duration-300 no-underline px-3 py-2 rounded-md ${pathname === href ? 'bg-blue-700 font-semibold' : 'hover:bg-blue-600 hover:text-yellow-300'}`;

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 shadow-md sticky top-0 z-20">
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/" className="inline-flex items-center text-white text-2xl font-extrabold tracking-tight space-x-2">
          <FaStore size={30} className="text-white" />
          <span className="sr-only">My E-commerce Site</span>
        </Link>

        <nav>
          <div className="flex items-center" style={{ gap: '2rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkClass(link.href)} px-8 py-3 flex items-center`}
              >
                <span>{link.label}</span>
                {link.icon && <span className="ml-2">{link.icon}</span>}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;