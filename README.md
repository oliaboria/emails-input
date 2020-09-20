# emails-input

This package contains smart emails input. It's possible to use it in any form or independently.
Email block can be created by pressing Enter, entering comma, or by losing focus on the
input field.

## Installation

The package should be installed as one of your project's `dependencies` via direct github link:

```bash
npm install https://github.com/oliaboria/emails-input/tarball/dist
```

## Usage

```HTML
<div id="emails-input"></div>
```

```javascript
import EmailsInput from 'emails-input';

const container = document.getElementById('emails-input');
const emailsInput = new EmailsInput(container);
```

## API

`addEmail(email: string): void` creates validated email block for given email string.

```javascript
emailsInput.addEmail('hanna@email.com');
```

`getEmailsCount(): number` eturns amount of both valid and invalid emails.

```javascript
emailsInput.getEmailsCount()
```
