import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const LinkedInButton: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <a 
      href="https://linkedin.com/in/xldavidestrada" 
      class={classNames(displayClass, "linkedin-btn")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit LinkedIn Profile"
    >
      <i class="fab fa-linkedin-in" aria-hidden="true"></i>
    </a>
  )
}

LinkedInButton.css = `
.linkedin-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--light);
  color: #0077b5;
  text-decoration: none;
  border-radius: 50%;
  font-size: 1.125rem;
  transition: all 0.2s ease;
  border: 1px solid var(--lightgray);
}

.linkedin-btn:hover {
  background-color: #0077b5;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 119, 181, 0.25);
  border-color: #0077b5;
}

.linkedin-btn:active {
  transform: translateY(0);
}

.linkedin-btn i {
  font-size: 1.125rem;
}
`

export default (() => LinkedInButton) satisfies QuartzComponentConstructor
