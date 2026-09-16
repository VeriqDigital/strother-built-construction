import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
export default function AboutIntro() {
  return (
    <div className="intro-grid">
      <div className="intro-copy">
        <p className="eyebrow">A more considered home</p>
        <h2>
          Keep what you love.
          <br />
          Rethink what’s possible.
        </h2>
        <p>
          A home holds a lot of life. A remodel should make room for the way you
          want to live next.
        </p>
        <p>
          Strother Built Construction focuses on the spaces that shape your
          everyday: a kitchen that brings people together, a bathroom that feels
          like your own, or the extra room your home has been missing.
        </p>
        <Link className="text-link" href="/about">
          Get to Know Strother <Arrow />
        </Link>
      </div>
      <figure className="intro-image">
        <div className="photo">
          <Image
            src="/bathroom.jpg"
            alt="Warm tile and black hardware paired with a white vanity in a Strother bathroom"
            fill
            sizes="(max-width: 767px) 100vw, 48vw"
          />
        </div>
        <figcaption>
          <span>Considered spaces. Personal details.</span>
          <span>STROTHER BUILT</span>
        </figcaption>
      </figure>
    </div>
  );
}
