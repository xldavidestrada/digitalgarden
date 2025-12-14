import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const Info: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "info-container")}>
      
      {/* Contacts Section */}
      <div class="info-section">
        <h4 class="info-section-title">Contacts</h4>
        <div class="info-items">
          <div class="info-item">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            <div class="email-container">
              <a href="mailto:hello@davidestrada.dev" class="info-link" id="email-link">hello@davidestrada.dev</a>
              <button class="copy-btn" id="email-copy-btn" aria-label="Copy email address" data-tooltip="Copy">
                <i class="fas fa-copy" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div class="info-item">
            <i class="fas fa-phone" aria-hidden="true"></i>
            <div class="phone-container">
              <span class="phone-masked" id="phone-masked">+63 *** *** ****</span>
              <a href="tel:+639154706756" class="info-link phone-revealed" id="phone-revealed" style="display: none;">+63 915 470 6756</a>
              <button class="phone-reveal-btn" id="phone-reveal-btn" aria-label="Show phone number">
                <i class="fas fa-eye" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Info.afterDOMLoaded = `
document.addEventListener('DOMContentLoaded', function() {
  // Phone Reveal Logic
  const phoneRevealBtn = document.getElementById('phone-reveal-btn');
  const phoneMasked = document.getElementById('phone-masked');
  const phoneRevealed = document.getElementById('phone-revealed');

  if (phoneRevealBtn && phoneMasked && phoneRevealed) {
    phoneRevealBtn.addEventListener('click', function() {
      phoneMasked.style.display = 'none';
      phoneRevealed.style.display = 'inline';
      phoneRevealBtn.style.display = 'none';
    });
  }

  // Email Copy Logic
  const emailCopyBtn = document.getElementById('email-copy-btn');
  const emailLink = document.getElementById('email-link');

  if (emailCopyBtn && emailLink) {
    emailCopyBtn.addEventListener('click', function() {
      const email = emailLink.innerText;
      navigator.clipboard.writeText(email).then(function() {
        // Show feedback
        const originalIcon = emailCopyBtn.innerHTML;
        emailCopyBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';
        emailCopyBtn.setAttribute('data-tooltip', 'Copied!');
        
        setTimeout(function() {
          emailCopyBtn.innerHTML = originalIcon;
          emailCopyBtn.setAttribute('data-tooltip', 'Copy');
        }, 2000);
      }).catch(function(err) {
        console.error('Could not copy text: ', err);
      });
    });
  }
});
`

Info.css = `
.info-container {
  background: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;
}

.info-section {
  margin-bottom: 1rem;
}

.info-section:last-child {
  margin-bottom: 0;
}

.info-section-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--dark);
  margin: 0 0 0.75rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding-left: 0.5rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 0.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--dark);
  font-weight: 500;
}

.info-item i {
  width: 1rem;
  text-align: center;
  color: var(--secondary);
  flex-shrink: 0;
}

.info-link {
  color: var(--dark);
  text-decoration: none;
  transition: color 0.2s ease;
}

.info-link:hover {
  color: var(--secondary);
  text-decoration: none;
}

.phone-container, .email-container {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
}

.phone-reveal-btn, .copy-btn {
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  color: var(--secondary);
  padding: 0;
  font-size: 0.8rem;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.phone-reveal-btn:hover, .copy-btn:hover {
  background: rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

/* Tooltip for copy button */
.copy-btn {
  position: relative;
}

.copy-btn[data-tooltip]:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--dark);
  color: var(--light);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  white-space: nowrap;
  pointer-events: none;
  margin-bottom: 5px;
  opacity: 0.9;
}

.info-buttons {
  display: flex;
  gap: 0.75rem;
}
`

export default (() => Info) satisfies QuartzComponentConstructor
