const logos = [
//   {
//     name: "AXA",
//     src: "https://cdn.simpleicons.org/axa/ffffff",
//   },
  {
    name: "ASUS",
    src: "https://www.citypng.com/public/uploads/preview/asus-white-logo-701751694773672zaco7tuntk.png",
  },
  {
    name: "HDFC",
    src: "https://cdn.simpleicons.org/hdfcbank/ffffff",
  },
  {
    name: "Samsung",
    src: "https://www.citypng.com/public/uploads/preview/samsung-white-logo-png-image-701751694714054zbxkqcqh9p.png",
  },
  {
    name: "PepsiCo",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/1920px-PepsiCo_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210115205614",
  },
  {
    name: "Prime Video",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20180203195919",
  },
  {
    name: "TATA MOTORS",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20180203195919",
  },
];

export default function LogoSlider() {
  return (
    <div className="mt-10 overflow-hidden">
      <div className="logo-track flex w-max items-center gap-16">
        {/* First set */}
        {logos.map((logo) => (
          <div
            key={`first-${logo.name}`}
            className="flex h-16 w-40 shrink-0 items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-10 max-w-[140px] object-contain opacity-80 grayscale"
            />
          </div>
        ))}

        {/* Duplicate set for seamless infinite scrolling */}
        {logos.map((logo) => (
          <div
            key={`second-${logo.name}`}
            className="flex h-16 w-40 shrink-0 items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-h-10 max-w-[140px] object-contain opacity-80 grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
