export function Video() {
    return (
      <video className="absolute right-2 top-5 origin-top rounded-xl border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_50%)] group-hover:-translate-x-10" autoPlay loop muted width="320" height="240" preload="none">
        <source src="/img/rust.mp4" type="video/mp4" />
      </video>
    )
  }