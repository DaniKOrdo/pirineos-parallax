import Atropos from "atropos/react";

export default function App() {
  return (
    <div className="">
      <Atropos
        className="atropos atropos-header w-full atropos-rotate-touch-scroll-y"
        activeOffset={40}
        shadowScale={1.10}
        highlight={true}
      >
        <img
          className="atropos-header-spacer"
          src="src/images/img-a-6.png"
          data-atropos-offset="-4.5"
        />
        <img
          className="layer"
          src="src/images/img-a-5.png"
          data-atropos-offset="-3.5"
        />
        <img
          className="layer"
          src="src/images/img-a-4.png"
          data-atropos-offset="-2"
        />
        <img
          className="layer"
          src="src/images/img-a-3.png"
          data-atropos-offset="-1"
        />
        <img
          className="layer"
          src="src/images/img-a-2.png"
          data-atropos-offset="0"
        />
        <img
          className="layer"
          src="src/images/img-a-1.png"
          data-atropos-offset="1"
        />
      </Atropos>
    </div>
  );
}
