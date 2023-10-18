export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500">
      <h1 className="text-3xl font-extrabold md:text-7xl">
        PIRINEOS PARALLAX
      </h1>
      <h2 className="text-lg font-semibold md:text-xl md:p-2">
        Photos by{" "}
        <a
          href="https://amercanyelles.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline transition duration-300 ease-in-out hover:text-slate-100"
        >
          @amercanyelles
        </a>
      </h2>
    </header>
  );
}
