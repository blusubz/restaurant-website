import reservationImg from './assests/reservar-pic-asset.jpg';

export function loadcontact() {
    const parentDiv = document.getElementById('content');
    const reservar = document.createElement('img');
    const contactarHeader = document.createElement('h1');
    const reservarHeader = document.createElement('h2');

    contactarHeader.textContent = 'Contactar';
    reservarHeader.textContent = 'Reservar';
    parentDiv.appendChild(contactarHeader);
    parentDiv.appendChild(reservarHeader);
}