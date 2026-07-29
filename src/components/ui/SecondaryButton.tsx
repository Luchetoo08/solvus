interface SecondaryButtonProps {
  children: React.ReactNode;
}

export default function SecondaryButton({
  children,
}: SecondaryButtonProps) {
  return (
    <button
      className="
      rounded-xl
      border
      border-white/10
      bg-white/5
      px-6
      py-3
      font-semibold
      text-white
      backdrop-blur-xl
      transition-all
      duration-300
      hover:border-blue-400/40
      hover:bg-white/10
      "
    >
      {children}
    </button>
  );
}