/*
  이미지 추가 방법
  1. images/portfolio/ 폴더에 portfolio_00.webp, portfolio_01.webp ...처럼 올립니다.
  2. 해당 탭의 lastNumber만 가장 큰 번호로 바꿉니다.
  높은 번호가 메인 이미지와 썸네일의 가장 앞에 표시됩니다.

  탭을 늘릴 때는 아래 객체를 복사합니다.
  예: { name: "헤어 악세사리", folder: "images/hair", prefix: "hair_", extension: "webp", lastNumber: 3 }
  그러면 images/hair/hair_03.webp → hair_00.webp 순으로 표시됩니다.
*/
const portfolioTabs = [
  { name: "포트폴리오", folder: "images/portfolio", prefix: "portfolio_", extension: "webp", lastNumber: -1 }
];

function buildPortfolioItems(tab) {
  return Array.from({ length: tab.lastNumber + 1 }, (_, index) => {
    const number = String(tab.lastNumber - index).padStart(2, "0");
    return { image: `${tab.folder}/${tab.prefix}${number}.${tab.extension}` };
  });
}
portfolioTabs.forEach(tab => { tab.items = buildPortfolioItems(tab); });
