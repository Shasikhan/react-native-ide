import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../../Button";
import clsx from "clsx";

const PricingPlansList = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const individualMonthly = (
    <>
      $19 <span className={styles.plan__currency}>USD</span>
      <p className={styles.plan__price_second_line}> per person/month </p>
    </>
  );
  const individualAnnually = (
    <>
      <span className={styles.plan__price_strikethrough}>$228</span> $190{" "}
      <span className={styles.plan__currency}>USD</span>{" "}
      <p className={styles.plan__price_second_line}>per person/year </p>
    </>
  );
  const earlyBirdMonthly = (
    <>
      <span className={styles.plan__price_strikethrough}>$19</span> $10{" "}
      <span className={styles.plan__currency}>USD</span>{" "}
      <p className={styles.plan__price_second_line}>per person/month </p>
    </>
  );
  const earlyBirdAnnually = (
    <>
      <span className={styles.plan__price_strikethrough}>$190</span> $120{" "}
      <span className={styles.plan__currency}>USD</span>{" "}
      <p className={styles.plan__price_second_line}>per person/year </p>
    </>
  );
  return (
    <>
      <div className={styles.plan_pay_annually}>
        <p>Monthly</p>
        <label className={styles.toggleSwitch}>
          <input
            type="checkbox"
            checked={isMonthly}
            onChange={() => void setIsMonthly(!isMonthly)}
          />
          <div className={styles.toggleSwitchBackground}>
            <div className={styles.toggleSwitchHandle}></div>
          </div>
        </label>
        <p>
          Yearly <span className={styles.plan_pay_annually__discount}>2 months free</span>
        </p>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.plan__container}>
            <h2 className={styles.plan__name}>Individual</h2>
            <h3 className={styles.plan__price}>
              {isMonthly ? individualMonthly : individualAnnually}
            </h3>
            <p className={styles.plan__tagline}>
              billed {isMonthly ? "monthly" : "yearly, two months free"}
            </p>
            <p>What's included:</p>
            <ul className={styles.plan__features}>
              <li>Support the development of IDE</li>
              <li>Put breakpoints right in the VSCode</li>
              <li>Develop components in isolation</li>
              <li>Expo Router & React Navigation integration</li>
              <li>Get support through official Software Mansion channels</li>
            </ul>
            <div className={styles.plan__spacer} />
            <p>Get your Individual license starting at the end of Q3 2024.</p>
            <Button href="/" disabled>
              Choose
            </Button>
          </div>
        </li>
        <li className={styles.item}>
          <div className={clsx(styles.plan__container, styles.plan__highlight)}>
            <h2 className={styles.plan__name}>
              Early Bird <span className={styles.plan__special_offer}>One-time special offer</span>
            </h2>
            <h3 className={styles.plan__price}>
              {isMonthly ? earlyBirdMonthly : earlyBirdAnnually}
            </h3>
            <p className={styles.plan__tagline}>one-time payment for a year</p>
            <p>What's included:</p>
            <ul className={styles.plan__features}>
              <li>Support the development of IDE</li>
              <li>Put breakpoints right in the VSCode</li>
              <li>Develop components in isolation</li>
              <li>Expo Router & React Navigation integration</li>
              <li>Get support through official Software Mansion channels</li>
            </ul>
            <div className={styles.plan__spacer} />
            <p>Get your Early Bird's License starting early June.</p>
            <Button href="/" disabled>
              Choose
            </Button>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.plan__container}>
            <h2 className={styles.plan__name}>Enterprise</h2>
            <h3 className={styles.plan__price}>Get in touch</h3>
            <p className={styles.plan__tagline}>
              <a href="https://swmansion.com/contact#contact-form">Contact us</a> for pricing
              estimates
            </p>
            <p>What's included:</p>
            <ul className={styles.plan__features}>
              <li>Everything in Individual</li>
              <li>Priority support</li>
              <li>React Native Consulting services available</li>
            </ul>
            <div className={styles.plan__spacer} />
            <Button href="https://swmansion.com/contact#contact-form">Contact Sales</Button>
          </div>
        </li>
      </ul>
      <p>
        Disclaimer: The following pricing is for informational purposes only and may change in the
        future.
      </p>
    </>
  );
};

export default PricingPlansList;
