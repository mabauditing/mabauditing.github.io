document.addEventListener("DOMContentLoaded",function(){
 const top=document.getElementById("backToTop");
 window.addEventListener("scroll",()=>{if(top)top.classList.toggle("show",scrollY>450)});
 document.querySelectorAll(".year").forEach(e=>e.textContent=new Date().getFullYear());
 const page=location.pathname.split("/").pop()||"index.html";
 document.querySelectorAll(".nav-link[data-page]").forEach(a=>{if(a.dataset.page===page)a.classList.add("active")});
document.querySelectorAll(".inquiryForm").forEach(form=>form.addEventListener("submit",function(e){
  e.preventDefault();
  const data=new FormData(form), name=(data.get("name")||"").trim(), phone=(data.get("phone")||"").trim(), email=(data.get("email")||"").trim(), service=(data.get("service")||"").trim(), message=(data.get("message")||"").trim();
  const status=form.querySelector(".formStatus");
  if(!name||!phone||!service){status.innerHTML='<div class="alert alert-mab mb-0">Please complete your name, phone number and service.</div>';return}
  const text=`MAB Website Enquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`;
  window.open("https://wa.me/971529839922?text="+encodeURIComponent(text),"_blank","noopener");
  status.innerHTML='<div class="alert alert-success mb-0">Your enquiry is ready to send via WhatsApp. Thank you for contacting MAB.</div>';
  form.reset();
 }));
});
