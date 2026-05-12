export default function MenuCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden bg-stone-100">
        <img
          src={item.image}
          alt={`${item.name} at Savory Bites`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-bold uppercase text-orange-600">
            {item.category}
          </p>
          <p className="text-lg font-black text-stone-950">{item.price}</p>
        </div>
        <h3 className="mt-3 text-xl font-black text-stone-950">{item.name}</h3>
        <p className="mt-3 text-sm leading-6 text-stone-600">
          {item.description}
        </p>
      </div>
    </article>
  );
}
