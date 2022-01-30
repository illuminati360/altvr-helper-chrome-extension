chrome.runtime.sendMessage({}, (response) => {
    var cookie = document.createElement("input");
    cookie.value = response.cookie;
    cookie.type = "hidden";
    cookie.id = "cookie";
    document.body.append(cookie);
});
