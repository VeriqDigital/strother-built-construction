import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
export default function WhyStrother() {
  return (
    <div className="why-grid">
      <div className="why-photo">
        <Image
          src="/bathtub1.jpg"
          alt="Close view of the tile alignment and trim around a built-in shower niche"
          fill
          sizes="(max-width: 767px) 100vw, 42vw"
        />
      </div>
      <div className="why-copy">
        <p className="eyebrow">The details matter</p>
        <h2>
          A meaningful investment.
          <br />A thoughtful approach.
        </h2>
        <p>
          Good remodeling is about more than the finished photograph. It’s about
          the care behind the work and how a space serves you for years to come.
        </p>
        <div className="value-line">
          <h3>Craftsmanship you can see</h3>
          <p>
            Look closely at the materials, the transitions, and the finishing
            touches in our work.
          </p>
        </div>
        <div className="value-line">
          <h3>Your home, considered</h3>
          <p>
            Your routines, priorities, and ideas belong at the center of the
            conversation.
          </p>
        </div>
        <div className="value-line">
          <h3>Confidence begins with clarity</h3>
          <p>
            Talk through scope, communication, and the practical questions that
            matter before moving ahead.
          </p>
        </div>
        <Link className="text-link" href="/contact">
          Start a Conversation <Arrow />
        </Link>
      </div>
    </div>
  );
}
