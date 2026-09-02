/*
  GitHub에 올릴 폴더 구조
  images/portfolio/project_00/portfolio_00.jpg
  images/portfolio/project_00/portfolio_01.png
  images/portfolio/project_00/portfolio_02.gif

  - 왼쪽 세로 썸네일: 각 project 폴더의 portfolio_00 파일 (JPG/PNG/GIF 모두 가능)
  - 오른쪽 작업 이미지: 확장자와 관계없이 portfolio_00 → 01 → 02 순서
  - 이미지 파일명은 files 목록에 실제 파일명 그대로 적습니다.
  - 새 작업은 project_01, project_02처럼 폴더를 만들고 아래 목록에 한 줄 추가하세요.
  - project_ 뒤 숫자가 큰 작업이 왼쪽 세로 썸네일의 가장 위에 자동 배치됩니다.
*/
const portfolioProjects = [
  // { folder: "Origianl_Assets/Project_01", files: ["Portfolio_01.png", "Portfolio_02.png"] },
  // { folder: "Origianl_Assets/Project_02", files: ["Portfolio_01.png", "Portfolio_02.gif"] }
];

function imageNumber(fileName) {
  return Number(fileName.match(/portfolio_(\d+)/)?.[1] || Number.MAX_SAFE_INTEGER);
}
function buildProjectImages(project) {
  return [...project.files]
    .sort((first, second) => imageNumber(first) - imageNumber(second))
    .map(fileName => `${project.folder}/${fileName}`);
}
function projectNumber(project) {
  return Number(project.folder.match(/project_(\d+)(?:\/)?$/)?.[1] || 0);
}
portfolioProjects.sort((first, second) => projectNumber(second) - projectNumber(first));
portfolioProjects.forEach(project => { project.images = buildProjectImages(project); });
