// Mobile Menu Button
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    alert("Mobile menu will be added in the next version.");
});

// Smooth button animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });
});
function openModal(program){

const modal=document.getElementById("programModal");
const title=document.getElementById("modalTitle");
const image=document.getElementById("modalImage");
const description=document.getElementById("modalDescription");
const activities=document.getElementById("modalActivities");

modal.style.display="block";

const data={

environment:{
title:"🌱 Environmental Care",
image:"images/environment care.jpg",
description:"Environmental Care encourages volunteers to protect nature through community-based environmental activities and sustainability projects.",
activities:[
"🌳 Tree Planting",
"♻ Recycling Campaign",
"🧹 Park Cleanup",
"🌊 River Cleaning"
]
},

community:{
title:"🤝 Community Service",
image:"images/community.jpg",
description:"Community Service brings volunteers together to help local communities through charity events and social outreach.",
activities:[
"🍱 Food Distribution",
"🎁 Donation Drive",
"👴 Visit Elderly Homes",
"🏘 Community Outreach"
]
},

education:{
title:"📚 Education Support",
image:"images/education.jpg",
description:"Education Support helps students through mentoring, tutoring, workshops, and educational activities.",
activities:[
"📖 Tutoring",
"💻 Digital Literacy",
"📝 Study Workshops",
"🎓 Mentorship"
]
},

leadership:{
title:"❤️ Youth Leadership",
image:"images/leadership.jpg",
description:"Youth Leadership develops confidence, teamwork, communication, and leadership among young volunteers.",
activities:[
"🏕 Leadership Camp",
"🎤 Public Speaking",
"🤝 Team Building",
"👥 Volunteer Training"
]
}

};

title.innerHTML=data[program].title;
image.src=data[program].image;
description.innerHTML=data[program].description;

activities.innerHTML="";

data[program].activities.forEach(function(activity){

activities.innerHTML+=`<li>${activity}</li>`;

});

}

function closeModal(){

document.getElementById("programModal").style.display="none";

}

window.onclick=function(event){

const modal=document.getElementById("programModal");

if(event.target==modal){

modal.style.display="none";

}

}