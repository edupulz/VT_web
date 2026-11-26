import { TRUST_HIGHLIGHTS } from '../../data/company';
import Icon from '../Icon';

export default function TrustBar() {
  return (
    <section
      aria-label="Core capabilities"
      className="bg-[#F7F9FC] border-y border-[#E4E7EC] py-7 sm:py-8"
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-[#E4E7EC]">
          {TRUST_HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3.5 lg:px-8 first:lg:pl-0 last:lg:pr-0"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[#E4E7EC] flex items-center justify-center text-[#2563EB] shrink-0">
                <Icon name={item.iconName} className="w-5 h-5" />
              </div>
              <span className="font-display text-sm sm:text-base font-semibold text-[#101828] tracking-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
