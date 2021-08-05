Why Automated Testing?

Catch errors we passed over in manual testing by simulating user interactions. You will miss something when doing manual testing. Manual human labor is expensive, slow and unreliable. 

Allows you to do regression testing as your application grows over time

Types of Testing
End to end tests
- cypress
- simulates user flow thru entire site
- evaluates entire applications
- we don't care about how its implemented. we care how the user interacts with it.

integration tests
- verify single or small component group
- evaluate app systems
- react testing library

- you want a light weight code
unit tests
-low level nitty gritty tests
- test individual functions and module code
- evaluates small units of code
- jest

what do integrations tests test?
behaviors. not implementations.
if a user does this...the app should do this.
- when a user pushes a submit button the name value in that form should appear on list element
- when admin logs into a site does the admins name should appear on the navbar
- when a user enter a number into a text field an error message should appear under the form.

be specific and be physical!
try to pick actions that are edge cases and non-automatic.
think from a user's point of view
write in full sentences
try to pick actions that are edge cases and non-automatic.

? Come up with as many integration tests as possible?
 - user clicks on the logo it goes to the home page
 - hover over join pulls up the signup page, signup link takes you to sign up page
