export default function Menu() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center text-[#C3D0E1] bg-black bg-opacity-0">
      <div className="text-xl">STREFY</div>
      <ul className="flex gap-6 text-sm">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#muzyka">MUZYKA</a>
        </li>
        <li>
          <a href="#sztuka">SZTUKA</a>
        </li>
        <li>
          <a href="#festiwal">FESTIWAL</a>
        </li>
      </ul>
    </nav>
  );
}
