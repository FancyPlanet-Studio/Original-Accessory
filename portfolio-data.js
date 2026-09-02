/*
  GitHub에 올릴 폴더 구조
  images/portfolio/project_00/thumbnail.webp
  images/portfolio/project_00/portfolio_00.webp
  images/portfolio/project_00/portfolio_01.webp

  - 왼쪽 세로 썸네일: thumbnail.webp
  - 오른쪽 작업 이미지: portfolio_00.webp, portfolio_01.webp ...
  - lastNumber가 2이면 portfolio_02 → portfolio_01 → portfolio_00 순으로 표시됩니다.
  - 새 작업은 project_01, project_02처럼 폴더를 만들고 아래 목록에 한 줄 추가하세요.
  - 목록 위에 적은 작업이 왼쪽 썸네일에서 먼저 표시됩니다.
*/
const portfolioProjects = [
  // { folder: "images/portfolio/project_00", thumbnail: "thumbnail.webp", imagePrefix: "portfolio_", extension: "webp", lastNumber: 2 }
];

function buildProjectImages(project) {
  return Array.from({ length: project.lastNumber + 1 }, (_, index) => {
    const number = String(project.lastNumber - index).padStart(2, "0");
    return `${project.folder}/${project.imagePrefix}${number}.${project.extension}`;
  });
}
portfolioProjects.forEach(project => { project.images = buildProjectImages(project); });
