import { BaseSyntheticEvent, useRef } from "react";

import classes from "./newsletter-registration.module.css";

function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);

  function registrationHandler(event: BaseSyntheticEvent) {
    event.preventDefault();
    const email = emailInputRef.current?.value;
    if (email) {
      fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        });
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
