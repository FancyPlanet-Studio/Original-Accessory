/*
  GitHub에 올릴 폴더 구조
  images/portfolio/project_00/thumbnail.jpg
  images/portfolio/project_00/portfolio_00.jpg
  images/portfolio/project_00/portfolio_01.jpg

  - 왼쪽 세로 썸네일: thumbnail.jpg (또는 thumbnail.png)
  - 오른쪽 작업 이미지: portfolio_00.jpg, portfolio_01.jpg ...
  - imageLastNumber가 2이면 portfolio_02 → portfolio_01 → portfolio_00 순으로 표시됩니다.
  - 새 작업은 project_01, project_02처럼 폴더를 만들고 아래 목록에 한 줄 추가하세요.
  - projectNumber가 큰 작업이 왼쪽 세로 썸네일의 가장 위에 자동 배치됩니다.
*/
const portfolioProjects = [
  // { projectNumber: 2, folder: "images/portfolio/project_02", thumbnail: "thumbnail.jpg", imagePrefix: "portfolio_", extension: "jpg", imageLastNumber: 4 },
  // { projectNumber: 1, folder: "images/portfolio/project_01", thumbnail: "thumbnail.png", imagePrefix: "portfolio_", extension: "png", imageLastNumber: 2 }
];

function buildProjectImages(project) {
  return Array.from({ length: project.imageLastNumber + 1 }, (_, index) => {
    const number = String(project.imageLastNumber - index).padStart(2, "0");
    return `${project.folder}/${project.imagePrefix}${number}.${project.extension}`;
  });
}
portfolioProjects.sort((first, second) => second.projectNumber - first.projectNumber);
portfolioProjects.forEach(project => { project.images = buildProjectImages(project); });
