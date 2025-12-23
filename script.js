// script.js file ka content

const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

toggleBtn.addEventListener('click', () => {
    // 'dark' class ko html tag par add ya remove karega
    htmlElement.classList.toggle('dark');
    
    // Console mein check karne ke liye (Optional)
    if (htmlElement.classList.contains('dark')) {
        console.log('Dark Mode Active');
    } else {
        console.log('Light Mode Active');
    }
});