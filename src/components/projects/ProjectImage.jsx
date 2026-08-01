import Image from "next/image";

export default function ProjectImage({
  project,
  imageIndex = 0,
  rounded = "rounded-t-3xl",
}) {
  const image = project?.images?.[imageIndex] || "/images/download (49).jpeg";

  return (
    <div
      className={`group relative h-full min-h-full w-full overflow-hidden ${rounded} bg-base-200`}
    >
      <Image
        src={image}
        alt={`${project.title} screenshot`}
        fill
        sizes="(max-width:768px) 100vw, 420px"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-neutral/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
    </div>
  );
}
