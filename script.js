const more = document.querySelectorAll(".more");
more.forEach((m) =>
  m.addEventListener("click", function (e) {
    e.preventDefault();
    e.target.previousElementSibling.classList.toggle("post-text-visible");
    if (e.target.textContent === "...More") e.target.textContent = "Less";
    else e.target.textContent = "...More";
  })
);
