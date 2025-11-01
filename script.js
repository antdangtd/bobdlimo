const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const yearEl = document.getElementById('year');
const aiForm = document.querySelector('.ai__form');
const aiChat = document.querySelector('.ai__chat');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  const toggleMenu = () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.setAttribute('aria-hidden', String(expanded));
  };

  navToggle.addEventListener('click', toggleMenu);
  navLinks.setAttribute('aria-hidden', 'true');

  navLinks.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      if (window.innerWidth <= 720) {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.setAttribute('aria-hidden', 'true');
      }
    })
  );
}

const createMessage = (text, type) => {
  const message = document.createElement('div');
  message.className = `ai__message ai__message--${type}`;
  message.textContent = text;
  aiChat.appendChild(message);
  aiChat.scrollTop = aiChat.scrollHeight;
};

const aiResponses = [
  'Got it! I\'m checking availability for your route right now.',
  'A dispatcher is reviewing your itinerary – expect a confirmation within minutes.',
  'Would you like bottled water, charging cables, or a preferred chauffeur? Just let me know.',
  'Flights are monitored automatically. We adjust pickup times for delays at no cost.'
];

if (aiForm && aiChat) {
  aiForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(aiForm);
    const pickup = formData.get('pickup');
    const dropoff = formData.get('dropoff');
    const datetime = formData.get('datetime');
    const passengers = formData.get('passengers');

    const userSummary = `Ride request: ${pickup} to ${dropoff} on ${new Date(datetime).toLocaleString()} for ${passengers} passenger(s).`;
    createMessage(userSummary, 'user');

    setTimeout(() => {
      const response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      createMessage(response, 'bot');
    }, 600);

    aiForm.reset();
  });
}
