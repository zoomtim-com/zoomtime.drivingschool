function showInfo(type){

const info={

instructors:"Our certified instructors have years of experience teaching beginners, nervous drivers and experienced drivers looking to improve their skills.",

schedule:"Choose morning, afternoon, evening or weekend classes that fit around your work or school schedule.",

vehicles:"Train using modern dual-control vehicles equipped with air conditioning and safety features.",

roadtest:"We prepare you thoroughly for your official driving test with realistic practice sessions.",

defensive:"Learn defensive driving techniques that help you stay safe in heavy traffic and difficult road conditions.",

support:"Even after you graduate, we're available to answer questions and offer driving guidance."

};

alert(info[type]);

}
function showCourse(course){

const courses={

beginner:"Beginner Driving Course lasts 4-6 weeks and covers vehicle control, traffic rules, parking, reversing, and road confidence.",

refresher:"Our Refresher Course is designed for licensed drivers who want to improve confidence and driving skills.",

defensive:"Defensive Driving teaches hazard awareness, accident prevention, emergency handling, and safe driving techniques.",

commercial:"Commercial Driving prepares students for professional driving careers with intensive practical training."

};

alert(courses[course]);

}
// Animate testimonials

const testimonials=document.querySelectorAll(".testimonial");

const testimonialObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(

[
{opacity:0,transform:"translateY(60px)"},
{opacity:1,transform:"translateY(0)"}
],

{
duration:800,
fill:"forwards"
}

);

}

});

},{threshold:0.2});

testimonials.forEach(card=>testimonialObserver.observe(card));

const enrollForm = document.getElementById("enrollForm");

if(enrollForm){

enrollForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const email=document.getElementById("email").value;
const course=document.getElementById("course").value;
const time=document.getElementById("time").value;
const note=document.getElementById("message").value;

const text=

`Hello Zoomtime Driving School,

I would like to enroll.

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email}

🚗 Course: ${course}

🕒 Preferred Time: ${time}

📝 Additional Information:
${note}`;

const whatsappURL=`https://wa.me/2349012964452?text=${encodeURIComponent(text)}`;

window.open(whatsappURL,"_blank");

});
}
// Hero Buttons Functionality

const enrollBtn = document.getElementById("enrollBtn");
const callBtn = document.getElementById("callBtn");
const whatsappBtn = document.getElementById("whatsappBtn");

// Enroll button - scroll to enrollment form
if (enrollBtn) {
  enrollBtn.addEventListener("click", () => {
    const enrollSection = document.getElementById("enroll");

if (enrollSection) {
  enrollSection.scrollIntoView({
    behavior: "smooth"
  });
}
    });
}

// Call button
if (callBtn) {
  callBtn.addEventListener("click", () => {
    window.location.href = "tel:+2349012964452";
  });
}

// WhatsApp button
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    const message = encodeURIComponent(
      "Hello Zoomtime Driving School, I would like to make an enquiry."
    );

    window.open(
      `https://wa.me/2349012964452?text=${message}`,
      "_blank"
    );
  });
}
// =====================
// Smooth Fade Animation
// =====================

const sections = document.querySelectorAll(
".about, .services, .courses, .pricing, .registration, .gallery, .success, .contact"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.15});

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition="all .8s ease";

observer.observe(section);

});

// =====================
// Gallery Hover Effect
// =====================

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("click", () => {
        window.open(img.src, "_blank");
    });

});