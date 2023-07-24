// get element
// LogIn-Logout

const loginBtn = document.querySelector('.header__navbar-iteam-js-login');
const RegisterBtn = document.querySelector('.header__navbar-iteam-js-register');
const modal = document.querySelector('.js-modal');
const modal_login = document.querySelector('.js-login-form');
const modal_register = document.querySelector('.js-register-form');
const BtnBacks = document.querySelectorAll('.js-auth-form__control-back');
const modal_body = document.querySelector('.js-modal__body');

// login

function showLogin() {
    modal.classList.add('open');
    modal_login.classList.add('open');
    modal_register.classList.remove('open');
}
loginBtn.addEventListener('click', showLogin);

// register

function showRegister() {
    modal.classList.add('open');
    modal_register.classList.add('open');
    modal_login.classList.remove('open');
}
RegisterBtn.addEventListener('click', showRegister);
//close modal
function Back() {
    modal.classList.remove('open');
}
for (const BtnBack of BtnBacks) {
    BtnBack.addEventListener('click', Back);
}





modal.addEventListener('click', Back);
modal_body.addEventListener('click', function (event) {
    event.stopPropagation();
})
// 

//change login <-> register

// get element
const changeLoginBtn = document.querySelector('.js-auth-form__switch-btn-login');
const changeRegisterBtn = document.querySelector('.js-auth-form__switch-btn-register');


// do {
// register -> login
function changeLogin() {
    modal_register.classList.remove('open');
    modal_login.classList.add('open');
}

// login -> register

function changeRegister() {
    modal_login.classList.remove('open');
    modal_register.classList.add('open');
}
changeLoginBtn.addEventListener('click', changeLogin);
changeRegisterBtn.addEventListener('click', changeRegister);
// } while (BtnBack.addEventListener('click',))





// home-product-item__action

const item__like = document.querySelector('.js-home-product-item__like');
const item_tym_action = document.querySelector('.home-product-item__like-icon-empty');
item_tym_action.addEventListener('click', function () {
    item__like.classList.add('home-product-item__like--liked');
})


// Login-Singup



//signUp

const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupRepeatPassword = document.getElementById("signup-Repeat_password");
const btnSignup = document.querySelector(".js-btn-signup");
btnSignup.addEventListener('click', (e) => {
    e.preventDefault();
    if (
        signupEmail.value === "" || signupPassword.email === "" || signupRepeatPassword.value === ""
    ) {
        alert("Nhap day du thong tin");
    }
    else {
        const user = {
            email: signupEmail.value,
            password: signupPassword.value,
        };
        let json = JSON.stringify(user);
        localStorage.setItem(signupEmail.value, json);
        alert("Dang ky thanh cong");
    }

});

// login
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const btnLogin = document.querySelector(".js-btn-login");
const LoginSignup = document.querySelector(".header__navbar-login-signup");
const LoginUser = document.querySelector(".header__navbar-user");
const cart_notice = document.querySelector(".header__cart-notice");
const header__cart_heading = document.querySelector(".header__cart-heading");
const header__cart_no_cart_img = document.querySelector(".header__cart-no-cart-img");
const header__cart_list_no_cart_msg = document.querySelector(".header__cart-list-no-cart-msg");
const header__cart_list_item = document.querySelector(".header__cart-list-item");
const header__cart_view_cart = document.querySelector("a.header__cart-view-cart");
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if (
        loginEmail.value === "" || loginPassword.email === ""
    ) {
        alert("Nhap day du thong tin");
    }
    else {
        const user = JSON.parse(localStorage.getItem(loginEmail.value));
        if (
            user.email === loginEmail.value && user.password === loginPassword.value
        ) {
            alert("Dang nhap thanh cong");
            modal.classList.remove('open');
            LoginSignup.style.display = 'none';
            LoginUser.style.display = 'inline-flex';
            cart_notice.style.display = "flex";
            header__cart_no_cart_img.style.display = 'none';
            header__cart_list_no_cart_msg.style.display = 'none';
            header__cart_heading.style.display = 'flex';
            header__cart_list_item.style.display = 'block';
            header__cart_view_cart.style.display = 'flex';
        }
        else {
            alert("Sai tai khoan hoac mat khau");
        }
    }

});