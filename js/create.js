document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("catForm");
    const columns = document.querySelectorAll("main > section.column");

    const savedCats = JSON.parse(localStorage.getItem("cats")) || [];
    savedCats.forEach(cat => addCatToColumn(cat.name, cat.photoUrl));

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("catName").value.trim();
        const photoUrl = document.getElementById("catPhoto").value.trim();

        if (!name || !photoUrl) {
            alert("пж заполните все поля");
            return;
        }

        addCatToColumn(name, photoUrl);
        saveCat(name, photoUrl);

        form.reset();
    });

    function addCatToColumn(name, photoUrl) {
        const catCard = document.createElement("div");
        catCard.classList.add("cat-card");

        const catImage = document.createElement("img");
        catImage.src = photoUrl;
        catImage.alt = name;

        const catName = document.createElement("h3");
        catName.textContent = name;

        catCard.appendChild(catImage);
        catCard.appendChild(catName);

        let targetColumn = columns[0];
        for (const column of columns) {
            if (column.childElementCount < targetColumn.childElementCount) {
                targetColumn = column;
            }
        }

        targetColumn.appendChild(catCard);
    }

    function saveCat(name, photoUrl) {
        const cats = JSON.parse(localStorage.getItem("cats")) || [];
        cats.push({name, photoUrl});
        localStorage.setItem("cats", JSON.stringify(cats));
    }
});
