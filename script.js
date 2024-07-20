document.querySelector(".dropbtn").addEventListener("click", function () {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("open");
    const dropdownContent = document.querySelector(".dropdown-content");
    const arrowIcon = document.querySelector(".arrow-icon");
    if (dropdown.classList.contains("open")) {
      dropdownContent.style.display = "block";
      setTimeout(() => {
        dropdownContent.style.opacity = "1";
        dropdownContent.style.transform = "translateY(0)";
      }, 0);
      arrowIcon.classList.replace("ri-arrow-down-s-line", "ri-arrow-up-s-line");
    } else {
      dropdownContent.style.opacity = "0";
      dropdownContent.style.transform = "translateY(-10px)";
      setTimeout(() => {
        dropdownContent.style.display = "none";
      }, 300);
      arrowIcon.classList.replace("ri-arrow-up-s-line", "ri-arrow-down-s-line");
    }
  });