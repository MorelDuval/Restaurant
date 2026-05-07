
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImg");
const modalVid = document.getElementById("fullVideo");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll('.zoom-img').forEach(media => {
    media.onclick = function() {
       
        modal.style.display = "block";
        captionText.innerHTML = this.alt || "C-PIZZA Special";

      
        if (this.tagName === 'VIDEO') {

            modalImg.style.display = "none";
            modalVid.style.display = "block";
            
            const videoSrc = this.querySelector('source').src;
            modalVid.src = videoSrc;
            modalVid.play(); 
        } else {

            modalVid.style.display = "none";
            modalImg.style.display = "block";
            
  
            modalImg.src = this.src;
        }
    }
});


const closeModal = () => {
    modal.style.display = "none";
  
    modalVid.src = "";
    modalImg.src = "";
    modalVid.pause();
};

closeBtn.onclick = closeModal;


window.onclick = (event) => {
    if (event.target == modal) {
        closeModal();
    }
};


const resForm = document.getElementById('res-form');
const feedback = document.getElementById('msg');

if (resForm) {
    resForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const nameValue = document.getElementById('name').value;
        const dateValue = document.getElementById('date').value;

        feedback.innerText = "Success! " + nameValue + ", your table for " + dateValue + " is confirmed.";
        feedback.style.color = "#2ecc71"; 
        feedback.style.marginTop = "15px";
        feedback.style.fontWeight = "bold";


        this.reset();
    });
}