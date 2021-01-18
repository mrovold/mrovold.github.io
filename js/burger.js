function burger() {
   document.querySelector('.header__burger').addEventListener('click', () => {
      document.querySelector('.header__burger').classList.toggle('active');
      document.querySelector('.header__menu').classList.toggle('active');
      document.querySelector('body').classList.toggle('lock');
   });
   
   document.querySelector('.nav__metronome').addEventListener('click', () => {
      document.querySelector('.metronome').classList.add('active');
      document.querySelector('.countdown').classList.remove('active');
      document.querySelector('.clock').classList.remove('active');
   });
   
   document.querySelector('.nav__countdown').addEventListener('click', () => {
      document.querySelector('.countdown').classList.add('active');
      document.querySelector('.metronome').classList.remove('active');
      document.querySelector('.clock').classList.remove('active');
   });
   
   document.querySelector('.nav__clock').addEventListener('click', () => {
      document.querySelector('.clock').classList.add('active');
      document.querySelector('.countdown').classList.remove('active');
      document.querySelector('.metronome').classList.remove('active');
   });
}
burger();
