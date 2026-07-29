interface PrimaryButtonProps {
  children: React.ReactNode;
}

export default function PrimaryButton({
  children,
}: PrimaryButtonProps) {
  return (
    <button
      className="
      rounded-xl
      bg-blue-600
      px-6
      py-3
      font-semibold
      text-white
      transition-all
      duration-300
      hover:scale-[1.03]
      hover:bg-blue-500
      hover:shadow-[0_0_40px_rgba(59,130,246,.45)]
      active:scale-95
      "
    >
      {children}
    </button>
  );
}