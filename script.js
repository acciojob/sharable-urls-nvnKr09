// your code here
const form = document.getElementById("urlForm");
        const urlElement = document.getElementById("url");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;

            // Build the URL with a query string
            const urlString = `https://localhost:8080/?name=${name}&year=${year}`;

            // Update the h3 element with the generated URL
            urlElement.textContent = urlString;
        });