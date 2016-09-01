'use babel';

export default class JiraTimesheetView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('jira-timesheet');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The JiraTimesheet package is Alie!';
    message.classList.add('message');
    this.element.appendChild(message);

    var submitForm = document.createElement('form');

    var inputName = document.createElement("input");
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('placeholder', 'Username');
    submitForm.appendChild(inputName);

    var inputPassword = document.createElement('input');
    inputPassword.setAttribute('type', 'password');
    inputPassword.setAttribute('placeholder', 'Password');
    submitForm.appendChild(inputPassword);

    var inputIssue = document.createElement('input');
    inputIssue.setAttribute('type', 'text');
    inputIssue.setAttribute('placeholder', 'Issue');
    submitForm.appendChild(inputIssue);

    var submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Send');
    submitForm.appendChild(submitButton);

    this.element.appendChild(submitForm);

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
