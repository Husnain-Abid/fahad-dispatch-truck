// Client testimonials are published only after Prime Nation Haul has written
// approval from the customer. This array is intentionally empty so the site
// never presents invented reviews, names, or star ratings as real feedback.
// Approved entries should follow this shape and set `approved: true`:
// { quote, name, company, role, approved: true }
export const testimonials = [];

export const approvedTestimonials = testimonials.filter(
  (item) => item.approved === true,
);
