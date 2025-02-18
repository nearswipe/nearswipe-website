"use client";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="w-full min-h-screen text-white bg-black font-roboto px-5 sm:px-8 md:px-20 py-12 pt-32">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-6 md:mb-12"
      >
        PRIVACY POLICY
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
      <div className="space-y-8 w-full sm:space-y-10">
        {[
          {
            title: "1. INTRODUCTION",
            content:
              "NearSwipe, Inc. ('NearSwipe', 'we', 'us', or 'our') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with our financial technology platform.",
          },
          {
            title: "2. INFORMATION WE COLLECT",
            content: [
              "We collect information in the following ways:",
              "• Personal Data: Name, email, phone number, and payment information.",
              "• Financial Data: Bank details, transaction history, and account balances.",
              "• Device & Usage Data: IP address, browser type, and interaction logs.",
              "• Cookies & Tracking Technologies: Data collected via cookies and analytics tools.",
            ],
          },
          {
            title: "3. HOW WE USE YOUR INFORMATION",
            content: [
              "We use your data to:",
              "• Provide and maintain our financial services.",
              "• Process payments and secure transactions.",
              "• Improve user experience and conduct analytics.",
              "• Prevent fraud, comply with regulations, and protect user accounts.",
            ],
          },
          {
            title: "4. COMPLIANCE WITH FINANCIAL REGULATIONS",
            content: [
              "NearSwipe complies with applicable financial regulations, including but not limited to:",
              "• **U.S. Financial Regulations:** Compliance with FinCEN, SEC, and state banking laws.",
              "• **Nigerian Financial Laws:** Compliance with the Central Bank of Nigeria (CBN) guidelines.",
              "• **Anti-Money Laundering (AML) & Know Your Customer (KYC):** Identity verification and fraud prevention in accordance with international banking standards.",
              "• **PCI DSS Compliance:** Payment Card Industry Data Security Standards for protecting transactions.",
            ],
          },
          {
            title: "5. DATA SECURITY & RETENTION",
            content:
              "We implement industry-leading security measures to protect your data. NearSwipe retains user data for as long as required by financial regulations or necessary for service provision.",
          },
          {
            title: "6. YOUR RIGHTS",
            content: [
              "Depending on your location, you may have rights under GDPR, NDPR, or CCPA, including:",
              "• Accessing and updating your personal data.",
              "• Requesting data deletion or portability.",
              "• Opting out of marketing communications.",
            ],
          },
          {
            title: "7. CONTACT US",
            content: "For questions, contact our Legal Team at legal@nearswipe.com.",
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

export default PrivacyPolicy;
