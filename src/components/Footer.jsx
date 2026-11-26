import { Link } from 'react-router-dom';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';
import { SERVICES } from '../data/services';
import facebookIcon from '../assets/Icon/facebook.png';
import instagramIcon from '../assets/Icon/instagram.png';
import linkedinIcon from '../assets/Icon/linkedin.png';
import threadsIcon from '../assets/Icon/threads.png';
import twitterIcon from '../assets/Icon/twitter.png';
import youtubeIcon from '../assets/Icon/youtube.png';

const CURRENT_YEAR = new Date().getFullYear();

const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: linkedinIcon },
  { name: 'Instagram', href: 'https://www.instagram.com', icon: instagramIcon },
  { name: 'Facebook', href: 'https://www.facebook.com', icon: facebookIcon },
  { name: 'X (Twitter)', href: 'https://x.com', icon: twitterIcon, whiteBg: true },
  { name: 'Threads', href: 'https://www.threads.net', icon: threadsIcon },
  { name: 'YouTube', href: 'https://www.youtube.com', icon: youtubeIcon },
];

export default function Footer() {

  return (
    <footer className="bg-[#101828] text-slate-300 border-t border-slate-800">
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" aria-label="Vijayan Tech">
              <Logo dark />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Engineering intelligent digital platforms, resilient cloud infrastructure, and
              enterprise software for organizations shaping what comes next.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className={`inline-flex items-center justify-center transition-transform duration-200 hover:scale-110 ${
                    social.whiteBg ? 'w-6 h-6 rounded-md bg-white p-1' : ''
                  }`}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className={social.whiteBg ? 'w-full h-full object-contain' : 'w-6 h-6 object-contain'}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-slate-400 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (matching Contact Page) */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="font-display text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-white">Head Office</p>
                  <a
                    href="https://maps.app.goo.gl/mqqKxuRpvpvsphe49"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors block mt-0.5 leading-relaxed"
                  >
                    3/190, Vaipadi Road, Vijayamanagalam, Erode – 638056, Tamil Nadu, India.
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-white">Development Center (TBI @ KEC)</p>
                  <a
                    href="https://maps.app.goo.gl/ob5Zkvrofp1n29Wj7"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors block mt-0.5 leading-relaxed"
                  >
                    Kongu Engineering College Campus, Perundurai – 638 060, Erode, Tamil Nadu, India.
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a
                  href="mailto:sales@vijayantech.com"
                  className="hover:text-white transition-colors"
                >
                  sales@vijayantech.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <a href="tel:+919840962424" className="hover:text-white transition-colors">
                    +91 98409 62424
                  </a>
                  <a href="tel:+919047562424" className="hover:text-white transition-colors">
                    +91 90475 62424
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {CURRENT_YEAR} Vijayan Tech Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
