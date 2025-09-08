import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ProfilePic: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  const src = "/static/pictures/profile-pic.jpeg"
  return (
    <div class={`profile-pic ${displayClass ?? ""}`}>
      <button class="profile-pic-button" aria-label="View full profile picture">
        <img src={src} alt="Profile picture" width="200" height="200"loading="lazy" />
      </button>
      <div class="profile-pic-modal" id="profile-pic-modal">
        <div class="modal-overlay">
          <div class="modal-content">
            <button class="modal-close" aria-label="Close modal">&times;</button>
            <img src={src} alt="Profile picture - Full size" />
          </div>
        </div>
      </div>
    </div>
  )
}

ProfilePic.afterDOMLoaded = `
// Add a small delay to ensure elements are fully rendered
setTimeout(function() {
  const profileButton = document.querySelector('.profile-pic-button');
  const modal = document.querySelector('.profile-pic-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');

  console.log('ProfilePic script loaded:', {
    profileButton: !!profileButton,
    modal: !!modal,
    modalClose: !!modalClose,
    modalOverlay: !!modalOverlay
  });

  if (profileButton && modal) {
    profileButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Profile picture clicked!');
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    function closeModal() {
      console.log('Closing modal');
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (modalClose) {
      modalClose.addEventListener('click', function(e) {
        e.preventDefault();
        closeModal();
      });
    }

    if (modalOverlay) {
      modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
          closeModal();
        }
      });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  } else {
    console.error('ProfilePic elements not found:', {
      profileButton,
      modal
    });
  }
}, 100);
`

ProfilePic.css = `
.profile-pic {
  display: flex;
  justify-content: center;
  margin-bottom: 0;
}

.profile-pic-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.profile-pic-button:hover {
  transform: scale(1.05);
}

.profile-pic img {
  width: 200px;
  height: 200px;
  border-radius: 9999px;
  object-fit: cover;
  display: block;
  border: 2px solid rgba(255,255,255,0.06);
  box-shadow: 0 10px 24px rgba(20,30,45,0.14);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  image-rendering: high-quality;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.profile-pic-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.profile-pic-modal.active {
  display: flex;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: var(--light);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--lightgray);
}

.modal-content img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;
  display: block;
}

.modal-close {
  position: absolute;
  top: -10px;
  right: -10px;
  background: var(--dark);
  color: var(--light);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: var(--darkgray);
  transform: scale(1.1);
}

/* Ensure the page title that follows the profile picture is centered and has no extra top margin
   Use a more specific selector targeting the h2 element so it overrides generic h2 rules. */
.profile-pic + .page-title,
.profile-pic + .page-title a,
.profile-pic + h2.page-title,
.profile-pic + h2.page-title a {
  display: block;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .profile-pic img {

  }
  .profile-pic {
    margin-bottom: 0;
  }
}
`

export default (() => ProfilePic) satisfies QuartzComponentConstructor
