import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ActionButton({
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  arrow = 'right',
  disabled = false,
  className = '',
  children,
}) {
  const isPrimary = variant === 'primary';

  const baseClasses = isPrimary
    ? 'bg-[#2563EB] text-white border border-[#2563EB] hover:border-[#101828]'
    : 'bg-white text-[#101828] border border-[#E4E7EC] hover:text-white hover:border-[#2563EB]';

  const sweepBg = isPrimary ? 'bg-[#101828]' : 'bg-[#2563EB]';

  const arrowColor = isPrimary
    ? 'text-white group-hover:text-[#93C5FD]'
    : 'text-[#101828] group-hover:text-white';

  const disabledClasses = disabled ? 'opacity-75 cursor-not-allowed pointer-events-none' : '';
  const classes = `group relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-[3px] font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${baseClasses} ${disabledClasses} ${className}`;

  const content = (
    <>
      {!disabled && (
        <span
          aria-hidden="true"
          className={`absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out ${sweepBg}`}
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {arrow === 'left' && (
          <ArrowLeft
            className={`w-4 h-4 transition-all duration-300 group-hover:-translate-x-1.5 ${arrowColor}`}
            aria-hidden="true"
          />
        )}
        <span className="inline-flex items-center gap-2.5">{children}</span>
        {arrow === 'right' && (
          <ArrowRight
            className={`w-4 h-4 transition-all duration-300 group-hover:translate-x-1.5 ${arrowColor}`}
            aria-hidden="true"
          />
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} aria-disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
