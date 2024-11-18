function getData() {
    fetch("http://localhost:4000/html", {
        method: "GET",
        headers: {
            "Content-Type": "text/html",
        },
    })
    .then(response => response.text())
    .then(text => {
        document.getElementById("app").innerHTML = "Loadding ...";
        function setData() {
            document.getElementById("app").innerHTML = text;
        }

        setTimeout(setData, 1000);
    });
}

getData();

document.getElementById("refresh").addEventListener("click", getData);