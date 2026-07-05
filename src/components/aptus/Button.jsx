export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label="Start Conversation"
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-[#D97706]
        px-10
        py-4
        text-lg
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        ease-in-out
        hover:scale-105
        hover:bg-[#B45309]
        hover:shadow-xl
        focus:outline-none
        focus:ring-4
        focus:ring-orange-300/40
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}