'use babel';

import 101AgenSlotGacorMaxwinTerbaruDiIndonesia from '../lib/101-agen-slot-gacor-maxwin-terbaru-di-indonesia';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('101AgenSlotGacorMaxwinTerbaruDiIndonesia', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('101-agen-slot-gacor-maxwin-terbaru-di-indonesia');
  });

  describe('when the 101-agen-slot-gacor-maxwin-terbaru-di-indonesia:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.101-agen-slot-gacor-maxwin-terbaru-di-indonesia')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '101-agen-slot-gacor-maxwin-terbaru-di-indonesia:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.101-agen-slot-gacor-maxwin-terbaru-di-indonesia')).toExist();

        let 101AgenSlotGacorMaxwinTerbaruDiIndonesiaElement = workspaceElement.querySelector('.101-agen-slot-gacor-maxwin-terbaru-di-indonesia');
        expect(101AgenSlotGacorMaxwinTerbaruDiIndonesiaElement).toExist();

        let 101AgenSlotGacorMaxwinTerbaruDiIndonesiaPanel = atom.workspace.panelForItem(101AgenSlotGacorMaxwinTerbaruDiIndonesiaElement);
        expect(101AgenSlotGacorMaxwinTerbaruDiIndonesiaPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, '101-agen-slot-gacor-maxwin-terbaru-di-indonesia:toggle');
        expect(101AgenSlotGacorMaxwinTerbaruDiIndonesiaPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.101-agen-slot-gacor-maxwin-terbaru-di-indonesia')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '101-agen-slot-gacor-maxwin-terbaru-di-indonesia:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let 101AgenSlotGacorMaxwinTerbaruDiIndonesiaElement = workspaceElement.querySelector('.101-agen-slot-gacor-maxwin-terbaru-di-indonesia');
        expect(101AgenSlotGacorMaxwinTerbaruDiIndonesiaElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, '101-agen-slot-gacor-maxwin-terbaru-di-indonesia:toggle');
        expect(101AgenSlotGacorMaxwinTerbaruDiIndonesiaElement).not.toBeVisible();
      });
    });
  });
});
