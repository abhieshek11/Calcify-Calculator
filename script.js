class Calculator {
  constructor() {
    this.display = document.querySelector(".result");
    this.buttons = document.querySelector(".buttons");
    this.currentInput = "0";
    this.previousInput = "";
    this.operator = null;
    this.waitingForOperand = false;
    this.lastOperator = null;

    this.updateDisplay();
    this.bindEvents();
  }

  bindEvents() {
    this.buttons.addEventListener("click", (e) => {
      if (!e.target.matches("button")) return;

      const button = e.target;
      const action = button.dataset.action;
      const number = button.dataset.number;

      if (number !== undefined) {
        this.inputNumber(number);
      } else if (action) {
        this.performAction(action);
      }
    });

    // Keyboard support
    document.addEventListener("keydown", (e) => {
      this.handleKeyboard(e);
    });
  }

  inputNumber(num) {
    if (this.waitingForOperand) {
      this.currentInput = num;
      this.waitingForOperand = false;
    } else {
      this.currentInput =
        this.currentInput === "0" ? num : this.currentInput + num;
    }
    this.updateDisplay();
  }

  performAction(action) {
    const current = parseFloat(this.currentInput);

    switch (action) {
      case "clear":
        this.clear();
        break;
      case "backspace":
        this.backspace();
        break;
      case "percent":
        this.currentInput = String(current / 100);
        this.updateDisplay();
        break;
      case "plus-minus":
        this.currentInput = String(current * -1);
        this.updateDisplay();
        break;
      case "decimal":
        this.inputDecimal();
        break;
      case "add":
      case "subtract":
      case "multiply":
      case "divide":
        this.inputOperator(action);
        break;
      case "equals":
        this.calculate();
        break;
    }
  }

  clear() {
    this.currentInput = "0";
    this.previousInput = "";
    this.operator = null;
    this.waitingForOperand = false;
    this.updateDisplay();
    this.clearOperatorHighlight();
  }

  backspace() {
    if (this.currentInput.length > 1) {
      this.currentInput = this.currentInput.slice(0, -1);
    } else {
      this.currentInput = "0";
    }
    this.updateDisplay();
  }

  inputDecimal() {
    if (this.waitingForOperand) {
      this.currentInput = "0.";
      this.waitingForOperand = false;
    } else if (this.currentInput.indexOf(".") === -1) {
      this.currentInput += ".";
    }
    this.updateDisplay();
  }

  inputOperator(nextOperator) {
    const inputValue = parseFloat(this.currentInput);

    if (this.previousInput === "") {
      this.previousInput = inputValue;
    } else if (this.operator) {
      const currentValue = this.previousInput || 0;
      const newValue = this.performCalculation(
        this.operator,
        currentValue,
        inputValue
      );

      this.currentInput = String(newValue);
      this.previousInput = newValue;
      this.updateDisplay();
    }

    this.waitingForOperand = true;
    this.operator = nextOperator;
    this.lastOperator = nextOperator;
    this.highlightOperator(nextOperator);
  }

  calculate() {
    const inputValue = parseFloat(this.currentInput);

    if (this.previousInput !== "" && this.operator) {
      const newValue = this.performCalculation(
        this.operator,
        this.previousInput,
        inputValue
      );
      this.currentInput = String(newValue);
      this.previousInput = "";
      this.operator = null;
      this.waitingForOperand = true;
      this.updateDisplay();
      this.clearOperatorHighlight();
    }
  }

  performCalculation(operator, firstOperand, secondOperand) {
    switch (operator) {
      case "add":
        return firstOperand + secondOperand;
      case "subtract":
        return firstOperand - secondOperand;
      case "multiply":
        return firstOperand * secondOperand;
      case "divide":
        return secondOperand !== 0 ? firstOperand / secondOperand : 0;
      default:
        return secondOperand;
    }
  }

  updateDisplay() {
    let displayValue = this.currentInput;

    // Format large numbers
    if (displayValue.length > 9) {
      const num = parseFloat(displayValue);
      if (num >= 1e9) {
        displayValue = num.toExponential(2);
      } else {
        displayValue = displayValue.substring(0, 9);
      }
    }

    this.display.textContent = displayValue;
  }

  highlightOperator(operator) {
    this.clearOperatorHighlight();
    const operatorButton = document.querySelector(
      `[data-action="${operator}"]`
    );
    if (operatorButton) {
      operatorButton.classList.add("active");
    }
  }

  clearOperatorHighlight() {
    const activeOperator = document.querySelector(".operator.active");
    if (activeOperator) {
      activeOperator.classList.remove("active");
    }
  }

  handleKeyboard(e) {
    const key = e.key;

    if (key >= "0" && key <= "9") {
      this.inputNumber(key);
    } else if (key === ".") {
      this.inputDecimal();
    } else if (key === "+") {
      this.inputOperator("add");
    } else if (key === "-") {
      this.inputOperator("subtract");
    } else if (key === "*") {
      this.inputOperator("multiply");
    } else if (key === "/") {
      e.preventDefault();
      this.inputOperator("divide");
    } else if (key === "Enter" || key === "=") {
      this.calculate();
    } else if (key === "Escape" || key === "c" || key === "C") {
      this.clear();
    } else if (key === "Backspace") {
      this.backspace();
    } else if (key === "%") {
      this.performAction("percent");
    }
  }
}

// Initialize calculator when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new Calculator();
  initContactButton();
});

// Contact Button Functionality
function initContactButton() {
  const contactBtn = document.getElementById("contactBtn");
  const contactTooltip = document.getElementById("contactTooltip");
  const socialModal = document.getElementById("socialModal");
  const closeBtn = document.getElementById("closeBtn");

  // Check if elements exist
  if (!contactBtn || !contactTooltip || !socialModal || !closeBtn) {
    console.error("Contact button elements not found");
    return;
  }

  // Get the profile image specifically
  const contactPhoto = contactBtn.querySelector(".contact-photo");

  // Typing effect function
  function typeText(element, text, speed = 100) {
    element.textContent = "";
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return timer;
  }

  // Set initial tooltip text with typing effect
  let currentTypingTimer = null;
  typeText(contactTooltip, "Hey! This is the developer here", 80);

  // Hover effects for tooltip - only on profile image
  contactPhoto.addEventListener("mouseenter", () => {
    if (currentTypingTimer) clearInterval(currentTypingTimer);
    contactTooltip.textContent = "Click here!";
  });

  contactPhoto.addEventListener("mouseleave", () => {
    if (currentTypingTimer) clearInterval(currentTypingTimer);
    currentTypingTimer = typeText(
      contactTooltip,
      "Hey! This is the developer here",
      80
    );
  });

  // Click to open modal
  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    socialModal.style.display = "block";
    document.body.style.overflow = "hidden";
    console.log("Contact button clicked - modal opened");
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    socialModal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Close modal when clicking outside
  socialModal.addEventListener("click", (e) => {
    if (e.target === socialModal) {
      socialModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && socialModal.style.display === "block") {
      socialModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  console.log("Contact button initialized successfully");
}
