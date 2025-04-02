"use client";

import SmallContainer from "@/components/container/smallContainer";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { CircleSmall } from "lucide-react";
import NextLink from "next/link";
import NextImage from "next/image";

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      <div className="py-12.5 mt-25 mb-28 relative z-2">
        <SmallContainer>
          <div className="flex flex-col gap-10">
            <div className="self-center py-3 mb-6">
              <NextLink href="/">
                <NextImage
                  src="/images/navlogo/32.svg"
                  alt="logo"
                  width={160}
                  height={32}
                  className="w-auto h-auto"
                />
              </NextLink>
            </div>
            <div className="flex justify-center items-center">
              <h2 className="text-[64px] leading-18 tracking-[-0.04em] text-text-primary text-center">
                Privacy Policy
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-lg text-text-primary text-left">
                <div>Last Updated On 26-Jul-2024</div>
                <div>Effective Date 26-Jul-2024</div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg text-text-primary text-left">
                  This Privacy Policy describes the policies of Topus GmbH,
                  Wassermasch 15, 38179 Schwülper, Germany, email:{" "}
                  <span>
                    <NextLink href="mailto:contact@unwynd.net" legacyBehavior>
                      <a target="_blank">contact@unwynd.net</a>
                    </NextLink>
                  </span>
                  , on the collection, use and disclosure of your information
                  that we collect when you use our website
                  <span>
                    (
                    <NextLink href="http://www.unwynd.net" legacyBehavior>
                      <a target="_blank">http://www.unwynd.net</a>
                    </NextLink>
                    )
                  </span>{" "}
                  (the “Service”). By accessing or using the Service, you are
                  consenting to the collection, use and disclosure of your
                  information in accordance with this Privacy Policy. If you do
                  not consent to the same, please do not access or use the
                  Service.
                </p>
                <p className="text-lg text-text-primary text-left">
                  We may modify this Privacy Policy at any time without any
                  prior notice to you and will post the revised Privacy Policy
                  on the Service. The revised Policy will be effective 180 days
                  from when the revised Policy is posted in the Service and your
                  continued access or use of the Service after such time will
                  constitute your acceptance of the revised Privacy Policy. We
                  therefore recommend that you periodically review this page.
                </p>
              </div>
              <div className="flex flex-col gap-4 mb-2">
                <h5 className="text-H5 text-text-primary text-left">
                  Information We Collect:
                </h5>
                <p className="text-lg text-text-primary text-left">
                  To the extent provided by you, we will collect and process the
                  following personal information about you:
                </p>
                <ul className="flex flex-col gap-1 text-lg text-text-primary text-left ml-8">
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    Name
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    Email
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    Address
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    Payment Info
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4 mb-2">
                <h5 className="text-H5 text-text-primary text-left">
                  How We Use Your Information:
                </h5>
                <p className="text-lg text-text-primary text-left">
                  We will use the information that we collect about you for the
                  following purposes:
                </p>
                <ul className="flex flex-col gap-1 text-lg text-text-primary text-left ml-8">
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    Marketing/ Promotional
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    Processing payment
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    Manage customer order
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    Support
                  </li>
                </ul>
              </div>
              <div className="text-lg text-text-primary text-left">
                If we want to use your information for any other purpose, we
                will ask you for consent and will use your information only on
                receiving your consent and then, only for the purpose(s) for
                which grant consent unless we are required to do otherwise by
                law.
              </div>
              <div className="flex flex-col gap-4 mb-2">
                <h5 className="text-H5 text-text-primary text-left">
                  How We Share Your Information:
                </h5>
                <p className="text-lg text-text-primary text-left">
                  We will not transfer your personal information to any third
                  party without seeking your consent, except in limited
                  circumstances as described below:
                </p>
                <ul className="flex flex-col gap-1 text-lg text-text-primary text-left ml-8">
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    Ad service
                  </li>
                  <li className="flex items-center gap-2">
                    <CircleSmall
                      size={12}
                      className="fill-surface-inverted-primary"
                    />
                    Analytics
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg text-text-primary text-left">
                  We require such third party’s to use the personal information
                  we transfer to them only for the purpose for which it was
                  transferred and not to retain it for longer than is required
                  for fulfilling the said purpose.
                </p>
                <p className="text-lg text-text-primary text-left">
                  We may also disclose your personal information for the
                  following: (1) to comply with applicable law, regulation,
                  court order or other legal process; (2) to enforce your
                  agreements with us, including this Privacy Policy; or (3) to
                  respond to claims that your use of the Service violates any
                  third-party rights. If the Service or our company is merged or
                  acquired with another company, your information will be one of
                  the assets that is transferred to the new owner.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  Retention Of Your Information:
                </h5>
                <p className="text-lg text-text-primary text-left">
                  We will retain your personal information with us for 90 days
                  to 2 years after user terminate account or for as long as we
                  need it to fulfill the purposes for which it was collected as
                  detailed in this Privacy Policy. We may need to retain certain
                  information for longer periods such as record-keeping /
                  reporting in accordance with applicable law or for other
                  legitimate reasons like enforcement of legal rights, fraud
                  prevention, etc. Residual anonymous information and aggregate
                  information, neither of which identifies you (directly or
                  indirectly), may be stored indefinitely.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  Your Rights:
                </h5>
                <p className="text-lg text-text-primary text-left">
                  Depending on the law that applies, you may have a right to
                  access and rectify or erase your personal data or receive a
                  copy of your personal data, restrict or object to the active
                  processing of your data, ask us to share (port) your personal
                  information to another entity, withdraw any consent you
                  provided to us to process your data, a right to lodge a
                  complaint with a statutory authority and such other rights as
                  may be relevant under applicable laws. To exercise these
                  rights, you can write to us at contact@unwynd.net. We will
                  respond to your request in accordance with applicable law.
                </p>
                <p className="text-lg text-text-primary text-left">
                  Do note that if you do not allow us to collect or process the
                  required personal information or withdraw the consent to
                  process the same for the required purposes, you may not be
                  able to access or use the services for which your information
                  was sought.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  Cookies:
                </h5>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-1.5">
                    <h6 className="text-lg font-semibold text-text-secondary text-left">
                      What are cookies?
                    </h6>
                    <p className="text-lg text-text-primary text-left">
                      Cookies are small text files that are used to store small
                      pieces of information. They are stored on your device when
                      the website is loaded on your browser. These cookies help
                      us make the website function properly, make it more
                      secure, provide better user experience, and understand how
                      the website performs and to analyze what works and where
                      it needs improvement.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h6 className="text-lg font-semibold text-text-secondary text-left">
                      How do we use cookies?
                    </h6>
                    <p className="text-lg text-text-primary text-left">
                      As most of the online services, our website uses
                      first-party and third-party cookies for several purposes.
                      First-party cookies are mostly necessary for the website
                      to function the right way, and they do not collect any of
                      your personally identifiable data.
                    </p>
                    <br />
                    <p className="text-lg text-text-primary text-left">
                      The third-party cookies used on our website are mainly for
                      understanding how the website performs, how you interact
                      with our website, keeping our services secure, providing
                      advertisements that are relevant to you, and all in all
                      providing you with a better and improved user experience
                      and help speed up your future interactions with our
                      website.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h6 className="text-lg font-semibold text-text-secondary text-left">
                      Manage cookie preferences
                    </h6>
                    <p className="text-lg text-text-primary text-left">
                      You can change your{" "}
                      <span className="text-brand">
                        <NextLink href="/privacy-policy">
                          cookie preferences
                        </NextLink>
                      </span>{" "}
                      any time in the Cookie Settings. This will let you revisit
                      the cookie consent banner and change your preferences or
                      withdraw your consent right away.
                    </p>
                    <br />
                    <p className="text-lg text-text-primary text-left">
                      In addition to this, different browsers provide different
                      methods to block and delete cookies used by websites. You
                      can change the settings of your browser to block/delete
                      the cookies. Listed below are the links to the support
                      documents on how to manage and delete cookies from the
                      major web browsers.
                    </p>
                  </div>
                  <br />
                  <div>
                    <div className="flex flex-col gap-1.5">
                      <span className="text-lg text-text-primary text-left">
                        Chrome:
                      </span>

                      <NextLink
                        href="https://support.google.com/accounts/answer/32050"
                        legacyBehavior
                      >
                        <a target="_blank" className="text-lg text-brand">
                          https://support.google.com/accounts/answer/32050
                        </a>
                      </NextLink>
                    </div>
                    <br />
                    <br />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-lg text-text-primary text-left">
                        Safari:
                      </span>

                      <NextLink
                        href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
                        legacyBehavior
                      >
                        <a target="_blank" className="text-lg text-brand">
                          https://support.apple.com/en-in/guide/safari/sfri11471/mac
                        </a>
                      </NextLink>
                    </div>
                    <br />
                    <br />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-lg text-text-primary text-left">
                        Firefox:
                      </span>
                      <NextLink
                        href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
                        legacyBehavior
                      >
                        <a target="_blank" className="text-lg text-brand">
                          https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US
                        </a>
                      </NextLink>
                    </div>
                    <br />
                    <br />
                    <div className="flex flex-col gap-1.5">
                      <span className="text-lg text-text-primary text-left">
                        Internet Explorer:
                      </span>
                      <NextLink
                        href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
                        legacyBehavior
                      >
                        <a target="_blank" className="text-lg text-brand">
                          https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
                        </a>
                      </NextLink>
                    </div>
                    <br />
                    <br />
                    <p className="text-lg text-text-primary text-left">
                      If you are using any other web browser, please visit your
                      browser’s official support documents.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  Security:
                </h5>
                <p className="text-lg text-text-primary text-left">
                  The security of your information is important to us and we
                  will use reasonable security measures to prevent the loss,
                  misuse or unauthorized alteration of your information under
                  our control. However, given the inherent risks, we cannot
                  guarantee absolute security and consequently, we cannot ensure
                  or warrant the security of any information you transmit to us
                  and you do so at your own risk.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-H5 text-text-primary text-left">
                  Grievance / Data Protection Officer:
                </h5>
                <p className="text-lg text-text-primary text-left">
                  If you have any queries or concerns about the processing of
                  your information that is available with us, you may email our
                  Grievance Officer at Topus GmbH, Wassermasch 15, 38179
                  Schwülper, email: contact@unwynd.net. We will address your
                  concerns in accordance with applicable law.
                </p>
              </div>
              <div className="text-lg text-text-primary text-left">
                Privacy Policy generated with CookieYes.
              </div>
            </div>
          </div>
        </SmallContainer>
      </div>
      <Footer />
    </main>
  );
}
