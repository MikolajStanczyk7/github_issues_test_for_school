const przycisk = document.querySelector("#sprawdz");
const poleWiek = document.querySelector("#wiek");
const wynik = document.querySelector("#wynik");

przycisk.addEventListener("click", function () {
    const wiek = Number(poleWiek.value);

    if (wiek > 18 && wiek < 65) {
        wynik.textContent = "Wiek zaakceptowany";
    } else {
        wynik.textContent = "Nieprawidłowy wiek";
    }
});