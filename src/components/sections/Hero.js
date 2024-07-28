import classNames from "classnames";
import React from "react";
import { SectionProps } from "../../utils/SectionProps";
import Button from "../elements/Button";
import ButtonGroup from "../elements/ButtonGroup";
import Image from "../elements/Image";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Create your own{" "}
              <span className="text-color-primary">Travel Map</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Create your own personalised interactive travel map.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://map.myworldmap.org/register"
                  >
                    Sign Up
                  </Button>
                  <Button
                    tag="a"
                    color="light"
                    wideMobile
                    href="https://map.myworldmap.org/login"
                  >
                    Login
                  </Button>
                </ButtonGroup>
              </div>
              {/*<div className="reveal-from-bottom" data-reveal-delay="600">
                <br />
                <a
                  href="https://play.google.com/store/apps/details?id=com.myworldmap"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={
                      "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    }
                    alt={"Get it on Google Play"}
                    width={200}
                    height={100}
                  />
                </a>
              </div>*/}
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01">
            <Image
              className="has-shadow"
              src={require("./../../assets/images/hero.png")}
              alt="Hero"
              width={896}
              height={504}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
