import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import ResumeDownload from "./ResumeDownload"
import LinkedInButton from "./LinkedInButton"
import WhatsAppButton from "./WhatsAppButton"

const Info: QuartzComponent = (props: QuartzComponentProps) => {
  // Get the component functions
  const ResumeDownloadComponent = ResumeDownload()
  const LinkedInButtonComponent = LinkedInButton()
  const WhatsAppButtonComponent = WhatsAppButton()

  return (
    <div class="info-container">
      <h3 class="info-title">Info</h3>
      
      {/* Contacts Section */}
      <div class="info-section">
        <h4 class="info-section-title">Contacts</h4>
        <div class="info-items">
          <div class="info-item">
            <i class="fas fa-envelope" aria-hidden="true"></i>
            <a href="mailto:hello@davidestrada.dev" class="info-link">hello@davidestrada.dev</a>
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

      {/* Documents Section */}
      <div class="info-section">
        <h4 class="info-section-title">Documents</h4>
        <div class="info-buttons">
          <ResumeDownloadComponent {...props} displayClass={undefined} />
        </div>
      </div>

      {/* Socials Section */}
      <div class="info-section">
        <h4 class="info-section-title">Socials</h4>
        <div class="info-buttons">
          <LinkedInButtonComponent {...props} displayClass={undefined} />
          <WhatsAppButtonComponent {...props} displayClass={undefined} />
        </div>
      </div>
    </div>
  )
}

Info.afterDOMLoaded = `
document.addEventListener('DOMContentLoaded', function() {
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
});
`

Info.css = `
.info-container {
  background: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.info-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: var(--dark);
  font-family: var(--titleFont);
}

.info-section {
  margin-bottom: 1rem;
}

.info-section:last-child {
  margin-bottom: 0;
}

.info-section-title {
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  color: var(--darkgray);
  font-family: var(--bodyFont);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-buttons {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-start;
  align-items: center;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
}

.info-item i {
  width: 16px;
  color: var(--gray);
  font-size: 0.85rem;
}

.info-link {
  color: var(--secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.info-link:hover {
  color: var(--tertiary);
  text-decoration: underline;
}

.phone-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.phone-masked {
  color: var(--gray);
  font-size: 0.85rem;
  font-family: monospace;
  letter-spacing: 1px;
}

.phone-revealed {
  color: var(--secondary);
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.85rem;
}

.phone-revealed:hover {
  color: var(--tertiary);
  text-decoration: underline;
}

.phone-reveal-btn {
  background: none;
  border: none;
  color: var(--gray);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}

.phone-reveal-btn:hover {
  background-color: var(--lightgray);
  color: var(--dark);
}

.phone-reveal-btn:active {
  transform: scale(0.95);
}

.info-label {
  color: var(--darkgray);
  font-size: 0.8rem;
  margin-left: 0.25rem;
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .info-container {
    padding: 0.75rem;
    margin-bottom: 0.75rem;
  }
  
  .info-title {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
  
  .info-section {
    margin-bottom: 0.75rem;
  }
  
  .info-item {
    font-size: 0.8rem;
  }
}

${ResumeDownload().css ?? ""}
${LinkedInButton().css ?? ""}
${WhatsAppButton().css ?? ""}
`

export default (() => Info) satisfies QuartzComponentConstructor
