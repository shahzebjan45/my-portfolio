// 1. TYPING ANIMATION
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Basic Python", "Backend Developer", "MERN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

// 2. SERVICES DATA (Fixed multi-line strings with Backticks)
const serviceDetails = {
    "Web Development": `As a Computer Science graduate, my approach to Web Development goes beyond just writing code. I focus on creating semantic HTML5 structures that are not only SEO-friendly but also accessible to all users. I believe in clean, scalable code architecture, ensuring that every project has a solid foundation for future growth and seamless backend integration.`,
    
    "Responsive Design": `In today's diverse digital landscape, a website must perform flawlessly on every screen. I specialize in building highly adaptive layouts using modern CSS techniques like Flexbox and Grid. My responsive design strategy ensures that your content is perfectly optimized, providing an intuitive and smooth user experience whether accessed from a mobile phone, tablet, or a high-resolution desktop monitor.`,
    
    "Interactive UI": `Static pages are a thing of the past; interactivity is what engages users. I leverage modern JavaScript to breathe life into user interfaces. From dynamic form validations and asynchronous content loading to custom animations and interactive navigation components, I ensure that the user interface is fast, responsive to user actions, and provides meaningful feedback.`
};

// 3. MAIN LOGIC
document.addEventListener('DOMContentLoaded', () => {
    
    const aboutModal = document.getElementById("aboutModal");
    const serviceModal = document.getElementById("serviceModal");
    
    // Buttons Selection
    const homeBtn = document.getElementById("home-btn");
    const aboutBtn = document.getElementById("about-modal-btn");

    // HOME BUTTON -> Scroll to Services
    if (homeBtn) {
        homeBtn.onclick = (e) => {
            console.log("Navigating to Services section...");
        };
    }

    // ABOUT BUTTON -> Open Academic Modal
    if (aboutBtn) {
        aboutBtn.onclick = (e) => {
            e.preventDefault();
            if (aboutModal) {
                aboutModal.style.display = "block";
                document.body.style.overflow = "auto";
            }
        };
    }
//    close btn

document.querySelectorAll(".close, .close-btn").forEach(btn=>{
    btn.onclick=()=>{
        if(aboutModal) aboutModal.style.display ="none";
        if (serviceModal) serviceModal.style.display="none";
           document.body.style.oveflow="auto";

        
    };
  
    });

    // SERVICES READ MORE
    document.querySelectorAll('.read').forEach(btn => {
        btn.onclick = (e) => {
            e.preventDefault();
            // Title dhoondne ke liye parent div ka istemal
            const card = e.target.closest('div');
            const title = card.querySelector('h2').innerText.trim();
            
            const modalTitleElement = document.getElementById("modalTitle");
            const modalDescElement = document.getElementById("modalDesc");

            if (modalTitleElement && modalDescElement) {
                modalTitleElement.innerText = title;
                modalDescElement.innerText = serviceDetails[title] || "Details coming soon...";
                
                if(serviceModal) {
                    serviceModal.style.display = "block";
                    document.body.style.overflow = "auto";
                }
            }
        };
    });

    // CLICK OUTSIDE TO CLOSE
    window.onclick = (event) => {
        if (event.target == aboutModal || event.target == serviceModal) {
            if(aboutModal) aboutModal.style.display = "none";
            if(serviceModal) serviceModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
});