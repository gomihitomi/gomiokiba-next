import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";
import { navigationItems } from "@/constants/navigation";

const sectionItem = {
  id: navigationItems.CONTACT.id,
  title: navigationItems.CONTACT.label,
};

export const Contact = () => (
  <Section {...sectionItem}>
    <p className="mb-2">
      吾味人美に関するご意見・ご感想、お仕事に関する相談等がありましたら、こちらからどうぞ！
    </p>
    <ContactForm />
  </Section>
);
