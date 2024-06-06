chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "quickSearch",
    title: "Search Google for '%s'",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "quickSearch") {
    let query = info.selectionText;
    let url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    chrome.tabs.create({ url: url });
  }
});
