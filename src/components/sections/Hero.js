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
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
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
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://map.myworldmap.org/"
                  >
                    Demo
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
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
