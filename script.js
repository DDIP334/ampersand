
function copyToClipboard(element) {
    const codeText = document.querySelector(element).innerText;

    // Use the modern Clipboard API
    navigator.clipboard.writeText(codeText).then(() => {
        // Success - show notification
        showNotification("Code copied to clipboard!");
    }).catch(err => {
        // Handle errors if any
        console.error('Failed to copy: ', err);
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);

    // Automatically remove the notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000); // 3 seconds
}

function toggleContent(id) {
    const content = document.getElementById(id);
    content.classList.toggle('hidden');
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Dark/Light Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

toggleButton.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-theme');
    bodyElement.classList.toggle('light-theme');
    
    // Change button text based on current theme
    if (bodyElement.classList.contains('dark-theme')) {
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }
});
