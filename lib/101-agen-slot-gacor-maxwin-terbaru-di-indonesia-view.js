'use babel';

export default class 101AgenSlotGacorMaxwinTerbaruDiIndonesiaView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('101-agen-slot-gacor-maxwin-terbaru-di-indonesia');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The 101AgenSlotGacorMaxwinTerbaruDiIndonesia package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
