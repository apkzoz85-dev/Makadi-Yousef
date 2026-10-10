type Props = { variant?: "white" | "navy"; className?: string; alt: string };

export default function Logo({ variant = "white", className = "h-9 w-auto", alt }: Props) {
  return <img src={`/brand/lockup-${variant}.png`} alt={alt} width={840} height={160} className={className} />;
}
