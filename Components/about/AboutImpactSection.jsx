import { display } from "./aboutFonts";

export default function AboutImpactSection() {
  return (
    <section className="w-full border-y border-[#13253b]/10 bg-[#f8f4ec] px-5 py-14 sm:px-6 md:py-20">
      <div className="mx-auto max-w-[950px]">
        <h2
          style={display}
          className="text-center text-[26px] font-semibold leading-tight text-[#13253b] sm:text-[30px] md:text-[40px]"
        >
          Turning Ideas into Impactful Experiences
        </h2>

        <div className="mx-auto mt-5 h-px w-14 bg-[#c9a768]" />

        <div className="mt-8 space-y-5 text-[14px] leading-[1.8] text-[#4a4438] md:text-[16px]">
          <p>
            Dolphin Facilities is a Bhopal-based event management and business
            solutions company delivering comprehensive services across Madhya
            Pradesh and throughout India. We specialise in creating exceptional
            event experiences, executing impactful brand campaigns, and
            providing digital solutions that help businesses strengthen their
            presence and connect with their audiences.
          </p>

          <p>
            Working with leading corporate organisations, government bodies,
            brands, and educational institutions, we bring together creativity,
            strategic planning, and operational expertise to deliver projects
            of varying scales and complexities.
          </p>

          <p>
            Our experience includes assignments associated with Eicher
            Tractors, Vindhya Herbal, and VIT Group, reflecting our involvement
            across brand activations, corporate requirements, and institutional
            events. From premium corporate gatherings and large-scale
            government programmes to promotional campaigns and digital business
            solutions, we approach every assignment with a focus on quality,
            coordination, and execution.
          </p>

          <p>
            At Dolphin Facilities, we believe that successful projects are
            built on understanding our clients&apos; objectives, developing the
            right solutions, and delivering every detail with professionalism.
            Our commitment is to build lasting partnerships by providing
            dependable services, meaningful experiences, and solutions that
            create value for our clients.
          </p>
        </div>

        <p
          style={display}
          className="mt-9 border-l-2 border-[#c9a768] pl-5 text-[19px] font-semibold leading-snug text-[#13253b] sm:text-[22px] md:text-[26px]"
        >
          Dolphin Facilities — Your Vision. Our Expertise. Seamless Execution.
        </p>
      </div>
    </section>
  );
}
