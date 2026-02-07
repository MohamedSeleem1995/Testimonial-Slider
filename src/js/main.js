const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    testimonialText:
      "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    userName: "Constantine V",
  },
  {
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    testimonialText:
      "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple.",
    userName: "Cherise G",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    testimonialText:
      "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    userName: "Rosetta Q",
  },
];

const testimonialCard = document.querySelector(".wrapper");
const userImage = document.querySelector("#user-image");
const userTestimonial = document.querySelector(".testimonial-text");
const username = document.querySelector(".username");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
let sliderInterval;
const showTestimonial = () => {
  const item = testimonials[index];
  userImage.src = item.image;
  userTestimonial.textContent = item.testimonialText;
  username.textContent = item.userName;
};

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = testimonials.length - 1;
  }
  showTestimonial();
});
nextBtn.addEventListener("click", () => {
  index++;
  if (index >= testimonials.length) {
    index = 0;
  }
  showTestimonial();
});
/* setInterval(()=> {
  index = (index + 1) % testimonials.length;

  showTestimonial()
}, 5000) */
// Here if we want to make the slider fade and out just comment out the code

/* const showNextTestimonial = () => {
  if (!testimonialCard) return;
  testimonialCard.classList.add("fade");
  setTimeout(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial();
    testimonialCard.classList.remove("fade");
  }, 500);
};
setInterval(showNextTestimonial, 5000); */

// here when hover over the card it stops the slider

const startSlider = () => {
 sliderInterval = setInterval(()=> {
    index = (index + 1) % testimonials.length;
    showTestimonial()
  }, 5000);
  
}
const stopSlider = ()=> {
  clearInterval(sliderInterval)
}
testimonialCard.addEventListener("mouseleave", startSlider)
testimonialCard.addEventListener("mouseenter", stopSlider)

showTestimonial();
