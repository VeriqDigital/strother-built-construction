import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
export default function WhyStrother() {
  return (
    <div className="why-grid">
      <div className="why-photo">
        <Image
          src="/strother-blue-kitchen.jpg"
          alt="Blue kitchen cabinetry paired with a white island countertop and brass faucet"
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
          Choosing who works on your home takes care. The finished work matters,
          and so do clear answers about how your project will be handled.
        </p>
        <div className="value-line">
          <h3>Craftsmanship you can see</h3>
          <p>
            Explore the cabinetry, tile, and finishing details in our project
            collection.
          </p>
        </div>
        <div className="value-line">
          <h3>Your home, considered</h3>
          <p>
            Start with what works in your home, what doesn’t, and what you want
            to change.
          </p>
        </div>
        <div className="value-line">
          <h3>Confidence begins with clarity</h3>
          <p>
            Ask about scope, scheduling, and communication before deciding how
            to move ahead.
          </p>
        </div>
        <Link className="text-link" href="/contact">
          Start a Conversation <Arrow />
        </Link>
      </div>
    </div>
  );
}
