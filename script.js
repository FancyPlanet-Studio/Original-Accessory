/* Add portfolio items here: image URL, title, and description are the only fields needed. */
const portfolioData = [
  { category: "전체", items: [] },
  { category: "팬 악세사리", items: [
    { image: "https://artmugfile5.cafe24.com/image/up_img/detail/5/goods_53283/17599466870_Re.jpg", title: "부착형 팬 악세사리", description: "리깅 · 눈깜빡임 연동" },
    { image: "https://artmugfile5.cafe24.com/image/up_img/detail/5/goods_53283/17599475822.gif", title: "부착형 팬 악세사리", description: "움직임 예시" }
  ]},
  { category: "헤어 악세사리", items: [
    { image: "https://artmugfile5.cafe24.com/image/up_img/detail/5/goods_53283/17599486880_Re.jpg", title: "부착형 헤어 악세사리", description: "헤어에 맞춘 3D 악세사리" },
    { image: "https://artmugfile5.cafe24.com/image/up_img/detail/5/goods_53283/17599487420_Re.jpg", title: "부착형 헤어 악세사리", description: "작품 상세" }
  ]},
  { category: "팬 캐릭터", items: [
    { image: "https://artmugfile5.cafe24.com/image/up_img/detail/5/goods_53283/17599487990_Re.jpg", title: "부착형 팬 캐릭터 악세사리", description: "표정 쉐이프키 추가 가능" },
    { image: "https://artmugfile5.cafe24.com/image/up_img/detail/5/goods_53283/17599488290_Re.jpg", title: "부착형 팬 캐릭터 악세사리", description: "작품 상세" }
  ]},
  { category: "부착형 악세사리", items: [
    { image: "https://artmugfile5.cafe24.com/image/up_img/detail/5/goods_53283/17599487990_Re.jpg", title: "부착형 악세사리", description: "리깅 추가 가능" },
    { image: "https://artmugfile5.cafe24.com/image/up_img/detail/5/goods_53283/17599488290_Re.jpg", title: "부착형 악세사리", description: "작품 상세" }
  ]}
];

portfolioData[0].items = portfolioData.slice(1).flatMap(group => group.items.map(item => ({ ...item, category: group.category })));
let selectedCategory = 0;
let selectedItem = 0;
const categoryList = document.querySelector("#category-list");
const thumbnailList = document.querySelector("#thumbnail-list");
const mainImage = document.querySelector("#main-image");
const itemCategory = document.querySelector("#item-category");
const itemTitle = document.querySelector("#item-title");
const itemDescription = document.querySelector("#item-description");
const currentItem = document.querySelector("#current-item");
const totalItems = document.querySelector("#total-items");

function currentItems() { return portfolioData[selectedCategory].items; }
function renderCategories() {
  categoryList.replaceChildren(...portfolioData.map((group, index) => {
    const button = document.createElement("button"); button.type = "button"; button.textContent = group.category;
    button.setAttribute("aria-pressed", String(index === selectedCategory));
    button.addEventListener("click", () => { selectedCategory = index; selectedItem = 0; renderGallery(); });
    return button;
  }));
}
function renderGallery() {
  const items = currentItems(); const item = items[selectedItem];
  mainImage.src = item.image; mainImage.alt = `${item.title} 포트폴리오 이미지`;
  itemCategory.textContent = item.category || portfolioData[selectedCategory].category;
  itemTitle.textContent = item.title; itemDescription.textContent = item.description;
  currentItem.textContent = selectedItem + 1; totalItems.textContent = items.length;
  thumbnailList.replaceChildren(...items.map((thumbnail, index) => {
    const button = document.createElement("button"); button.type = "button"; button.setAttribute("aria-current", String(index === selectedItem));
    button.setAttribute("aria-label", `${thumbnail.title} ${index + 1}번 보기`);
    const image = new Image(); image.src = thumbnail.image; image.alt = ""; image.loading = "lazy"; button.append(image);
    button.addEventListener("click", () => { selectedItem = index; renderGallery(); }); return button;
  }));
  const next = items[(selectedItem + 1) % items.length]; if (next) { const preload = new Image(); preload.src = next.image; }
  renderCategories();
}
function changeItem(delta) { const items = currentItems(); selectedItem = (selectedItem + delta + items.length) % items.length; renderGallery(); }
document.querySelector("#previous-item").addEventListener("click", () => changeItem(-1));
document.querySelector("#next-item").addEventListener("click", () => changeItem(1));
document.addEventListener("keydown", event => { if (event.target.matches("button")) return; if (event.key === "ArrowLeft") changeItem(-1); if (event.key === "ArrowRight") changeItem(1); });

document.querySelectorAll("[data-scroll]").forEach(button => button.addEventListener("click", () => document.getElementById(button.dataset.scroll).scrollIntoView({ behavior: "smooth", block: "start" })));
const topButton = document.querySelector("#top-button");
window.addEventListener("scroll", () => topButton.classList.toggle("is-visible", window.scrollY > 500), { passive: true });
topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
const toast = document.querySelector("#toast"); let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add("is-visible"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2300); }
document.querySelector("#copy-inquiry").addEventListener("click", async () => {
  const text = document.querySelector("#inquiry-template").textContent.trim();
  try { await navigator.clipboard.writeText(text); showToast("문의 양식이 복사되었습니다."); }
  catch { const area = document.createElement("textarea"); area.value = text; document.body.append(area); area.select(); document.execCommand("copy"); area.remove(); showToast("문의 양식이 복사되었습니다."); }
});

/* Cross-origin iframe height requires a cooperative parent listener. This message is safe to ignore when viewed directly. */
function reportHeight() { window.parent?.postMessage({ type: "resize_iframe", height: Math.ceil(document.documentElement.scrollHeight) }, "*"); }
new ResizeObserver(reportHeight).observe(document.body); window.addEventListener("load", reportHeight); window.addEventListener("message", event => { if (event.data?.type === "getHeight") reportHeight(); });
renderGallery();
