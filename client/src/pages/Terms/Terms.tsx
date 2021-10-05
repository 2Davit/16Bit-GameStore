import React from "react";
import { StyledTerms } from "./StyledTerms";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <StyledTerms>
      <Fade>
        <h2>Terms and conditions</h2>
        <>
          <section>
            <h3>Introduction</h3>
            <p>
              These Website Standard Terms and Conditions written on this
              webpage shall manage your use of our website, 16Bit GameStore
              accessible at https://fakeurl.com/
            </p>
            <p>
              These Terms will be applied fully and affect to your use of this
              Website. By using this Website, you agreed to accept all terms and
              conditions written in here. You must not use this Website if you
              disagree with any of these Website Standard Terms and Conditions.
              These Terms and Conditions have been generated with the help of
              the Terms And Conditiions Sample and the Privacy Policy Generator.
            </p>
            <p>
              Minors or people below 18 years old are not allowed to use this
              Website.
            </p>
          </section>

          <section>
            <h3>Intellectual Property Rights</h3>
            <p>
              Other than the content you own, under these Terms, 16bit GameStore
              and/or its licensors own all the intellectual property rights and
              materials contained in this Website.
            </p>
            <p>
              You are granted limited license only for purposes of viewing the
              material contained on this Website.
            </p>
          </section>

          <section>
            <h3>Restrictions</h3>
            <p>You are specifically restricted from all of the following:</p>

            <ul>
              <li>publishing any Website material in any other media</li>
              <li>
                selling, sublicensing and/or otherwise commercializing any
                Website material
              </li>
              <li>publicly performing and/or showing any Website material</li>
              <li>
                using this Website in any way that is or may be damaging to this
                Website
              </li>
              <li>
                using this Website in any way that impacts user access to this
                Website
              </li>
              <li>
                using this Website contrary to applicable laws and regulations,
                or in any way may cause harm to the Website, or to any person or
                business entity
              </li>
              <li>
                engaging in any data mining, data harvesting, data extracting or
                any other similar activity in relation to this Website
              </li>
              <li>
                using this Website to engage in any advertising or marketing
              </li>
            </ul>

            <p>
              Certain areas of this Website are restricted from being access by
              you and 16Bit GameStore may further restrict access by you to any
              areas of this Website, at any time, in absolute discretion. Any
              user ID and password you may have for this Website are
              confidential and you must maintain confidentiality as well.
            </p>
          </section>

          <section>
            <h3>Your Content</h3>
            <p>
              In these Website Standard Terms and Conditions, "Your Content"
              shall mean any audio, video text, images or other material you
              choose to display on this Website. By displaying Your Content, you
              grant 16Bit GameStore a non-exclusive, worldwide irrevocable, sub
              licensable license to use, reproduce, adapt, publish, translate
              and distribute it in any and all media.
            </p>
            <p>
              Your Content must be your own and must not be invading any
              third-party’s rights. 16Bit GameStore reserves the right to remove
              any of Your Content from this Website at any time without notice.
            </p>
          </section>

          <section>
            <h3>Your Privacy</h3>
            <p>
              Please read <Link to="/privacy">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h3>No warranties</h3>
            <p>
              This Website is provided "as is," with all faults, and 16Bit
              GameStore express no representations or warranties, of any kind
              related to this Website or the materials contained on this
              Website. Also, nothing contained on this Website shall be
              interpreted as advising you.
            </p>
          </section>

          <section>
            <h3>Variation of Terms</h3>
            <p>
              16Bit GameStore is permitted to revise these Terms at any time as
              it sees fit, and by using this Website you are expected to review
              these Terms on a regular basis.
            </p>
          </section>

          <footer>
            <p>
              This Terms and Conditions page was created by using{" "}
              <a
                href="https://www.termsandcondiitionssample.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms And Conditions Sample
              </a>
              .
            </p>
          </footer>
        </>
      </Fade>
    </StyledTerms>
  );
};

export default Terms;
