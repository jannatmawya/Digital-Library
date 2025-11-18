const user = {
  username: "{{username}}",
  useremail: "{{useremail}}",
  university: "{{university}}",
  country: "{{country}}",
};

const profileInfo = document.querySelector(".ProfileInformation");
profileInfo.innerHTML = `
  <h2>Personal Info</h2>
  <p><b>Name:</b> ${user.username}</p>
  <p><b>Email:</b> ${user.useremail}</p>
  <p><b>University:</b> ${user.university}</p>
  <p><b>Country:</b> ${user.country}</p>
  <h3>Clicked Books:</h3>
  <ul id="clickedBooksList" style="color: green;"></ul>
`;

//borrowed books
const books = document.querySelectorAll(".book-box");
const clickedBooksList = document.getElementById("clickedBooksList");

books.forEach((book) => {
  book.addEventListener("click", () => {
    const bookTitle = book.querySelector("h3").textContent;

    // Check if this book was already clicked
    const alreadyClicked = Array.from(clickedBooksList.children).some(
      (li) => li.textContent === bookTitle
    );
    if (!alreadyClicked) {
      const li = document.createElement("li");
      li.textContent = bookTitle;
      clickedBooksList.appendChild(li);
    }
  });
});
