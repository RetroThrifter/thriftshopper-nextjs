export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
          ThriftShopper Privacy Notice
        </h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> September 1, 2025
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Purpose</h2>
          <p>
            This Privacy Notice explains how ThriftShopper ("we," "our") collects, uses, and protects personal
            information when you visit our website or subscribe to our newsletter.
          </p>
          <p>
            ThriftShopper respects your privacy and aims to be transparent about our data practices in compliance with
            laws like the EU's GDPR and California's CCPA. We collect only what we need (email addresses and basic usage
            data) and never sell your personal information. Below we describe what we collect, how we use it, and your
            rights.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Our Promise</h2>
          <p>
            At ThriftShopper, your trust matters most. We never sell or share your personal data, and we collect only
            what's necessary to make your experience work—like your email to join the network and basic usage analytics
            to help us improve the site. We believe in transparency, simplicity, and treating your information with the
            same care we give our own.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Email Address:</strong> You provide this when subscribing to our newsletter or joining the
              network. It's used only to send updates, announcements, and confirmations you've requested.
            </li>
            <li>
              <strong>Usage Data:</strong> We automatically collect non-personal technical data about how you use our
              site (for example, which pages or links you click). We use Google Analytics and standard cookies to
              understand engagement and improve content.
            </li>
            <li>
              <strong>Other Data:</strong> We don't collect sensitive information (like financial, health, or government
              ID data).
            </li>
          </ul>
          <p>
            We do not knowingly collect information from children under age 16. Our services are intended for adults; if
            you are under 16, please do not subscribe or provide us with personal data.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Sending Updates:</strong> To deliver newsletters, announcements, or product updates you've
              subscribed to.
            </li>
            <li>
              <strong>Improving Our Service:</strong> To understand engagement patterns and improve the platform (for
              example, "30% of readers clicked on X story"). All analytics data are aggregated and anonymous.
            </li>
            <li>
              <strong>Legal and Security:</strong> To comply with laws, prevent fraud, or maintain site security.
            </li>
          </ul>
          <p>We never use your email or activity data for any purpose other than those stated here.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Sharing and Disclosure</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> We use trusted third-party services (like Beehiiv for newsletters and
              Google for analytics). These providers act as processors on our behalf and follow strict data-handling
              standards.
            </li>
            <li>
              <strong>Aggregated Statistics:</strong> We may share anonymized summaries (e.g., "X% of users clicked on
              Y"), never personal data.
            </li>
            <li>
              <strong>Legal Requests:</strong> We will only share information if required by law (e.g., a court order).
            </li>
          </ul>
          <p>
            In summary: We never sell your email or personal data. We only share what's necessary for the ThriftShopper
            marketplace that you've opted into, and we keep your identity protected.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies (like Google Analytics) to measure traffic and improve user
            experience. You can disable cookies in your browser settings, though this may limit functionality.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Data Security and Retention</h2>
          <p>
            We take reasonable precautions to protect your information. Data is stored securely, transmitted via HTTPS,
            and accessible only to authorized personnel.
          </p>
          <p>
            We retain your email address only while you're subscribed. If you unsubscribe or request deletion, we
            promptly remove it. Anonymous usage data may be kept longer for aggregate trend analysis.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Your Rights</h2>
          <p>
            Depending on your location, you may have specific privacy rights under law (GDPR, CCPA/CPRA, etc.),
            including access, correction, deletion, and withdrawal of consent.
          </p>
          <p>To exercise any of these rights, contact us using the details below.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Changes to This Privacy Notice</h2>
          <p>
            We may update this Privacy Notice occasionally. The "Effective Date" above shows the latest revision. If
            major changes occur, we'll notify you by email or on our site.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            For any questions, requests, or concerns, contact:
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:connie@thriftshopper.ai" className="text-primary hover:underline">
              connie@thriftshopper.ai
            </a>
          </p>
          <p>
            If you're in the EU or UK, you can also reach your local Data Protection Authority (for example, the EU GDPR
            authorities or the UK ICO).
          </p>
        </div>
      </div>
    </div>
  )
}
