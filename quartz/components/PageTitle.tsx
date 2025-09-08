import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import ResumeDownload from "./ResumeDownload"
import LinkedInButton from "./LinkedInButton"
import ProfilePic from "./ProfilePic"

const PageTitle: QuartzComponent = (props: QuartzComponentProps) => {
  const { fileData, cfg, displayClass } = props
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  // Get the component functions
  const ResumeDownloadComponent = ResumeDownload()
  const LinkedInButtonComponent = LinkedInButton()
  const ProfilePicComponent = ProfilePic()

  return (
    <div class={classNames(displayClass, "page-title-container")}>
      <ProfilePicComponent {...props} displayClass={undefined} />
      <h2 class="page-title">
        <a href={baseDir}>{title}</a>
      </h2>
      <h5 class="position-title">
        <a href={baseDir}>Software Development Manager</a>
      </h5>
      {/* <div class="page-title-buttons">
        <ResumeDownloadComponent {...props} displayClass={undefined} />
        <LinkedInButtonComponent {...props} displayClass={undefined} />
      </div> */}
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.position-title {
  font-size: 1rem;
  margin: 0;
  margin-top: 0.5rem;
  font-family: var(--bodyFont);
  color: var(--gray);
  font-weight: 400;
}

.page-title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 0;
}

.page-title-buttons {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  justify-content: center;
}

/* Clean mobile design */
@media (max-width: 768px) {
  .page-title {
    font-size: 1.5rem;
  }
  
  .position-title {
    font-size: 0.9rem;
  }
  
  .page-title-buttons {
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .page-title-container {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.3rem;
  }
  
  .position-title {
    font-size: 0.85rem;
  }
  
  .page-title-buttons {
    gap: 1.25rem;
    margin-top: 1.75rem;
  }
  
  .page-title-container {
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 1rem;
    text-align: center;
  }
}

${ProfilePic().css ?? ""}
${ResumeDownload().css ?? ""}
${LinkedInButton().css ?? ""}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
