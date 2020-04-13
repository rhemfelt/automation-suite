#Instillation
To install globally with node, simply run:
`npm install -g testcafe`

#Run basic tests
In /tests folder in your terminal, simply run commands following this format

`testcafe browser testfile.js`

Ex: To run the contact pages test suite in chrome, run the following the following in the /tests folder in your terminal:

```
testcafe chrome contact-page.js

```

Run an entire folder of test files with one command:

From above the /tests folder, run:
```
testcafe firefox tests/
```
Run 1 specific test from testfile:

```
testcafe safari -t Verify Page Buttons"
```