// your code here
const form = document.getElementById("myForm");
        const urlElement = document.getElementById("url");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;

            // Build the URL with a query string
           urlElement.textContent = `https://localhost:8080/?name=${name}&year=${year}`;
        });