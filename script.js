
const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

toggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    
    if (htmlElement.classList.contains('dark')) {
        console.log('Dark Mode Active');
    } else {
        console.log('Light Mode Active');
    }
});