
const viewMoreBtnEl = document.getElementById('view-more-Btn');


viewMoreBtnEl.addEventListener("click", function () {

    const divs = document.querySelectorAll('.hidden');

    divs.forEach(function(div) {
        div.classList.toggle('hidden');
    });
    document.getElementById('view-more-Btn').classList.toggle('hidden');
});
