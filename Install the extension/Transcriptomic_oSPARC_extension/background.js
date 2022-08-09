chrome.runtime.onInstalled.addListener(function(){
    alert("Thank you for installing the extension.");
});
chrome.webNavigation.onCompleted.addListener(function(){
    alert("alert");
}), {url: [{urlMatches:"https://sparc.science/data?type=dataset&skip=0&selectedFacetIds=77"}]};