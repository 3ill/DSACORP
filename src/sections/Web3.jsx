import { motion } from 'framer-motion';
import { TitleText } from '../components/CustomTexts';
import { staggerContainer, slideIn } from '../utils/motion';

const Web3 = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-2">
        <TitleText title="What is Web3?" textStyles="header-text capitalize" />
        <p className="sub-text">
          The internet has come a long way, evolving through distinct phases,
          each bringing its own set of capabilities and limitations.
          Understanding this journey is crucial in appreciating the
          revolutionary concept of Web3.
        </p>
      </div>

      {/**Web 1 section */}
      <div className="flex flex-col gap-2 mt-5">
        <TitleText
          title="Web 1: The internet's infancy"
          textStyles="subheader-text capitalize"
        />
        <p className="sub-text">
          In the early days of the internet, often referred to as &quot;Web
          1,&quot; the primary focus was on sharing information.
          <br /> This era was characterized by{' '}
          <span className="guide-text">
            static web pages & limited interactivity.
          </span>{' '}
          While it laid the foundation for digital communication, it had its
          drawbacks. <span className="guide-text">Centralization</span> was a
          significant issue, with{' '}
          <span className="guide-text">
            power concentrated in the hands of a few
          </span>
          , making data vulnerable to control and manipulation.
        </p>
      </div>

      {/**Web 2 Section */}
      <div className="flex flex-col gap-2 mt-5">
        <TitleText
          title="Web 2: The rise of social interaction"
          textStyles="subheader-text capitalize"
        />
        <p className="sub-text">
          With the emergence of &quot;Web2,&quot; the internet transformed into
          a dynamic platform for social interaction. Social media, e-commerce,
          and user-generated content became the norm. <br /> However, this phase
          came with its share of concerns, including{' '}
          <span className="guide-text">data privacy issues</span> and the{' '}
          <span className="guide-text">dominance of tech giants</span> who
          controlled user data for profit.
        </p>
      </div>

      {/**Web 3 Section */}
      <div className="flex flex-col gap-2 mt-5">
        <TitleText
          title="Web 3: The Decentralized Revolution"
          textStyles="subheader-text capitalize"
        />
        <p className="sub-text">
          Now, enter &quot;Web3.&quot; This is where the true transformation of
          the internet occurs. Web3 brings forth decentralization{' '}
          <span className="guide-text">
            (no single entity has dominance across a network or system)
          </span>
          ,{' '}
          <span className="guide-text">
            empowering users with control over their data, identity, and online
            interactions
          </span>
          . It addresses the flaws of centralization and data manipulation
          present in Web1 and the data privacy concerns of Web2.
        </p>
      </div>

      {/**Benefits */}
      <div className="flex flex-col mt-5">
        <TitleText
          title="Key Benefits of Web3:"
          textStyles="subheader-text capitalize"
        />
      </div>
      <p className="sub-text flex flex-col gap-2">
        <motion.li variants={slideIn('down', 'tween', 0.5, 0.3)}>
          <span className="bullet-text">User Empowerment:</span> Web3 is about
          giving the power back to the individual. You own your data, identity,
          and online presence.
        </motion.li>
        <motion.li variants={slideIn('down', 'tween', 0.6, 0.3)}>
          <span className="bullet-text">Interoperability:</span> Web3 is
          designed for seamless integration, allowing different applications to
          work together effectively.
        </motion.li>
        <motion.li variants={slideIn('down', 'tween', 0.7, 0.3)}>
          <span className="bullet-text">Trust and Security:</span> With
          blockchain and cryptographic technologies, Web3 enhances trust and
          security in online transactions and interactions.
        </motion.li>
        <motion.li variants={slideIn('down', 'tween', 0.8, 0.3)}>
          <span className="bullet-text">Incentivization:</span> Web3 introduces
          token economies and incentivizes active participation, rewarding users
          for their contributions.
        </motion.li>
      </p>
    </motion.section>
  );
};

export default Web3;
