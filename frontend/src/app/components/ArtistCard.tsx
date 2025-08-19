export default function ArtistCard({
  artist,
  onClick,
}: {
  artist: any;
  onClick: () => void;
}) {
  return (
    <div
      className="h-[clamp(40svh,50dvh,60lvh)] aspect[4/3] bg-artist_bg cursor-pointer overflow-hidden relative flex flex-col rounded-2xl"
      onClick={onClick}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
        <img
          src={artist.image}
          alt={artist.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <img
          src={artist.mask}
          alt="Mask"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
      </div>

      <div className="flex justify-between items-center px-[clamp(1rem,2vw,1.5rem)] py-[1em]">
        <span className="text-grey text-[clamp(1.5rem,3vi,2rem)]">
          {artist.name}
        </span>
        <span className="text-[clamp(0.75rem,1.5vi,1rem)] bg-red text-black px-[0.75em] py-[0.25em] rounded-full">
          {artist.specialty}
        </span>
      </div>
    </div>
  );
}
