document.addEventListener("DOMContentLoaded", function() {
    const logoTrigger = document.querySelector(".fixed-header .item");
    const pageRoot = document.documentElement;

    function applySiteBackgroundColor(color) {
        pageRoot.style.backgroundColor = color;
        document.body.style.backgroundColor = color;
    }

    if (!logoTrigger) {
        return;
    }

    const colors = ['#66C7F1', '#4477BC', '#DE78AF', '#EF423F', '#F7942E', '#FFCC2E', '#6ABF69', '#FFFFFF'];
    const colorStorageKey = "siteBackgroundColor";
    const savedColor = localStorage.getItem(colorStorageKey);
    const savedIndex = savedColor ? colors.indexOf(savedColor.toUpperCase()) : -1;

    if (savedColor) {
        applySiteBackgroundColor(savedColor);
    }

    if (savedIndex >= 0) {
        logoTrigger.setAttribute("data-color-index", String(savedIndex));
    } else {
        logoTrigger.setAttribute("data-color-index", "-1");
    }

    logoTrigger.addEventListener("click", function() {
        let currentIndex = parseInt(this.getAttribute("data-color-index"), 10);

        if (Number.isNaN(currentIndex)) {
            currentIndex = 0;
        }

        const nextIndex = (currentIndex + 1) % colors.length;
        const nextColor = colors[nextIndex];

        applySiteBackgroundColor(nextColor);
        this.setAttribute("data-color-index", String(nextIndex));
        localStorage.setItem(colorStorageKey, nextColor);
    });
});




document.addEventListener("click", function(event) {
    var header = event.target.closest('.accordion-header');

    if (!header) {
        return;
    }

    var item = header.closest('.accordion-item');

    if (!item) {
        return;
    }

    item.classList.toggle('active');
});




var imageUrls = [
    "https://res.cloudinary.com/dsdage8vw/image/upload/v1775322921/Mohammed_Profile_Hidden_i83cgj.png",
    "/Assets Upload/Images/Branding/Mohammed_Profile_Full.png",
    
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
    var passwordPrompt = document.getElementById("password-prompt");
    var passwordSubmit = document.getElementById("password-submit");

    if (!passwordPrompt || !passwordSubmit) {
        return;
    }

    passwordPrompt.style.display = "block";

    // Check password when submitting the form
    passwordSubmit.addEventListener("click", function() {
        var password = document.getElementById("password-input").value;
        
        if (password === "givememo") {
            document.getElementById("password-prompt").style.display = "none"; // Hide the password prompt
            document.getElementById("content").style.display = "block"; // Display the content
        } else {
            alert("Incorrect password. Please try again."); // Display an alert for incorrect password
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var isHomePage = document.body.classList.contains("home-page");
    var promoModal = document.getElementById("homePromoModal");
    var promoClose = document.getElementById("homePromoClose");

    if (!isHomePage || !promoModal || !promoClose) {
        return;
    }

    promoModal.classList.add("is-visible");
    promoModal.setAttribute("aria-hidden", "false");

    promoClose.addEventListener("click", function() {
        promoModal.classList.remove("is-visible");
        promoModal.setAttribute("aria-hidden", "true");
    });
});









document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.floating-img');
  const container = document.getElementById('floatingContainer');

  if (!container || images.length === 0) {
    return;
  }

  function centeredPosition(containerSize, imageSize) {
    return Math.max((containerSize - imageSize) / 2, 0);
  }

  function randomVelocity() {
    const direction = Math.random() < 0.5 ? -1 : 1;
    const speed = 0.75 + Math.random() * 1.25;
    return direction * speed;
  }

  images.forEach(img => {
    let deltaX = randomVelocity();
    let deltaY = randomVelocity();
    let x = 0;
    let y = 0;
    let isHovered = false;
    let scaleFactor = 1; // Initial scale factor
    let hasStarted = false;

    function setCenteredStart() {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const imageWidth = img.clientWidth;
      const imageHeight = img.clientHeight;

      if (!containerWidth || !containerHeight || !imageWidth || !imageHeight) {
        return false;
      }

      x = centeredPosition(containerWidth, imageWidth);
      y = centeredPosition(containerHeight, imageHeight);
      img.style.transform = `translate(${x}px, ${y}px) scale(${scaleFactor})`;
      return true;
    }

    img.addEventListener('mouseenter', () => {
      isHovered = true;
      img.style.transition = 'none'; // Stop the transition to instantly halt movement
    });

    img.addEventListener('mouseleave', () => {
      isHovered = false;
      img.style.transition = 'transform 0.5s ease-in-out'; // Reapply the transition for smooth movement
    });

    function move() {
      if (!hasStarted) {
        hasStarted = setCenteredStart();

        if (!hasStarted) {
          requestAnimationFrame(move);
          return;
        }
      }

      if (!isHovered) {
        if (x + deltaX <= 0 || x + img.clientWidth + deltaX >= container.clientWidth) {
          deltaX *= -1;
          scaleFactor = scaleFactor > 1 ? 1 : 1.1; // Toggle scale factor when hitting the horizontal edge
        }
        if (y + deltaY <= 0 || y + img.clientHeight + deltaY >= container.clientHeight) {
          deltaY *= -1;
          scaleFactor = scaleFactor > 1 ? 1 : 1.1; // Toggle scale factor when hitting the vertical edge
        }

        x += deltaX;
        y += deltaY;

        img.style.transform = `translate(${x}px, ${y}px) scale(${scaleFactor})`;
      }

      requestAnimationFrame(move);
    }

    if (img.complete) {
      setCenteredStart();
    } else {
      img.addEventListener('load', setCenteredStart, { once: true });
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
