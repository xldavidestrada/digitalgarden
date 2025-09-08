import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"
import { classNames } from "../util/lang"

const ResumeDownload: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  
  return (
    <div class="resume-download-wrapper">
      <a 
        href="https://app.enhancv.com/share/42c644fc"
        class={classNames(displayClass, "resume-download-btn")}
        download="resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Resume PDF"
        data-tooltip="Download Resume PDF"
      >
        <i class="fa-solid fa-file-pdf"></i>
      </a>
    </div>
  )
}

ResumeDownload.css = `
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
  background-color: var(--light);
  color: var(--dark);
  text-decoration: none;
  border-radius: 50%;
  font-size: 1.125rem;
  transition: all 0.2s ease;
  border: 1px solid var(--lightgray);
  position: relative;
}

.resume-download-btn:hover {
  background-color: var(--lightgray);
  color: var(--darkgray);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow);
  border-color: var(--gray);
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
