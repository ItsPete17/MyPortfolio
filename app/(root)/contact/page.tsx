import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
// Deleted: import GithubRedirectCard ... 
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      {/* Centered layout for the form, removed the side card */}
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </PageContainer>
  );
}