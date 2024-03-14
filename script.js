const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const jobsContainer = document.getElementById("jobs-container");

const jobsData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    keywords: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Facebook",
    location: "Menlo Park, CA",
    keywords: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    keywords: ["Python", "Django", "JavaScript"],
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "Microsoft",
    location: "Redmond, WA",
    keywords: ["Java", "Spring", "SQL"],
  },
  {
    id: 5,
    title: "Mobile App Developer",
    company: "Apple",
    location: "Cupertino, CA",
    keywords: ["Swift", "iOS", "JavaScript"],
  },
];

displayJobs(jobsData);

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchBox.value.toLowerCase();
  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm) ||
      job.company.toLowerCase().includes(searchTerm) ||
      job.keywords.toString().toLowerCase().includes(searchTerm)
  );
  displayJobs(filteredJobs);
});

function displayJobs(jobs) {
  jobsContainer.innerHTML = "";
  jobs.forEach((job) => {
    const jobDiv = document.createElement("div");
    jobDiv.className = "job";
    jobDiv.innerHTML = `
      <h2>${job.title}</h2>
      <p>${job.company}</p>
      <p>${job.location}</p>
      <p>${job.description}</p>
    `;
    jobsContainer.appendChild(jobDiv);
  });
}
