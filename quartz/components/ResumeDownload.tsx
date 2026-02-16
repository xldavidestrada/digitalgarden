import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"
import { classNames } from "../util/lang"

const ResumeDownload: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  
  return (
    <div class="resume-download-wrapper">
      <a 
        href="https://drive.google.com/file/d/1TzZmhZtYC4ruY50MIcGED0QACiQo71jU/view?usp=sharing"
        class={classNames(displayClass, "resume-download-btn")}
        download="resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Resume PDF"
        data-tooltip="Download Resume PDF"
      >
        <i class="fa-regular fa-file-pdf"></i>
      </a>
    </div>
  )
}

ResumeDownload.css = `
@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  40% {
    opacity: 1;
    transform: scale(1.2);
  }
  60% {
    transform: scale(0.9);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.resume-download-wrapper {
  position: relative;
  display: inline-block;
}

.resume-download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  color: #0077B5;
  text-decoration: none;
  border-radius: 50%;
  font-size: 1.5rem;
  transition: all 0.2s ease;
  border: 1px solid #0077B5;
  position: relative;
  animation: popIn 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

.resume-download-btn:hover {
  background-color: #f5f5f5;
  border-color: #0077B5;
  color: #0077B5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
}

.resume-download-btn:active {
  transform: translateY(0);
}

.resume-download-btn i {
  font-size: 1.125rem;
}

/* Tooltip styles */
.resume-download-btn::before {
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

.resume-download-btn::after {
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

.resume-download-btn:hover::before,
.resume-download-btn:hover::after {
  opacity: 1;
  visibility: visible;
}

/* Mobile: Hide tooltips on touch devices */
@media (hover: none) and (pointer: coarse) {
  .resume-download-btn::before,
  .resume-download-btn::after {
    display: none;
  }
}
`

export default (() => ResumeDownload) satisfies QuartzComponentConstructor
