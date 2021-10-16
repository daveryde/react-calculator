# GoSchoolBox Technical Exercise (React)
<p>
  <p>
    For this task, a fully functional calculator was built in React JS.
  </p>

  <p>
    The minimum requirements for the calculator are listed as follows:
  </p>

  - Support for basic operators (Addition, Subtraction, Multiplication, and Division)
  - Support decimal arithmetic
  - Be composed of at least 3 distinct React components
  - Cannot use built-in Javascript functions like <code>eval()</code> that would oversimplify the solution

  <p>Additional ideas to implement include, but are not limited to:</p>

  - Supporting additional functions (Square root, exponents, factorial, etc).
  - Supporting PEMDAS for equations with more than two operands.
  - Comprehensive edge case handling for potential user inputs
  - A strong, object-oriented, React component design that makes the
logical flow of your coding implementation clear and easy to follow

<!-- ABOUT THE PROJECT -->
## About The Project

### Specification

1. The calculator should be intuitive to use.
2. React component state should be properly updated according to best practices.
3. Arithmetic updates should be handled in a way such taht someone reviewing the implementation
 for the first time can quickly understand the gist of the implementation.

### Screenshots

![Product Screen Shot - original][product-screenshot-original]

![Product Screen Shot - expanded][product-screenshot-expanded]

### Notes

- Enum mappings for colors are provided in src/components/CalculatorInternal.jsx.
- The styled-components library is included in the package.json file.
- UI inspiration [product-ui-mock]
<br />


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Installation

1. Clone the repo
```sh
git clone https://github.com/daveryde/react-calculator.git
```
2. In the root directory of the repo, install NPM packages
```sh
npm install
```
3. In the project directory, you can run:
```sh
npm start
```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot-original]: public/original.png
[product-screenshot-expanded]: public/expanded.png
[product-ui-mock]: https://www.uplabs.com/posts/calculator-animation-icons
