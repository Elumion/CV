class Page {
    constructor() {
        this.anchorElems = document.querySelectorAll('a[href*="#"]')
        this.skillListElemsArray = [...document.querySelectorAll(".form__skills")];
        this.show = document.querySelector(".arrow__show");

        document.addEventListener("DOMContentLoaded", this.renderProgress.bind(this));
        document.addEventListener("DOMContentLoaded", this.smoothScroll.bind(this));
        this.show.addEventListener("click", this.showNavigation.bind(this));
    }

    showNavigation() {
        const header = document.querySelector(".header");
        header.classList.toggle("hide");
        if (header.classList.contains("hide")) {
            this.show.innerHTML = `<i class="fas fa-chevron-down"></i>`;
        }
        else {
            this.show.innerHTML = `<i class="fas fa-chevron-up"></i>`;
        }
    }

    renderProgress() {
        this.skillListElemsArray.forEach(elem => {
            const liElemsArray = [...elem.querySelectorAll("li")];
            liElemsArray.forEach(li => {
                let number = li.children[0].children[1].innerText;
                const progressBar = document.createElement("div");
                const extraDiv = document.createElement("div");
                progressBar.style.width = `${parseInt(number)}%`;
                progressBar.style.height = "100%";
                progressBar.style.position = "relative";
                progressBar.style.zIndex = 5;
                extraDiv.classList.add("rendered__progress");
                progressBar.append(extraDiv);
                li.children[1].append(progressBar);
            })
        })
    }

    smoothScroll() {
        for (let anchor of this.anchorElems) {
            anchor.addEventListener('click', function (event) {
                event.preventDefault();

                const blockID = anchor.getAttribute('href').substr(1);

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            })
        }
    }
}

const renderPage = () => {
    const page = new Page();
    page.renderProgress();
    page.smoothScroll();
}
document.addEventListener("DOMContentLoaded", renderPage);