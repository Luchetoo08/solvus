import type { LucideIcon } from "lucide-react";

interface InfoCardProps {
  title: string;
  value: string;
  icon?: LucideIcon;
}

export default function InfoCard({
  title,
  value,
  icon: Icon,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-400/30 hover:bg-white/10">
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-400">
          {title}
        </p>

        {Icon && (
          <Icon
            size={18}
            className="text-cyan-400"
          />
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">
        {value}
      </h3>
    </div>
  );
}
