const portfolioProjects = [
  {
    folder: "Original_Assets/Project_01",
    files: ["Portfolio_00.png", "Portfolio_01.png"]
  },
  {
    folder: "Original_Assets/Project_02",
    files: ["Portfolio_01.png", "Portfolio_02.gif"]
  },
  {
    folder: "Original_Assets/Project_03",
    files: ["Portfolio_01.png"]
  },
  {
    folder: "Original_Assets/Project_04",
    files: ["Portfolio_01.png"]
  },
  {
    folder: "Original_Assets/Project_05",
    files: ["Portfolio_01.png"]
  }
];

function imageNumber(fileName) {
  return Number(fileName.match(/portfolio_(\d+)/i)?.[1] || Number.MAX_SAFE_INTEGER);
}

function buildProjectImages(project) {
  return [...project.files]
    .sort((first, second) => imageNumber(first) - imageNumber(second))
    .map(fileName => `${project.folder}/${fileName}`);
}

function projectNumber(project) {
  return Number(project.folder.match(/project_(\d+)(?:\/)?$/i)?.[1] || 0);
}

portfolioProjects.sort((first, second) => projectNumber(second) - projectNumber(first));
portfolioProjects.forEach(project => {
  project.images = buildProjectImages(project);
});
