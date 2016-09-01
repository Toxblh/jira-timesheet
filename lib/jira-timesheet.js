'use babel';

import JiraTimesheetView from './jira-timesheet-view';
import { CompositeDisposable } from 'atom';

export default {

  jiraTimesheetView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.jiraTimesheetView = new JiraTimesheetView(state.jiraTimesheetViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.jiraTimesheetView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'jira-timesheet:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.jiraTimesheetView.destroy();
  },

  serialize() {
    return {
      jiraTimesheetViewState: this.jiraTimesheetView.serialize()
    };
  },

  toggle() {
    console.log('JiraTimesheet was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
