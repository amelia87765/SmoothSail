export default function ExpandedArtistCard({ artist, onClose, isLeft }: any) {
  return (
    <div
      className={`col-span-2 flex flex-col md:flex-row bg-artist_bg w-full transition-all duration-500 overflow-hidden`}
    >
      <div
        className={`relative w-full md:w-1/2 h-[480px] md:h-auto flex-shrink-0 ${
          isLeft ? "order-1" : "order-2"
        }`}
      >
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        <img
          src={artist.mask}
          alt="Mask"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      </div>

      <div
        className={`w-full md:w-1/2 p-6 text-light_blue text-base md:text-lg leading-relaxed ${
          isLeft ? "order-2" : "order-1"
        }`}
      >
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl">{artist.name}</h2>
          <button
            onClick={onClose}
            className="text-xl font-bold bg-red text-black w-8 h-8 rounded-full"
          >
            X
          </button>
        </div>
        <p>{artist.description}</p>
      </div>
    </div>
  );
}
