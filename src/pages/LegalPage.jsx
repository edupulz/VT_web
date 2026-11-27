import PageHead from '../components/PageHead';
import ActionButton from '../components/ActionButton';

function TermsContent() {
  return (
    <div className="space-y-8 text-sm sm:text-base text-[#101828] leading-relaxed">
      <p>
        These Terms and Conditions (&ldquo;Terms&rdquo;) constitute a legally binding agreement
        between you, the Client, and Vijayan Tech (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a company specializing in website and mobile
        application development. By engaging us for any services, you agree to be bound by these
        Terms.
      </p>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">1. Services Provided</h2>
        <p>
          The Company agrees to provide custom software development services, including, but not
          limited to, the design, development, testing, and deployment of:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Websites and Web Applications</li>
          <li>Mobile Applications (iOS, Android, and cross-platform)</li>
          <li>Related services such as maintenance, support, and consultation.</li>
        </ul>
        <p>
          The specific details, scope, deliverables, and timelines for each project will be outlined
          in a separate written document, such as a Statement of Work (SOW) or a Project Proposal,
          which will be incorporated into and made a part of these Terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">2. Client Responsibilities</h2>
        <p>The Client agrees to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#101828]">Provide Timely Information:</strong> Furnish all
            necessary content, images, data, access credentials, and feedback required for the
            project in a timely manner.
          </li>
          <li>
            <strong className="text-[#101828]">Review and Approval:</strong> Promptly review and
            approve deliverables at various stages of the project as specified in the SOW.
          </li>
          <li>
            <strong className="text-[#101828]">Cooperation:</strong> Appoint a single point of
            contact to liaise with the Company&apos;s team.
          </li>
          <li>
            <strong className="text-[#101828]">Legal Compliance:</strong> Ensure that all
            materials, data, and content provided to the Company comply with all applicable laws and
            regulations and do not infringe upon any third-party rights.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">3. Payment Terms</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-[#101828]">Fees:</strong> The Client agrees to pay the Company
            the fees specified in the SOW or Project Proposal.
          </li>
          <li>
            <strong className="text-[#101828]">Invoicing and Payment Schedule:</strong> Payments
            will be structured according to the schedule set out in the SOW (e.g., deposit,
            milestone, final payment).
          </li>
          <li>
            <strong className="text-[#101828]">Late Payments:</strong> The Company reserves the
            right to suspend work. Overdue payments may be subject to a late payment fee of [Specify
            Percentage, e.g., 1.5%] per month.
          </li>
          <li>
            <strong className="text-[#101828]">Taxes:</strong> All fees are exclusive of applicable
            taxes (GST, VAT, etc.), which shall be borne by the Client.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">
          4. Intellectual Property Rights (IP)
        </h2>
        <p>
          <strong className="text-[#101828]">A. Ownership of Deliverables:</strong> Upon full and
          final payment of all fees, the Company shall assign and transfer to the Client all
          intellectual property rights in the final code, visual design, and other custom
          deliverables created specifically for the Client.
        </p>
        <p>
          <strong className="text-[#101828]">B. Company&apos;s Background IP:</strong> The Company
          retains all IP rights to its proprietary software, tools, and pre-existing code
          (&ldquo;Background IP&rdquo;). The Client is granted a non-exclusive, perpetual,
          worldwide, royalty-free license to use the Background IP solely as embedded within the
          final deliverables.
        </p>
        <p>
          <strong className="text-[#101828]">C. Third-Party IP:</strong> The use of open-source
          software or other third-party components will be subject to their respective licenses.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">
          5. Warranties and Limitation of Liability
        </h2>
        <p>
          <strong className="text-[#101828]">A. Limited Warranty:</strong> The software is
          warranted to substantially conform to the specifications in the SOW for a period of
          [Specify Time, e.g., 30 days] after delivery. The Company&apos;s sole remedy for breach is
          to correct the non-conformity.
        </p>
        <p>
          <strong className="text-[#101828]">B. Disclaimer of Warranties:</strong> Services and
          deliverables are provided &ldquo;AS IS.&rdquo; The Company disclaims all other warranties,
          express or implied, including merchantability and fitness for a particular purpose.
        </p>
        <p>
          <strong className="text-[#101828]">C. Limitation of Liability:</strong> The Company&apos;s
          total cumulative liability to the Client shall not exceed the total fees paid by the Client
          to the Company for the specific project giving rise to the claim.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">6. Confidentiality</h2>
        <p>
          Both parties agree to treat all shared confidential information as such and will not
          disclose it to any third party without prior written consent, except as required by law.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">7. Termination</h2>
        <p>
          <strong className="text-[#101828]">A. Termination by Client:</strong> If terminated without
          cause, the Client must pay for all work completed up to the date of termination.
        </p>
        <p>
          <strong className="text-[#101828]">B. Termination by Company:</strong> The Company may
          terminate upon written notice if the Client breaches these Terms (including non-payment)
          and fails to cure the breach within 10 days.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">
          8. Governing Law and Dispute Resolution
        </h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of Tamil Nadu,
          India. Any disputes shall be resolved by binding arbitration in Erode, Tamil Nadu, India.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">9. Entire Agreement</h2>
        <p>
          These Terms, together with any SOW or Project Proposal, constitute the entire agreement
          between the parties.
        </p>
      </section>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="space-y-8 text-sm sm:text-base text-[#101828] leading-relaxed">
      <p>
        Your privacy is important to us. It is Vijayan Tech&apos;s policy to respect your privacy
        and comply with any applicable law and regulation regarding any personal information we may
        collect about you, including across our website,{' '}
        <a
          href="https://vijayantech.com"
          target="_blank"
          rel="noreferrer"
          className="text-[#2563EB] hover:underline font-medium"
        >
          https://vijayantech.com
        </a>
        , and other sites we own and operate.
      </p>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">Information We Collect</h2>
        <p>
          Information we collect includes both information you knowingly and actively provide us
          when using or participating in any of our services and promotions, and any information
          automatically sent by your devices in the course of accessing our products and services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">Log Data</h2>
        <p>
          When you visit our website, our servers may automatically log the standard data provided
          by your web browser. It may include your device&apos;s Internet Protocol (IP) address,
          your browser type and version, the pages you visit, the time and date of your visit, the
          time spent on each page, other details about your visit, and technical details that occur
          in conjunction with any errors you may encounter. Please be aware that while this
          information may not be personally identifying by itself, it may be possible to combine it
          with other data to personally identify individual persons.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">Personal Information</h2>
        <p>
          We may ask for personal information which may include one or more of the following:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Name</li>
          <li>Email</li>
          <li>Social media profiles</li>
          <li>Date of birth</li>
          <li>Phone/mobile number</li>
          <li>Home/mailing address</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">
          Legitimate Reasons for Processing Your Personal Information
        </h2>
        <p>
          We only collect and use your personal information when we have a legitimate reason for
          doing so. In which instance, we only collect personal information that is reasonably
          necessary to provide our services to you.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">
          Collection and Use of Information
        </h2>
        <p>
          We may collect personal information from you when you do any of the following on our
          website:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Enter any of our competitions, contests, sweepstakes, and surveys</li>
          <li>Sign up to receive updates from us via email or social media channels</li>
          <li>Use a mobile device or web browser to access our content</li>
          <li>Contact us via email, social media, or on any similar technologies</li>
          <li>When you mention us on social media</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">
          Personal Information from Third Parties
        </h2>
        <p>
          We accept information from third parties. We will protect information collected from third
          parties according to the practices described in this privacy policy. We may also be
          limited in the protection offered to you by these third parties&apos; privacy policies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">
          Use of Your Personal Information
        </h2>
        <p>
          We may use a combination of acquisition and use information for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>to provide you with our website&apos;s core features and services</li>
          <li>to improve your user experience of our website</li>
          <li>to deliver advertising and marketing that we believe may be of interest to you</li>
          <li>
            to enable you to access and use our website, associated applications, and associated
            social media platforms
          </li>
          <li>for internal record keeping and administrative purposes</li>
          <li>to run competitions, sweepstakes, and/or offer additional benefits to you</li>
          <li>to comply with our legal obligations and resolve any disputes that we may have</li>
          <li>
            for security and fraud prevention, and to ensure that our sites and apps are safe,
            secure, and used in line with our terms of use
          </li>
        </ul>
        <p>
          Please be aware that we may combine information we collect about you with general
          information or research data we receive from other trusted sources.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">
          Security of Your Personal Information
        </h2>
        <p>
          When we collect and process personal information, and while we retain this information, we
          will protect it within commercially acceptable means to prevent loss and theft, as well as
          unauthorized access, disclosure, copying, use, or modification. Although we will do our
          best to protect the personal information you provide to us, we advise that no method of
          electronic transmission or storage is 100% secure, and no one can guarantee absolute data
          security. We will comply with laws applicable to us in respect of any data breach. You are
          responsible for selecting any password and its overall security strength, ensuring the
          security of your own information within the bounds of our services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">
          How Long We Keep Your Personal Information
        </h2>
        <p>
          We keep your personal information only for as long as is necessary. This time period may
          depend on what we are using your information for, in accordance with this privacy policy.
          If your personal information is no longer required, we will erase it or make it anonymous
          by removing all details that identify you. However, if necessary, we may retain your
          personal information for our compliance with a legal, accounting, or reporting obligation
          or for archiving purposes in the public interest.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">
          Disclosure of Personal Information to Third Parties
        </h2>
        <p>We may disclose personal information to:</p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>a parent, subsidiary, or affiliate of our company</li>
          <li>
            third party service providers for the purpose of enabling them to provide their
            services, for example, IT service providers, data storage, hosting and server providers,
            advertisers, or analytics platforms
          </li>
          <li>our employees, contractors, and/or related entities</li>
          <li>our existing or potential agents or business partners</li>
          <li>sponsors or promoters of any competition, sweepstakes, or promotion we run</li>
          <li>
            courts, tribunals, regulatory authorities, and law enforcement officers, as required by
            law, in connection with any actual or prospective legal proceedings, or in order to
            establish, exercise, or defend our legal rights
          </li>
          <li>
            third parties, including agents or sub-contractors, who assist us in providing
            information, products, services, or direct marketing to you
          </li>
          <li>third parties to collect and process data</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">
          International Transfers of Personal Information
        </h2>
        <p>
          The personal information we collect is stored and/or processed where we or our partners,
          affiliates, and third-party providers maintain facilities. Please be aware that the
          locations to which we store, process, or transfer your personal information may not have
          the same data protection laws as the country in which you initially provided the
          information. If we transfer your personal information to third parties in other countries:
          (i) we will perform those transfers in accordance with the requirements of applicable law;
          and (ii) we will protect the transferred personal information in accordance with this
          privacy policy.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">
          Your Rights and Controlling Your Personal Information
        </h2>
        <p>
          You always retain the right to withhold personal information from us, with the
          understanding that your experience of our website may be affected. We will not
          discriminate against you for exercising any of your rights over your personal information.
          If you do provide us with personal information, you understand that we will collect, hold,
          use and disclose it in accordance with this privacy policy. You retain the right to
          request details of any personal information we hold about you.
        </p>
        <p>
          If you receive communication from us, you may change your mind at any time. We will
          provide you with the ability to unsubscribe from our email-database or opt out of
          communications. Please be aware we may need to request specific information from you to
          help us confirm your identity.
        </p>
        <p>
          If you believe that any information we hold about you is inaccurate, out of date,
          incomplete, irrelevant, or misleading, please contact us using the details provided in
          this privacy policy. We will take reasonable steps to correct any information found to be
          inaccurate, incomplete, misleading, or out of date.
        </p>
        <p>
          If you believe that we have breached a relevant data protection law and wish to make a
          complaint, please contact us using the details below and provide us with full details of
          the alleged breach. We will promptly investigate your complaint and respond to you, in
          writing, setting out the outcome of our investigation and the steps we will take to deal
          with your complaint. You also have the right to contact a regulatory body or data
          protection authority in relation to your complaint.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">Use of Cookies</h2>
        <p>
          We use &ldquo;cookies&rdquo; to collect information about you and your activity across our
          site. A cookie is a small piece of data that our website stores on your computer, and
          accesses each time you visit, so we can understand how you use our site. This helps us
          serve you content based on preferences you have specified. Please note that we provide a
          Cookie Preference Modal to customize your cookie settings.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">Limits of Our Policy</h2>
        <p>
          Our website may link to external sites that are not operated by us. Please be aware that
          we have no control over the content and policies of those sites, and cannot accept
          responsibility or liability for their respective privacy practices.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl font-bold text-[#101828]">Changes to This Policy</h2>
        <p>
          At our discretion, we may change our privacy policy to reflect updates to our business
          processes, current acceptable practices, or legislative or regulatory changes. If we
          decide to change this privacy policy, we will post the changes here at the same link by
          which you are accessing this privacy policy. If the changes are significant, or if
          required by applicable law, we will contact you (based on your selected preferences for
          communications from us) and all our registered users with the new details and links to the
          updated or changed policy. If required by law, we will get your permission or give you the
          opportunity to opt in to or opt out of, as applicable, any new uses of your personal
          information.
        </p>
      </section>
    </div>
  );
}

export default function LegalPage({ type = 'privacy' }) {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';
  const lastUpdated = isPrivacy ? 'Oct 12, 2025' : '04 November 2025';

  return (
    <>
      <PageHead
        title={`${title} | Vijayan Tech`}
        description={`${title} for Vijayan Tech corporate website and digital services.`}
      />
      <section className="pt-32 pb-24 sm:pt-40 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-6">
          <p className="eyebrow-label">Legal</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#101828]">{title}</h1>
          <p className="text-sm text-[#101828] pb-4 border-b border-[#E4E7EC]">
            Last updated: {lastUpdated}
          </p>

          <div className="pt-2">{isPrivacy ? <PrivacyContent /> : <TermsContent />}</div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-[#EAF2FF] border-t border-[#D6E4FF]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#101828]">
            {isPrivacy ? 'Contact Us' : 'Contact Information'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#101828] max-w-2xl mx-auto leading-relaxed">
            {isPrivacy
              ? 'For any questions or concerns regarding your privacy, you may contact us using the following details:'
              : 'If you have any questions about these Terms, please contact us at:'}
          </p>
          <div className="mt-8">
            <ActionButton to="/contact" className="px-7 py-4 text-sm sm:text-base">
              Contact Us
            </ActionButton>
          </div>
        </div>
      </section>
    </>
  );
}
