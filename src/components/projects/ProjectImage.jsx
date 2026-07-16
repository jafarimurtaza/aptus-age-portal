import Image from "next/image";

export default function ProjectImage({
  project,
  imageIndex,
  rounded = "rounded-t-2xl",
}) {
  const image =
    project.images?.[imageIndex] || "/images/download (49).jpeg";

  return (
    <div className={`relative h-full w-full overflow-hidden ${rounded}`}>
      <Image
        alt={`${project.title} screenshot`}
        className="object-cover"
        fill
        sizes="(max-width: 768px) 100vw, 420px"
        src={image}
      />
    </div>
  );
}