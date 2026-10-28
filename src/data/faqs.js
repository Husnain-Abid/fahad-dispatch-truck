export const faqCategories = [
  {
    name: "Getting started",
    faqs: [
      {
        question: "What is truck dispatching?",
        answer:
          "Truck dispatching is the work of connecting a carrier's available truck with freight that needs to move. A dispatcher sources loads, communicates with brokers and shippers, helps negotiate rates, coordinates pickup and delivery details, and keeps the paperwork trail organized. The carrier still owns the operating decisions and the truck.",
      },
      {
        question: "Who can work with Prime Nation Haul?",
        answer:
          "We support owner-operators, small fleets, and larger fleet companies operating in the United States. We can help with initial inquiries whether your authority is already active or you are still preparing to launch, as long as we are clear about where your setup currently stands.",
      },
      {
        question: "Which truck types do you support?",
        answer:
          "We work with box trucks, hotshot setups, dry vans, reefers, power-only tractors, and standard semi configurations. Flatbed and step deck needs can be discussed during the quote request so we can confirm fit before anything is promised.",
      },
      {
        question: "How does onboarding work?",
        answer:
          "It starts with a conversation. We learn about your equipment, lanes, and the support you need. Next comes a short setup step: confirming your carrier documents, signing broker packets, aligning on communication, and agreeing on the service arrangement. Dispatching begins once both sides have what they need.",
      },
      {
        question: "What information is needed to request a quote?",
        answer:
          "Your name, email, phone number, role, truck type, and the service you are interested in. Company name, fleet size, MC number, and DOT number are optional at the inquiry stage. You will never be asked for a Social Security number, bank credentials, passwords, or identity documents through these forms.",
      },
    ],
  },
  {
    name: "Services",
    faqs: [
      {
        question: "What dispatching services are available?",
        answer:
          "Our service list includes load booking, rate negotiation, 24/7 dispatch support, ELD setup and management assistance, DOT compliance assistance, insurance assistance, factoring assistance, permits assistance, and paperwork assistance. Not every carrier needs every service, and we will tell you when something is outside our scope.",
      },
      {
        question: "What paperwork assistance is offered?",
        answer:
          "We help organize rate confirmations, bills of lading, delivery receipts, and invoicing packets, and we keep track of what a broker or factoring provider needs from you. We help you prepare and submit documents; we do not make legal, tax, or coverage decisions on your behalf.",
      },
      {
        question: "Do you provide legal, insurance, or financial advice?",
        answer:
          "No. Prime Nation Haul provides assistance with documentation, coordination, and communication. We are not a law firm, insurance provider, insurance agency, factoring company, or government agency. Coverage, funding, permitting, and legal questions should go to a qualified, licensed professional.",
      },
      {
        question: "Can you help if I am just starting my authority?",
        answer:
          "We can support your preparation and help you organize the documents brokers commonly ask for. Some services depend on your authority, insurance, and setup being in place first. Reach out with where you are today and we will confirm what can realistically begin now.",
      },
    ],
  },
  {
    name: "Pricing and support",
    faqs: [
      {
        question: "How does your pricing work?",
        answer:
          "Prime Nation Haul quotes each carrier individually. Pricing depends on the services you use, the size of your fleet, the lanes you run, and the level of support you want. We share the agreed arrangement directly with you before work starts, and we do not publish pricing that has not been approved for your situation.",
      },
      {
        question: "How can carriers contact your team?",
        answer:
          "Call 316 376 9718 or send a message through the quote, contact, or carrier signup form. When email is configured for the site, a written inquiry reaches the company inbox directly. We reply with next steps and a short set of questions.",
      },
      {
        question: "How quickly will I hear back?",
        answer:
          "Inquiries are reviewed during normal business hours, and simpler questions often get a same-day reply. Dispatch support communication is agreed with each carrier during setup so expectations are clear on both sides.",
      },
      {
        question: "Is there a long-term contract?",
        answer:
          "Any arrangement, term, and notice expectation is confirmed directly between Prime Nation Haul and the carrier in writing. Nothing on this website creates a long-term commitment, cancellation policy, or contractual fee schedule.",
      },
    ],
  },
];

export const allFaqs = faqCategories.flatMap((category) => category.faqs);

export const homeFaqs = allFaqs.slice(0, 5);
