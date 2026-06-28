function authorLineFits(container, list) {
  const previousWhiteSpace = list.style.whiteSpace;
  list.style.whiteSpace = "nowrap";
  const paperLink = container.querySelector(".paper-link");
  const paperWidth = paperLink ? paperLink.offsetWidth + 8 : 0;
  const fits = list.scrollWidth <= container.clientWidth - paperWidth + 1;
  list.style.whiteSpace = previousWhiteSpace;
  return fits;
}

function joinAuthors(authors, count) {
  if (count <= 0) return "et al.";
  if (count === 1) return `${authors[0]}, et al.`;
  return `${authors.slice(0, count).join(", ")}, et al.`;
}

function compactPublicationAuthors() {
  document.querySelectorAll(".publications .author").forEach((container) => {
    const list = container.querySelector(".author-list");
    const compact = container.querySelector(".author-compact");
    if (!list || !compact) return;

    const full = list.dataset.fullAuthors || list.innerHTML.trim();
    list.dataset.fullAuthors = full;
    const rawAuthors = compact.innerHTML
      .split("|")
      .map((author) => author.trim())
      .filter(Boolean);
    const authors = rawAuthors.filter((author) => author.replace(/<[^>]+>/g, "").trim().toLowerCase() !== "others");
    const hasUnlistedAuthors = rawAuthors.length !== authors.length;

    list.innerHTML = hasUnlistedAuthors ? joinAuthors(authors, authors.length) : full;
    if (authorLineFits(container, list)) return;

    for (let count = authors.length - 1; count >= 1; count -= 1) {
      list.innerHTML = joinAuthors(authors, count);
      if (authorLineFits(container, list)) return;
    }
  });
}

window.addEventListener("load", compactPublicationAuthors);
window.addEventListener("resize", compactPublicationAuthors);
