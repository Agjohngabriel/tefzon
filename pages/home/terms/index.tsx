import MainLayout from "../../../components/MainLayout";
import Router from "next/router";
import Link from "next/link";
import Layout from "../../../components/Layouts";

const Index = () => {
  return (
    <Layout>
      <div className="py-10">
        <div className=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto my-10 px-4 py-6 lg:px-10  w-auto">
          <div className="w-full md:w-5/5 mx-auto p-2">
            <h3 className="text-xl font-bold text-gray-800">
              TERMS OF USE FOR TEFZON
            </h3>
            <p className="text-sm font-normal text-gray-600 my-3">
              In these Terms of Use, any use of the words "you", "yours" or
              similar expressions shall mean any user of this website and the
              app whatsoever. Terms such as "we", "us, "our" or similar
              expressions shall mean the TEFZON Limited.
            </p>

            <p className="text-sm font-normal text-gray-600 my-3">
              This website, <Link href="/">www.tefzon.com</Link> (the
              “Website”), and the Tefzon mobile application (the “App”) are
              operated by the TEFZON Limited, a company registered in Nigeria
              under company number 1850714 with registered at Block 14, No 3
              Praisehill Estate, Lagos Nigeria. Our TAX number is 24038283.
            </p>
            <p className="text-sm font-normal text-gray-600 my-3">
              Please read this page carefully as it sets out the terms that
              apply to your use of the Website and the App, and any part of
              their content and all materials appearing on them. By using the
              Website you confirm that you accept these Terms of Use and you
              agree to comply with them. If you do not agree to these Terms of
              Use, please refrain from using the Website and App.
            </p>

            <div className="shadow-md">
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0 "
                  id="tab-multi-one"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer"
                  htmlFor="tab-multi-one"
                >
                  YOUR USE OF THE WEBSITE IF YOU ARE UNDER 18
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="px-5 pb-3 pt-5">
                    If you are under 18, you may need your parent/guardian to
                    help you with your use of the Website and the App and with
                    reading these Terms and Conditions. If anything is hard to
                    understand, please ask you parent/guardian to explain. If
                    you still have any questions, you or your parent/guardian
                    can contact us at:
                    <a href="mailto:info@tefzon.com">info@tefzon.com</a>.
                  </p>
                  <p className="px-5 pb-3">
                    If you are aged 13 or under, you cannot register for an
                    account without the permission of your parent/guardian. You
                    need to register to use the Website or App. You need to
                    register if you want to play the Fantasy game.
                  </p>
                  <p className="px-5 pb-5">
                    We may collect your personal information when you use the
                    Website and the App. You can find out more about how we use
                    your personal information in our Questions and Answers.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-two"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer"
                  htmlFor="tab-multi-two"
                >
                  CHANGES TO THESE TERMS OF USE
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-5">
                    We may change these terms at any time by amending this page.
                    Please check this page regularly to take notice of any such
                    changes as you will be deemed to accept them through your
                    continued use of the Website and the App.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer"
                  htmlFor="tab-multi-three"
                >
                  CHANGES TO THE WEBSITE
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-5">
                    We aim to update the Website regularly, and may change the
                    content at any time. If the need arises, we may suspend
                    access to the Website, or close it indefinitely. We will not
                    be liable if for any reason the Website is unavailable at
                    any time or for any period. Any of the material on the
                    Website may be out of date at any given time, and we are
                    under no obligation to update such material.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer"
                  htmlFor="tab-multi-three"
                >
                  INTELLECTUAL PROPERTY RIGHTS
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-5">
                    The Website is protected by copyright, database rights and
                    other intellectual property and related rights ("Rights")
                    which are owned by us and our suppliers. All such Rights are
                    reserved. Except where otherwise indicated on the Website:
                  </p>
                  <p className="px-5">
                    <ul className="list-outside list-disc px-5">
                      <li>
                        You may download and print material from the Website as
                        is reasonable for your own private and personal use;
                      </li>
                      <li>
                        You may also forward such material from the Website to
                        other people for their private and personal use provided
                        you credit us as its source and add the Website address:{" "}
                        <Link href="/"> www.tefzon.com</Link>. You must draw
                        their attention to these terms which also apply to them;
                        and
                      </li>
                      <li>
                        You may provide links to the Website provided they go to
                        the home page only and provided you do so in a way that
                        is fair, legal and does not damage our reputation or
                        take advantage of it. You must not establish a link in
                        such a way as to suggest any form of association,
                        approval or endorsement on the part of us where none
                        exists.
                      </li>
                    </ul>
                  </p>

                  <p className="px-5 pt-2">
                    The Website must not be used in any other way, including for
                    commercial purposes, and you may not otherwise reproduce,
                    re-utilise or redistribute it (including, by way of example,
                    creating a database (electronic or otherwise) that includes
                    material downloaded or otherwise obtained from the Website),
                    or frame or deep-link to it (or to any of its content) on
                    any other website, without our prior written approval. If
                    you print off, copy or download any part of the Website in
                    breach of these terms, your right to use the Website will
                    cease immediately and you must return or destroy any copies
                    of the materials you have made at our request.
                  </p>
                  <p className="p-5">
                    The trade marks, logos and brand names shown on the Website
                    are owned by us or our suppliers, partners. No rights are
                    granted to use any of them without the prior written
                    permission of the owner.:
                  </p>
                </div>
              </div>

              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer"
                  htmlFor="tab-multi-three"
                >
                  NO RELIANCE ON INFORMATION
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-5">
                    Reasonable skill and care have been used in producing the
                    Website but it is only designed for general information
                    purposes. No guarantee is given by us or our suppliers that
                    the Website (including any statistics contained on the
                    Website) is accurate, complete or up-to-date. We therefore
                    disclaim all liability and responsibility arising from any
                    reliance placed on the content of the Website by you, or by
                    anyone who may be informed of the Website’s contents.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer"
                  htmlFor="tab-multi-three"
                >
                  EXTERNAL LINKS
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-5">
                    The Website contains links to other websites and services
                    operated by parties independent to the us. We take
                    reasonable precautions in selecting these, however we do not
                    endorse or take responsibility for the content or
                    availability of these websites and cannot accept any
                    liability for any material contained within them or for your
                    use of them or any use of your personal data collected by
                    their operators. If you decide to access linked websites you
                    do so at your own risk and we encourage you to read the
                    privacy statements applicable to each specific website.
                  </p>
                  <p className="px-5 pb-5">
                    If you are under 18, you may need your parent/guardian to
                    help you with your use of the Website and the App and with
                    ensuring the content and availability of any linked websites
                    and services are appropriate.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer"
                  htmlFor="tab-multi-three"
                >
                  VIRUSES
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-5">
                    We and our suppliers take reasonable precautions to prevent
                    computer viruses, trojan horses, worms, time bombs,
                    cancelbots, corrupted files, or any other items that may
                    damage the operation of computers or property or otherwise
                    engage in computer misuse ("Malicious Programmes") on the
                    Website but cannot accept any liability for them. You are
                    advised to take precautions against such Malicious
                    Programmes, including the use of suitable protective
                    software.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer"
                  htmlFor="tab-multi-three"
                >
                  YOUR LAWFUL USE OF THE WEBSITE
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-5">
                    You must not misuse the Website by knowingly introducing
                    Malicious Programmes. You must not attempt to gain
                    unauthorised access to the Website, the server on which the
                    Website is stored or any server, computer or database
                    connected to the Website. You must not attack the Website
                    via a denial-of-service attack or a distributed
                    denial-of-service attack. By breaching this provision, you
                    would commit a criminal offence under the Computer Misuse
                    Act 1990. We will report any such breach to the relevant law
                    enforcement authorities and will co-operate with those
                    authorities by disclosing your identity to them. In the
                    event of such a breach, your right to use the Website will
                    cease immediately.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer"
                  htmlFor="tab-multi-three"
                >
                  LIMITATION OF LIABILITY
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-5">
                    We exclude all liability to you in respect of your use of
                    the Website and App.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer"
                  htmlFor="tab-multi-three"
                >
                  GOVERNING LAW
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-5">
                    These Terms of Use are governed by and interpreted in
                    accordance with the laws of Nigeria. Any disputes arising
                    under or in connection with these terms shall be subject to
                    the non-exclusive jurisdiction of the Nigeria courts.
                  </p>
                </div>
              </div>
              <div className="tab w-full overflow-hidden border-t">
                <input
                  className="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label
                  className="block bg-white p-5 leading-normal cursor-pointer"
                  htmlFor="tab-multi-three"
                >
                  CONTACT
                </label>
                <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-5">
                    If you have any comments or questions about the Website or
                    the App please contact us at{" "}
                    <a href="mailto:info@tefzon.com">info@tefzon.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
