
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.getElementById('closeBtn');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');
const signupLink = document.getElementById('signupLink');

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  loginModal.setAttribute('aria-hidden', 'false');
});

closeBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
  document.body.style.overflow = 'auto';
  loginModal.setAttribute('aria-hidden', 'true');
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    loginModal.setAttribute('aria-hidden', 'true');
  }
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    alert('Login successful!');
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    loginForm.reset();
    loginModal.setAttribute('aria-hidden', 'true');
  } else {
    alert('Please fill in all fields');
  }
});

signupLink.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Sign up feature coming soon!');
});
