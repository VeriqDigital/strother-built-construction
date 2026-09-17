import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
export default function AboutIntro() {
  return (
    <div className="intro-grid">
      <div className="intro-copy">
        <h2>
          Keep what you love.
          <br />
          Rethink what’s possible.
        </h2>
        <p>
          You may love your neighborhood and still need more from your home. A
          remodel can give familiar spaces a better fit for everyday life.
        </p>
        <p>
          Strother Built Construction focuses on the rooms you use most, from a
          kitchen with room to gather to a renovation that brings the whole home
          together.
        </p>
        <Link className="text-link" href="/about">
          Get to Know Strother <Arrow />
        </Link>
      </div>
      <figure className="intro-image">
        <div className="photo">
          <Image
            src="/strother-connected-living-spaces.jpg"
            alt="Connected living spaces with continuous wood flooring, white trim, and natural light"
            fill
            sizes="(max-width: 767px) 100vw, 48vw"
          />
        </div>
      </figure>
    </div>
  );
}
