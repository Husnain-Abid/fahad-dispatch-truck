export const services = [
  {
    title: "Load Booking",
    slug: "load-booking",
    icon: "PackageSearch",
    summary:
      "We source freight that fits your equipment, your lanes, and the way you prefer to run, then coordinate the booking details so your next pick-up is clear.",
    outcome: "Consistent freight sourcing",
    featured: true,
  },
  {
    title: "Rate Negotiation",
    slug: "rate-negotiation",
    icon: "Handshake",
    summary:
      "Your rate conversation is handled with market context and your operating costs in mind, and every confirmed number is shared with you before you commit.",
    outcome: "Clear, confirmed rates",
    featured: true,
  },
  {
    title: "24/7 Dispatch Support",
    slug: "carrier-support",
    icon: "Headset",
    summary:
      "Load questions, schedule changes, and check calls do not keep business hours. Reach a dispatcher when something needs attention on the road.",
    outcome: "Support when it matters",
    featured: true,
  },
  {
    title: "ELD Setup & Management",
    slug: "eld-management",
    icon: "MonitorSmartphone",
    summary:
      "Help getting your electronic logging device connected, your driver profile configured, and your records organized for everyday operations.",
    outcome: "Cleaner daily records",
    featured: true,
  },
  {
    title: "DOT Compliance Assistance",
    slug: "dot-compliance",
    icon: "ShieldCheck",
    summary:
      "Practical help keeping carrier documentation and operating records organized, with clear guidance on when to confirm requirements with a qualified professional.",
    outcome: "Organized documentation",
    featured: true,
  },
  {
    title: "Insurance Assistance",
    slug: "carrier-support",
    icon: "FileBadge",
    summary:
      "Support gathering and submitting the insurance documentation brokers and shippers request. Coverage decisions and placement remain with licensed providers.",
    outcome: "Documentation support",
    featured: false,
  },
  {
    title: "Factoring Assistance",
    slug: "carrier-support",
    icon: "ReceiptText",
    summary:
      "Help organizing load paperwork for submission and coordinating with the factoring company you choose. Funding decisions stay with your factoring partner.",
    outcome: "Paperwork coordination",
    featured: false,
  },
  {
    title: "Permits Assistance",
    slug: "carrier-support",
    icon: "ClipboardCheck",
    summary:
      "Support identifying which permits a given load may require and preparing the information needed to request them before pick-up.",
    outcome: "Permit preparation",
    featured: false,
  },
  {
    title: "Paperwork Assistance",
    slug: "carrier-support",
    icon: "Files",
    summary:
      "Rate confirmations, bills of lading, delivery documents, and invoicing packets kept organized so nothing stalls your settlement.",
    outcome: "Organized settlements",
    featured: false,
  },
];

export const serviceDetailSlugs = [
  "load-booking",
  "rate-negotiation",
  "eld-management",
  "dot-compliance",
  "carrier-support",
];

export const serviceDetails = [
  {
    slug: "load-booking",
    eyebrow: "Dispatch service",
    title: "Load Booking",
    tagline: "Freight that fits your truck, your lanes, and your schedule.",
    summary:
      "Load booking is the core of dispatch. We look for freight that matches your equipment and preferred operating area, present the details clearly, and coordinate the booking once you approve it.",
    image: "/images/services/dry-van-reefer.jpg",
    imageAlt:
      "Semi-truck pulling a white reefer trailer along an interstate highway",
    intro: [
      "Every carrier runs differently. Some want short regional runs and home time on the weekend; others want long-haul miles and consistent lanes. We start from your preferences, not from whatever happens to be posted.",
      "Before anything is booked, you see the origin, destination, pickup window, commodity, trailer requirements, weight, and agreed rate. You stay the decision-maker on every load.",
    ],
    included: [
      "Searching available freight based on your equipment and preferred lanes",
      "Reviewing load details with you before a booking is confirmed",
      "Coordinating pickup appointments and broker communication",
      "Tracking check calls and sharing updates while the load is in transit",
      "Keeping rate confirmations and load documents organized",
    ],
    steps: [
      {
        title: "Share your preferences",
        body: "Tell us your truck type, preferred states or lanes, home base, and any scheduling limits.",
      },
      {
        title: "Review the options",
        body: "We present loads with the numbers and requirements that matter, and we answer questions before you commit.",
      },
      {
        title: "We coordinate, you drive",
        body: "Once approved, we handle the broker details and paperwork trail so you can focus on the road.",
      },
    ],
    note: "Load availability, rates, and lanes vary with market conditions. We do not guarantee a specific volume of freight or a specific rate.",
    related: ["rate-negotiation", "carrier-support"],
  },
  {
    slug: "rate-negotiation",
    eyebrow: "Dispatch service",
    title: "Rate Negotiation",
    tagline: "A calmer, better-informed conversation about every rate.",
    summary:
      "We negotiate on your behalf using the details you provide — your costs, your lanes, and the realities of the load — and we confirm every number with you before it becomes an agreement.",
    image: "/images/services/power-only.jpg",
    imageAlt: "Navy blue semi-truck tractor parked on concrete at a logistics terminal",
    intro: [
      "Rate negotiation is more than asking for more money. It is about knowing what a load actually requires, understanding the market context, and being ready to walk away when the numbers do not work.",
      "Our role is to make the conversation straightforward: what the broker is offering, what changes the equation, and what you are agreeing to. Nothing is accepted on your behalf without your approval.",
    ],
    included: [
      "Reviewing load requirements before a rate discussion begins",
      "Presenting broker offers with the full load details attached",
      "Negotiating on your behalf within the limits you set",
      "Documenting the agreed rate and accessorial details",
      "Flagging terms that may need closer review before booking",
    ],
    steps: [
      {
        title: "Set your floor",
        body: "Share the minimum that makes sense for your truck and cost structure on the lanes you run.",
      },
      {
        title: "We handle the back-and-forth",
        body: "We communicate with the broker and bring you a clear summary, not a stream of conflicting messages.",
      },
      {
        title: "You approve the final number",
        body: "No load is booked until you confirm the rate and the terms on the table.",
      },
    ],
    note: "Rate outcomes depend on market conditions and the specifics of each load. We do not promise a specific rate increase, savings figure, or revenue result.",
    related: ["load-booking", "dot-compliance"],
  },
  {
    slug: "eld-management",
    eyebrow: "Carrier support",
    title: "ELD Setup & Management",
    tagline: "Get your electronic logs connected and your records organized.",
    summary:
      "Practical help with device setup, driver profile configuration, and keeping electronic logging records organized in day-to-day operations.",
    image: "/images/dispatch-workstation.jpg",
    imageAlt: "Professional dispatching workstation with monitors and a headset",
    intro: [
      "Electronic logging devices are part of operating a compliant trucking business. Setup issues and misconfigured profiles can create avoidable friction for drivers and carriers alike.",
      "We help with the practical side of getting a device connected and organizing the records your operation relies on. We do not sell ELD hardware, act as a device provider, or replace your provider's support.",
    ],
    included: [
      "Coordinating device setup with your ELD provider",
      "Helping configure carrier and driver profiles",
      "Reviewing log-related documents for completeness",
      "Organizing Hours of Service records for your files",
      "Escalating technical issues to the right provider contact",
    ],
    steps: [
      {
        title: "Tell us what you use",
        body: "Share your ELD provider and the equipment or drivers that need attention.",
      },
      {
        title: "We coordinate setup",
        body: "We help you work through the configuration steps with your provider.",
      },
      {
        title: "Keep records organized",
        body: "We help keep supporting documents easy to find when they are needed.",
      },
    ],
    note: "Hours of Service requirements are set by regulation and can change. Always confirm current requirements with the FMCSA or a qualified compliance professional. Prime Nation Haul does not provide legal advice.",
    related: ["dot-compliance", "carrier-support"],
  },
  {
    slug: "dot-compliance",
    eyebrow: "Carrier support",
    title: "DOT Compliance Assistance",
    tagline: "Organized documentation and practical next steps.",
    summary:
      "We help carriers keep their authority and operating documents organized and understand what to prepare, while being clear about where qualified professional guidance is required.",
    image: "/images/fleet-yard.jpg",
    imageAlt: "Row of semi-trucks and dry van trailers at a terminal at golden hour",
    intro: [
      "Compliance paperwork is a common source of delay for new and growing carriers. Missing documents or inconsistent records can slow down onboarding and broker setup.",
      "We assist with document organization and preparation. We are not a government agency, we do not issue operating authority, and we do not provide legal advice. When a question requires a licensed professional, we will tell you.",
    ],
    included: [
      "Organizing authority, registration, and insurance documents",
      "Reviewing the carrier packet brokers and shippers commonly request",
      "Preparing information for compliance-related submissions",
      "Keeping expiration dates visible so renewals are not missed",
      "Referring regulatory questions to qualified professionals",
    ],
    steps: [
      {
        title: "Inventory your documents",
        body: "We review what you have and identify common gaps in the carrier packet.",
      },
      {
        title: "Build the packet",
        body: "Documents are organized with clear names and dates for easy submission.",
      },
      {
        title: "Stay current",
        body: "We help you track renewals and keep broker records up to date.",
      },
    ],
    note: "Regulatory requirements are complex and change over time. Prime Nation Haul provides documentation assistance only — not legal, regulatory, or licensed professional advice. Confirm requirements with the FMCSA, your attorney, or your compliance provider.",
    related: ["eld-management", "carrier-support"],
  },
  {
    slug: "carrier-support",
    eyebrow: "Carrier support",
    title: "Carrier Support Services",
    tagline: "Coverage beyond the load: dispatch, paperwork, and coordination.",
    summary:
      "A connected set of support services for the parts of trucking that happen around the drive — from 24/7 dispatch communication to insurance, factoring, permit, and paperwork assistance.",
    image: "/images/hero-interstate.jpg",
    imageAlt: "Semi-truck and dry van trailer traveling on an interstate highway at dusk",
    intro: [
      "Owner-operators and small fleets often handle dispatch, billing, permits, and paperwork between driving hours. It is a lot to carry, and small gaps can turn into delayed settlements or missed details.",
      "Our carrier support services are built to take specific, well-defined tasks off your plate while keeping you informed and in control.",
    ],
    included: [
      "24/7 dispatch support for load questions and schedule changes",
      "Insurance documentation assistance for broker and shipper requests",
      "Factoring paperwork coordination with the provider you choose",
      "Permit research and preparation support for upcoming loads",
      "Paperwork organization for rate confirmations, PODs, and invoicing",
    ],
    steps: [
      {
        title: "Choose your support",
        body: "Select the services that match your operation — you do not need everything at once.",
      },
      {
        title: "Agree the arrangement",
        body: "We confirm scope and communication expectations in writing before work begins.",
      },
      {
        title: "Stay informed",
        body: "You receive clear updates on bookings, documents, and anything that needs your decision.",
      },
    ],
    note: "Prime Nation Haul is not an insurance carrier, insurance agency, factoring company, permit issuing authority, law firm, or government agency. Coverage, funding, permits, and legal decisions are made by you and the licensed providers or authorities you work with.",
    related: ["load-booking", "rate-negotiation", "dot-compliance"],
  },
];

export function getServiceDetail(slug) {
  return serviceDetails.find((service) => service.slug === slug);
}

export function getFeaturedServices() {
  return services.filter((service) => service.featured);
}
