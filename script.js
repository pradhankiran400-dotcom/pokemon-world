
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

// side--bar

function toggleWishlist() {
    const sidebar = document.getElementById('wishlist-sidebar');

    sidebar.classList.toggle('translate-x-full');
}


function toggleLike(btn, movieTitle, movieImage) {
    const icon = btn.querySelector('i');
    const wishlistContainer = document.getElementById('wishlist-container');
    const emptyMsg = document.getElementById('empty-msg');
    const countBadge = document.getElementById('wishlist-count');
    
   
    const movieId = 'fav-' + movieTitle.replace(/\s+/g, '-');


    if (btn.classList.contains('liked')) {
        
        btn.classList.remove('liked');
        
       
        icon.classList.remove('fa-solid', 'text-red-500');
        icon.classList.add('fa-regular');
        btn.style.color = ""; 

        
        const itemToRemove = document.getElementById(movieId);
        if (itemToRemove) {
            itemToRemove.remove();
        }

    } else {
       
        btn.classList.add('liked');
        
       
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid', 'text-red-500');
        btn.style.color = "red"; 

       
        const newItem = document.createElement('div');
        newItem.id = movieId; 
        newItem.className = "flex items-center gap-3 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700 animate-pulse-once";
        
        newItem.innerHTML = `
            <img src="${movieImage}" class="w-12 h-16 object-cover rounded">
            <div>
                <h4 class="font-bold text-sm text-gray-900 dark:text-white">${movieTitle}</h4>
                <span class="text-xs text-green-500 font-semibold">Added to favorites</span>
            </div>
        `;


        if(emptyMsg) emptyMsg.style.display = 'none';
        
        wishlistContainer.appendChild(newItem);

      
        const sidebar = document.getElementById('wishlist-sidebar');
        if (sidebar.classList.contains('translate-x-full')) {
            toggleWishlist();
        }
    }

   
    const totalItems = wishlistContainer.children.length - (emptyMsg && emptyMsg.style.display !== 'none' ? 1 : 0);
    countBadge.innerText = Math.max(0, totalItems); 
    

    if (totalItems === 0 && emptyMsg) {
        emptyMsg.style.display = 'block';
    }
}
