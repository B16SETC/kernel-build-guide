function switchTab(event, tabId) {
    const tabContainer = event.target.parentElement;
    const contentContainer = tabContainer.nextElementSibling;
    
    const tabs = tabContainer.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    let currentContent = contentContainer;
    while (currentContent && currentContent.classList.contains('tab-content')) {
        currentContent.classList.remove('active');
        currentContent = currentContent.nextElementSibling;
    }
    
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
