
/* Logo preloader */
(function(){
  document.body.classList.add("mab-loading");
  const hideLoader = () => {
    const loader = document.getElementById("mabPreloader");
    if (!loader) return;
    loader.classList.add("is-hidden");
    document.body.classList.remove("mab-loading");
    setTimeout(() => loader.remove(), 550);
  };
  window.addEventListener("load", () => setTimeout(hideLoader, 350), {once:true});
  setTimeout(hideLoader, 5000);
})();


document.addEventListener("DOMContentLoaded", function(){
  const topBtn = document.getElementById("backToTop");
  const onScroll = () => {
    if(topBtn) topBtn.classList.toggle("show", window.scrollY > 450);
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  if(topBtn){
    topBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
  }

  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());

  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".service-menu-item").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("servicesDropdown");
      if(menu && window.bootstrap){
        const instance = bootstrap.Dropdown.getInstance(menu);
        if(instance) instance.hide();
      }
    });
  });

  document.querySelectorAll(".nav-link[data-page]").forEach(link => {
    if(link.getAttribute("data-page") === page) link.classList.add("active");
  });

  const inquiryForm = document.getElementById("inquiryForm");
  if(inquiryForm){
    inquiryForm.addEventListener("submit", function(e){
      e.preventDefault();
      const name = document.getElementById("formName").value.trim();
      const phone = document.getElementById("formPhone").value.trim();
      const email = document.getElementById("formEmail").value.trim();
      const service = document.getElementById("formService").value;
      const message = document.getElementById("formMessage").value.trim();
      if(!name || !phone || !service){
        document.getElementById("formStatus").innerHTML =
          '<div class="alert alert-mab mb-0">Please complete your name, phone number and service.</div>';
        return;
      }
      const text =
        `MAB Website Enquiry%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message)}`;
      window.open(`https://wa.me/971529839922?text=${text}`, "_blank");
      document.getElementById("formStatus").innerHTML =
        '<div class="alert alert-success mb-0">Your enquiry is ready to send via WhatsApp. Thank you for contacting MAB Accounts Auditing Office LLC.</div>';
      inquiryForm.reset();
    });
  }
});
