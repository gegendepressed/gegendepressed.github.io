const identities = ["developer", "tabla player", "sci‑fi reader", "sitcom re‑watcher"];
let identityIndex = 0;

function rotateIdentity() {
  const span = document.getElementById("identity-rotator");
  if (!span) return;
  identityIndex = (identityIndex + 1) % identities.length;
  span.textContent = identities[identityIndex];
}

setInterval(rotateIdentity, 2600);

const footerQuotes = [
  "Programs must be written for people to read, and only incidentally for machines to execute. — Harold Abelson",
  "Any sufficiently advanced technology is indistinguishable from magic. — Arthur C. Clarke",
  "So many books, so little time. — Frank Zappa",
  "You can’t connect the dots looking forward; you can only connect them looking backward. — Steve Jobs",
  "A room without books is like a body without a soul. — Marcus Tullius Cicero",
  "First, solve the problem. Then, write the code. — John Johnson",
  "The cosmos is within us. We are a way for the universe to know itself. — Carl Sagan",
];

const projectDetails = {
  "this-site": {
    id: "this-site",
    title: "This site",
    status: "Ongoing",
    period: "Living document",
    technologies: "HTML, CSS, JavaScript, Bootstrap",
    bullets: [
      "Hand-built portfolio focused on clear copy, small details, and fast load times.",
      "No frontend frameworks: just a thin layer of JS for interactivity and forms.",
    ],
    codeUrl: "https://github.com/gegendepressed/gegendepressed.github.io",
  },
  "english-vocab": {
    id: "english-vocab",
    title: "English Vocab Builder",
    status: "Finished",
    period: "Feb 2025 – April 2025",
    technologies:
      "Flutter, Firebase, Provider, WordNet, yaml, Material Design",
    bullets: [
      "Quiz-based mobile app that helps users build vocabulary through multiple-choice questions.",
      "Stores questions in editable YAML files grouped by difficulty and part of speech.",
      "Uses active recall and semantic proximity so words are learned in context, not in isolation.",
    ],
    codeUrl: "https://github.com/gegendepressed/English-Vocab-Builder",
  },
  filelinker: {
    id: "filelinker",
    title: "Filelinker",
    status: "Finished",
    period: "Jan 2025 – Feb 2025",
    technologies:
      "Python, Flask, SQLAlchemy ORM, PostgreSQL, Cloudinary, REST APIs, Gofile API, SpooAPI",
    bullets: [
      "Engineered a secure file-sharing platform with faster access than Google Drive for frequent use cases.",
      "Optimized PostgreSQL queries with SQLAlchemy ORM, reducing database response times by roughly 25%.",
      "Integrated Gofile for uploads and SpooAPI for URL shortening, making shared links easier to distribute.",
    ],
    codeUrl: "https://github.com/gegendepressed/filelinker",
    liveUrl: "https://filelinker.azurewebsites.net/",
    frameUrl: "https://filelinker.azurewebsites.net/",
  },
  redditapi: {
    id: "redditapi",
    title: "Reddit Fetcher / RedditAPI",
    status: "Finished",
    period: "March 2024 – Sept 2024",
    technologies: "FastAPI, Python, PRAW, dotenv, CORS",
    bullets: [
      "Built an API to fetch subreddit posts using multiple filters (hot, top, random).",
      "Integrated PRAW to handle Reddit API interactions efficiently and safely.",
      "Added exception handling around external calls to prevent small issues from taking the service down.",
    ],
    codeUrl: "https://github.com/gegendepressed/RedditAPI",
  },
  diary: {
    id: "diary",
    title: "Diary",
    status: "Finished",
    period: "Feb 2024 – March 2024",
    technologies: "Python, GnuPG, RSA-4096, AES-256",
    bullets: [
      "CLI-based encrypted diary designed around strong defaults and simple commands.",
      "Uses RSA-4096 and AES-256 to encrypt entries, avoiding manual cryptographic steps.",
      "Focused on data integrity and security; written to follow cryptographic best practices.",
    ],
    codeUrl: "https://github.com/gegendepressed/diary",
  },
  readnexus: {
    id: "readnexus",
    title: "ReadNexus",
    status: "Finished",
    period: "March 2024 – July 2024",
    technologies: "Flask, Python, sentence-transformers (SBERT), pandas, NumPy, Pickle",
    bullets: [
      "Built a full-stack recommendation system combining semantic search, collaborative filtering, and popularity signals.",
      "Generated vector embeddings from 40K+ book summaries and used cosine similarity for matching.",
      "Processed a 300K-book dataset with efficient local storage using pandas and Pickle.",
    ],
    codeUrl: "https://github.com/NandiniNichite/book-recommender-system",
  },
  exposehost: {
    id: "exposehost",
    title: "ExposeHost",
    status: "Ongoing",
    period: "Coming soon",
    technologies: "",
    bullets: ["Details coming soon."],
    codeUrl: "https://github.com/Frost2k5/exposehost",
  },
  openmedia: {
    id: "openmedia",
    title: "Openmedia",
    status: "Finished",
    period: "Feb 2024 – April 2024",
    technologies: "Flask, SQLAlchemy ORM, HTML, CSS, Bootstrap",
    bullets: [
      "Developed a media management app supporting 10+ formats with seamless retrieval.",
      "Refined SQLAlchemy ORM queries, reducing database access times by around 30%.",
      "Designed a responsive UI with Bootstrap so it works cleanly across devices.",
    ],
    codeUrl: "https://github.com/gegendepressed/OpenMedia",
    liveUrl: "https://openmedia-e0gvb8fzbnexafd8.centralus-01.azurewebsites.net",
    frameUrl: "https://openmedia-e0gvb8fzbnexafd8.centralus-01.azurewebsites.net",
  },
  smartspend: {
    id: "smartspend",
    title: "SmartSpend",
    status: "Finished",
    period: "Sept 2024 – Nov 2024",
    technologies: "ReactJS, Express, MongoDB, NodeJS, Axios, Figma",
    bullets: [
      "Designed and prototyped the UI in Figma for an intuitive expense-tracking experience.",
      "Architected a structured backend using Express.js and MongoDB for predictable data flows.",
      "Used Axios for real-time updates and synchronization, targeting 99% uptime for expense data.",
    ],
    liveUrl: "https://smartspend-h6cxb0dng5ardeef.centralindia-01.azurewebsites.net",
    frameUrl: "https://smartspend-h6cxb0dng5ardeef.centralindia-01.azurewebsites.net",
  },
};

function pickFooterQuote() {
  const el = document.getElementById("footer-quote");
  if (!el) return;
  const shortQuotes = footerQuotes.filter((q) => q.length <= 140);
  const pool = shortQuotes.length ? shortQuotes : footerQuotes;
  const chosen = pool[Math.floor(Math.random() * pool.length)];
  el.textContent = chosen;
}

function initProjectToggle() {
  const buttons = document.querySelectorAll(".sp-toggle-btn");
  const solo = document.getElementById("projects-solo");
  const group = document.getElementById("projects-group");
  if (!buttons.length || !solo || !group) return;

  Array.prototype.forEach.call(buttons, function (btn) {
    btn.addEventListener("click", function () {
      const target = btn.getAttribute("data-target");
      Array.prototype.forEach.call(buttons, function (b) {
        b.classList.remove("sp-toggle-btn--active");
      });
      btn.classList.add("sp-toggle-btn--active");

      if (target === "group") {
        group.classList.add("sp-project-group--active");
        solo.classList.remove("sp-project-group--active");
      } else {
        solo.classList.add("sp-project-group--active");
        group.classList.remove("sp-project-group--active");
      }
    });
  });
}

function openProjectModal(id) {
  const details = projectDetails[id];
  if (!details) return;

  const backdrop = document.getElementById("project-modal");
  const titleEl = document.getElementById("project-modal-title");
  const statusEl = document.getElementById("project-modal-status");
  const periodEl = document.getElementById("project-modal-period");
  const techEl = document.getElementById("project-modal-tech");
  const listEl = document.getElementById("project-modal-points");
  const liveEl = document.getElementById("project-modal-live");
  const codeEl = document.getElementById("project-modal-code");
  const extraEl = document.getElementById("project-modal-extra");
  const frameWrapper = document.getElementById("project-modal-frame-wrapper");
  const frame = document.getElementById("project-modal-frame");

  if (!backdrop) return;

  titleEl.textContent = details.title;
  statusEl.textContent = details.status || "";
  periodEl.textContent = details.period || "";
  techEl.textContent = details.technologies
    ? `Technologies: ${details.technologies}`
    : "";

  listEl.innerHTML = "";
  (details.bullets || []).forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    listEl.appendChild(li);
  });

  function setupLink(el, url) {
    if (el) {
      if (url) {
        el.href = url;
        el.hidden = false;
      } else {
        el.hidden = true;
      }
    }
  }

  setupLink(liveEl, details.liveUrl);
  setupLink(codeEl, details.codeUrl);
  setupLink(extraEl, details.extraUrl);

  var frameUrl = details.frameUrl || details.liveUrl;
  if (frameUrl) {
    frameWrapper.hidden = false;
    frame.src = frameUrl;
  } else {
    frameWrapper.hidden = true;
    frame.src = "";
  }

  backdrop.hidden = false;
}

function closeProjectModal() {
  const backdrop = document.getElementById("project-modal");
  const frame = document.getElementById("project-modal-frame");
  if (!backdrop) return;
  backdrop.hidden = true;
  if (frame) frame.src = "";
}

function initProjectCards() {
  const cards = document.querySelectorAll(".sp-project-card[data-project-id]");
  if (!cards.length) return;

  Array.prototype.forEach.call(cards, function (card) {
    const id = card.getAttribute("data-project-id");
    const openBtn = card.querySelector(".sp-project-open");
    const handler = function (event) {
      event.stopPropagation();
      openProjectModal(id);
    };
    card.addEventListener("click", function (event) {
      // Avoid double-handling if something non-primary is clicked
      if (event.target && event.target.closest && event.target.closest("button, a")) return;
      handler(event);
    });
    if (openBtn) {
      openBtn.addEventListener("click", handler);
    }
  });

  const backdrop = document.getElementById("project-modal");
  const closeBtn = document.getElementById("project-modal-close");
  if (backdrop) {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) {
        closeProjectModal();
      }
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeProjectModal);
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectModal();
    }
  });
}

async function handleContactSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const fileInput = form.file;
  const statusEl = document.getElementById("form-status");
  const submitBtn = document.getElementById("contact-submit");

  statusEl.textContent = "Sending…";
  statusEl.className = "sp-form-status";
  submitBtn.disabled = true;

  if (!name || !message) {
    statusEl.textContent = "Please add at least your name and a short message.";
    statusEl.classList.add("sp-form-status--error");
    submitBtn.disabled = false;
    return;
  }

  const payload = {
    username: "relativesciencex",
    message: `${name}\n${email}\n${message}`,
    securitykey: 4209,
  };

  try {
    const resp = await fetch("https://pingme.developer.li/api/sendmessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();

    statusEl.textContent = text || "Message sent.";
    statusEl.classList.add("sp-form-status--ok");
  } catch (e) {
    console.error(e);
    statusEl.textContent = "Couldn’t send that right now. Try again in a bit.";
    statusEl.classList.add("sp-form-status--error");
    submitBtn.disabled = false;
    return;
  }

  if (fileInput && fileInput.files && fileInput.files.length > 0) {
    try {
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("username", "relativesciencex");
      formData.append("securitykey", 4209);

      const fileResp = await fetch("https://pingme.tabcat.live/api/sendfile", {
        method: "POST",
        body: formData,
      });

      const fileText = await fileResp.text();
      statusEl.textContent += fileText ? ` File: ${fileText}` : "";
    } catch (e) {
      console.error(e);
      statusEl.textContent += " (File upload failed.)";
      statusEl.classList.add("sp-form-status--error");
    }
  }

  submitBtn.disabled = false;
  form.reset();
}

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", handleContactSubmit);
  }

  pickFooterQuote();
  initProjectToggle();
  initProjectCards();
});
