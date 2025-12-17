export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif font-bold mb-8" style={{ color: "#000080" }}>
          ThriftShopper Privacy Notice
        </h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> November 1, 2025
            <br />
            <strong>Last Updated:</strong> December 15, 2025
          </p>

          <p>
            ThriftShopper Inc. ("ThriftShopper," "we," "us," or "our") operates an online marketplace and related services that connect buyers and sellers of secondhand, vintage, and collectible items, as well as a newsletter and related content (together, the "Services").
          </p>
          <p>
            This Privacy Notice explains how we collect, use, share, and protect personal information when you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visit our website or mobile experience</li>
            <li>Create a buyer or seller account</li>
            <li>List or purchase items on ThriftShopper</li>
            <li>Subscribe to our newsletter</li>
            <li>Communicate with us or with other users through our Services</li>
          </ul>
          <p>
            We respect your privacy and aim to be transparent about our data practices in compliance with laws like the EU's GDPR and California's CCPA/CPRA. We collect only what we need to operate and improve ThriftShopper and never sell your personal information.
          </p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">1. Information We Collect</h2>
          
          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">1.1 Information You Provide to Us</h3>
          
          <p><strong>Account & Profile Information</strong></p>
          <p>When you register for a ThriftShopper account (as a buyer, seller, or both), we may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Username or display name</li>
            <li>Password (stored in encrypted form)</li>
            <li>Profile details (photo, bio, city/state, links, preferences)</li>
            <li>Whether you are a "founding seller," "founding buyer," or other special status</li>
          </ul>

          <p><strong>Marketplace Activity</strong></p>
          <p>When you use the marketplace features, we collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Listing details: titles, descriptions, categories, prices, and item photos</li>
            <li>Favorites/wishlists and saved items</li>
            <li>Reviews, ratings, and feedback you leave</li>
            <li>Messages you send or receive through ThriftShopper (buyer–seller messaging)</li>
          </ul>

          <p><strong>Transactions & Payments</strong></p>
          <p>We use third-party payment processors (such as Stripe) to handle payments securely. When you buy or sell on ThriftShopper:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Certain payment details (such as card number, bank account, or payout details) are collected and processed directly by Stripe or another payment provider, not by us.</li>
            <li>We may receive limited transaction information from the payment provider, such as:
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Transaction amount and currency</li>
                <li>Date and time of payment</li>
                <li>Status (paid, refunded, failed)</li>
                <li>Partial payment identifiers sufficient for reconciliation, not full card numbers</li>
              </ul>
            </li>
          </ul>

          <p><strong>Newsletter and Marketing</strong></p>
          <p>If you subscribe to our newsletter or marketing emails, we collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email address</li>
            <li>Your content preferences (if you choose to provide them)</li>
            <li>Your marketing choices (e.g., whether you consent to receive promotional emails)</li>
          </ul>
          <p>A standard line next to your checkbox could be:</p>
          <p className="italic">"I agree to receive emails about ThriftShopper news, offers, and updates. You can unsubscribe anytime."</p>

          <p><strong>Customer Support & Communications</strong></p>
          <p>When you contact us (e.g., email, contact form, social media, in-app support), we collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your contact details (such as email address)</li>
            <li>The content of your messages or requests</li>
            <li>Any other information you voluntarily provide</li>
          </ul>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">1.2 Information Collected Automatically</h3>
          <p>When you use the Services, we automatically collect certain technical and usage data, such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device and browser information (IP address, browser type, operating system, device identifiers)</li>
            <li>Log data (pages viewed, features used, time and date of visits, referring/exit pages)</li>
            <li>Marketplace activity (searches, filters used, items viewed, clicks, scrolls, and other interactions)</li>
          </ul>
          <p>We use cookies, pixels, and similar technologies for these purposes. This includes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analytics cookies to understand how users interact with ThriftShopper (for example, via Google Analytics).</li>
            <li>Functional and security cookies to keep you logged in, protect your account, and help our Services run securely (for example, Cloudflare security cookies).</li>
          </ul>
          <p>You can adjust cookie settings in your browser. Disabling some cookies may affect site functionality.</p>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">1.3 Information from Third Parties</h3>
          <p>We may receive information about you from:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment providers (e.g., Stripe) for fraud prevention and to confirm payment or payout status.</li>
            <li>Email and newsletter platforms (e.g., Beehiiv) to manage subscriptions and track engagement (like open rates or link clicks in aggregate).</li>
            <li>Social networks or sign-in providers if we enable login via a third-party account (such as "Continue with Google"), according to their privacy policies and your settings.</li>
          </ul>

          <h3 className="text-xl font-serif font-semibold mt-6 mb-3">1.4 Children's Privacy</h3>
          <p>Our Services are intended for adults (18+). We do not knowingly collect personal information from children under 16. If you are under 16, please do not create an account, subscribe, or provide us with personal data. If we learn that we have collected information from a child, we will delete it.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          
          <p><strong>To Operate the Marketplace and Provide Services</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create and manage your account</li>
            <li>Enable buyers to find, view, and purchase items</li>
            <li>Enable sellers to create listings, manage inventory, and receive payouts</li>
            <li>Facilitate buyer–seller communication and order fulfillment</li>
            <li>Process payments and refunds through our payment providers</li>
          </ul>

          <p><strong>To Communicate with You</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Send transactional emails (receipts, order updates, account notifications, policy updates)</li>
            <li>Respond to your questions, requests, and support inquiries</li>
            <li>Send newsletters and optional marketing communications, where you have given consent or where permitted by law</li>
          </ul>

          <p><strong>To Improve and Personalize ThriftShopper</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analyze how users discover, browse, and use the marketplace</li>
            <li>Understand which listings or features are popular</li>
            <li>Debug and improve the performance, usability, and reliability of our Services</li>
            <li>Develop new features, tools, and experiences for buyers and sellers</li>
          </ul>

          <p><strong>Legal, Compliance, and Security</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Detect, prevent, and address fraud, spam, abuse, or security incidents</li>
            <li>Enforce our Terms of Use, seller rules, and other policies</li>
            <li>Comply with legal obligations and respond to lawful requests from authorities</li>
          </ul>

          <p>We do not use your personal data for any purpose inconsistent with this Privacy Notice.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">3. Legal Bases for Processing (GDPR/UK GDPR)</h2>
          <p>If you are in the EU/EEA or UK, our legal bases for processing your personal data include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contract:</strong> To provide the Services you sign up for (e.g., operating your account, facilitating your purchases and sales).</li>
            <li><strong>Consent:</strong> For optional marketing emails, certain cookies/analytics, and any processing where we specifically ask for your consent.</li>
            <li><strong>Legitimate Interests:</strong> To improve our Services, ensure security, prevent fraud, and understand usage patterns, balanced against your rights and interests.</li>
            <li><strong>Legal Obligation:</strong> To comply with applicable laws, regulations, and legal processes.</li>
          </ul>
          <p>You can withdraw consent at any time, without affecting the lawfulness of processing before withdrawal.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">4. Sharing and Disclosure</h2>
          <p>We do not sell your personal information.</p>
          <p>We may share your information in the following limited circumstances:</p>

          <p><strong>Service Providers ("Processors")</strong></p>
          <p>We use third parties to help us run ThriftShopper, such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Website hosting and infrastructure</li>
            <li>Database and storage providers</li>
            <li>Payment processors (e.g., Stripe)</li>
            <li>Email and newsletter platforms (e.g., Beehiiv)</li>
            <li>Analytics providers (e.g., Google Analytics)</li>
            <li>Customer support and security providers</li>
          </ul>
          <p>These service providers access personal data only to perform services on our behalf and are obligated to protect it.</p>

          <p><strong>Buyer–Seller Interactions</strong></p>
          <p>When you buy or sell through ThriftShopper, limited information is shared to complete the transaction, which may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Buyer's first name or username and shipping address to the seller</li>
            <li>Seller's display name and any contact details you choose to share in your listing or profile</li>
          </ul>
          <p>We encourage all users to respect privacy and use information only for transaction-related purposes.</p>

          <p><strong>Aggregated and De-identified Data</strong></p>
          <p>We may share anonymized or aggregated data (for example, "X% of users favor vintage décor") with partners, sponsors, or in marketing materials. This data does not identify any individual.</p>

          <p><strong>Legal and Safety</strong></p>
          <p>We may share information if necessary to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comply with the law, a subpoena, court order, or other legal process</li>
            <li>Protect the rights, property, or safety of ThriftShopper, our users, or the public</li>
            <li>Detect and address fraud, security, or technical issues</li>
          </ul>
          <p>In the event of a merger, acquisition, or similar corporate transaction, your information may be transferred as part of that deal, subject to this Privacy Notice or a successor notice.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">5. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar technologies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To keep you logged in and remember your preferences</li>
            <li>To secure our Services (e.g., Cloudflare)</li>
            <li>To understand site usage and performance (e.g., Google Analytics)</li>
          </ul>
          <p>You can control cookies through your browser settings. Some browsers offer "Do Not Track" signals; at this time, our Services do not respond to every such signal, but you can still manage cookies and analytics preferences directly.</p>
          <p>Google provides tools to opt out of Google Analytics in many browsers. For more details, see Google's explanation of how it uses data from partner sites and apps.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">6. Data Security and Retention</h2>
          <p>We take reasonable precautions to protect your data, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption in transit (HTTPS)</li>
            <li>Limiting access to authorized personnel and service providers</li>
            <li>Using reputable third-party providers with their own security safeguards</li>
          </ul>
          <p>No system is 100% secure, but we follow industry-standard practices to reduce risks.</p>
          <p>We retain:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account and transactional data for as long as your account is active and as necessary to operate the marketplace and meet legal obligations (e.g., tax and accounting rules).</li>
            <li>Newsletter/marketing information until you unsubscribe or request deletion.</li>
            <li>Aggregated, de-identified analytics data for longer, where it does not identify you.</li>
          </ul>
          <p>When we no longer need personal data, we take steps to delete or anonymize it.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">7. Your Rights and Choices</h2>
          <p>Depending on where you live, you may have the following rights:</p>

          <p><strong>EU/UK (GDPR)</strong></p>
          <p>You may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion ("right to be forgotten") in certain circumstances</li>
            <li>Restrict or object to certain processing</li>
            <li>Request a portable copy of your data</li>
            <li>Withdraw consent where our processing is based on consent</li>
          </ul>
          <p>You can also lodge a complaint with your local Data Protection Authority.</p>

          <p><strong>California (CCPA/CPRA)</strong></p>
          <p>California residents have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Know what categories of personal information we collect, use, and disclose</li>
            <li>Access and obtain details about their personal information</li>
            <li>Request deletion of personal information (subject to certain exceptions)</li>
            <li>Correct inaccurate personal information</li>
            <li>Opt out of the "sale" or "sharing" of personal information, if applicable</li>
          </ul>
          <p>We do not sell or share your personal information as those terms are defined under California law. If that ever changes, we will update this Notice and provide an opt-out mechanism.</p>

          <p><strong>Other Regions</strong></p>
          <p>Residents of other jurisdictions may have similar rights under local laws.</p>

          <p><strong>Exercising Your Rights</strong></p>
          <p>To exercise your privacy rights or ask questions about your data:</p>
          <p>Email us at: <a href="mailto:support@thriftshopper.com" className="text-primary hover:underline">support@thriftshopper.com</a></p>
          <p>We may take steps to verify your identity before fulfilling your request. We will respond within a reasonable time and in accordance with applicable law.</p>
          <p>You can also:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unsubscribe from marketing emails at any time by using the "unsubscribe" link in our emails or contacting us.</li>
            <li>Update certain account information directly in your ThriftShopper account settings.</li>
          </ul>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">8. International Data Transfers</h2>
          <p>ThriftShopper is based in the United States, and your information may be stored or processed there and in other countries where our service providers operate. These locations may have privacy laws that differ from those in your jurisdiction.</p>
          <p>Where required by law, we use appropriate safeguards (such as standard contractual clauses) to protect personal data transferred across borders.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">9. Changes to This Privacy Notice</h2>
          <p>We may update this Privacy Notice from time to time (for example, if we add new features or change how we process data). The "Effective Date" above tells you when it was last revised.</p>
          <p>If we make material changes, we will notify you (for example, by email or by posting a prominent notice on our site). Your continued use of the Services after the effective date means you accept the updated Privacy Notice.</p>

          <h2 className="text-2xl font-serif font-semibold mt-8 mb-4">10. Contact Us</h2>
          <p>If you have questions, concerns, or requests related to this Privacy Notice or your personal data, please contact:</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@thriftshopper.com" className="text-primary hover:underline">
              support@thriftshopper.com
            </a>
          </p>
          <p>If you are an EU/UK resident, you may also contact your local Data Protection Authority or the UK's Information Commissioner's Office (ICO) for guidance.</p>
        </div>
      </div>
    </div>
  )
}
