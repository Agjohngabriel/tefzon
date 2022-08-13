import MainLayout from "../../../components/MainLayout";
import Router from "next/router";
import Link from "next/link";

const Index = () => {
  return (
    <>
      <div className="inline-flex rounded -ml-1">
        <Link href="/" passHref>
          <a className="font-montserrat text-sm text-[#240155] ml-5 md:ml-10 lg:ml-24 mt-10 px-2 ">
            Home
          </a>
        </Link>
        <span className="material-icons mt-[2.1rem] text-2xl text-[#8139E6]">
          navigate_next
        </span>

        <h1 className="font-montserrat  -ml-2 text-sm text-[#240155]  mt-10 px-2 ">
          Privacy Policy
        </h1>
      </div>
      <div className=" container max-w-6xl bg-gradient-to-br from-[#FFFFFF]/100 via-[#F2F6FF]/50 to-[#E5ECFA]/100 border-inherit rounded-xl shadow-2xl shadow-indigo-500/50 mx-auto mt-10 mb-20  px-4 py-6 lg:px-10  w-auto">
        <div className="w-full md:w-5/5 mx-auto p-2">
          <h3 className="text-xl font-bold text-gray-800">PRIVACY POLICY</h3>
          <p className="text-sm font-normal text-gray-600 my-3">
            In this Privacy Policy, terms such as "we", "us, "our" or similar
            expressions shall mean the Tefzon Limited.
          </p>

          <p className="text-sm font-normal text-gray-600 my-3">
            We take your privacy very seriously and are committed to protecting
            your personal data (meaning any information about you from which you
            can be identified). This Privacy Policy explains what personal data
            we collect when you: access the Tefzon websites at 
            <Link href="/">www.tefzon.com</Link>  (regardless of where you visit
            it from), use the Tefzon's official app; play the Fantasy games, or
            contact the Tefzon (the Services); engage with the Tefzon (or we
            engage with your content) on social media platforms (including our
            Facebook, Twitter, YouTube and Instagram pages); and/or when you
            otherwise interact or communicate with us. It also explains how we
            may use this data, and what rights you have in relation to such
            data.
          </p>
          <p className="text-sm font-normal text-gray-600 my-3">
            For information on how we collect, use and store personal data
            relating to players (including Football Leagues players) and other
            people associated with them and the Club League (for example,
            coaches and scouts)
          </p>
          <p className="text-sm font-normal text-gray-600 my-3">
            We keep our privacy practices under review and may change this
            Privacy Policy from time to time by posting changes on the Services
            or otherwise notifying them to you. This version of the Policy is
            dated August 2022.
          </p>
          <p className="text-sm font-normal text-gray-600 my-3">
            This Privacy Policy is provided in a layered format so you can click
            through the sections below. Alternatively, you can download a PDF
            version of the Privacy Policy here.
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
                className="block p-5 leading-normal cursor-pointer"
                htmlFor="tab-multi-one"
              >
                How We Collect Your Personal Data
              </label>
              <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                <p className="px-5 pb-3 pt-5">
                  You provide us with your personal data when you:
                </p>
                <p className="px-5">
                  <ul className="list-outside list-disc px-5">
                    <li>Access, use or play the Services;</li>
                    <li>Create a Tefzon account for the Services;</li>
                    <li>
                      Request information, marketing and other communications to
                      be sent to you;
                    </li>
                    <li>Enter a competition, promotion or survey;</li>
                    <li>
                      Complete surveys or provide us with your feedback; and
                    </li>
                    <li>
                      Otherwise interact or correspond with us (including via
                      email, social media or telephone).
                    </li>
                  </ul>
                </p>
                <p className="px-5 py-3">
                  In connection with some elements of the Services we also
                  receive additional personal data about you from other
                  organisations who have collected personal data from you, such
                  as our member football clubs from time to time (Clubs), other
                  footballing organisations (such as the FA or FIFA) and our
                  commercial partners and data collected on our behalf at Tefzon
                  events. We may also receive personal data as part of the legal
                  processes we undertake to protect our Services and our
                  intellectual property, such as our brand or media rights, or
                  those of our licensees/commercial partners.
                </p>
                <p className="px-5 pb-5">
                  We collect the Technical Data automatically as you interact
                  with our Services by using cookies and other similar web
                  technologies. Please refer to our Cookies Policy for more
                  information.
                </p>
                <p className="px-5 pb-5">
                  We also use third party tools to help us manage and analyse
                  our social media presence, and report on comments, mentions
                  and other content that is posted about us on social media
                  platforms and other public channels and forums. These third
                  parties’ activities, and their information collection and
                  sharing practices, are subject to the terms of the relevant
                  social media platform, channel or forum. We will use this
                  information in accordance with this Privacy Policy.
                </p>
                <p className="px-5 pb-5">
                  We use a third party service, Google Analytics, to collect
                  standard internet log information and details of visitor
                  behaviour patterns. We do this to find out things such as the
                  number of visitors to certain parts of the Services. This
                  information is only used by us in a way which does not
                  identify you. We do not make, and do not allow Google to make,
                  any attempt to find out the identities of anyone visiting our
                  website.
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
                className="block p-5 leading-normal cursor-pointer"
                htmlFor="tab-multi-two"
              >
                Disclosure of Your Personal Data
              </label>
              <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                <p className="p-5">
                  We may disclose or share your personal data in the following
                  circumstances:
                </p>
                <p className="px-5">
                  <ul className="list-outside list-disc px-5">
                    <li>
                      Third Party Service Providers. We engage third party
                      businesses to provide services to us or to you on our
                      behalf, such as support for the internal operations of our
                      Services (and related services), communications, data
                      storage and delivering communications (including calendar
                      notifications). Our service providers may access, receive,
                      maintain or otherwise use personal data on our behalf. Our
                      service providers only use your personal data in
                      accordance with our strict instructions to provide the
                      relevant services and are not permitted to use your
                      personal data for their own purposes, unless authorised by
                      us to do so. Where this is the case you will be notified
                      by us and provided with their privacy policies so you can
                      understand how they will treat your personal data.
                    </li>
                    <li>
                      Commercial Partners. We may also disclose your personal
                      data to our commercial partners where you have consented
                      or requested that we do so. For example, when you enter a
                      competition or sweepstake which is a joint promotion, or
                      you request to receive certain marketing communications.
                      You will be given clear information in each case before we
                      disclose share your personal data.
                    </li>
                    <li>
                      Publicity and media. We may disclose your personal data
                      publicly via the media, social media or on the Services.
                      For example, when sharing a comment or opinion you have
                      provided such as when you contact the Tefzon, or if you
                      win a competition or promotion we may disclose your name
                      online. In such cases, we will clearly notify you of the
                      sharing, and you will have the choice not to participate
                      or to otherwise object to such sharing, subject to our
                      other legal obligations.
                    </li>
                    <li>
                      Where you allow us to, we will share your personal data
                      with your favourite Clubs to help our Clubs interact with
                      their fans or where for example it is necessary for the
                      fulfilment of a competition (e.g. you have won tickets to
                      a Club match). This Privacy Policy applies to our use of
                      your personal data only, and you should refer to the
                      relevant privacy policy of each relevant Club to
                      understand how they use your personal data. A list of the
                      Clubs and links to the respective privacy policies is
                      available here:
                    </li>
                    <li>
                      Legally Required. We may also disclose your personal data
                      if we believe we are required to do so by law, or that
                      doing so is reasonably necessary to comply with legal
                      processes or the enforcement of our rights where we
                      receive evidence we deem sufficient to justify such
                      disclosure or in the event of a re-organisation of the
                      legal or ownership structure of the Tefzon.
                    </li>
                  </ul>
                </p>
                <p className="px-5 py-3">
                  Please read carefully any additional privacy notices which we
                  may provide to you so that you are aware of and understand any
                  other circumstances in which we may disclose or share your
                  personal data which are specific to your use of the Services
                  and/or your relationship with the Football Leagues.
                </p>
                <p className="px-5 pb-5">
                  Notwithstanding anything else in this Privacy Policy, we may
                  share aggregate or de-identified information with third
                  parties for research, marketing, analytics and other purposes,
                  provided such information does not identify a particular
                  individual and the individual cannot be re-identified.
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
                className="block p-5 leading-normal cursor-pointer"
                htmlFor="tab-multi-three"
              >
                Security of Your Personal Data
              </label>
              <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                <p className="px-5 pt-5">
                  We have put in place appropriate security measures to prevent
                  your personal data from being accidentally lost, used or
                  accessed in an unauthorised way, altered or disclosed (a Data
                  Security Breach). In addition, we limit access to your
                  personal data to those employees, contractors and other third
                  parties who have a business need to know. They will only use
                  your personal data on our instructions and they are subject to
                  a duty of confidentiality.  In relation to third party service
                  providers whom we appoint to process your personal data on our
                  behalf, we take steps to ensure that those service providers
                  are contractually bound to protect your personal data.
                </p>
                <p className="px-5 ">
                  We have put in place procedures to deal with any suspected
                  Data Security Breach and will notify you and any applicable
                  regulator where we are legally required to do so.
                </p>
                <p className="px-5 pb-5">
                  Where we have given you or you have chosen a password which
                  enables you to access certain Services, you are responsible
                  for using reasonable care in keeping this password
                  confidential.
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
                className="block p-5 leading-normal cursor-pointer"
                htmlFor="tab-multi-three"
              >
                Links to Other Sites
              </label>
              <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                <p className="p-5">
                  The Services may contain links to other websites, applications
                  and environments that are not owned or controlled by us
                  (the Other Sites). The owners and operators of those Other
                  Sites are responsible for their collection and/or use of your
                  personal data and you should check their respective privacy
                  policies. Unless specifically referred to otherwise, this
                  Privacy Policy applies to the Services only and not the Other
                  Sites.
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
                className="block p-5 leading-normal cursor-pointer"
                htmlFor="tab-multi-three"
              >
                Data Retention
              </label>
              <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                <p className="px-5 pt-5">
                  We will generally only keep your personal data for as long as
                  necessary to fulfil the purposes we collected it for, in
                  accordance with our internal Data Retention Policy. However,
                  in some circumstances we may retain personal data for other
                  periods of time, for instance where we are required to do so
                  in accordance with legal, tax or accounting requirements, or
                  if required to do so by a legal process, legal authority, or
                  other governmental entity having authority to make the
                  request.
                </p>
                <p className="px-5 ">
                  To determine the appropriate retention period, we review - in
                  addition to the purposes of use and how we can achieve them -
                  other relevant factors such as the nature and scope of the
                  personal data, the potential risks to data subjects from a
                  Data Security Breach, and the applicable legal requirements,
                  for example the limitation period for which legal claims can
                  be made in court. For example, all non-activated Tefzon
                  accounts are deleted after 21 days and all non-authorised
                  accounts for users aged 12 or under are deleted immediately if
                  a parent withholds consent and after 21 days if an account
                  relating to a user aged 12 or under is not verified.
                </p>
                <p className="px-5 ">
                  Specific details of retention periods for different aspects of
                  your personal data are available upon request by using the
                  contact details provided below.
                </p>
                <p className="px-5 pb-5">
                  In accordance with our internal Data Retention Policy and the
                  Data Protection Law, after the applicable retention period has
                  ended, your personal data will be securely deleted or
                  destroyed or anonymised (for example, where the data will be
                  used in aggregated/generic form for statistical purposes).
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
                className="block p-5 leading-normal cursor-pointer"
                htmlFor="tab-multi-three"
              >
                Your Rights
              </label>
              <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                <p className="p-5">
                  Under Data Protection Law, you have certain rights (depending
                  on the circumstances) in connection with your personal data,
                  which include:
                </p>
                <p className="px-5">
                  <ul className="list-outside list-disc px-5">
                    <li>
                      Request access to your personal data (commonly known as a
                      “data subject access request”). This enables you to
                      receive a copy of the personal information we hold about
                      you and to check that we are using it lawfully, provided
                      always that this does not adversely affect the rights and
                      freedoms of other people;
                    </li>
                    <li>
                      Request correction of the personal data that we hold about
                      you. Where any of the information we hold about you is
                      incorrect or incomplete we will act promptly to rectify
                      this, including where you have requested us to do so.
                      Users of the Tefzon website can update their information
                      any time via their account preferences;
                    </li>
                    <li>
                      Request erasure of your personal data. This enables you to
                      ask us to delete or remove personal data where there is no
                      good reason for us continuing to use it. You also have the
                      right to ask us to delete or remove your personal data
                      where you have exercised your right to object to our use
                      (see below);
                    </li>
                    <li>
                      Object to use of your personal data where we are relying
                      on our legitimate interests (see above) and there is
                      something about your particular situation which makes you
                      want to object to our use on this ground;
                    </li>
                    <li>
                      Withdraw your consent to our use of your personal data
                      where we do so in reliance on your consent. Once we have
                      received notification that you have withdrawn your
                      consent, we will no longer use your personal data for the
                      purpose or purposes you originally agreed to, unless we
                      have another legitimate basis for doing so in law;
                    </li>
                    <li>
                      Request the restriction of use of your personal data. This
                      enables you to ask us to suspend the use of personal data
                      about you, for example if you want us to establish its
                      accuracy or the reason for using it; and
                    </li>
                    <li>
                      Request the transfer of the personal data you have
                      provided, on the basis of consent or for a contract with
                      us, to you or a third party where technically feasible.
                    </li>
                  </ul>
                </p>

                <p className="px-5 pt-3">
                Additionally, should you wish to permanently delete your www.tefzon.com account and your personal data, you may do this yourself by following the below instructions:
                </p>

                <p className="px-5">
                  <ul className="list-outside list-disc px-5">
                    <li>
                    Log into your account and navigate to <Link href="/">users.tefzon.com/</Link>;
                    </li>
                    <li>
                    Click 'Manage Profile' on the right hand side.
                    </li>
                    <li>
                    Click  'Delete Account'.
                    </li>
                    <li>
                    On the following page, please click 'Confirm'.
                    </li>
                    
                  </ul>
                </p>
                <p className="p-5">
                Please note that if you log back in to your account during the 21 day period the account will be reactivated.
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
                className="block p-5 leading-normal cursor-pointer"
                htmlFor="tab-multi-three"
              >
               Contact Us
              </label>
              <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                <p className="px-5 pt-5">
                If you have any questions about this Privacy Policy or how we handle your personal data, please contact us using the following contact details:
                </p>
                <p className="px-5 pb-5">
                <a href="mailto:info@tefzon.com">info@tefzon.com</a>.
                </p>
              </div>
            </div>
       
          </div>
        </div>

        <div className="container mb-5 mx-auto">
          <hr className="mt-20  rounded-lg border-b-2 border-violet-500 mx-3" />

          <div className="mx-3  flex mb-5">
            <div className="rounded-2xl bg-gray-200 border mt-5  lg:py-5 px-3 w-3/6 h-14 lg:h-24">
              {" "}
            </div>
            <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
              {" "}
            </div>
            <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
              {" "}
            </div>
            <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
              {" "}
            </div>
            <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
              {" "}
            </div>
            <div className="rounded-2xl bg-gray-200 border  mt-5 lg:ml-10 ml-3 lg:py-5 px-3 w-3/6 h-14 lg:h-24">
              {" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
