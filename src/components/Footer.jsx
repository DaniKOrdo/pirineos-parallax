export default function Footer() {
  return (
    <footer className="fixed bottom-0 p-4 text-center text-slate-300 w-64 mx-auto">
      Created with ♥️ by {" "}
      <a
        href="https://danik.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-slate-100 transition duration-300 ease-in-out underline"
      >
        danik.dev
      </a>
    </footer>
  );
}
