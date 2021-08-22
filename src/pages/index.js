import React, { useRef, useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaCode,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Parallax from "parallax-js";

import Circle from "@site/static/img/background/circle-dark.svg";
import DashedCircle from "@site/static/img/background/dashed-circle-dark.svg";
import Square from "@site/static/img/background/square-dark.svg";
import SquarePoly from "@site/static/img/background/square-poly-dark.svg";
import SquareRL from "@site/static/img/background/square-rl-dark.svg";
import Avatar from "@site/static/img/meme.jpg";

const features = [
  {
    imageUrl: <FaJsSquare size="2rem" color="#ffff00" />,
  },
  {
    imageUrl: <FaReact size="2rem" color="#61dafb" />,
  },
  {
    imageUrl: <FaNodeJs size="2rem" color="#026e00" />,
  },
  {
    imageUrl: <FaCss3 size="2rem" color="#268fc9" />,
  },
  {
    imageUrl: <FaHtml5 size="2rem" color="#e96227" />,
  },
  {
    imageUrl: <FaCode size="2rem" color="#19a8b5" />,
  },
];

function Feature({ imageUrl }) {
  return (
    <div className={clsx(styles.feature)}>
      {imageUrl && (
        <div className={clsx("text--center", styles.featureContainer)}>
          <div className={styles.featureImage}>{imageUrl}</div>
        </div>
      )}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <Layout description="Blog Front End" className="test">
      <header className={clsx("hero shadow", styles.heroBanner)}>
        <div className="container">
          <hr className="divider"></hr>
          <div className={styles.heroName}>
            <h1 className="hero__title">
              {siteConfig.customFields.name} {siteConfig.customFields.lastName}
            </h1>
          </div>
          <div className="profile-image">
            <div className="profile-image-border">
              <img className={styles.picture} src={Avatar} />
            </div>
          </div>
          <span className={styles.subtitle}>
            {siteConfig.customFields.subtitle}
          </span>
          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          {/* <div className={styles.social}>
            <Link
              className={clsx(
                "button button--outline button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("blog")}
            >
              Visitar Blog
            </Link>
          </div> */}
              <div className="container">
                <div className={styles.social}>
                  <div className="social-icons">
                    <Link to="https://github.com/rogix">
                      <FaGithub size="1.5rem" />
                    </Link>
                    <Link to="https://linkedin.com/in/rogmxp">
                      <FaLinkedin size="1.5rem" />
                    </Link>
                  </div>
                </div>
            </div>
          </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className={styles.techs}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <div ref={sceneEl} className={clsx("bkg-dark", styles.parallax)}>
        <Circle
          data-depth="0.5"
          alt=""
          className={clsx("inner-shadow radius-5", styles.p1)}
        />
        <DashedCircle
          data-depth="0.3"
          alt=""
          className={clsx("inner-shadow radius-5", styles.p2)}
        />
        <Square
          data-depth="0.5"
          alt=""
          className={clsx("shadow radius-2", styles.p3)}
        />
        <SquareRL data-depth="0.7" alt="" className={styles.p4} />
        <SquarePoly data-depth="0.7" alt="" className={styles.p5} />
      </div>
    </Layout>
  );
}

export default Home;
