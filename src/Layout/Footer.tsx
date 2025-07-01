import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-website-color-layout text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-slate-800 font-bold text-sm">F</span>
              </div>
              <h2 className="text-xl font-bold">FALCON</h2>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Experience our new platform & Enjoy existing deals and offers on
              your day to day
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  House 864, Road 13, ASA Center, Uttara, Dhaka-1402
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">01729-149741</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">falcon@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-gray-300 text-sm mb-3">Follow us on</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Cancellation & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">HELP</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Payments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  My Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Download Section */}
          <div className="space-y-6">
            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Need Support?</h3>
              <div className="border border-gray-600 rounded-lg px-3 py-2 flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">10724-78144X</span>
              </div>
            </div>

            {/* Download App */}
            <div>
              <h3 className="text-white font-semibold mb-4">DOWNLOAD APP</h3>
              <div className="space-y-3">
                <a href="#" className="block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-10 w-auto"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-gray-300 text-sm">PAYMENTS ACCEPTED</span>
              <div className="flex gap-2">
                {/* Visa */}
                <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                {/* Mastercard */}
                <div className="w-10 h-6 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MC</span>
                </div>
                {/* American Express */}
                <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AE</span>
                </div>
                {/* Nagad */}
                <div className="w-10 h-6 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">N</span>
                </div>
                {/* bKash */}
                <div className="w-10 h-6 bg-pink-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">bK</span>
                </div>
              </div>
            </div>

            <div className="text-gray-400 text-sm">
              Falcon ©2025. Design by xyz
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
