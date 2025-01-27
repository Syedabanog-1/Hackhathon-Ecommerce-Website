import Image from "next/image";

const logos = [
  "/logo-zapier.png",
  "/logo-pd.png",
  "/logo-clbBank.png",
  "/logo-z.png",
  "/logo-burnt.png",
  "/logo-pandaDoc.png",
  "/logo-moz.png",
];

const Sponsors = () => {
  const combinedLogos = [...logos, ...logos]; // Original + Duplicate

  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <div className="flex items-center gap-8 sm:gap-12 animate-seamlessSlide whitespace-nowrap">
        {combinedLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Sponsor logo ${index + 1}`}
            width={400}
            height={400}
            className="w-auto h-auto max-h-[80px] sm:max-h-[1000px] object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;