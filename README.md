# NorImmo

## "Développeur Web et Web Mobile" - week 7 project

A project in order to learn Bootstrap4 and DOM manipulation with JS.

### Background: 
	NorImmo is the leader in the construction and renovation of single-family homes in Normandy, France.
    This company wants to upgrade its website with new features.

### Functional specifications :
    - At home page, add a slider including an image and a description of houses. User is able to scroll through images with buttons.
    - A faq page where user sees only the questions and clicks on them to read the answer. When user clicks again on question then answer box disappears.
    - An other page with a contact form including :
        . Lastname : between 2 and 50 letters (no digits allowed),
        . Firstname : between 2 and 50 letters (no digits allowed),
        . Phone number : french format checked via a regex,
        . Subject : (quotation, information or complaint),
        . Message : 400 letters max. The number of remaining characters is shown in real-time under the text area.
                    The text must not contain the words : sexe, sex, con, connard.
                    If the message is valid, input field becomes green else red ; and an error message is displayed (with JS only not CSS).
    - A page that enables client to calculate the cost of their construction or renovation's project.
      Via a form, client can input:
        . Area (m²),
        . Number of bedrooms,
        . Building material (wood, concrete blocks, brick).
      Cost calculation process : 10 000/m² + 10 000 (for each bedroom) + material cost (concrete blocks : 20% of total price, brik : 30%, wood : 15%).

### Technical specifications :
    - HTML5,
    - Use of a BoilderPlate ,
    - CSS3,
    - Bootstrap4,
    - Javascript ES6.
    