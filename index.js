const aboutSection = document.getElementById('about');
const topicHeading = document.getElementById('sub-title');
const infoSection = document.getElementById('info');


const serviceSection = document.getElementById('services');
const serviceHeading = document.getElementById('sub-title-service');

const contactSection = document.getElementById('contact');
const contactHeading = document.getElementById('contact-left');

const workSection = document.getElementById("portfolio");
const workHeading = document.getElementById("sub-title-portfolio");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            topicHeading.style.animation = "topSideAni 1s ease forwards";
            serviceHeading.style.animation = "topSideAni 1.3s ease forwards";
            contactHeading.style.animation = "rightSideAni 1.3s ease forwards";
            infoSection.style.opacity = "0";
            workHeading.style.animation = "topSideAni 1.3s ease forwards";
            setTimeout(() => {
                infoSection.style.animation = "rightSideAni 1.5s ease forwards";
            }, 1000);
        } else {
            workHeading.style.animation = "none";
            contactHeading.style.animation = "none";
            topicHeading.style.animation = "none";
            serviceHeading.style.animation = "none";
            infoSection.style.animation = "none"; // Remove animation if not intersecting
        }
    });
}, { threshold: 0.5 }); // Trigger animation when at least 50% of the section is in view

observer.observe(aboutSection);
observer.observe(serviceSection);
observer.observe(contactSection);
observer.observe(workSection);

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}



const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Get user input
  const input = inputField.value;

  // Clear input field
  inputField.value = '';
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

  // Add user input to conversation
  let message = document.createElement('div');
  message.classList.add('chatbot-message', 'user-message');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
  conversation.appendChild(message);

  // Generate chatbot response
  const response = generateResponse(input);

  // Add chatbot response to conversation
  message = document.createElement('div');
  message.classList.add('chatbot-message','chatbot');
  message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
  conversation.appendChild(message);
  message.scrollIntoView({behavior: "smooth"});
});

// Generate chatbot response function

function generateResponse(input) {
    // Initialize response variable
    let response;

    // Determine response based on user input
    if (input.toLowerCase().includes("programming languages")) {
        response = "I'm proficient in HTML5, CSS3, JavaScript, and popular frameworks like React.js. I also have experience with web designing and prototyping using Figma";
    } else if (input.toLowerCase().includes("ui/ux design") || input.toLowerCase().includes("experience")) {
        response = "I have extensive experience in creating intuitive user interfaces and engaging user experiences. I focus on user research, wireframing, prototyping, and conducting usability tests to ensure optimal design solutions.";
    } else if (input.toLowerCase().includes("cyber security")) {
        response = "I have extensive experience in cyber security. I am dedicated to ensuring the confidentiality, integrity, and availability of your data.";
    } else if (input.toLowerCase().includes("design tools")) {
        response = "I primarily use tools like Adobe XD, Sketch, and Figma for designing prototypes and mockups. These tools allow me to efficiently create and iterate on designs while collaborating with team members.";
    } else if (input.toLowerCase().includes("responsive web design")) {
        response = "I approach responsive web design by using a mobile-first approach, ensuring that the website looks great and functions well on all devices, from smartphones to desktops. I utilize media queries and flexible grids to adapt the layout and content based on screen size.";
    } else if (input.toLowerCase().includes("projects")) {
        response = "Certainly! Some of the projects I've worked on include designing e-commerce platforms, clone websites";
    } else if (input.toLowerCase().includes("latest design trends")) {
        response = "I stay updated by regularly reading design blogs, following industry leaders on social media, and participating in online courses and workshops. Additionally, I attend design conferences and meetups to network with fellow professionals and exchange ideas.";
    } else if (input.toLowerCase().includes("design philosophy")) {
        response = "My design philosophy revolves around creating designs that are not only visually appealing but also functional and user-centric. I believe in simplicity, clarity, and empathy towards the end user, aiming to deliver seamless experiences that meet both user needs and business goals.";
    } else if (input.toLowerCase().includes("feedback and iterate")) {
        response = "I welcome feedback as an opportunity for improvement. I gather feedback from stakeholders, users, and team members through various channels such as user testing sessions and design critiques. I then analyze the feedback, prioritize changes, and iterate on designs to refine them further.";
    } else if (input.toLowerCase().includes("accessibility")) {
        response = "Yes, accessibility is a crucial aspect of my design process. I ensure that websites I design are compliant with WCAG standards, making them accessible to users with disabilities. I implement features like semantic HTML, proper contrast ratios, and keyboard navigation to enhance accessibility.";
    } else if (input.toLowerCase().includes("collaboration")) {
        response = "Collaboration is key to successful project delivery. I maintain open communication with developers and product managers throughout the design process, ensuring alignment on goals and requirements. I provide detailed design specifications and actively participate in discussions to address any implementation challenges and ensure the final product meets everyone's expectations.";
    }
     else {
        response = "Wow that's great question, let me get back to you with the answer in a while. Is there anything else I can help with?";
    }

    // Return the response
    return response;
}
