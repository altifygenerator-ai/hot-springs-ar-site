import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export default function CategoryCard({
  title,
  description,
  href,
  image,
}: CategoryCardProps) {
  return (
    <Link href={href} className="category-card">
      <div className="category-image-wrap">
        <Image
          src={image}
          alt={title}
          width={700}
          height={460}
          className="category-image"
        />
      </div>

      <div className="category-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span>Explore {title}</span>
      </div>
    </Link>
  );
}