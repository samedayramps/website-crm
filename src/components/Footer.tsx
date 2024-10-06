import React from 'react'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Same Day Ramps</h2>
            <p>Making accessibility easy in DFW.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <Phone className="mr-2" />
              <span>(940) 373-5713</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" />
              <span>info@samedayramps.com</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Same Day Ramps. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
            <Link href="/accessibility" className="hover:underline">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}