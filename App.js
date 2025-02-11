const observer = new IntersectionObserver((entries) =>{
    entries.forEach((Entry) =>{
        console.log(Entry)
        if(Entry.isIntersecting){
            Entry.target.classList.add("show");
        }else{
            Entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));