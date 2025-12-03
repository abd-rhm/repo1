// js/script.js
function $(s){return document.querySelector(s)}
function $all(s){return Array.from(document.querySelectorAll(s))}

(function(){
  const btn=$("#updateBannerBtn"), img=$("#bannerImage"), cap=$("#bannerCaption");
  if(btn && img){
    btn.addEventListener("click", ()=>{
      img.src = "intter.jpeg";
      if(cap) cap.textContent = "Python Bootcamp — Now Live";
    });
  }
})();

(function(){
  const btn=$("#updateCoursesBtn"), descs=$all(".course-desc");
  if(btn && descs.length>0){
    const updated = [
      "Create modern responsive layouts and master CSS fundamentals.",
      "Build dynamic web apps with ES6+, asynchronous JS and the DOM.",
      "Python from basics to data scripting, automation and Flask basics.",
      "Understand full-stack flow: APIs, databases, deployment basics."
    ];
    btn.addEventListener("click", ()=>{
      descs.forEach((p,i)=>{ if(updated[i]) p.textContent = updated[i] });
    });
  }
})();

(function(){
  const btn=$("#updateAnnouncementBtn"), txt=$("#announcementText");
  if(btn && txt){
    btn.addEventListener("click", ()=>{ txt.textContent = "New cohort starts Monday — Enroll today!"; });
  }
})();

(function(){
  const links = document.querySelectorAll("nav a[href^='#']");
  if(links.length>0){
    links.forEach(a=>{
      a.addEventListener("click",(e)=>{
        const href = a.getAttribute("href");
        if(href && href.startsWith("#")){
          const target = document.querySelector(href);
          if(target){
            e.preventDefault();
            target.scrollIntoView({behavior:"smooth",block:"start"});
          }
        }
      });
    });
  }
})();

(function(){
  const faqs = $all(".faq-item");
  if(faqs.length>0){
    faqs.forEach(item=>{
      item.addEventListener("click", ()=>{
        const wasActive = item.classList.contains("active");
        faqs.forEach(x=>x.classList.remove("active"));
        if(!wasActive) item.classList.add("active");
      });
    });
  }
})();

(function(){
  const items = $all(".testimonial");
  if(items.length>0){
    let i=0;
    items.forEach((it,idx)=>{ it.style.opacity = idx===0 ? "1" : "0.45"; it.style.transition = "opacity 400ms ease" });
    setInterval(()=>{
      items[i].style.opacity = "0.45";
      i = (i+1) % items.length;
      items[i].style.opacity = "1";
    }, 4200);
  }
})();

(function(){
  console.info("CourseHub ready:", "buttons=", document.querySelectorAll("button").length, "anchors=", document.querySelectorAll("a").length);
})();