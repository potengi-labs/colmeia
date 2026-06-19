async function loadData() {
  const res = await fetch('data.json');
  const data = await res.json();

  renderOverview(data);
  renderProjects(data.projects);
}

function renderOverview(data) {
  document.getElementById("total-projects").innerText =
    data.projects.length;

  const avg =
    data.projects.reduce((acc, p) => acc + p.progress, 0) /
    data.projects.length;

  document.getElementById("health").innerText =
    Math.round(avg * 100) + "%";
}

function renderProjects(projects) {
  const container = document.getElementById("projects");

  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div>
        <span class="signal ${p.signal}"></span>
        <strong>${p.name}</strong>
      </div>

      <p>${p.description}</p>

      <small>Stage: ${p.stage}</small>

      <div class="progress">
        <div class="progress-bar" style="width:${p.progress * 100}%"></div>
      </div>
    `;

    container.appendChild(card);
  });
}

loadData();
