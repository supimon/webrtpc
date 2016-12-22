Regarding form validations for the #user-form on home page:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

1. pass the invalid input field IDs returned by the server, as an array into the function validateUserForm
2. incase the additional #data-check checkbox needs to be displayed, pass a true boolean value as the second input to the same function.

For e.g.

validateUserForm(['inputFirstName', 'inputFamilyName'], true)

 - will display error messages besides these fields on the front end and also display the additional data check box.
 - as a quick check, you can try this in browser console.

3. The individual error messages can be edited in index.html file within the p class="error-feedback" under each input.
4. For the Date of birth, even though there are 3 inputs, there is just one p class="error-feedback" to display the error message.
5. For postal code, there are 2 error feedback tags
  - p class="error-code-feedback" for mobile screens (line 146 in index.html)
  - p class="error-feedback" for larger screens (line 152 in index.html)
  and therefore the messages need to be duplicated in both of them.
6. Forms are validated only for the required attribute. Since it was already mentioned that the fields will be
validated at server end, the type validation is omitted from the frontend.



Regarding decreasing the overall content width in the page:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

go to line 675 in css/styles.css. Uncomment the .container class and change the width rule value to alter content width



Regarding video overlay in home page:
- - - - - - - - - - - - - - - - - - -

1. A sample video has been included in the assets folder to display HTML5 video player in the modal
2. The #videoModal at line 536 in the index.html bears all the different formats that can be displayed within the modal
 These include
 - A sample embedded Youtube video
 - A sample embedded Vimeo video
 - A sample HTML5 video


Testing reports:
- - - - - - - - -

The pages have been tested on the following devices/OS/browsers:

1. iPhone 4S to 7Plus / iOS version 5.1 to 10 / Mobile Safari and Chrome
2. iPad Pro, iPad Air2, iPad Air, iPad Mini3, iPad Mini2 / iOS version 7 to 10 / Mobile Safari and Chrome
3. Galaxy S5 to S7 / Android version 4.4 to 6 / Android Browser and Chrome
4. Galaxy Note3, Galaxy Note4, Galaxy Tab4, Pixel XL, Pixel, Nexus 6P, Nexus 5X, Nexus 6, Nexus 9 Tablet, Nexus 7 Tablet, Moto X 2nd Gen, Moto G 2nd Gen, HTC One M8 / Android version 4.4 to 7.1 / Android Browser and Chrome
5. Nokia Lumia 930 / Windows Phone OS 8.1 / Native Browser
6. Windows OS 8.1 and Windows 10 / IE 11, IE edge, Chrome(latest), Firefox(latest), Opera(latest)
7. Mac OS Yosemite, Sierra, El Capitan / Safari 8 to 10, Chrome(latest), Firefox(latest), Opera(latest)
