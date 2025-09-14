🔹 Project Description

This is a basic calculator application built using React.js. The app provides an interactive interface where users can perform standard arithmetic calculations like addition, subtraction, multiplication, division, and modulus. It mimics the look and feel of a simple digital calculator with a responsive UI.

The project demonstrates:

React components (Display, Buttons, App) for modular design

State management with React’s useState hook

Handling button clicks and updating the display dynamically

Evaluating mathematical expressions from user input

Mapping user-friendly symbols (x, ÷) into JavaScript operators (*, /)

Styling with Bootstrap and custom CSS


## 📸 Screenshot
<img width="300" height="750" alt="screenshot png" src="https://github.com/user-attachments/assets/bbefdc1b-90e6-4683-afe9-17ea96a05b29" />


🔹 Features

✅ Clear (C) button to reset input

✅ Digit buttons (0–9 and 000)

✅ Arithmetic operators (+, -, ×, ÷, %)

✅ Decimal input (.)

✅ Parentheses () support

✅ Result evaluation using =

✅ Error handling for invalid expressions

✅ Responsive design (works on desktop & mobile)

🔹 Tech Stack

Frontend: React.js, JSX

Styling: Bootstrap, CSS

Logic: JavaScript (with eval for expression evaluation)

🔹 Project Structure
src/
 ├── App.js          # Main component, handles state & logic
 ├── App.css         # Styling for calculator
 ├── components/
 │    ├── Display.js # Calculator display screen
 │    └── buttons.js # All calculator buttons

🔹 How It Works

Users click buttons → onButtonClick handler updates the display state.

Operators like x and ÷ are internally converted to * and / for evaluation.

When = is pressed, the string expression is processed and evaluated.

The result is displayed on the screen.

Invalid inputs show "Error".

🔹 Future Improvements

Replace eval() with mathjs for safer expression parsing.

Add advanced functions: square root, power, trigonometry.

Add keyboard support.

Implement dark/light mode.
