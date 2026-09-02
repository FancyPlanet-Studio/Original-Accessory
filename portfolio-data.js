/*
  GitHub에 올릴 폴더 구조
  images/portfolio/project_00/portfolio_00.jpg
  images/portfolio/project_00/portfolio_01.jpg

  - 왼쪽 세로 썸네일: 각 project 폴더의 portfolio_00.jpg (또는 .png)
  - 오른쪽 작업 이미지: portfolio_00.jpg → portfolio_01.jpg → portfolio_02.jpg 순서
  - imageLastNumber가 2이면 portfolio_00 → portfolio_01 → portfolio_02 순으로 표시됩니다.
  - 새 작업은 project_01, project_02처럼 폴더를 만들고 아래 목록에 한 줄 추가하세요.
  - project_ 뒤 숫자가 큰 작업이 왼쪽 세로 썸네일의 가장 위에 자동 배치됩니다.
*/
const portfolioProjects = [
  // { folder: "images/portfolio/project_02", extension: "jpg", imageLastNumber: 4 },
  // { folder: "images/portfolio/project_01", extension: "png", imageLastNumber: 2 }
];

function buildProjectImages(project) {
  return Array.from({ length: project.imageLastNumber + 1 }, (_, index) => {
    const number = String(index).padStart(2, "0");
    return `${project.folder}/portfolio_${number}.${project.extension}`;
  });
}
function projectNumber(project) {
  return Number(project.folder.match(/project_(\d+)(?:\/)?$/)?.[1] || 0);
}
portfolioProjects.sort((first, second) => projectNumber(second) - projectNumber(first));
portfolioProjects.forEach(project => { project.images = buildProjectImages(project); });
