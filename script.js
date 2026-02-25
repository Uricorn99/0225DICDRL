// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 50);
});

// Cursor hover effects on links and buttons
const interactables = document.querySelectorAll('a, button, .time-container');

interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.backgroundColor = 'rgba(102, 252, 241, 0.1)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.backgroundColor = 'transparent';
    });
});

// Time updating logic
function updateTime() {
    const timeElement = document.getElementById('current-time');
    
    // Create current date taking into account requested timezone/time format (+08:00)
    const now = new Date();
    
    // Format options exactly as the user might want (or standard format)
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false
    };
    
    // Let's manually construct to look like 2026-02-25 20:25:51 format
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    timeElement.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Initial call and interval setup
setInterval(updateTime, 1000);
// To be perfectly accurate to the time request initially provided, we could show it, but dynamic based on current OS time is better
updateTime();
