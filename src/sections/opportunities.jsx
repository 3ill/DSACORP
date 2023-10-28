import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer, slideIn } from '../utils/motion';
import { ReactTweet } from '../components';

const Opportunity = () => {
  return (
    <motion.section
      className=" flex flex-col gap-5 "
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/**Did you know section */}
      <TitleText
        title="Opportunities in Web3"
        textStyles="header-text capitalize"
      />
      <p className="sub-text">
        In March 2023, the crypto world was abuzz with Arbitrum&apos;s exciting
        move – issuing and airdropping its tokens to individual users. These
        tokens were distributed based on network activity and the number of
        wallets, with lucky users receiving anywhere from{' '}
        <span className="guide-text">625 to over 10,000 Arb</span> tokens.
        Eligible projects were also awarded a substantial share – approximately
        <span className="guide-text"> 2.7 million Arb</span> tokens, valued at
        nearly <span className="guide-text">$6 million.</span>
      </p>
      <div>
        <ReactTweet />
      </div>

      <p className="sub-text">
        Now, for those who are new to the Web3 landscape, terms like
        <span className="guide-text">
          {' '}
          &quot;airdrop&quot; and &quot;tokens&quot;
        </span>{' '}
        might appear cryptic. Let&apos;s demystify them in an approachable
        manner:
      </p>

      {/**What is an airdrop section */}
      <div className="flex flex-col gap-2 mt-5">
        <TitleText
          title="Airdrops: What's the Buzz?"
          textStyles="subheader-text capitalize"
        />
        <p className="sub-text">
          Imagine an airdrop as a{' '}
          <span className="guide-text">
            digital version of receiving a surprise gift.{' '}
          </span>
          It&apos;s a method that projects and platforms use to distribute their
          tokens to a wide audience. Airdrops serve various purposes, such as{' '}
          <span className="guide-text">
            generating interest, rewarding loyal users, or kickstarting a fresh
            ecosystem.
          </span>{' '}
          If you meet the criteria, you may receive these tokens for free, and
          they can hold substantial real-world value.
        </p>
      </div>

      {/**What is a token */}
      <div className="flex flex-col gap-2 mt-5">
        <TitleText
          title="Tokens: The Building Blocks of Web3"
          textStyles="subheader-text capitalize"
        />
        <p className="sub-text">
          Tokens are digital assets that can represent a multitude of things,
          from <span className="guide-text">cryptocurrencies to utilities</span>{' '}
          within specific platforms. <br /> They are the lifeblood of the Web3
          realm,{' '}
          <span className="guide-text">
            facilitating transactions, fueling applications, and fostering
            thriving decentralized ecosystems
          </span>
          . When you hold tokens, you gain a stake in the digital economy.
        </p>
      </div>

      {/**Opportunities for all */}
      <div className="flex flex-col gap-2 mt-5">
        <TitleText
          title="Opportunities in Web3 for All:"
          textStyles="subheader-text capitalize"
        />
        <p className="sub-text">
          If you&apos;re thinking that Web3 might not be your cup of tea because
          you lack technical expertise, think again. Web3 warmly embraces
          individuals from diverse backgrounds, be they technically inclined or
          not.
        </p>

        {/**Technical Opportunities */}
        <div className="flex flex-col gap-2 mt-7">
          <h4 className="mini-header-text">Technical Opportunities:</h4>
          <p className="sub-text flex flex-col  gap-2">
            <motion.li variants={slideIn('down', 'tween', 0.5, 0.3)}>
              <span className="bullet-text capitalize">
                Blockchain Developers:
              </span>{' '}
              Your coding skills are in high demand to create, maintain, and
              enhance blockchain applications.
            </motion.li>
            <motion.li variants={slideIn('down', 'tween', 0.6, 0.3)}>
              <span className="bullet-text capitalize">
                Smart Contract developers:
              </span>{' '}
              Specialize in crafting self-executing contracts, a critical facet
              of Web3 platforms.
            </motion.li>
            <motion.li variants={slideIn('down', 'tween', 0.7, 0.3)}>
              <span className="bullet-text capitalize">Security experts:</span>{' '}
              Web3 systems require professionals to safeguard against
              vulnerabilities and cyber threats.
            </motion.li>
            <motion.li variants={slideIn('down', 'tween', 0.8, 0.3)}>
              <span className="bullet-text capitalize">Data analysts:</span>{' '}
              Analyzing blockchain data is pivotal for gaining insights and
              making informed decisions. for their contributions.
            </motion.li>
          </p>
        </div>

        {/**Non Technical */}
        <div className="flex flex-col gap-2 mt-7 ">
          <h4 className="mini-header-text">Non-Technical Opportunities:</h4>
          <p className="sub-text flex flex-col  gap-2">
            <motion.li variants={slideIn('down', 'tween', 0.5, 0.3)}>
              <span className="bullet-text capitalize">
                Community managers:
              </span>{' '}
              Cultivate engagement within Web3 communities, fostering vibrant
              inclusivity.
            </motion.li>
            <motion.li variants={slideIn('down', 'tween', 0.6, 0.3)}>
              <span className="bullet-text capitalize">Content creators:</span>{' '}
              Contribute to the Web3 narrative through writing, blogging,
              vlogging, or podcasting, educating and informing others.
            </motion.li>
            <motion.li variants={slideIn('down', 'tween', 0.7, 0.3)}>
              <span className="bullet-text capitalize">
                Marketing specialists:
              </span>{' '}
              Promote Web3 projects and platforms to a wider audience.
            </motion.li>
            <motion.li variants={slideIn('down', 'tween', 0.8, 0.3)}>
              <span className="bullet-text capitalize">
                Legal & compliance:
              </span>{' '}
              Navigate the regulatory intricacies of the Web3 space, ensuring
              compliance and ethical practice.
            </motion.li>
          </p>
        </div>

        <p className="sub-text mt-7">
          The opportunities within the Web3 domain are diverse, catering to a
          wide spectrum of skills and interests.
          <br /> Whether you&apos;re technically proficient or not, Web3 offers
          a dynamic space for exploration, learning, and contributing to the
          decentralized future.
          <br /> At <span className="guide-text">DSA CORP</span>, it is our
          mission to guide you on this remarkable journey towards Web3&apos;s{' '}
          <span className="guide-text">abundant opportunities</span>.
        </p>
      </div>
    </motion.section>
  );
};

export default Opportunity;
