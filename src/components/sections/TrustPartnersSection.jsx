import logoA2Sports from '../../assets/comapny/logo_a2_sports.webp';
import logoAkFresh from '../../assets/comapny/logo_ak_fresh.webp';
import logoBharathidasan from '../../assets/comapny/logo_bharathidasan_college.webp';
import logoInnovationEdu from '../../assets/comapny/logo_innovation_edu.webp';
import logoJineto from '../../assets/comapny/logo_jineto.webp';
import logoJlSprockets from '../../assets/comapny/logo_jl_sprockets.webp';
import logoKamadhenu from '../../assets/comapny/logo_kamadhenu_school.webp';
import logoKuppanna from '../../assets/comapny/logo_kuppanna.webp';
import logoMinkavi from '../../assets/comapny/logo_minkavi.webp';
import logoNobelPower from '../../assets/comapny/logo_nobel_power.webp';
import logoPacxim from '../../assets/comapny/logo_pacxim.webp';
import logoSsm from '../../assets/comapny/logo_ssm.webp';

const PARTNER_LOGOS = [
  { name: 'A2 Sports', src: logoA2Sports },
  { name: 'AK Fresh', src: logoAkFresh },
  { name: 'Bharathidasan College', src: logoBharathidasan },
  { name: 'Innovation Education', src: logoInnovationEdu },
  { name: 'Jineto', src: logoJineto },
  { name: 'JL Sprockets', src: logoJlSprockets },
  { name: 'Kamadhenu School', src: logoKamadhenu },
  { name: 'Kuppanna', src: logoKuppanna },
  { name: 'Minkavi', src: logoMinkavi },
  { name: 'Nobel Power', src: logoNobelPower },
  { name: 'Pacxim', src: logoPacxim },
  { name: 'SSM', src: logoSsm },
];

export default function TrustPartnersSection() {
  return (
    <section
      aria-label="Trusted Partners"
      className="bg-white border-y border-[#E4E7EC] py-12 sm:py-16 overflow-hidden"
    >
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-12 mb-9">
        <p className="eyebrow-label text-center">Trusted by Leading Organizations</p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Soft left & right edge fades */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10"
          aria-hidden="true"
        />

        <div className="animate-marquee-slow items-center">
          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="mx-8 sm:mx-12 lg:mx-14 shrink-0 flex items-center justify-center"
            >
              <img
                src={partner.src}
                alt={partner.name}
                loading="lazy"
                className="h-14 sm:h-16 lg:h-20 w-auto max-w-[210px] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
