# iOS-Style Calculator

A sleek, responsive calculator web application that mimics the iOS calculator design with modern features and smooth animations.

![Calculator Preview](https://via.placeholder.com/400x600/000/fff?text=Calculator+Preview)

## 🚀 Features

### Core Functionality

- ✅ **Basic Operations**: Addition, subtraction, multiplication, division
- ✅ **Advanced Functions**: Percentage calculations, plus/minus toggle
- ✅ **Decimal Support**: Full decimal number calculations
- ✅ **Keyboard Support**: Use your keyboard for all operations
- ✅ **Clear & Backspace**: C button clears all, backspace removes last digit

### Design & UI

- 🎨 **iOS-Inspired Design**: Authentic iOS calculator look and feel
- 📱 **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- 🌙 **Dark Theme**: Clean black theme with orange accent colors
- ✨ **Smooth Animations**: Button hover effects and transitions
- 🔄 **Real-time Updates**: Instant calculation results

### Developer Contact Feature

- 👤 **Profile Button**: Circular profile button in top-right corner
- 💬 **Typing Animation**: "Hey! This is the developer here" with typewriter effect
- 🖱️ **Hover Interaction**: Changes to "Click here!" on hover
- 🔗 **Social Media Modal**: Connect via GitHub, LinkedIn, Instagram, Email
- 📱 **Mobile Optimized**: Contact feature works seamlessly on all devices

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **Vanilla JavaScript**: Pure JS with ES6+ features, no frameworks
- **SVG Icons**: Scalable social media icons
- **Responsive Design**: Mobile-first approach with CSS media queries

## 📁 Project Structure

```
calculator/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Calculator logic and interactions
├── profile.png         # Developer profile image
└── README.md           # This documentation
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. **Clone or download** the project files
2. **Add your profile image** as `profile.png` in the calculator folder
3. **Update social media links** in `index.html` (lines 20-47)
4. **Open `index.html`** in your web browser

### Customization

1. **Profile Image**: Replace `profile.png` with your photo
2. **Social Links**: Update URLs in the modal section
3. **Colors**: Modify CSS variables for different themes
4. **Contact Message**: Change tooltip text in `script.js`

## 🎯 Usage

### Calculator Operations

- **Numbers**: Click number buttons or use keyboard (0-9)
- **Operations**: Click operator buttons or use keyboard (+, -, \*, /)
- **Equals**: Click = button or press Enter
- **Clear**: Click C button or press Escape
- **Backspace**: Click ⌫ button or press Backspace
- **Decimal**: Click . button or press period key
- **Percentage**: Click % button or press % key

### Developer Contact

- **View Profile**: Profile button always visible in top-right
- **See Message**: Animated typing effect shows developer message
- **Hover**: Message changes to "Click here!" when hovering profile
- **Connect**: Click profile to open social media links modal
- **Close Modal**: Click X, press Escape, or click outside modal

## 📱 Responsive Breakpoints

- **Mobile**: < 480px - Compact layout with smaller buttons
- **Tablet**: 480px - 768px - Medium-sized calculator
- **Desktop**: > 768px - Full-size calculator with larger buttons

## 🎨 Color Scheme

- **Background**: Pure black (#000)
- **Calculator Body**: Black with subtle border (#333)
- **Number Buttons**: Dark gray (#333)
- **Function Buttons**: Light gray (#a6a6a6)
- **Operator Buttons**: Orange (#ff9500)
- **Text**: White (#fff)
- **Accent**: Orange (#ff9500)

## 🔧 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Code Highlights

### Responsive Design

```css
/* Mobile-first approach */
.calculator {
  width: 90vw;
  max-width: 300px;
}

@media (min-width: 600px) {
  .calculator {
    width: 320px;
  }
}
```

### Typing Animation

```javascript
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
}
```

### Calculator Logic

```javascript
performCalculation(operator, firstOperand, secondOperand) {
  switch (operator) {
    case "add": return firstOperand + secondOperand;
    case "subtract": return firstOperand - secondOperand;
    case "multiply": return firstOperand * secondOperand;
    case "divide": return secondOperand !== 0 ? firstOperand / secondOperand : 0;
  }
}
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Abhieshek**

- GitHub: [@abhieshek11](https://github.com/abhieshek11)
- LinkedIn: [@abhieshek11](https://www.linkedin.com/in/abhieshek11/)
- Instagram: [@abhisk02](https://www.instagram.com/abhisk02/)
- Email: abhieshek11@gmail.com

## 🙏 Acknowledgments

- Inspired by iOS Calculator design
- Icons from custom SVG implementations
- Responsive design patterns from modern web standards

---

⭐ **Star this repo if you found it helpful!**
