const DEFAULT_WHATSAPP_NUMBER = '919840962424';
const DEFAULT_WHATSAPP_MESSAGE =
  "Hello VijayanTech, I'm looking for digital solutions for my business. Could we discuss your services and available options?";

/**
 * Global floating WhatsApp chat button fixed at the bottom-right corner.
 */
export default function FloatingWhatsApp({
  phoneNumber = DEFAULT_WHATSAPP_NUMBER,
  message = DEFAULT_WHATSAPP_MESSAGE,
  tooltip = 'Chat with us on WhatsApp',
}) {
  const sanitizedNumber = phoneNumber.replace(/\D/g, '');
  const href = `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <div className="relative group flex items-center">
        {/* Soft attention pulse halo */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366]/40 pointer-events-none animate-whatsapp-pulse"
        />

        {/* Hover / focus tooltip */}
        <span
          role="tooltip"
          className="hidden sm:block pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#101828] px-3 py-1.5 text-xs font-medium text-white shadow-[0_8px_20px_rgba(16,24,40,0.2)] opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0"
        >
          {tooltip}
          <span
            aria-hidden="true"
            className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#101828]"
          />
        </span>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={tooltip}
          title={tooltip}
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-[0_8px_24px_rgba(37,211,102,0.38)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.48)] transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#101828] focus-visible:ring-offset-2"
        >
          <svg
            viewBox="0 0 32 32"
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
            aria-hidden="true"
          >
            <path d="M16.002 2.667C8.64 2.667 2.667 8.638 2.667 16c0 2.35.614 4.645 1.78 6.668L2.667 29.333l6.83-1.747A13.28 13.28 0 0 0 16.002 29.333C23.362 29.333 29.333 23.36 29.333 16S23.362 2.667 16.002 2.667zm0 24.427a11.05 11.05 0 0 1-5.635-1.545l-.404-.24-4.053 1.036 1.082-3.951-.263-.417A11.06 11.06 0 0 1 4.907 16c0-6.118 4.977-11.094 11.095-11.094 6.116 0 11.091 4.976 11.091 11.094 0 6.117-4.975 11.094-11.091 11.094zm6.085-8.308c-.334-.167-1.972-.973-2.278-1.084-.306-.112-.528-.167-.751.167-.222.334-.862 1.084-1.057 1.307-.194.222-.389.25-.722.083-.334-.167-1.409-.519-2.683-1.655-.991-.884-1.661-1.976-1.855-2.31-.195-.334-.021-.514.146-.68.15-.149.334-.389.5-.583.167-.195.223-.334.334-.556.111-.223.056-.417-.028-.584-.083-.167-.751-1.808-1.029-2.475-.27-.65-.546-.562-.75-.572a13.7 13.7 0 0 0-.64-.011c-.222 0-.583.083-.889.417-.306.334-1.167 1.14-1.167 2.781s1.195 3.226 1.362 3.449c.167.222 2.352 3.591 5.698 5.035.796.344 1.417.549 1.901.703.799.254 1.526.218 2.101.132.641-.096 1.972-.806 2.25-1.585.278-.778.278-1.445.195-1.584-.084-.14-.306-.223-.64-.39z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
