// Function to toggle between dark and light mode
function Mode() {
    let mode = document.body.classList;
    if (mode=="white") {
        document.body.classList="black"
    } else document.body.classList="white"
}

// Function to create email on pre-populated form by user
function Email() {
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    if (name!=="" && subject!=="" && message!=="") {
        let newName = name.replace(/ /g,'%20');
        let newSubject = subject.replace(" ", "%20");
        let attribute = message.replace(/ /g, "%20");
        let link = document.createElement("a");
        link.appendChild(document.createTextNode('Send Email'));
        let mailto = `mailto:patrizia.potere74@gmail.com?subject=${newName}%20${newSubject}&body=${attribute}`;
        link.setAttribute('href',mailto);
        document.getElementById('link').appendChild(link);
    } else alert('Please fill up the form');
    console.log(link)
}

// Function to add a comment
function Comment() {
    let title=document.getElementById("title").value;
    let author= document.getElementById("author").value;
    let blog_comment = document.getElementById("comment").value;
    if (title && author && blog_comment) {                   //Checking if user fill up the form
        var frag = document.createDocumentFragment();
        // const div = document.createElement("div");
        let h1 = document.createElement("H1");
        let h3 = document.createElement("H3");
        let p = document.createElement("p");
        h1.appendChild(document.createTextNode(title));
        h3.appendChild(document.createTextNode(author));
        p.appendChild(document.createTextNode(blog_comment))
        frag.appendChild(h1);
        frag.appendChild(h3);
        frag.appendChild(p);
        document.getElementById("user").appendChild(frag);
    } else alert('Please fill up the form')             //Alert msg in case form is not full
}

// Function to display comment section to user 
 function Popup() {
    document.getElementById("user").style.display="block";
 }

 function Delete() {
    document.getElementById("user").style.display="none";
 }
