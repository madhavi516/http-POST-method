let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function GetHTTPRequest() {
    let requestBody = requestBodyEl.value;
    let options = {
        method: "POST",
        header: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Aithorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0"

        },
        body: JSON.stringify(requestBody)

    }
    let url = "https://gorest.co.in/public-api/users";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let requestStat = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStat;
            httpResponseEl.textContent = httpResponse;
        });
}
sendPostRequestBtnEl.addEventListener("click", GetHTTPRequest);
`fvgt5`