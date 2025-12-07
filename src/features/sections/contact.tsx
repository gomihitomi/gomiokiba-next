import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { navigationItems } from "@/constants/navigation";

const sectionItem = {
  id: navigationItems.CONTACT.id,
  title: navigationItems.CONTACT.label,
};

export const Contact = () => (
  <Section {...sectionItem}>
    <ContactForm />
  </Section>
);
