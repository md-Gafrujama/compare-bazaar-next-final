"use client";

import React from "react";
import Link from "next/link";

const CRMKeyFeaturesSection = () => {
  return (
    <section id="key-features" className="mt-8 max-w-7xl mx-auto">
      <div className="max-w-none">
        {/* Main Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          Key CRM features to consider for your use case
        </h1>

        {/* First Paragraph */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
            While there are certainly software solutions that are
            objectively "bad," the majority of options in any given
            vertical will be valued by how well they satisfy the
            intended use case. Trying to apply the tool outside the
            parameters it was designed for may fail to meet
            expectations, but that does not necessarily mean the
            software itself is of poor quality. It's just a bad match.
          </p>
        </div>

        {/* Second Paragraph with Links */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
            Below are some core areas of concern for CRM consumers to
            consider when shopping around to help them find a tool
            that aligns with their needs.{" "}
            <Link
              href="/enterprise-project-management"
              className="text-orange-600 hover:text-orange-800 hover:underline transition-colors duration-200 font-medium"
            >
              The Different Types of Roles & Responsibilities in a CRM
            </Link>{" "}
          </p>
        </div>

        {/* Contact management Section */}
        <div>
          {/* Contact management Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Contact management
          </h2>

          {/* Contact management Paragraph */}
          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
            For CRM tools, the most foundational functionality is that
            of collecting and organizing contact information. At the
            very least, it needs to be a step up from simply dumping
            leads into a spreadsheet only to immediately be forgotten.
            Spreadsheets have their place, but they aren't optimized
            for automation or to serve as living records. If a CRM
            can't improve on manual data entry, manual data scrubbing,
            and manual retrieval, then it's just Excel with extra
            steps.
          </p>

          {/* Additional Contact Management Info */}
          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-4">
            Contact management features in CRM and sales software, it
            should be noted, vary widely from system to system. But
            the common upgrades to functionality will likely look
            familiar to anyone who's been using digital devices in the
            past two decades:
          </p>

          <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2">
            <li>Automated data importing</li>
            <li>
              Data export flexibility (via EDI, CSV, or other formats)
            </li>
            <li>
              Integrations with other platforms, apps, and databases
            </li>
            <li>Filters and search functions</li>
            <li>Analytics and reporting functions</li>
          </ul>
        </div>
        {/*Communication recordsSection */}
        <div>
          {/* Communication records Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Communication records
          </h2>

          {/* Communication records Paragraph */}
          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed mb-6">
            By now, nearly everyone is familiar with the "This call may
            be recorded for quality assurance purposes" line spoken to
            customers calling in to a business for support. Having a
            record of customer/client/lead interactions can be
            indispensable. And not just for maintaining excellent
            service, either.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-6">
            Using recorded calls, chats, and other communication,
            businesses can achieve a multitude of important objectives,
            including:
          </p>

          <ul className="list-disc list-inside text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed space-y-2 mb-6">
            <li>
              Improving effectiveness of staff training, onboarding,
              company policies, and more
            </li>
            <li>
              Compiling data for analytics (which can help identify
              patterns, predict trends, and even recommend strategies)
            </li>
            <li>
              Providing evidence to help navigate legal concerns and
              protect against loss
            </li>
          </ul>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
            If benefits like these factor into your CRM and sales
            software choices, then be aware that some software includes
            functionality to support it, while some does not.
          </p>
        </div>
        {/* Integrations Section */}
        <div>
          {/* Integrations Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Integrations
          </h2>

          {/* Integrations Paragraphs */}
          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            Implementing new software systems can be difficult, and
            onboarding users only becomes more problematic when the
            system doesn't play well with existing solutions in the
            workflow.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            Some CRMs are built as part of a larger platform of business
            solutions, and are intended to be used as a holistic unit.
            This is a bit of a trade-off, and some cost-benefit
            evaluations will be needed to determine if a complete
            workflow overhaul will net positive or negative returns for
            the trouble.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            However, if maintaining the stability and functionality of
            other systems is of equal importance, then finding a CRM
            software that can integrate with them successfully is
            critical. Depending on what integrations are needed, there
            may be plug-ins or add-ons available already to users of the
            tool.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            For less common integrations, some more code-heavy API
            customization may be necessary. In these cases, it's a good
            idea to ask which side of the client-vendor partnership will
            be building the integration.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
            What should be avoided is the addition of a CRM that only
            further complicates workflows and requires additional manual
            processes to hold the system together.
          </p>
        </div>
        <div>
          {/* Marketing Automation Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Marketing automation
          </h2>

          {/* Marketing Automation Paragraphs */}
          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            Marketing automation is a specific example of the
            integration concerns above, but it merits its own spot on
            this list due to the amount of overlap between marketing and
            sales efforts. Like other sales-adjacent functions, there
            are a lot of advantages to having the CRM trigger automatic
            tasks such as sending confirmation emails, email nurture
            campaigns, and more.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            Worst-case scenario, similar to what's mentioned above, is
            that the new CRM complicates already existing processes,
            rather than integrating or replacing them. If your CRM or
            sales software adds another step in the process of, for
            example, sending outreach emails because staff members have
            to manually dig for contact info in the database, that's a
            net loss.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            At the very least, the CRM should leave any existing
            processes intact and unhindered. Most likely, however, your
            organization will benefit from some form of integration, or
            a CRM that includes marketing automation features natively.
          </p>
        </div>
        <div>
          {/* Quotes and Invoicing Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Quotes and invoicing
          </h2>

          {/* Quotes and Invoicing Paragraphs */}
          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            Next in line for important functions in the sales process
            that may or may not be handled by sales team members are
            financials, such as quotes, invoices, and other AP/AR
            responsibilities. The same philosophy applies here as above.
            If an all-in-one solution upgrades your workflow, prioritize
            that aspect in your research.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
            If integration will suffice, then double-check with vendors
            for the specific platforms you need to be interoperable.
            Even if your current process is efficient enough currently,
            be sure that the CRM software doesn't create additional
            headaches for anyone in the workflow.
          </p>
        </div>
        <div>
          {/* Data Privacy Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Data privacy
          </h2>

          {/* Data Privacy Paragraphs */}
          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            Cybersecurity is, arguably, a priority for every
            organization (or, at least it should be). Some verticals
            deal with higher risk than others, however, and may need
            additional security protocols for their CRM to protect
            themselves or even to comply with industry mandates.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            This is one that may require consulting with IT, InfoSec, or
            other I&O staff in the organization. Many of the technical
            details that factor into whether or not a CRM software is
            sufficiently secure may be outside the expertise of anyone
            without a background in computer systems, and it's not one
            to leave to chance.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
            Check with internal SMEs, and leverage their experience to
            further vet your shortlist of CRMs. It may even be
            worthwhile to have a 3rd-party vendor risk assessment done
            for any that meet all other criteria, just to cover your
            bases.
          </p>
        </div>
        <div>
          {/* Project Management Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            Project management
          </h2>

          {/* Project Management Paragraphs */}
          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            This list of supplemental functions that might be relevant
            would be pretty long if it were comprehensive. All-in-one
            systems, analytics and reporting, ease of use, pipeline
            management, and many more might fit here. Many of these have
            been touched on above, and others are likely known
            quantities already.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            So instead, this part of the list will finish with one final
            consideration: project management.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed mb-4">
            Organizations that have, until now, used less formalized
            workflow processes may not realize how much of an upgrade a
            well-designed project management strategy can be. As teams
            grow, workloads become heavier, and processes become more
            intricate and complex, tracking things on paper proves a
            substantial challenge.
          </p>

          <p className="text-base sm:text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed">
            With effective implementation, project management tools can
            provide visibility and accountability across the board.
            Better still, it can help staff achieve greater levels of
            autonomy by giving them the tools needed to stay organized
            and on top of their responsibilities. Some CRM and sales
            software tools include project management (PM) features in
            their toolset, while others can integrate with popular
            platforms via APIs. Either way, for any team larger than a
            handful of employees, it's worth discussing the potential
            value a CRM with PM enablement might bring to the table.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CRMKeyFeaturesSection;

