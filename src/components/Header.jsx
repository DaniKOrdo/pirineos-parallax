export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">
      <h1 className="text-3xl md:text-7xl font-extrabold">
        PIRINEOS PARALLAX
      </h1>
      <h2 className="text-lg md:text-xl font-semibold md:p-2">
        Photos by{" "}
        <a
          href="https://amercanyelles.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-100 transition duration-300 ease-in-out"
        >
          @amercanyelles
        </a>
      </h2>
    </header>
  );
}
