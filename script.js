const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

quiz.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(quiz);
  const score =
    Number(data.get("q1")) +
    Number(data.get("q2")) +
    Number(data.get("q3"));

  let title = "";
  let message = "";

  if (score <= 2) {
    title = "Resultado: Puedes reflexionar un poco más";
    message =
      "A veces normalizamos bromas o silencios que pueden lastimar. Reconocerlo ya es un primer paso para mejorar la convivencia.";
  } else if (score <= 4) {
    title = "Resultado: Vas por buen camino";
    message =
      "Tienes intención de respetar la diversidad. El siguiente paso es actuar cuando veas exclusión o burlas en el aula.";
  } else {
    title = "Resultado: Conectas con la diversidad";
    message =
      "Tus respuestas muestran empatía y compromiso. Recuerda: respetar también significa incluir, escuchar y valorar la historia de los demás.";
  }

  result.classList.remove("hidden");
  result.innerHTML = `
    <h3>${title}</h3>
    <p>${message}</p>
    <strong>Mensaje final:</strong>
    <p>Tu origen no te hace menos. La diversidad también se aprende en el aula.</p>
  `;

  result.scrollIntoView({ behavior: "smooth", block: "center" });
});

const input = document.getElementById("commitmentInput");
const saveButton = document.getElementById("saveCommitment");
const saved = document.getElementById("savedCommitment");

saveButton.addEventListener("click", function () {
  const text = input.value.trim();

  if (!text) {
    saved.textContent = "Escribe primero tu compromiso.";
    return;
  }

  saved.textContent = `Tu compromiso: “${text}”`;
  input.value = "";
});
