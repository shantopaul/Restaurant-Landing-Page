import SectionHeader from "./SectionHeader";
import MenuCard from "./MenuCard";
import { menuItems } from "../data/menuItems";

export default function Menu() {
  return (
    <section id="menu" className="bg-stone-50 py-12 sm:py-16 lg:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Our Popular Menu"
          title="Fresh favorites guests come back for"
          description="Explore our most loved dishes, prepared with care and served with passion."
        />

        <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
