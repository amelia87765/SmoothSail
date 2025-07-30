export default function ExpandedArtistCard({ artist, onClose }: any) {
  return (
    <div className="col-span-2 flex flex-col md:flex-row bg-artist_bg w-full rounded-2xl transition-all duration-700 overflow-hidden">
      <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-auto order-1">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <img
          src={artist.mask}
          alt="Mask"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
      </div>

      <div className="w-full md:w-1/2 p-6 text-black text-base md:text-lg leading-relaxed font-sans font-[400] font-gil order-2">
        <div className="flex justify-between mb-4 items-start">
          <h2 className="text-2xl font-bold font-body">{artist.name}</h2>
          <button
            onClick={onClose}
            className="text-xl font-bold text-black leading-none"
          >
            X
          </button>
        </div>
        <p>{artist.description}</p>
      </div>
    </div>
  );
}
