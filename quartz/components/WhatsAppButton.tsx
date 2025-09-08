import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const WhatsAppButton: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class="whatsapp-wrapper">
      <a 
        href="https://wa.me/639154706756" 
        class={classNames(displayClass, "whatsapp-btn")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-tooltip="Chat on WhatsApp"
      >
        <i class="fab fa-whatsapp" aria-hidden="true"></i>
      </a>
    </div>
  )
}

WhatsAppButton.css = `
.whatsapp-wrapper {
  position: relative;
  display: inline-block;
}

.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  border-radius: 50%;
  font-size: 1.125rem;
  transition: all 0.2s ease;
  border: 1px solid #25D366;
  position: relative;
}

.whatsapp-btn:hover {
  background-color: #128C7E;
  border-color: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.25);
}

.whatsapp-btn:active {
  transform: translateY(0);
}

.whatsapp-btn i {
  font-size: 1.125rem;
}

/* Tooltip styles */
.whatsapp-btn::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--darkgray);
  color: var(--light);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 1000;
  pointer-events: none;
}

.whatsapp-btn::after {
  content: '';
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--darkgray);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 1000;
  pointer-events: none;
}

.whatsapp-btn:hover::before,
.whatsapp-btn:hover::after {
  opacity: 1;
  visibility: visible;
}

/* Mobile: Hide tooltips on touch devices */
@media (hover: none) and (pointer: coarse) {
  .whatsapp-btn::before,
  .whatsapp-btn::after {
    display: none;
  }
}
`

export default (() => WhatsAppButton) satisfies QuartzComponentConstructor
