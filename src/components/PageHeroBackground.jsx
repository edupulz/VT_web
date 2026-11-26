import heroBg from '../assets/hero-bg.png';

/**
 * Shared architectural hero background matching the main HomePage hero section.
 */
export default function PageHeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <img src={heroBg} alt="" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/55 to-white/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/30" />
    </div>
  );
}
