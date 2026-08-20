const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('bookingForm');
const status = document.getElementById('formStatus');

// Change this to the professional email address you create for the Viktor Sax Music domain.
const BOOKING_EMAIL = 'viktorsaxmusic@gmail.com';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = `Viktor Sax Music — ${data.get('eventType')} enquiry`;
  const body = [
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Event type: ${data.get('eventType')}`,
    `Event date: ${data.get('date')}`,
    `Location: ${data.get('location')}`,
    `Performance duration: ${data.get('duration')}`,
    '',
    'Event details:',
    data.get('message') || '(none provided)'
  ].join('\n');

  window.location.href = `mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = 'Your email app should open with the enquiry prepared.';
});
