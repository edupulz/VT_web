import ActionButton from '../ActionButton';

export default function CtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#EAF2FF] border-t border-[#D6E4FF]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <p className="eyebrow-label mb-4">Start Your Next Initiative</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] text-[#101828]">
          Have an Idea?
          <span className="block mt-1 text-[#101828]">
            Let&apos;s Build It <span className="text-[#101828]">Together.</span>
          </span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-[#101828] max-w-2xl mx-auto leading-relaxed">
          Let&apos;s build something extraordinary together with technology that drives your business forward.
        </p>
        <div className="mt-8">
          <ActionButton to="/contact" className="px-7 py-4 text-sm sm:text-base">
            Start a Conversation
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
