chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
    const { action, key, value } = request;
    let data = null;

    if (action === 'FetchLocalStorageItems') {
        data = JSON.stringify(localStorage);
    }

    if (action === 'SaveLocalStorageItem') {
    
        localStorage.setItem(key, value);
        data = JSON.stringify(localStorage);
    }

    if (action === 'DeleteLocalStorageItem') {
       
        localStorage.removeItem(key);
        data = JSON.stringify(localStorage);
    }

    if (action === 'ClearLocalStorage') {

        localStorage.clear();
        data = JSON.stringify(localStorage);
    }

    return sendResponse({ data });
});
  