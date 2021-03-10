import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    imageUrl: "img/js.svg",
  },
  {
    imageUrl: "img/react.svg",
  },
  {
    imageUrl: "img/node.svg",
  },
  {
    imageUrl: "img/css.svg",
  },
  {
    imageUrl: "img/html.svg",
  },
  {
    imageUrl: "img/vue.svg",
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--2", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img
            className={clsx("shadow--md", styles.featureImage)}
            src={imgUrl}
            alt={title}
          />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
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
    >
      <header className={clsx("hero shadow--lw", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.customFields.name}</h1>
          <img
            className={styles.picture}
            src={siteConfig.themeConfig.navbar.logo.src}
          />
          <i className={styles.subtitle}>{siteConfig.customFields.subtitle}</i>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.social}>
            <Link
              className={clsx("button button--outline", styles.socialButton)}
              to={useBaseUrl("blog/")}
            >
              <FaGithub size="2rem" />
            </Link>
            <Link
              className={clsx("button button--outline", styles.socialButton)}
              to={useBaseUrl("blog/")}
            >
              <FaLinkedin size="2rem" />
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
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
