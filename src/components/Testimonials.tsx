const testimonials = [
  {
    quote: "This app has made tipping so much easier for my customers!",
    name: "John Smith",
    role: "Restaurant Owner"
  },
  {
    quote: "I love how I can receive tips instantly without carrying cash.",
    name: "Sarah Johnson",
    role: "Service Provider"
  },
  {
    quote: "The QR code feature is brilliant and so easy to use.",
    name: "Michael Brown",
    role: "Car Guard"
  }
];

export default function Testimonials() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">What Users Say</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="text-gray-700 italic">{testimonial.quote}</p>
            <p className="font-bold mt-2">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}