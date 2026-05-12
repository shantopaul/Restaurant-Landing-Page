import { CalendarDays, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import SectionHeader from "./SectionHeader";
import { restaurant } from "../data/siteContent";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "",
  message: "",
};

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-stone-800">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default function ReservationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const inputClass =
    "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-950 outline-none transition placeholder:text-stone-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setError("");
    setSuccess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredFields = ["name", "email", "phone", "date", "time", "guests"];
    const hasEmptyRequiredField = requiredFields.some(
      (field) => !formData[field].trim(),
    );

    if (hasEmptyRequiredField) {
      setError("Please complete all required fields before booking.");
      return;
    }

    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    if (!emailLooksValid) {
      setError("Please enter a valid email address.");
      return;
    }

    const guestCount = Number(formData.guests);

    if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 20) {
      setError("Please enter a guest count between 1 and 20.");
      return;
    }

    setFormData(initialFormData);
    setSuccess(true);
    setError("");
  };

  return (
    <section id="reservation" className="bg-white py-16 lg:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Reserve Your Table"
          title="Book a table for your next memorable meal"
          description="Book your table today and enjoy a memorable dining experience with us."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-lg bg-stone-950 p-8 text-white">
            <p className="text-sm font-bold uppercase text-orange-300">
              Visit Savory Bites
            </p>
            <h3 className="mt-4 text-3xl font-black">
              Warm service, fresh plates, relaxed evenings.
            </h3>
            <p className="mt-4 leading-7 text-stone-300">
              Share your preferred date, time, and party size. Our team will
              prepare the right table experience for your visit.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-1 text-orange-300" aria-hidden="true" size={20} />
                <span>{restaurant.location}</span>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-1 text-orange-300" aria-hidden="true" size={20} />
                <span>{restaurant.phone}</span>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-1 text-orange-300" aria-hidden="true" size={20} />
                <span>{restaurant.email}</span>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-1 text-orange-300" aria-hidden="true" size={20} />
                <div>
                  {restaurant.hours.map((hour) => (
                    <p key={hour}>{hour}</p>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <form
            className="rounded-lg border border-stone-200 bg-stone-50 p-6 shadow-sm sm:p-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full Name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Sarah Johnson"
                  autoComplete="name"
                  required
                />
              </Field>

              <Field id="email" label="Email Address">
                <input
                  id="email"
                  name="email"
                  type="text"
                  inputMode="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="sarah@example.com"
                  autoComplete="email"
                  required
                />
              </Field>

              <Field id="phone" label="Phone Number">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+1 234 567 890"
                  autoComplete="tel"
                  required
                />
              </Field>

              <Field id="guests" label="Number of Guests">
                <input
                  id="guests"
                  name="guests"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={formData.guests}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="4"
                  required
                />
              </Field>

              <Field id="date" label="Date">
                <input
                  id="date"
                  name="date"
                  type="text"
                  value={formData.date}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={today}
                  required
                />
              </Field>

              <Field id="time" label="Time">
                <input
                  id="time"
                  name="time"
                  type="text"
                  value={formData.time}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="7:30 PM"
                  required
                />
              </Field>

              <div className="sm:col-span-2">
                <Field id="message" label="Special Request Message">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} min-h-32 resize-y`}
                    placeholder="Share allergies, seating preferences, or occasion details."
                  />
                </Field>
              </div>
            </div>

            {error ? (
              <p className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700" role="alert">
                {error}
              </p>
            ) : null}

            {success ? (
              <p className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700" role="status">
                Thank you! Your reservation request has been submitted successfully.
              </p>
            ) : null}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-7 py-4 text-base font-bold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-200 sm:w-auto"
            >
              <CalendarDays aria-hidden="true" size={20} />
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
