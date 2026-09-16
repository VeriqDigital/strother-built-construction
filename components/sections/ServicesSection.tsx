import Image from "next/image";
import Link from "next/link";
import Arrow from "@/components/ui/Arrow";
import { services } from "@/data/services";
export default function ServicesSection() {
  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Our remodeling focus</p>
          <h2>
            Five ways to make
            <br />
            home feel more like you.
          </h2>
        </div>
        <Link href="/services" className="text-link">
          Explore Our Services <Arrow />
        </Link>
      </div>
      <div className="services-editorial">
        <div className="services-image">
          <Image
            src="/bathtub3.jpg"
            alt="Gray tiled shower with dark fixtures, corner shelves, and a white bathtub"
            fill
            sizes="(max-width: 767px) 100vw, 40vw"
          />
          <span>Good spaces begin with the details.</span>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <Link
              className="service-row"
              href={`/services#${service.slug}`}
              key={service.slug}
            >
              <span className="service-number">0{index + 1}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-more">Explore service</span>
              </div>
              <Arrow diagonal />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
