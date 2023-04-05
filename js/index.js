console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const todoData = {
    headline: formData.get("headline"),
    task: formData.get("task"),
  };

  console.log(todoData);

  const listItem = document.createElement("li");

  const listItemContent = `
      <h2>${todoData.headline}</h2>
      <p>${todoData.task}</p>
      <button class="delete-button">Delete</button>
    `;
  listItem.insertAdjacentHTML("beforeend", listItemContent);

  todoList.appendChild(listItem);

  const deleteButton = listItem.querySelector(".delete-button");
  deleteButton.addEventListener("click", function () {
    listItem.remove();
  });

  form.reset();
  document.getElementById("headline").focus();
});
