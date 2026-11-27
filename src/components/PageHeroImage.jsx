const CHAMFER_CLIP_PATH = 'polygon(8% 0, 100% 0, 100% 86%, 92% 100%, 0 100%, 0 14%)';

/**
 * Chamfered hero image frame with an offset accent backdrop shared across detail pages.
 */
export default function PageHeroImage({ src, alt }) {
  return (
    <div className="relative pr-3 pb-3">
      <div
        aria-hidden="true"
        className="absolute inset-0 top-3 left-3 bg-[#EAF2FF]"
        style={{ clipPath: CHAMFER_CLIP_PATH }}
      />
      <div className="relative overflow-hidden bg-[#101828]" style={{ clipPath: CHAMFER_CLIP_PATH }}>
        <div className="aspect-[4/3] w-full">
          <img src={src} alt={alt} className="w-full h-full object-cover object-center" />
        </div>
      </div>
    </div>
  );
}
