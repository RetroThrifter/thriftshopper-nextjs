export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
          Terms & Conditions
        </h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> September 1, 2025
          </p>

          <div className="mb-6">
            <strong>Purpose:</strong> These Terms & Conditions ("Terms") set out the rules for using the ThriftShopper
            website and newsletter. By visiting our site or subscribing, you agree to these Terms.
          </div>

          <p>Please read these Terms carefully. They govern your access and use of our content.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Acceptable Use</h2>
          <p>You agree to use our site and services only for lawful, personal purposes. You must not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violating any laws or regulations (e.g. hacking, fraud, piracy)</li>
            <li>Upload or distribute harmful content (malware, viruses)</li>
            <li>Attempt to gain unauthorized access to our systems or other users' data</li>
            <li>Interfere with the site's functionality (overloading servers, scraping data)</li>
          </ul>
          <p>Failure to follow these rules may result in termination of your access.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Intellectual Property</h2>
          <p>
            All materials on this site – including text, graphics, logos, and other content – are owned by ThriftShopper
            (or used with permission) and protected by copyright and trademark laws.
          </p>
          <p>
            You may view and print copies of pages for your personal, non-commercial use only. You must not copy,
            modify, reproduce, distribute, or create derivative works from our content without our written permission.
          </p>
          <p>
            All rights not expressly granted are reserved. If you post feedback or suggestions (we currently do not
            allow comments or submissions), you grant us a non-exclusive, royalty-free license to use them.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Links to Other Websites</h2>
          <p>
            Our site may contain links to third-party websites (for example, sources or partner sites). We are not
            responsible for the content, privacy policies, or practices of those sites. When you follow a link, you
            leave our site, and any terms on that site apply. We encourage you to review the terms and privacy policies
            of any external sites you visit.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Disclaimers</h2>
          <p>
            <strong>Information Only.</strong> Our content is for general informational purposes. We do not guarantee
            its accuracy, completeness, or usefulness. Examples from other sources or articles are not endorsed by us.
          </p>
          <p>
            <strong>No Warranty.</strong> This site and its content are provided "as-is" and "as available," without
            warranties of any kind. We disclaim all warranties – expressed or implied – including merchantability,
            fitness for a particular purpose, or non-infringement.
          </p>
          <p>We do our best to provide accurate, up-to-date information, but you use the site at your own risk.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, ThriftShopper and its officers, agents, affiliates, and suppliers
            will not be liable for any direct, indirect, incidental, special or consequential damages (including lost
            profits, data loss, or business interruption) arising out of your use of the site or inability to use it,
            even if we knew such damages were possible.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the website (and your newsletter subscription)
            at any time, with or without notice, if you breach these Terms or for any other reason at our discretion.
          </p>
          <p>
            If we terminate your access, you must immediately stop using the site and delete any downloaded materials.
            The clauses on Intellectual Property, Disclaimer, and Limitation of Liability will survive termination.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Governing Law</h2>
          <p>
            These Terms are governed by the laws of NY, USA, without regard to conflict of laws. This means any disputes
            will be handled under NY law. If you are a consumer in a place with mandatory laws (for example, in the EU),
            those laws still apply and may give you additional protections.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. If we make material changes, we will attempt to notify you (for
            example, by email or posting a notice on the site) before they take effect. Any changes become effective
            when posted. Your continued use of the site after changes means you accept the new Terms.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            For questions or concerns about these Terms, please contact us at{" "}
            <a href="mailto:connie@thriftshopper.ai" className="text-primary hover:underline">
              connie@thriftshopper.ai
            </a>
          </p>

          <p className="text-sm text-muted-foreground mt-8">Last updated: September 1, 2025</p>
        </div>
      </div>
    </div>
  )
}
