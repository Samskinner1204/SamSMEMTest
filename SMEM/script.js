class Navigation extends HTMLElement {
    get selected() {
        return this.getAttribute('selected');
    }

    set selected(newValue) {
        this.setAttribute('selected', newValue);
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav>
            <h1 class="titleText">QA</h1>
            <ul>
                <li><a href="home.html" id="home">Home</a></li>
                <li><a href="schedule.html" id="schedule">Schedule</a></li>
                <li><a href="signup.html" id="signup">Sign Up</a></li>
            </ul>
        </nav>
        `

        let selectedPage = document.getElementById(this.getAttribute('selected'));
        selectedPage.classList.add('selected');
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
        <p>Copyright QA Cinemas 2018</p>
        </footer>
        `
    }
}

customElements.define('navigation-component', Navigation);
customElements.define('footer-component', Footer);


function nameValidation(elementId) {
    const element = document.getElementById(elementId);
    const elementError = document.getElementById(elementId + 'error');
    const valid = /^[A-Za-z]+$/.test(element.value);
    if (!valid) {
        element.setCustomValidity('Invalid Field');
        elementError.textContent = "Only upper and lower case letters are allowed";
    }

    if (element.value.length <= 1 || element.value.length >= 15) {
        element.setCustomValidity('Invalid Field');
        elementError.textContent = "The name is either too short or too long";
        valid = false;
    }

    if(valid) {
        element.setCustomValidity('');
        elementError.textContent = ""
    }
    
    return valid;
}

function emailValidation(){
    const input = document.getElementById('email')
    const emailError = document.getElementById('emailerror');
    console.log(/^.+@.+\..+$/.test(input.value))
    
    const evalid = /^.+@.+\..+$/.test(input.value)
    if (!evalid){
        console.log('Invalid')
        input.setCusomValidity('Invalid Field');
        emailError.textContent = "Email address not valid";
    }

    if(evalid) {
        input.setCustomValidity('');
        emailError.textContent = "";
    }

    return evalid;
}

function sendAsJson(event){
    var fname = document.getElementById('firstname')
    var lname = document.getElementById('lastname')
    var email = document.getElementById('email')
    var dob = document.getElementById('dob')
    var phone = document.getElementById('phone')
    var sex = document.getElementByName('sex')

    event.preventDefault();

    var json = {}
    json['firstname'] = fname.value
    json['lastname'] = lname.value
    json['email'] = email.value
    json['dob'] = dob.value


    var formData = JSON.stringify($("signupForm").serializeArray());

    console.log(formData);

    

    // $("#signupForm").submit();
}


