export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type LegalSectionData = {
  id: string;
  number: string;
  title: string;
  accent?: "orange";
  blocks: LegalBlock[];
};

export const legalImages = {
  privacyHero: "/Assest/privacy policy.png",
  termsHero: "/Assest/tremand condtions.png",
};

export const legalUpdated = "September 25, 2026";

export const privacySections: LegalSectionData[] = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    blocks: [
      { type: "paragraph", text: "TechNic Technologies respects the privacy of people who visit this website or contact the team. This policy describes, in general terms, how personal information may be collected, used, shared, and protected." },
      { type: "paragraph", text: "This page is draft copy and needs legal review before it is treated as company policy. It does not claim compliance with any specific privacy law." },
    ],
  },
  {
    id: "information-we-collect",
    number: "02",
    title: "Information We Collect",
    blocks: [
      { type: "paragraph", text: "Depending on how you use the website, we may collect information you choose to send us and limited technical information about the visit." },
      { type: "list", items: ["Name", "Email address", "Phone number", "Company information", "Message or project details you submit", "Device and browser information", "IP address", "Pages visited and similar website usage information"] },
    ],
  },
  {
    id: "how-we-use-information",
    number: "03",
    title: "How We Use Information",
    blocks: [
      { type: "paragraph", text: "Information is used to operate the website and respond to people who contact TechNic Technologies." },
      { type: "list", items: ["Providing the services or information you asked for", "Responding to inquiries", "Improving the website experience", "Sending a reply you requested", "Protecting the website and its users", "Understanding aggregate site usage"] },
    ],
  },
  {
    id: "information-sharing",
    number: "04",
    title: "Information Sharing",
    blocks: [
      { type: "paragraph", text: "Information may be shared with service providers that help operate the website or deliver a message you sent, and only for that purpose." },
      { type: "paragraph", text: "This draft does not name vendors or describe a sale of personal information. A reviewed policy should replace this section before publication." },
    ],
  },
  {
    id: "cookies",
    number: "05",
    title: "Cookies & Tracking",
    blocks: [
      { type: "paragraph", text: "The website may use cookies or similar technologies to remember a visit, keep the site working, or understand which pages are used." },
      { type: "paragraph", text: "A reviewed policy should describe the specific cookies in use and how a visitor can control them. That detail is not finalized here." },
    ],
  },
  {
    id: "data-security",
    number: "06",
    title: "Data Security",
    accent: "orange",
    blocks: [
      { type: "paragraph", text: "Reasonable technical and organizational safeguards are used to protect information handled through the website." },
      { type: "paragraph", text: "No method of storage or transmission is completely secure, and this page does not promise absolute security." },
    ],
  },
  {
    id: "your-rights",
    number: "07",
    title: "Your Rights",
    blocks: [
      { type: "paragraph", text: "You can contact the team to ask about the information associated with you. What can be provided, corrected, or deleted depends on the request and on a reviewed privacy policy." },
      { type: "list", items: ["Ask what information is held", "Ask for a correction", "Ask for deletion where it is appropriate", "Ask to stop a message you no longer want"] },
    ],
  },
  {
    id: "data-retention",
    number: "08",
    title: "Data Retention",
    blocks: [
      { type: "paragraph", text: "Information is kept only as long as it is needed for the purpose it was collected, or for a legitimate business, legal, or operational reason." },
      { type: "paragraph", text: "This draft does not set a specific retention period." },
    ],
  },
  {
    id: "third-party-services",
    number: "09",
    title: "Third-Party Services",
    blocks: [
      { type: "paragraph", text: "The website or a form may rely on outside services for hosting, email, or analytics. Those services process information under their own terms." },
      { type: "paragraph", text: "This draft does not list specific third-party vendors." },
    ],
  },
  {
    id: "childrens-privacy",
    number: "10",
    title: "Children's Privacy",
    blocks: [
      { type: "paragraph", text: "This website is meant for businesses and adults. It is not directed at children, and the team does not knowingly collect information from children." },
    ],
  },
  {
    id: "policy-updates",
    number: "11",
    title: "Policy Updates",
    blocks: [
      { type: "paragraph", text: "This page may be updated when the practices or the reviewed policy change. The date at the top of the page will show the latest draft date." },
    ],
  },
  {
    id: "contact-us",
    number: "12",
    title: "Contact Us",
    blocks: [
      { type: "paragraph", text: "Questions about this draft can be sent through the contact page. If a public email is configured for the site, it is shown in the section below." },
    ],
  },
];

export const termsSections: LegalSectionData[] = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    blocks: [
      { type: "paragraph", text: "These Terms & Conditions are draft copy for the TechNic Technologies website. They describe, in general terms, how the public website is meant to be used." },
      { type: "paragraph", text: "This page needs legal review before it is treated as binding terms. It does not set a governing law, a refund policy, or a project contract." },
    ],
  },
  {
    id: "use-of-our-website",
    number: "02",
    title: "Use of Our Website",
    blocks: [
      { type: "paragraph", text: "You may browse the public pages and send an inquiry. You should not misuse the site, attempt to disrupt it, or submit information you do not have the right to share." },
    ],
  },
  {
    id: "services",
    number: "03",
    title: "Services",
    blocks: [
      { type: "paragraph", text: "Descriptions of services on the website are general. A specific engagement, timeline, and price are agreed separately and are not created by this page." },
    ],
  },
  {
    id: "user-responsibilities",
    number: "04",
    title: "User Responsibilities",
    blocks: [
      { type: "paragraph", text: "People who submit a form should provide accurate contact details and should not send unlawful, harmful, or misleading content." },
    ],
  },
  {
    id: "intellectual-property",
    number: "05",
    title: "Intellectual Property",
    blocks: [
      { type: "paragraph", text: "The website design, text, and branding are owned by TechNic Technologies or its licensors unless a page says otherwise. You may not copy them for your own commercial use without permission." },
      { type: "paragraph", text: "Ownership of work delivered under a client project is defined in that project's agreement, not on this page." },
    ],
  },
  {
    id: "payments-refunds",
    number: "06",
    title: "Payments & Refunds",
    blocks: [
      { type: "paragraph", text: "This website does not take payment by itself. When a project includes fees or a refund arrangement, those terms belong in the proposal or agreement for that work." },
      { type: "paragraph", text: "This draft does not create a refund policy." },
    ],
  },
  {
    id: "limitation-of-liability",
    number: "07",
    title: "Limitation of Liability",
    accent: "orange",
    blocks: [
      { type: "paragraph", text: "The public website is provided for general information. It may change, and a page may be incomplete while content is being reviewed." },
      { type: "paragraph", text: "A final limitation of liability has not been approved. This section must be rewritten after legal review and should not be relied on as a waiver." },
    ],
  },
  {
    id: "termination",
    number: "08",
    title: "Termination",
    blocks: [
      { type: "paragraph", text: "Access to the public website may be limited if it is misused. Ending a client project is handled in that project's agreement, not here." },
    ],
  },
  {
    id: "governing-law",
    number: "09",
    title: "Governing Law",
    blocks: [
      { type: "paragraph", text: "The governing law and venue for these terms have not been chosen. This section will be completed after legal review. No jurisdiction is stated here." },
    ],
  },
  {
    id: "changes-to-terms",
    number: "10",
    title: "Changes to Terms",
    blocks: [
      { type: "paragraph", text: "These draft terms may be updated. The date at the top of the page shows when this copy was last prepared." },
    ],
  },
  {
    id: "contact-us",
    number: "11",
    title: "Contact Us",
    blocks: [
      { type: "paragraph", text: "Questions about this draft can be sent through the contact page. A configured public email, when one exists, is shown below." },
    ],
  },
];
