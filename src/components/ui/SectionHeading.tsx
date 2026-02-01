import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <h2 className="text-4xl font-bold md:text-5xl">
        <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 md:text-xl">{subtitle}</p>
      )}
      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
    </div>
  );
}
