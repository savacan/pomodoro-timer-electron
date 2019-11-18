const contentDiv = document.getElementById('contents')

if (contentDiv) {
    const childEls = document.createElement('div')
    childEls.textContent = "Hello Happy World!"
    contentDiv.appendChild(childEls);
    console.log('append hello world');
} else {
    console.warn('can not find target element');
}