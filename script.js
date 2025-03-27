// function to load header and footer in all pages
function loaddata(id,file){
    fetch(file).then(response => response.text())
    .then(data => document.getElementById(id).innerHTML=data)
    .catch(error => console.error(`Error loading ${file}:`,error));
}

document.addEventListener("DOMContentLoaded",function(){
    loaddata("header","header.html");
    loaddata("footer","footer.html");
});

//function to display job details 
function Details(jobId){
    let job = document.getElementById(jobId);

    if(job.style.display === "none" || job.style.display === ""){
        job.style.display = "block";
    }
    else{
        job.style.display = "none";
    }
}

//form submission event
document.getElementById("form").addEventListener("submit", function(event){
  event.preventDefault();
  let message = document.getElementById("message").value;
  let maillink = `mailto:rimpal.dhillon@yahoo.com?subject=Contact Form Submission&body=
  ${message}`;
  let confirmation = `Clicking send will open your email app and the message you entered will be included in the email. Click OK to proceed.`;
  alert(confirmation);
  window.location.href = maillink;
  this.reset();
});

