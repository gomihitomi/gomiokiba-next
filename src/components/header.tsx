export const Header = () => (
  <header className="w-full max-w-main-content mx-auto">
    <a href="" className="flex justify-center">
      <h1 className="w-fit font-black text-7xl md:text-9xl tracking-tighter leading-none">
        <div className="flex justify-around text-sm font-normal uppercase mb-2">
          {"gomiokiba".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
        ごみおきば
      </h1>
    </a>
  </header>
);
