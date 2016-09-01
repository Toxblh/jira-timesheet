'use babel';

export default class JiraTimesheetView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('jira-timesheet');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'Send you worktime!';
    message.classList.add('message');
    this.element.appendChild(message);

    var submitForm = document.createElement('form');
    var br = document.createElement('br');
    var inputUrl = document.createElement("input");
    inputUrl.setAttribute('type', 'text');
    inputUrl.setAttribute('placeholder', 'Url jira');
    submitForm.appendChild(inputUrl);
    submitForm.appendChild(br);

    var inputName = document.createElement("input");
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('placeholder', 'Username');
    submitForm.appendChild(inputName);
    submitForm.appendChild(br);

    var inputPassword = document.createElement('input');
    inputPassword.setAttribute('type', 'password');
    inputPassword.setAttribute('placeholder', 'Password');
    submitForm.appendChild(inputPassword);
    submitForm.appendChild(br);

    var inputIssue = document.createElement('input');
    inputIssue.setAttribute('type', 'text');
    inputIssue.setAttribute('placeholder', 'Issue');
    submitForm.appendChild(inputIssue);
    submitForm.appendChild(br);

    var inputTime = document.createElement('input');
    inputTime.setAttribute('type', 'text');
    inputTime.setAttribute('placeholder', 'Time');
    submitForm.appendChild(inputTime);
    submitForm.appendChild(br);

    var submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Send');
    submitForm.appendChild(submitButton);
    submitForm.appendChild(br);

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
