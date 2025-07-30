export default function ArtistCard({ artist, onClick }: any) {
  return (
    <div
      className="w-full min-h-[480px] bg-artist_bg cursor-pointer overflow-hidden relative flex flex-col justify-between transition-all duration-700 ease-in-out rounded-2xl"
      onClick={onClick}
    >
      <div className="relative w-full h-[260px] overflow-hidden rounded-t-2xl">
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

      <div className="flex justify-between items-center px-4 py-3 text-light_blue text-2xl">
        <span>{artist.name}</span>
        <span className="text-sm bg-red text-black px-3 py-1 rounded-full">
          {artist.specialty}
        </span>
      </div>
    </div>
  );
}
