"use client";
import { Clock, Dot, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site-content";
import {
  PageHeader,
  Section,
  SectionHeader,
} from "../../components/primitives";
import { Reveal } from "../../components/reveal";
import { ContactForm } from "./contact-form";



const ContactPage = () => {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's Discuss Your Next Requirement."
        intro="Share the scope and timeline. Our team will respond with a clear view of how Instant Shield can deliver it."
      />
      <Section>
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="Enquiry" title="Send Us a Message" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Offices" title="Where to Reach Us" />
            <div className="mt-10 space-y-4">
              <Reveal delay={240}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  {CONTACT.offices.map((o) => (
                    <div key={o.city} className="mb-5">
                      <div className="flex items-center gap-x-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold">
                        <MapPin className="h-3.5 w-3.5" />
                        {o.city}
                      </div>
                      {o.addresses.map((address, index) => (
                        <p
                          key={`${o.city}-${index}`}
                          className="text-sm leading-relaxed text-slate"
                        >
                          {address}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {CONTACT.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="text-slate"
                        >
                          {phone}
                        </a>
                      ))}
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className="text-slate">{CONTACT.email}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className="text-slate">{CONTACT.hours}</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={240}>
                <div className="bg-navy p-2 text-gray-300">
                  <div className="flex gap-2 text-center text-sm justify-center">
                    <h3 className="font-semibold uppercase tracking-[0.2em] text-gold">
                      RC: 1866410
                    </h3>{" "}
                    <Dot />
                    <h3 className="font-semibold leading-snug">
                      Federal Republic of Nigeria
                    </h3>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
