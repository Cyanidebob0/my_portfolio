import UseSmoothScroll from "./UseSmoothScroll";

const Button = ({ name, isBeam = false, containerClass, scrollToId }) => {
  const scrollTo = UseSmoothScroll();

  return (
    <button
      className={`btn ${containerClass}`}
      onClick={() => scrollToId && scrollTo(scrollToId)}
    >
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
