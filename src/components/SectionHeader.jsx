export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`mx-auto flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold text-stone-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-stone-600 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

