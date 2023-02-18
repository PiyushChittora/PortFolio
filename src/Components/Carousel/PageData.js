import qoute from "../../assets/qoute.svg";
import project1 from "../../assets/khidki.jpg";
import project2 from "../../assets/SM-UX.jpg";
import project3 from "../../assets/Design.jpg";
import project4 from "../../assets/about.jpg";

const content=[
    {
        heading:"Piyush Chittora",
        description:"Web Developer/ UI Designer",
        textOnly:true,
        text:"PORTFOLIO",
        image:qoute
    },
    {
        heading:"Khidki",
        description:"Web App Solution for Cinema Club’s online ticket booking process.",
        text:"Read the Case",
        image:project1,
        color:"#ffaf24",
        link:"https://medium.com/@piyush_c/khidki-a-movie-ticket-booking-portal-16c8295078e5"
    },
    {
        heading:"React animated carousel",
        description:"An Npm package with 500+ downloads per week, fully responsive and animated, published in official npm registery. Demo is here itself..",
        text:"Package link",
        isFrame:true,
        color:"#06b885",
        link:"https://www.npmjs.com/package/react-3d-animated-carousel"
    },
    {
        heading:"Smartwatch Typing-UX",
        description:"A Keyboard revolution!",
        text:"Read the Case",
        image:project2,
        color:"#275BBF",
        link:"https://medium.com/@piyush_c/smartwatch-typing-ux-c741779d0792"
    },
    {
        heading:"My Design PORTFOLIO",
        description:"Presenting to you my UI and Graphic Design portfolio.",
        text:"View Live",
        image:project3,
        color:"#A020F0",
        link:"https://pebble-bird-341.notion.site/Hey-I-m-Piyush-Chittora-eaad796970c149ab9a1aca7d8f001e59"
    },
    {
        heading:"About Me",
        description:"I love to Design, I love to Develop, I love to create",
        text:"Know More",
        image:project4,
        color:"#ffb261",
        openAbout:true,
    },
    {
        heading:"Let's Connect",
        description:"That's all the journey, Looking forward to create Amazing User Experiences!",
        text:"The moon is a loyal companion fr.",
        color:"#E33737",
        textOnly:true,
        connect:true,
    }
]

export default content;