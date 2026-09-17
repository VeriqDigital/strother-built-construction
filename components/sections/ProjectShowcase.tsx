import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Arrow from "@/components/ui/Arrow";
export default function ProjectShowcase() {
  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">A closer look at our work</p>
          <h2>Spaces made for living.</h2>
        </div>
        <p>
          A selection of kitchens, bathrooms, and living spaces from Strother’s
          project collection.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <figure className={`project ${project.className}`} key={project.src}>
            <div className="photo">
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 767px) 100vw, 85vw"
                    : "(max-width: 767px) 100vw, 48vw"
                }
              />
            </div>
            <figcaption>
              <div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
              <span className="project-number">0{index + 1}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="gallery-end">
        <p>What would you change about your home?</p>
        <Link className="text-link" href="/contact">
          Let’s Talk About Your Project <Arrow />
        </Link>
      </div>
    </>
  );
}
