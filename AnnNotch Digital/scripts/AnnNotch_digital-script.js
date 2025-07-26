const viewCourse = document.querySelector(".view-course");
const courseCard = document.querySelectorAll(".course-card");

    courseCard.forEach(card => {
        card.addEventListener("click", () => {
            const content = card.nextElementSibling;
            const button = card.viewCourse;

            content.classList.add("expanded");
            document.body.classList.add("expanded-view")
        });
    });


document.querySelectorAll("view-course").forEach(button => {
    button.addEventListener("click", () => {
        expandCourse()
    })
})