"use client";
import Hero from "../components/Hero";
import ContactForm from "./components/ContactForm";

const page = () => {
  return (
    <div>
      <Hero
        line1="Utforsk Mulighetene"
        line2="Ta Kontakt Med Oss i Dag!"
        description="Vi er spente på å høre fra deg og utforske de utallige mulighetene som ligger foran oss. Enten du har spørsmål, ønsker veiledning eller har en idé du vil dele, er vi her for å lytte og hjelpe."
        image="/contact.png"
      />
      <div className="2xl:max-w-[2000px] xl:max-w-[1440px] mx-auto relative px-10 sm:px-5">
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
