import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import PageTitle from "./PageTitle"
import Search from "./Search"
import Darkmode from "./Darkmode"
import Info from "./Info"
import ProfilePic from "./ProfilePic"
import ResumeDownload from "./ResumeDownload"
import LinkedInButton from "./LinkedInButton"
import WhatsAppButton from "./WhatsAppButton"
import { concatenateResources } from "../util/resources"
import { i18n } from "../i18n"
import { pathToRoot } from "../util/path"
import { classNames } from "../util/lang"

const ProfileCard: QuartzComponent = ({ displayClass, ...props }: QuartzComponentProps) => {
  const { fileData, cfg } = props
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  const SearchComponent = Search()
  const DarkmodeComponent = Darkmode()
  const InfoComponent = Info()
  const ProfilePicComponent = ProfilePic()
  const ResumeDownloadComponent = ResumeDownload()
  const LinkedInButtonComponent = LinkedInButton()
  const WhatsAppButtonComponent = WhatsAppButton()

  return (
    <div class={classNames(displayClass, "profile-card")}>
      <div class="profile-card-header">
        <ProfilePicComponent {...props} displayClass={undefined} />
        <h2 class="profile-name">
          <a href={baseDir}>{title}</a>
        </h2>
        <h5 class="position-title">
          <a href={baseDir} class="typing-effect">Software Development Manager</a>
        </h5>
        
        <div class="social-icons-row">
          <LinkedInButtonComponent {...props} displayClass={undefined} />
          <WhatsAppButtonComponent {...props} displayClass={undefined} />
          <ResumeDownloadComponent {...props} displayClass={undefined} />
        </div>
      </div>
      
      <div class="profile-card-tools">
        <div class="search-wrapper">
          <SearchComponent {...props} />
        </div>
        <div class="darkmode-wrapper">
          <DarkmodeComponent {...props} />
        </div>
      </div>

      <div class="profile-card-content">
        <InfoComponent {...props} />
      </div>
    </div>
  )
}

ProfileCard.css = `
.profile-card {
  background: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 16px;
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

@media all and (max-width: 800px) {
  .profile-card {
    position: sticky;
    top: 4rem;
    z-index: 999;
    box-shadow: none;
    border: none;
    border-bottom: 1px solid var(--lightgray);
    border-radius: 0;
    margin-bottom: 1rem;
    width: 100%;
    background: var(--light);
  }
  .profile-card-header {
    border-radius: 0;
    padding-bottom: 2.5rem !important;
  }
  .profile-card-content {
    display: none;
  }
}

.profile-card-header {
  padding: 2rem 1.5rem 0.5rem 1.5rem;
  background: var(--light);
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.profile-name {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.profile-name a {
  color: var(--dark);
  text-decoration: none;
}

.position-title {
  font-size: 1rem;
  margin: 0;
  margin-top: 0.5rem;
  font-family: var(--bodyFont);
  color: var(--gray);
  font-weight: 400;
  display: flex;
  justify-content: center;
}

.typing-effect {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--secondary);
  animation: 
    typing 3.5s steps(30, end),
    blink-caret 0.75s step-end infinite;
  max-width: 100%;
  color: var(--secondary);
  text-decoration: none;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--secondary) }
}

.social-icons-row {
  display: flex;
  gap: 1rem;
  margin-top: 1.25rem;
  justify-content: center;
  align-items: center;
}

.profile-card-tools {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background: var(--light);
  border-top: 1px solid var(--lightgray);
  border-bottom: 1px solid var(--lightgray);
  min-height: 3rem;
}

.search-wrapper {
  flex-grow: 1;
  display: flex;
}

.search-wrapper .search {
  width: 100%;
}

.profile-card-content {
  padding: 0.5rem 1.5rem 2rem 1.5rem;
  background: var(--light);
  border-radius: 0 0 16px 16px;
}

/* Override Info styles when inside card */
.profile-card-content .info-container {
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
}

/* Dark mode support */
:root[saved-theme="dark"] .profile-card,
:root[saved-theme="dark"] .profile-card-header,
:root[saved-theme="dark"] .profile-card-tools,
:root[saved-theme="dark"] .profile-card-content {
  background: var(--light);
  border-color: var(--lightgray);
}

/* Mobile adjustments for inline display */
.mobile-only .profile-card {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  margin-bottom: 1rem;
}

.mobile-only .profile-card-header {
  background: transparent !important;
  padding: 0;
}

.mobile-only .profile-card-tools,
.mobile-only .profile-card-content {
  display: none !important;
}

.mobile-only .profile-name {
  font-size: 2rem;
  margin-top: 0.5rem;
}

.mobile-only .position-title {
  font-size: 1rem;
  margin-top: 0.5rem;
}

.mobile-only .social-icons-row {
  margin-top: 1rem;
}

@media (max-width: 800px) {
  .mobile-only .profile-name {
    font-size: 1.75rem;
  }
  
  .mobile-only .typing-effect {
    white-space: normal;
    border-right: none;
    animation: none;
    text-align: center;
  }
}
`

export default (() => {
  const ProfileCardComponent = ProfileCard
  ProfileCardComponent.css = concatenateResources(
    Search().css,
    Darkmode().css,
    Info().css,
    ProfilePic().css,
    ResumeDownload().css,
    LinkedInButton().css,
    WhatsAppButton().css,
    ProfileCard.css
  )
  return ProfileCardComponent
}) satisfies QuartzComponentConstructor
