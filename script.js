let selectedProject = 0;
let selectedImage = 0;
const projectList = document.querySelector("#project-list");
const galleryThumbnailList = document.querySelector("#gallery-thumbnail-list");
const mainImage = document.querySelector("#main-image");
const previousButton = document.querySelector("#previous-item");
const nextButton = document.querySelector("#next-item");
const projectUpButton = document.querySelector("#project-up");
const projectDownButton = document.querySelector("#project-down");
const workCount = document.querySelector("#work-count");

function activeProject() { return portfolioProjects[selectedProject]; }
function activeImages() { return activeProject()?.images || []; }
function renderProjects() {
  projectList.replaceChildren(...portfolioProjects.map((project, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-current", String(index === selectedProject));
    button.setAttribute("aria-label", `${index + 1}번 작업 보기`);
    const image = new Image();
    image.src = project.images[0];
    image.alt = ""; image.loading = "lazy"; image.decoding = "async";
    button.append(image);
    button.addEventListener("click", () => { selectedProject = index; selectedImage = 0; renderGallery(); });
    return button;
  }));
  projectUpButton.disabled = portfolioProjects.length === 0;
  projectDownButton.disabled = portfolioProjects.length === 0;
}
function renderGallery() {
  const images = activeImages();
  const imageUrl = images[selectedImage];
  const hasImage = Boolean(imageUrl);
  mainImage.hidden = !hasImage;
  previousButton.disabled = !hasImage || images.length < 2;
  nextButton.disabled = !hasImage || images.length < 2;
  workCount.hidden = !hasImage || images.length < 2;
  if (hasImage) {
    mainImage.src = imageUrl; mainImage.alt = "포트폴리오 작업 이미지";
    mainImage.decoding = "async"; mainImage.fetchPriority = "high";
    document.querySelector("#current-item").textContent = selectedImage + 1;
    document.querySelector("#total-items").textContent = images.length;
  } else { mainImage.removeAttribute("src"); }
  galleryThumbnailList.replaceChildren(...images.map((imageUrl, index) => {
    const button = document.createElement("button");
    button.type = "button"; button.setAttribute("aria-current", String(index === selectedImage));
    button.setAttribute("aria-label", `${index + 1}번 이미지 보기`);
    const image = new Image(); image.src = imageUrl; image.alt = ""; image.loading = "lazy"; image.decoding = "async";
    button.append(image);
    button.addEventListener("click", () => { selectedImage = index; renderGallery(); });
    return button;
  }));
  const nextImage = images[(selectedImage + 1) % images.length];
  if (images.length > 1 && nextImage) { const preload = new Image(); preload.src = nextImage; preload.decoding = "async"; }
  renderProjects();
}
function changeImage(direction) {
  const images = activeImages(); if (images.length < 2) return;
  selectedImage = (selectedImage + direction + images.length) % images.length; renderGallery();
}
previousButton.addEventListener("click", () => changeImage(-1));
nextButton.addEventListener("click", () => changeImage(1));
projectUpButton.addEventListener("click", () => projectList.scrollBy({ top: -180, behavior: "smooth" }));
projectDownButton.addEventListener("click", () => projectList.scrollBy({ top: 180, behavior: "smooth" }));
document.addEventListener("keydown", event => { if (event.target.matches("input,textarea,button")) return; if (event.key === "ArrowLeft") changeImage(-1); if (event.key === "ArrowRight") changeImage(1); });

document.querySelectorAll("[data-scroll]").forEach(button => button.addEventListener("click", () => document.getElementById(button.dataset.scroll).scrollIntoView({ behavior: "smooth", block: "start" })));
const topButton = document.querySelector("#top-button");
window.addEventListener("scroll", () => topButton.classList.toggle("is-visible", window.scrollY > 450), { passive: true });
topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
const copyStatus = document.querySelector("#copy-status");
function showCopyStatus(message, isError = false) {
  copyStatus.textContent = message;
  copyStatus.classList.toggle("is-error", isError);
  copyStatus.classList.add("is-visible");
}
function legacyCopy(text) {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0";
  document.body.append(area);
  try { area.focus({ preventScroll: true }); } catch { area.focus(); }
  area.select(); area.setSelectionRange(0, area.value.length);
  const copied = document.execCommand("copy");
  area.remove();
  window.scrollTo(scrollX, scrollY);
  return copied;
}
async function copyInquiry(text) {
  if (legacyCopy(text)) return true;
  if (!navigator.clipboard?.writeText) return false;
  try {
    return await Promise.race([
      navigator.clipboard.writeText(text).then(() => true),
      new Promise(resolve => setTimeout(() => resolve(false), 700))
    ]);
  } catch { return false; }
}
document.querySelector("#copy-inquiry").addEventListener("click", async () => {
  const text = [...document.querySelectorAll("#inquiry-form [name]")]
    .map((field, index) => `${index + 1}. ${field.name}\n${field.value.trim()}`)
    .join("\n\n");
  const copied = await copyInquiry(text);
  showCopyStatus(copied ? "문의 내용이 복사되었습니다." : "복사에 실패했습니다. 다시 시도해주세요.", !copied);
});
let heightFrameId = 0; let lastReportedHeight = 0; let forceHeightReport = false;
function reportHeight(force = false) {
  if (window.parent === window) return;
  forceHeightReport ||= force; if (heightFrameId) return;
  heightFrameId = requestAnimationFrame(() => { heightFrameId = 0; const height = Math.ceil(document.body.scrollHeight); if (forceHeightReport || height !== lastReportedHeight) { lastReportedHeight = height; window.parent.postMessage({ type: "fancy-planet:resize", height }, "*"); } forceHeightReport = false; });
}
new ResizeObserver(() => reportHeight()).observe(document.documentElement);
window.addEventListener("load", () => reportHeight(true)); window.addEventListener("resize", () => reportHeight(true), { passive: true });
window.addEventListener("message", event => { if (event.data?.type === "fancy-planet:request-height") reportHeight(true); });
renderGallery();
