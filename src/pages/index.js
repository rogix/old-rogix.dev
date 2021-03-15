import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaCode,
} from "react-icons/fa";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

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
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      className="test"
    >
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
              <img
                className={styles.picture}
                src={siteConfig.themeConfig.navbar.logo.src}
              />
            </div>
          </div>
          <span className={styles.subtitle}>
            {siteConfig.customFields.subtitle}
          </span>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.social}>
            <Link
              className={clsx(
                "button button--outline button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("blog")}
            >
              Visitar Blog
            </Link>
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
    </Layout>
  );
}

export default Home;
