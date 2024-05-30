function replaceProfilePicture() {
  const newProfilePictureURL = chrome.runtime.getURL('profilepic.jpeg');
  const oldprofilePicture = document.querySelectorAll('img.EntityPhoto-circle-0, img.EntityPhoto-circle-3, img.global-nav__me-photo, img.EntityPhoto-square-3, img.profile-card-profile-picture, img.profile-card-company-logo, img.EntityPhoto-circle-1, img.profile-photo-edit__preview, img.EntityPhoto-circle-5, img.EntityPhoto-circle-2, img.ivm-image-view-model__square-img, img.EntityPhoto-square-1, img.EntityPhoto-square-2, img.EntityPhoto-square-0, img.org-top-card-primary-content__logo, img.EntityPhoto-circle-1-ghost-person-stackedFacepile, img.pv-top-card-profile-picture__image--show, img.da-card-creative__profile-image, img.EntityPhoto-circle-1-stackedFacepile,img.EntityPhoto-circle-3-ghost-person');
  oldprofilePicture.forEach(img => {
    img.src = newProfilePictureURL;
  });
}
replaceProfilePicture();
const observer = new MutationObserver(() => {
  replaceProfilePicture();
});
observer.observe(document.body, { childList: true, subtree: true });
