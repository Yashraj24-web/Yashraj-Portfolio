import { useState } from "react";
import "./Transmission.css";

function Transmission() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <section className="transmission-section" id="contact">

      <div className="transmission-heading">

        <div>
          <span>06 / 06</span>

          <h2>
            SEND A
            <span>TRANSMISSION</span>
          </h2>
        </div>

        <div className="transmission-intro">
          <span>COMMUNICATION TERMINAL</span>

          <p>
            Have an idea?
            <br />
            Let's build something.
          </p>
        </div>

      </div>

      <div className="transmission-grid">



        <div className="transmission-info">

          <div className="terminal-status">
            <span className="status-dot"></span>

            <div>
              <small>CONNECTION STATUS</small>
              <strong>ONLINE</strong>
            </div>
          </div>

          <h3>
            OPEN
            <br />
            CHANNEL.
          </h3>

          <p className="transmission-description">
            Whether it's a project, collaboration, idea or
            just a conversation about technology — the
            channel is open.
          </p>

          <div className="contact-links">

            <a
              href="yashrajsingh10293847@gmail.com"
              className="contact-link"
            >
              <span>EMAIL</span>
              <strong>→</strong>
            </a>

            <a
              href="https://github.com/Yashraj24-web"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>GITHUB</span>
              <strong>→</strong>
            </a>

            <a
              href="https://www.linkedin.com/in/yashraj-singh-559366384?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>LINKEDIN</span>
              <strong>→</strong>
            </a>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="transmission-form-wrapper">

          <div className="form-header">
            <span>NEW TRANSMISSION</span>
            <span>SECURE CHANNEL</span>
          </div>

          {sent ? (
            <div className="transmission-success">

              <div className="success-icon">
                ✓
              </div>

              <span>TRANSMISSION SENT</span>

              <p>
                Your message has been queued successfully.
              </p>

              <button
                onClick={() => setSent(false)}
              >
                SEND ANOTHER →
              </button>

            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <div className="input-group">

                <label>IDENTIFICATION</label>

                <input
                  type="text"
                  placeholder="YOUR NAME"
                  required
                />

              </div>

              <div className="input-group">

                <label>RETURN CHANNEL</label>

                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  required
                />

              </div>

              <div className="input-group">

                <label>MESSAGE DATA</label>

                <textarea
                  placeholder="WRITE YOUR MESSAGE..."
                  rows="6"
                  required
                ></textarea>

              </div>

              <button
                type="submit"
                className="send-button"
              >
                <span>SEND TRANSMISSION</span>
                <strong>→</strong>
              </button>

            </form>
          )}

        </div>

      </div>

      <footer className="transmission-footer">

        <div>
          <strong>YASHRAJ</strong>
          <span>THE BUILDER</span>
        </div>

        <p>
          SYSTEM STATUS: OPERATIONAL
        </p>

        <span>
          © 2026 YASHRAJ
        </span>

      </footer>

    </section>
  );
}

export default Transmission;