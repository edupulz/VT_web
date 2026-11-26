import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';
import ActionButton from './ActionButton';
import { SERVICES } from '../data/services';
import { PRODUCTS } from '../data/products';
import { INDUSTRIES } from '../data/industries';
import { gsap, prefersReducedMotion } from '../utils/gsap';

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    dropdown: SERVICES.map((s) => ({
      label: s.title,
      to: `/services/${s.slug}`,
    })),
    viewAllLabel: 'All Services',
  },
  {
    label: 'Products',
    to: '/products',
    dropdown: PRODUCTS.map((p) => ({
      label: p.title,
      to: '/products',
    })),
    viewAllLabel: 'All Products',
  },
  {
    label: 'Industries',
    to: '/industries',
    dropdown: INDUSTRIES.map((ind) => ({
      label: ind.name,
      to: `/industries#${ind.id}`,
    })),
    viewAllLabel: 'All Industries',
  },
  { label: 'Portfolio', to: '/portfolio' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion() || !navRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -16,
        opacity: 0,
        duration: 0.65,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  const isItemActive = (to, routerIsActive) => {
    if (to.includes('#')) {
      return pathname === '/' && hash === `#${to.split('#')[1]}`;
    }
    return routerIsActive;
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#E4E7EC] ${
        scrolled ? 'shadow-[0_1px_12px_rgba(16,24,40,0.05)]' : ''
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12 h-[92px] flex items-center justify-between">
        <Link
          to="/"
          aria-label="Vijayan Tech Home"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-md"
        >
          <Logo />
        </Link>

        {/* Desktop Navigation + Contact Us grouped on the right */}
        <div className="hidden lg:flex items-center gap-10">
          <nav aria-label="Main navigation" className="flex items-center gap-8">
            {NAV_LINKS.map((item) => {
              const hasDropdown = Boolean(item.dropdown?.length);
              const isOpen = openDropdown === item.label;

              if (!hasDropdown) {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) => {
                      const active = isItemActive(item.to, isActive);
                      return `relative text-[18px] font-medium transition-colors duration-200 py-1 ${
                        active ? 'text-[#101828]' : 'text-[#667085] hover:text-[#101828]'
                      }`;
                    }}
                  >
                    {({ isActive }) => {
                      const active = isItemActive(item.to, isActive);
                      return (
                        <>
                          <span>{item.label}</span>
                          <span
                            className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#2563EB] rounded-full transition-transform duration-200 origin-left ${
                              active ? 'scale-x-100' : 'scale-x-0'
                            }`}
                          />
                        </>
                      );
                    }}
                  </NavLink>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setOpenDropdown(null)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={({ isActive }) => {
                      const active = isItemActive(item.to, isActive);
                      return `relative inline-flex items-center gap-1 text-[18px] font-medium transition-colors duration-200 py-2 ${
                        active || isOpen
                          ? 'text-[#101828]'
                          : 'text-[#667085] hover:text-[#101828]'
                      }`;
                    }}
                  >
                    {({ isActive }) => {
                      const active = isItemActive(item.to, isActive);
                      return (
                        <>
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-[#2563EB]' : ''
                            }`}
                            aria-hidden="true"
                          />
                          <span
                            className={`absolute bottom-1 left-0 right-0 h-[2px] bg-[#2563EB] rounded-full transition-transform duration-200 origin-left ${
                              active ? 'scale-x-100' : 'scale-x-0'
                            }`}
                          />
                        </>
                      );
                    }}
                  </NavLink>

                  {/* Dropdown Panel */}
                  <div
                    className={`absolute left-0 top-full pt-2 w-64 transition-all duration-200 ${
                      isOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white rounded-none border border-[#E4E7EC] shadow-[0_14px_34px_rgba(16,24,40,0.09)] py-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-sm font-medium text-[#475467] hover:text-[#2563EB] hover:bg-[#F7F9FC] transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                      {item.viewAllLabel && (
                        <div className="mt-1 pt-1 border-t border-[#E4E7EC]">
                          <Link
                            to={item.to}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#2563EB] hover:bg-[#EAF2FF]/60 transition-colors"
                          >
                            {item.viewAllLabel} →
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <ActionButton to="/contact" className="px-7 py-3 text-[17px]">
            Contact Us
          </ActionButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-none text-[#101828] hover:bg-[#F7F9FC] border border-transparent hover:border-[#E4E7EC] transition-colors"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-[#E4E7EC] px-5 pt-3 pb-6 max-h-[calc(100vh-92px)] overflow-y-auto">
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => {
              const hasDropdown = Boolean(item.dropdown?.length);
              const isExpanded = mobileExpanded === item.label;

              if (!hasDropdown) {
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) => {
                      const active = isItemActive(item.to, isActive);
                      return `px-3 py-2.5 rounded-none text-lg font-medium transition-colors ${
                        active
                          ? 'bg-[#EAF2FF] text-[#2563EB]'
                          : 'text-[#667085] hover:bg-[#F7F9FC] hover:text-[#101828]'
                      }`;
                    }}
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <div key={item.label} className="rounded-none">
                  <div className="flex items-center justify-between">
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) => {
                        const active = isItemActive(item.to, isActive);
                        return `flex-1 px-3 py-2.5 rounded-none text-lg font-medium transition-colors ${
                          active
                            ? 'bg-[#EAF2FF] text-[#2563EB]'
                            : 'text-[#667085] hover:bg-[#F7F9FC] hover:text-[#101828]'
                        }`;
                      }}
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileExpanded((prev) => (prev === item.label ? null : item.label))
                      }
                      aria-expanded={isExpanded}
                      aria-label={`Toggle ${item.label} submenu`}
                      className="p-2.5 rounded-none text-[#667085] hover:text-[#101828] hover:bg-[#F7F9FC] transition-colors"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-[#2563EB]' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pl-4 pr-2 pb-2 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 rounded-none text-sm font-medium text-[#667085] hover:text-[#2563EB] hover:bg-[#F7F9FC] transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-3">
              <ActionButton
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full px-5 py-3 text-base"
              >
                Contact Us
              </ActionButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
