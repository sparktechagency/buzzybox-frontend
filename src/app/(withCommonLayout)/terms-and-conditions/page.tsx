import PageHeader from '@/components/shared/PageHeader';

const TermsAndConditionsPage = () => {
      return (
            <div className="">
                  <PageHeader title="Terms and Conditions" />
                  <div className="container mx-auto py-20  space-y-8">
                        <section>
                              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                              <div className="space-y-4">
                                    <p>
                                          By accessing and using BuzzyBox, you agree to be bound by these Terms and Conditions and all
                                          applicable laws and regulations. If you do not agree with any of these terms, you are prohibited
                                          from using or accessing this site.
                                    </p>
                              </div>
                        </section>

                        <section>
                              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
                              <div className="space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                          <li>
                                                Permission is granted to temporarily download one copy of the materials (information or
                                                software) on BuzzyBox&apos;s website for personal, non-commercial transitory viewing only.
                                          </li>
                                          <li>
                                                This is the grant of a license, not a transfer of title, and under this license you may not:
                                                <ul className="list-decimal pl-6 mt-2 space-y-1">
                                                      <li>Modify or copy the materials</li>
                                                      <li>Use the materials for any commercial purpose</li>
                                                      <li>
                                                            Attempt to decompile or reverse engineer any software contained on
                                                            BuzzyBox&apos;s website
                                                      </li>
                                                      <li>Remove any copyright or other proprietary notations from the materials</li>
                                                      <li>
                                                            Transfer the materials to another person or mirror&quot; the materials on any
                                                            other server
                                                      </li>
                                                </ul>
                                          </li>
                                    </ul>
                              </div>
                        </section>

                        <section>
                              <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
                              <div className="space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                          <li>You must be at least 13 years old to use BuzzyBox.</li>
                                          <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                                          <li>You agree to accept responsibility for all activities that occur under your account.</li>
                                          <li>You must notify us immediately of any unauthorized use of your account.</li>
                                    </ul>
                              </div>
                        </section>

                        <section>
                              <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
                              <div className="space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                          <li>All payments are processed securely through our payment providers.</li>
                                          <li>Prices for our services are subject to change without notice.</li>
                                          <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
                                          <li>Refunds are handled according to our Refund Policy.</li>
                                    </ul>
                              </div>
                        </section>

                        <section>
                              <h2 className="text-2xl font-semibold mb-4">Content Guidelines</h2>
                              <div className="space-y-4">
                                    <p>When using BuzzyBox, you agree not to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                          <li>
                                                Post any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, or
                                                otherwise objectionable
                                          </li>
                                          <li>Impersonate any person or entity</li>
                                          <li>Upload or transmit viruses or any other malicious code</li>
                                          <li>Interfere with or disrupt the service or servers</li>
                                          <li>Collect or track personal information of other users</li>
                                    </ul>
                              </div>
                        </section>

                        <section>
                              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                              <div className="space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                          <li>
                                                The content, features, and functionality of BuzzyBox are owned by us and are protected by
                                                copyright, trademark, and other intellectual property laws.
                                          </li>
                                          <li>
                                                You may not use our trademarks or other brand elements without our prior written permission.
                                          </li>
                                    </ul>
                              </div>
                        </section>

                        <section>
                              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                              <div className="space-y-4">
                                    <p>
                                          BuzzyBox shall not be liable for any indirect, incidental, special, consequential, or punitive
                                          damages resulting from your use of or inability to use the service.
                                    </p>
                              </div>
                        </section>

                        <section>
                              <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                              <div className="space-y-4">
                                    <p>
                                          We reserve the right to modify these terms at any time. We will notify users of any material
                                          changes via email or through the website. Your continued use of BuzzyBox after such modifications
                                          constitutes your acceptance of the updated terms.
                                    </p>
                              </div>
                        </section>

                        <section>
                              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                              <div className="space-y-4">
                                    <p>
                                          These terms shall be governed by and construed in accordance with the laws of the United States,
                                          without regard to its conflict of law provisions.
                                    </p>
                              </div>
                        </section>

                        <section>
                              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                              <div className="space-y-4">
                                    <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                                    <p>Email: support@buzzybox.com</p>
                                    <p>Phone: +1 (555) 123-4567</p>
                                    <p>Address: 123 BuzzyBox Lane, New York, NY 10001</p>
                              </div>
                        </section>
                  </div>
            </div>
      );
};

export default TermsAndConditionsPage;
