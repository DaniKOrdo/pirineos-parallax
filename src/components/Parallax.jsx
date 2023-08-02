import Atropos from "atropos/react";

export default function App() {
  return (
    <div className="pt-12">
      <Atropos
        className="atropos atropos-header w-full atropos-rotate-touch-scroll-y"
        activeOffset={40}
        shadowScale={1.1}
        highlight={true}
      >
        <img
          className="atropos-header-spacer"
          src="src/images/img-a-6.webp"
          data-atropos-offset="-4.5"
        />
        <img src="src/images/img-a-5.webp" data-atropos-offset="-3.5" />
        <img src="src/images/img-a-4.webp" data-atropos-offset="-2.5" />
        <img src="src/images/img-a-3.webp" data-atropos-offset="-2" />
        <img src="src/images/img-a-2.webp" data-atropos-offset="-1" />
        <img src="src/images/img-a-1.webp" data-atropos-offset="1" />
      </Atropos>
    </div>
  );
}
