"use client";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="w-full min-h-screen text-white bg-black font-roboto px-5 sm:px-8 md:px-20 py-12 pt-32">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-6 md:mb-12"
      >
        TERMS OF SERVICE
      </motion.h1>

      {/* Effective & Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-sm sm:text-md md:text-lg text-center text-[#a1a1aa] mb-10 leading-relaxed"
      >
        <p>Effective Date: 18 February, 2025</p>
        <p>Last Updated: 18 February, 2025</p>
        <p>Address: 5 Alh. Tokan St, Alaka, Lagos 101283</p>
        <p>
          Email:{" "}
          <a href="mailto:legal@nearswipe.com" className="text-[#635BFF] underline">
            legal@nearswipe.com
          </a>
        </p>
        <p>Phone: +234 (806) 364-2312</p>
      </motion.div>

      {/* Sections */}
      <div className="space-y-8 sm:space-y-10">
        {[
          {
            title: "1. AGREEMENT TO TERMS",
            content:
              "These Terms of Service ('Terms') govern your access to and use of NearSwipe's services, including its financial technology platform, website, and applications. By using our services, you agree to be bound by these Terms.",
          },
          {
            title: "2. ACCOUNT REGISTRATION & RESPONSIBILITIES",
            content: [
              "• Users must be at least 18 years old to create an account.",
              "• You are responsible for safeguarding your account credentials.",
              "• Any unauthorized use of your account must be reported immediately.",
            ],
          },
          {
            title: "3. PAYMENT & TRANSACTIONS",
            content: [
              "• Transactions through NearSwipe must comply with applicable laws and regulations.",
              "• Fees may apply for certain services, and all payments are final unless otherwise stated.",
              "• NearSwipe does not hold customer funds and is not liable for third-party banking or payment processing failures.",
            ],
          },
          {
            title: "4. LIABILITY DISCLAIMERS",
            content: [
              "• NearSwipe is not responsible for financial losses due to system outages, unauthorized transactions, or regulatory changes.",
              "• Users are solely responsible for their financial decisions made through the NearSwipe platform.",
              "• We do not provide financial, investment, or legal advice.",
            ],
          },
          {
            title: "5. DISPUTE RESOLUTION & ARBITRATION",
            content: [
              "• All disputes must first be attempted to be resolved through **negotiation**.",
              "• If unresolved, disputes shall be settled by **binding arbitration** in **Delaware, U.S.** for U.S. users and **Lagos, Nigeria** for Nigerian users.",
              "• Users waive their right to participate in class-action lawsuits against NearSwipe.",
            ],
          },
          {
            title: "6. COMPLIANCE WITH REGULATORY LAWS",
            content: [
              "NearSwipe operates in compliance with the financial regulations of both the United States and Nigeria, including:",
              "• **U.S. Banking Laws:** Compliance with FinCEN, SEC, and FDIC regulations where applicable.",
              "• **Nigerian CBN Regulations:** Compliance with Central Bank of Nigeria (CBN) and NDIC laws.",
              "• **AML & KYC:** Anti-money laundering and identity verification policies for all users.",
            ],
          },
          {
            title: "7. TERMINATION",
            content:
              "NearSwipe reserves the right to terminate accounts that violate these Terms or applicable laws.",
          },
          {
            title: "8. CHANGES TO THESE TERMS",
            content:
              "NearSwipe may update these Terms at any time. Continued use after changes constitutes acceptance.",
          },
          {
            title: "9. CONTACT INFORMATION",
            content:
              "For inquiries, please reach out to legal@nearswipe.com.",
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1e1e1e] p-5 sm:p-6 md:p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-black mb-3">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="list-disc list-inside text-[#a1a1aa] text-sm sm:text-md md:text-lg leading-relaxed">
                {section.content.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            ) : (
              <p className="text-[#a1a1aa] text-sm sm:text-md md:text-lg leading-relaxed">
                {section.content}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfService;
