const comments = [];

const inputContainer = document.createElement("div");
const input = document.createElement("input");
const commentsContainer = document.querySelector("#comments-container");

input.classList.add("input");

input.addEventListener("keydown", (e) => {
  handleEnter(e, null);
});

inputContainer.appendChild(input);
commentsContainer.appendChild(inputContainer);

function handleEnter(e, current) {
  if (e.key === "Enter" && e.target.value !== "") {
    const newComment = {
      text: e.target.value,
      likes: 0,
      responses: [],
    };

    if (current === null) {
      comments.unshift(newComment);
    } else {
      current.responses.unshift(newComment);
    }

    e.target.value = "";

    // Limpiar el contenedor de comentarios excepto el contenedor de entrada
    commentsContainer.innerHTML = "";
    commentsContainer.appendChild(inputContainer);

    renderComments(comments, commentsContainer);
  }
}

function renderComments(arr, parent) {
  arr.forEach((element) => {
    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-container");

    const responsesContainer = document.createElement("div");
    responsesContainer.classList.add("responses-container");

    const replyButton = document.createElement("button");
    const likeButton = document.createElement("button");

    const textContainer = document.createElement("div");
    textContainer.textContent = element.text;

    const actionsContainer = document.createElement("div");

    replyButton.textContent = "reply";
    likeButton.textContent = `${
      element.likes > 0 ? `${element.likes} likes` : "like"
    }`;

    // Agregar funcionalidad para el botón de respuesta
    replyButton.addEventListener("click", () => {
      const newImput = inputContainer.cloneNode(true);
      newImput.value = "";
      newImput.focus();
      newImput.addEventListener("keydown", (e) => {
        handleEnter(e, element);
      });
      commentContainer.insertBefore(newImput, responsesContainer);
    });

    // Agregar funcionalidad para el botón Me gusta
    likeButton.addEventListener("click", () => {
      element.likes++;
      likeButton.textContent = `${
        element.likes > 0 ? `${element.likes} likes` : "like"
      }`;
    });

    // Agrega elementos a sus respectivos contenedores
    commentContainer.appendChild(textContainer);
    commentContainer.appendChild(actionsContainer);
    actionsContainer.appendChild(replyButton);
    actionsContainer.appendChild(likeButton);

    commentContainer.appendChild(responsesContainer);

    if (element.responses.length > 0) {
      renderComments(element.responses, responsesContainer);
    }

    parent.appendChild(commentContainer);
  });

  console.log(comments);
}

// Llamada de renderizado inicial (si es necesario)
// renderComments(comentarios, contenedor de comentarios);
