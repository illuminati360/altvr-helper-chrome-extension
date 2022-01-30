chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
            chrome.cookies.get({ url: "https://account.altvr.com", name: '_Positron_session' }, function (cookie) {
                        sendResponse({ cookie: cookie.value });
                    });
            return true;
        }
);
