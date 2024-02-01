const appointmentBtn = document.querySelector('#appointment-btn')
const contactSection = document.querySelector('#contact-section')

appointmentBtn.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' })
})