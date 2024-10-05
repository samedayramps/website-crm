import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenRampRequest: () => void;
}

export default function Header({ onOpenRampRequest }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#3099e5] text-white py-4 w-full">
      <div className="flex justify-between items-center px-4">
        <Link href="/" className="flex items-center mr-6"> {/* Increased margin-right for spacing */}
          <Image src="/logo.svg" alt="Same Day Ramps Logo" width={150} height={150} />
        </Link>
        <button className="md:hidden z-50" onClick={toggleMenu}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
        <nav className={`fixed inset-0 bg-[#3099e5] md:bg-transparent p-4 md:p-0 z-40 transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:flex`}>
          <div className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto space-y-4 md:space-y-0 md:space-x-4"> {/* Further reduced space-x for links */}
            <Link href="/wheelchair-ramp-rentals" className="block md:inline-block py-2 md:py-0 px-1 text-4xl md:text-base hover:underline">Rentals</Link>
            <Link href="/service-areas" className="block md:inline-block py-2 md:py-0 px-1 text-4xl md:text-base hover:underline">Service Areas</Link>
            <Link href="/helpful-information" className="block md:inline-block py-2 md:py-0 px-1 text-4xl md:text-base hover:underline">Helpful Info</Link>
            <Link href="/about-us" className="block md:inline-block py-2 md:py-0 px-1 text-4xl md:text-base hover:underline">About Us</Link>
            <Link href="/contact-us" className="block md:inline-block py-2 md:py-0 px-1 text-4xl md:text-base hover:underline">Contact</Link>
          </div>
        </nav>
        <Button onClick={onOpenRampRequest} className="btn-primary hidden md:inline-flex ml-6"> {/* Increased margin-left for spacing */}
          Get a Free Quote
        </Button>
      </div>
    </header>
  );
}