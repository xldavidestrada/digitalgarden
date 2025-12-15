import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import ResumeDownload from "./ResumeDownload"

const ArticleTitle: QuartzComponent = (props: QuartzComponentProps) => {
  const { fileData, displayClass } = props
  const title = fileData.frontmatter?.title
  
  if (title) {
    // Only show download button on the index page (home page)
    const isIndex = fileData.slug === "Resume"
    
    if (isIndex) {
      const ResumeDownloadComponent = ResumeDownload()
      return (
        <div class="article-title-wrapper">
          <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
          <div class="article-actions">
            <ResumeDownloadComponent {...props} />
          </div>
        </div>
      )
    }
    
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}

.article-title-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.article-title-wrapper .article-title {
  margin: 0;
}

.article-actions {
  display: flex;
  align-items: center;
}

@media all and (max-width: 800px) {
  .article-actions {
    display: none;
  }
}

${ResumeDownload().css}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
