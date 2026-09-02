let selectedTab = 0;
let selectedItem = 0;
const tabList = document.querySelector("#portfolio-tabs");
const thumbnailList = document.querySelector("#thumbnail-list");
const mainImage = document.querySelector("#main-image");
const workDetails = document.querySelector("#work-details");
const workTitle = document.querySelector("#work-title");
const workDescription = document.querySelector("#work-description");
const previousButton = document.querySelector("#previous-item");
const nextButton = document.querySelector("#next-item");
const upButton = document.querySelector("#thumbnail-up");
const downButton = document.querySelector("#thumbnail-down");
const workCount = document.querySelector("#work-count");

function activeTab() { return portfolioTabs[selectedTab]; }
function activeItems() { return activeTab().items; }
function renderTabs() {
  tabList.replaceChildren(...portfolioTabs.map((tab, index) => {
    const button = document.createElement("button");
    button.type = "button"; button.textContent = tab.name;
    button.setAttribute("aria-pressed", String(index === selectedTab));
    button.addEventListener("click", () => { selectedTab = index; selectedItem = 0; renderGallery(); });
    return button;
  }));
  tabList.hidden = portfolioTabs.length < 2;
}
function renderGallery() {
  const items = activeItems(); const item = items[selectedItem]; const hasItems = Boolean(item);
  mainImage.hidden = !hasItems; previousButton.disabled = !hasItems || items.length < 2; nextButton.disabled = !hasItems || items.length < 2;
  workCount.hidden = !hasItems || items.length < 2; upButton.disabled = !hasItems; downButton.disabled = !hasItems;
  if (hasItems) {
    mainImage.src = item.image; mainImage.alt = item.title ? `${item.title} 포트폴리오 이미지` : "포트폴리오 이미지";
    workTitle.textContent = item.title || ""; workDescription.textContent = item.description || "";
    workDetails.hidden = !item.title && !item.description;
    document.querySelector("#current-item").textContent = selectedItem + 1; document.querySelector("#total-items").textContent = items.length;
  } else { workDetails.hidden = true; mainImage.removeAttribute("src"); }
  thumbnailList.replaceChildren(...items.map((item, index) => {
    const button = document.createElement("button"); button.type = "button"; button.setAttribute("aria-current", String(index === selectedItem));
    button.setAttribute("aria-label", `${activeTab().name} ${index + 1}번 작품 보기`);
    const image = new Image(); image.src = item.image; image.alt = ""; image.loading = "lazy"; button.append(image);
    button.addEventListener("click", () => { selectedItem = index; renderGallery(); }); return button;
  }));
  renderTabs();
}
function changeItem(direction) { const items = activeItems(); if (items.length < 2) return; selectedItem = (selectedItem + direction + items.length) % items.length; renderGallery(); }
previousButton.addEventListener("click", () => changeItem(-1)); nextButton.addEventListener("click", () => changeItem(1));
upButton.addEventListener("click", () => thumbnailList.scrollBy({ top: -160, behavior: "smooth" }));
downButton.addEventListener("click", () => thumbnailList.scrollBy({ top: 160, behavior: "smooth" }));
document.addEventListener("keydown", event => { if (event.target.matches("button")) return; if (event.key === "ArrowLeft") changeItem(-1); if (event.key === "ArrowRight") changeItem(1); });
document.querySelectorAll("[data-scroll]").forEach(button => button.addEventListener("click", () => document.getElementById(button.dataset.scroll).scrollIntoView({ behavior: "smooth", block: "start" })));
const topButton = document.querySelector("#top-button");
window.addEventListener("scroll", () => topButton.classList.toggle("is-visible", window.scrollY > 450), { passive: true }); topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
const toast = document.querySelector("#toast"); let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add("is-visible"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2300); }
document.querySelector("#copy-inquiry").addEventListener("click", async () => {
  const text = [...document.querySelectorAll("#inquiry-form [name]")]
    .map(field => `- ${field.name} : ${field.value.trim()}`)
    .join("\n");
  try { await navigator.clipboard.writeText(text); showToast("문의 양식이 복사되었습니다."); }
  catch { const area = document.createElement("textarea"); area.value = text; document.body.append(area); area.select(); document.execCommand("copy"); area.remove(); showToast("문의 양식이 복사되었습니다."); }
});
function reportHeight() { window.parent?.postMessage({ type: "resize_iframe", height: Math.ceil(document.documentElement.scrollHeight) }, "*"); }
new ResizeObserver(reportHeight).observe(document.body); window.addEventListener("load", reportHeight); window.addEventListener("message", event => { if (event.data?.type === "getHeight") reportHeight(); });
renderGallery();
