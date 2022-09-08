'use babel';

import 101AgenSlotGacorMaxwinTerbaruDiIndonesiaView from './101-agen-slot-gacor-maxwin-terbaru-di-indonesia-view';
import { CompositeDisposable } from 'atom';

export default {

  101AgenSlotGacorMaxwinTerbaruDiIndonesiaView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.101AgenSlotGacorMaxwinTerbaruDiIndonesiaView = new 101AgenSlotGacorMaxwinTerbaruDiIndonesiaView(state.101AgenSlotGacorMaxwinTerbaruDiIndonesiaViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.101AgenSlotGacorMaxwinTerbaruDiIndonesiaView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      '101-agen-slot-gacor-maxwin-terbaru-di-indonesia:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.101AgenSlotGacorMaxwinTerbaruDiIndonesiaView.destroy();
  },

  serialize() {
    return {
      101AgenSlotGacorMaxwinTerbaruDiIndonesiaViewState: this.101AgenSlotGacorMaxwinTerbaruDiIndonesiaView.serialize()
    };
  },

  toggle() {
    console.log('101AgenSlotGacorMaxwinTerbaruDiIndonesia was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
