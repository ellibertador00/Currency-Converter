# Currency Converter Project

This project is a **Currency Converter** web application built using **React**, **Axios**, and **Tailwind CSS**. It allows users to convert an amount between different currencies in real-time by fetching live exchange rates from the ExchangeRate API.

## Features

- **Real-time Conversion**: Converts currencies dynamically using live exchange rates.
- **User-friendly Interface**: Simple and intuitive interface built with React components.
- **Swap Functionality**: Quickly swap the "From" and "To" currencies.
- **Input Validation**: Ensures valid amounts are entered for conversion.
- **Notifications**: Displays error messages when necessary.

---

## Project Structure

The root directory contains the main project files and folders:

```
currency-converter/
├── node_modules/          # Dependencies
├── public/                # Static assets (e.g., index.html)
├── src/                   # Source code
│   ├── components/        # Reusable components
│   │   ├── AmountInput.jsx       # Input component for amount
│   │   ├── ConversionResult.jsx  # Component to display the result
│   │   ├── CurrencySelector.jsx  # Dropdown selectors for currencies
│   │   ├── Notification.jsx      # Notification component for errors
│   ├── App.css            # Global styles
│   ├── App.jsx            # Main application file
│   ├── CurrencyConverter.jsx  # Core component for conversion logic
│   ├── index.css          # Tailwind CSS imports
│   ├── main.jsx           # React DOM rendering
├── .gitignore             # Git ignored files
├── index.html             # HTML template
├── package.json           # Project metadata and dependencies
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation (this file)
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
```

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## How to Use

1. Select the currencies you want to convert from and to using the dropdown menus.
2. Enter the amount you want to convert.
3. Click the **Convert** button to fetch and display the converted amount.
4. Optionally, click the **Swap** button to exchange the "From" and "To" currencies.

---

## Dependencies

- **React**: Frontend library for building the UI.
- **Axios**: For fetching live exchange rates from the ExchangeRate API.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool for fast development.

---

## Components

### CurrencyConverter.jsx

The main component that handles:

- Fetching live exchange rates.
- Storing state for currencies, amount, and conversion results.
- Handling the "Convert" and "Swap" functionalities.

### Reusable Components

- **AmountInput**: For entering the amount to be converted.
- **ConversionResult**: Displays the converted amount.
- **CurrencySelector**: Dropdowns for selecting currencies.
- **Notification**: Displays error messages.

---

## API Used

The project uses the [ExchangeRate API](https://www.exchangerate-api.com/) for live currency conversion rates. Replace `631d5c8ce4c79a6097116ce4` in the API URL with your own API key if needed:

```javascript
https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD
```

---

## Future Enhancements

- Add support for historical exchange rate data.
- Implement a graph to visualize currency trends.
- Add multi-language support.
- Improve accessibility features.

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the license terms.

---

## Author

**Fitsum Geremew**  
A passionate developer building intuitive and efficient web applications.

---

Happy coding!
