// ✅ Select all needed elements
const books = Array.from(document.querySelectorAll(".book"));
const searchBox = document.getElementById("searchBox");
const departmentSelect = document.getElementById("departments");
const paginationButtons = document.querySelectorAll(".pagination button");
const bookContainer = document.querySelector(".book-container");

let currentPage = 1;
let noResultsDiv = null; // Will hold our dynamic message

// ✅ Function to get books per page dynamically
function getBooksPerPage(page) {
    return page === 1 ? 8 : 4;
}

// ✅ Main render function
function renderBooks() {
    const searchText = searchBox.value.toLowerCase();
    const selectedDept = departmentSelect.value.toLowerCase();

    // ✅ Apply search + category filter
    let filteredBooks = books.filter(book => {
        const title = book.querySelector("h3").innerText.toLowerCase();
        const genre = book.querySelector(".genre").innerText.toLowerCase();

        return (
            title.includes(searchText) &&
            (selectedDept === "" || genre.includes(selectedDept))
        );
    });

    // ✅ Hide all books initially
    books.forEach(b => b.style.display = "none");

    // ✅ If no matches found — show custom animation
    if (filteredBooks.length === 0) {
        showNoResults(searchText);
        return;
    }

    // ✅ Otherwise remove “No Results” if visible
    removeNoResults();

    // ✅ Pagination
    let booksPerPage = getBooksPerPage(currentPage);
    const start = currentPage === 1 ? 0 : 8;
    const end = start + booksPerPage;
    const itemsToShow = filteredBooks.slice(start, end);

    // ✅ Show matched books with fade animation
    itemsToShow.forEach(book => {
        book.style.display = "block";
        book.style.opacity = 0;
        setTimeout(() => (book.style.opacity = 1), 100);
    });

    updatePageButtons(filteredBooks.length);
}

// ✅ Highlight active button
function updatePageButtons(totalFiltered) {
    const pageButtons = document.querySelectorAll(".pagination button");

    pageButtons.forEach(btn => btn.classList.remove("active"));
    pageButtons.forEach(btn => {
        if (btn.innerText == currentPage) {
            btn.classList.add("active");
        }
    });
}

// ✅ Pagination button actions
paginationButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let text = btn.innerText;
        if (text === "<" && currentPage > 1) currentPage--;
        else if (text === ">" && currentPage < 2) currentPage++;
        else if (!isNaN(text)) currentPage = Number(text);
        renderBooks();
    });
});

// ✅ Show “No Results Found” dynamically
function showNoResults(queryText) {
    removeNoResults(); // ensure no duplicate

    noResultsDiv = document.createElement("div");
    noResultsDiv.className = "no-results";
    noResultsDiv.innerHTML = `
        <h2>Search Result for <span style="color:orange;">${queryText || "your search"}</span></h2>
        <div class="empty">
            <h1>No Results Found</h1>
            <img src="not_found_with_mouth.png" alt="sadness">
            <p>Try different keywords or check for typos.</p>
            <button class="btn">CLEAR SEARCH</button>
        </div>
    `;

    // Append message
    bookContainer.innerHTML = "";
    bookContainer.appendChild(noResultsDiv);

    // Animate entry
    setTimeout(() => {
        noResultsDiv.style.opacity = 1;
        noResultsDiv.style.transform = "translateY(0)";
    }, 50);

    // Button reset handler
    noResultsDiv.querySelector(".btn").addEventListener("click", () => {
        searchBox.value = "";
        departmentSelect.value = "";
        currentPage = 1;
        renderBooks();
    });
}

// ✅ Remove the “No Results” section if shown
function removeNoResults() {
    if (noResultsDiv) {
        noResultsDiv.remove();
        noResultsDiv = null;
    }
}

// ✅ Search + Filter triggers
searchBox.addEventListener("input", () => {
    currentPage = 1;
    renderBooks();
});
departmentSelect.addEventListener("change", () => {
    currentPage = 1;
    renderBooks();
});

// ✅ Initial Load
renderBooks();
