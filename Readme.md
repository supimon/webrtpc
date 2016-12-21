Regarding form validations for the #user-form on home page:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

1. pass the invalid input field IDs returned by the server, as an array into the function validateUserForm
2. incase the additional #data-check checkbox needs to be displayed, pass a true boolean value as the second
input to the same function.

For e.g.
validateUserForm(['inputFirstName', 'inputFamilyName'], true)

 - will display error messages besides these fields on the front end and also display the additional data check box.
 - as a quick check, you can try this in browser console.

3. The individual error messages can be edited in index.html file within the <p class="error-feedback"> under
each input.
4. For the Date of birth, even though there are 3 inputs, there is just one <p class="error-feedback"> to display
the error message.
5.



 Regarding decreasing the overall content width in the page:
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

 go to line 675 in css/styles.css. Uncomment the .container class and change the width rule value to alter
 content width



 Regarding video overlay in home page:
 - - - - - - - - - - - - - - - - - - -

 A sample video has been included in the assets folder to display HTML5 video player in the modal
 The #videoModal at line 536 in the index.html bears all the different formats that can be displayed within the modal
 These include
 1. A sample embedded Youtube video
 2. A sample embedded Vimeo video
 3. A sample HTML5 video



