 console.log("hello sir this my new porfolio page you can see my page there is a little bit issue in my link becuse of secutrity of th echroe browase")
 
 var typed = new Typed(".text" ,{
    strings:["Frontend Development", "basic python", "backing Development", "Mearn Stack Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
 });




























// Har service ki tafseeli detail
const serviceDetails = {
    "Web Development": "As a Computer Science graduate, my approach to Web Development goes beyond just writing code. I focus on creating semantic HTML5 structures that are not only SEO-friendly but also accessible to all users. I believe in clean, scalable code architecture, ensuring that every project has a solid foundation for future growth and seamless backend integration.",
    
    "Responsive Design": "In today's diverse digital landscape, a website must perform flawlessly on every screen. I specialize in building highly adaptive layouts using modern CSS techniques like Flexbox and Grid. My responsive design strategy ensures that your content is perfectly optimized, providing an intuitive and smooth user experience whether accessed from a mobile phone, tablet, or a high-resolution desktop monitor.",
    
    "Interactive UI": "Static pages are a thing of the past; interactivity is what engages users. I leverage modern JavaScript to breathe life into user interfaces. From dynamic form validations and asynchronous content loading to custom animations and interactive navigation components, I ensure that the user interface is fast, responsive to user actions, and provides meaningful feedback."
};

// Buttons par click event lagana
document.querySelectorAll('.read').forEach(button => {
    button.onclick = (e) => {
        e.preventDefault();
        const modal = document.getElementById("serviceModal");
        const title = e.target.parentElement.querySelector('h2').innerText;
        
        // Modal ka content badalna
        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalDesc").innerText = serviceDetails[title] || "Details coming soon...";
        
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Background scroll rokne ke liye
    }
});

// Modal band karne ka function
const closeModal = () => {
    document.getElementById("serviceModal").style.display = "none";
    document.body.style.overflow = "auto"; // Scroll wapas on karne ke liye
};

document.querySelector('.close-btn').onclick = closeModal;

// Modal ke bahar click karne par band hona
window.onclick = (event) => {
    const modal = document.getElementById("serviceModal");
    if (event.target == modal) {
        closeModal();
    }
};