import vtLogo from '../assets/VT_logo_original.png';

export default function Logo({ dark = false }) {
  return (
    <span className="inline-flex items-center select-none">
      <img
        src={vtLogo}
        alt="VijayanTech"
        className={`h-11 sm:h-12 w-auto object-contain ${
          dark ? 'brightness-0 invert' : ''
        }`}
      />
    </span>
  );
}
