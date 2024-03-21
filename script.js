document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function() {
        // Retrieve the color from the data-color attribute of the clicked item
        const color = this.getAttribute('data-color');
        
        // Change the background color of the body
        document.body.style.backgroundColor = color;
    });
});


const colors = ['#66C7F1', '#4477BC', '#DE78AF', '#EF423F', '#F7942E', '#FFCC2E', '#6ABF69', '#FFFFFF'];

// Initialize the current index if it's not already set
document.querySelector('.item').setAttribute('data-color-index', '0');

// Add a click event listener to the item
document.querySelector('.item').addEventListener('click', function() {
    // Retrieve the current color index from the data-color-index attribute
    let currentIndex = parseInt(this.getAttribute('data-color-index'), 10);
    
    // Calculate the next color index
    let nextIndex = (currentIndex + 1) % colors.length;
    
    // Get the next color from the array
    let nextColor = colors[nextIndex];
    
    // Apply the next color to the background
    document.body.style.backgroundColor = nextColor;
    
    // Update the data-color-index attribute with the next index
    this.setAttribute('data-color-index', nextIndex);
});




document.addEventListener("DOMContentLoaded", function() {
    // Get all accordion items
    var accordionItems = document.querySelectorAll('.accordion-item');

    // Loop through each accordion item
    accordionItems.forEach(function(item) {
        // Add click event listener to the accordion header
        var header = item.querySelector('.accordion-header');
        header.addEventListener('click', function() {
            // Toggle the active class on the accordion item
            item.classList.toggle('active');
        });
    });
});



// Define an array with URLs of the images to toggle between
var imageUrls = [
    "https://cdn.glitch.global/ef9888ff-6cef-4f51-a0c3-ba8b459298a0/Mohammed_Profile_Hidden_3?v=1710621645789",
    "https://cdn.glitch.global/ef9888ff-6cef-4f51-a0c3-ba8b459298a0/Mohammed_Profile_Full?v=1710607772071",
    // Add more image URLs as needed
];

// Counter to keep track of the current image index
var currentImageIndex = 0;

// Function to toggle between images
function toggleImage() {
    // Get the image element
    var img = document.getElementById('toggleImage');
    
    // Increment the index or reset to 0 if it exceeds the array length
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    
    // Set the src attribute of the image to the next image URL
    img.src = imageUrls[currentImageIndex];
}





document.addEventListener("DOMContentLoaded", function() {
    // Display the password prompt when the page loads
    document.getElementById("password-prompt").style.display = "block";

    // Check password when submitting the form
    document.getElementById("password-submit").addEventListener("click", function() {
        var password = document.getElementById("password-input").value;
        
        if (password === "givememo") {
            document.getElementById("password-prompt").style.display = "none"; // Hide the password prompt
            document.getElementById("content").style.display = "block"; // Display the content
        } else {
            alert("Incorrect password. Please try again."); // Display an alert for incorrect password
        }
    });
});









document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.floating-img');

  images.forEach(img => {
    let deltaX = (Math.random() - 1) * 2;
    let deltaY = (Math.random() - 1) * 2;
    let x = Math.random() * (document.getElementById('floatingContainer').clientWidth - img.clientWidth);
    let y = Math.random() * (document.getElementById('floatingContainer').clientHeight - img.clientHeight);
    let isHovered = false;
    let scaleFactor = 1; // Initial scale factor

    img.addEventListener('mouseenter', () => {
      isHovered = true;
      img.style.transition = 'none'; // Stop the transition to instantly halt movement
    });

    img.addEventListener('mouseleave', () => {
      isHovered = false;
      img.style.transition = 'transform 0.5s ease-in-out'; // Reapply the transition for smooth movement
    });

    function move() {
      if (!isHovered) {
        if (x + deltaX <= 0 || x + img.clientWidth + deltaX >= document.getElementById('floatingContainer').clientWidth) {
          deltaX *= -1;
          scaleFactor = scaleFactor > 1 ? 1 : 1.1; // Toggle scale factor when hitting the horizontal edge
        }
        if (y + deltaY <= 0 || y + img.clientHeight + deltaY >= document.getElementById('floatingContainer').clientHeight) {
          deltaY *= -1;
          scaleFactor = scaleFactor > 1 ? 1 : 1.1; // Toggle scale factor when hitting the vertical edge
        }

        x += deltaX;
        y += deltaY;

        img.style.transform = `translate(${x}px, ${y}px) scale(${scaleFactor})`;
      }

      requestAnimationFrame(move);
    }

    move();
  });
});







/* THIS IS WHERE THE DRESSING UP CODE STARTS*/



// Function to open a specific tab content
function openTab(event, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
    // Function to handle item click events
    function handleItemClick(event) {
        const item = event.target;
        const character = document.getElementById('character');

        // Check if the item is currently positioned on the character
        if (item.dataset.onCharacter === "true") {
            // Move it back to its original tab
            const originalTabId = item.dataset.originalTab;
            const originalTab = document.getElementById(originalTabId);
            originalTab.appendChild(item);
            // Reset item state and styles
            item.dataset.onCharacter = "false";
            item.removeAttribute('style');
        } else {
            // If clicked within a tab, move it to the character at specified position
            character.appendChild(item);
            item.style.position = 'absolute';
            item.style.left = item.dataset.x + 'px';
            item.style.top = item.dataset.y + 'px';
            // Mark the item as positioned on the character
            item.dataset.onCharacter = "true";
        }
    }

    // Initialize each item
    function initItems() {
        document.querySelectorAll('.tabcontent .item').forEach(item => {
            // Attach click event listener to each item
            item.addEventListener('click', handleItemClick);
            // Store original parent tab ID for each item
            item.dataset.originalTab = item.parentElement.id;
            // Initially, items are not on the character
            item.dataset.onCharacter = "false";
        });
    }
    
    initItems();

    // Reset function to move items from character back to their original tabs
    function resetItems() {
        document.querySelectorAll('.item').forEach(item => {
            if (item.dataset.onCharacter === "true") {
                const originalTabId = item.dataset.originalTab;
                const originalTab = document.getElementById(originalTabId);
                originalTab.appendChild(item);
                // Reset item state and remove styles
                item.dataset.onCharacter = "false";
                item.removeAttribute('style');
            }
        });
    }
    
    // Attach reset functionality to the reset button
    document.getElementById('resetItems').addEventListener('click', resetItems);
});