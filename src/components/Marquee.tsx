const items = [
  "Mining & Minerals",
  "Gemstones",
  "Civil Engineering",
  "Road Construction",
  "Agriculture",
  "Agro-Allied Processing",
  "Energy",
  "Export Supply Chains",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink py-5">
      <div className="flex w-max animate-marquee gap-10">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-10 shrink-0">
            <span className="text-sm font-medium tracking-tight text-text-light-muted">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-gold-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
