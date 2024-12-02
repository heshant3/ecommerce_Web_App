# E-commerce React Web App

This is a fully functional eCommerce web application built with **React**. It allows users to browse and purchase products online, featuring a responsive design, smooth user experience, and several additional features for a more dynamic shopping experience.

<p align="center">
  <img src="https://github.com/heshant3/ecommerce_Web_App/blob/c440f0ec399f69561366e9d8eeeb8ca134a986ce/1202%20(1).gif" alt="eCommerce Web App" style="max-width: 100%;">
</p>
<p align="center">
  <noscript>Image....</noscript>
</p>



## Features

- **Product Listing**: Display a list of products with images, descriptions, and prices.
- **Add to Cart**: Ability to add products to the cart and view the cart.
- **Popup Modal**: View detailed product information in a modal when clicked.
- **Responsive Design**: The app adapts to both desktop and mobile screens.
- **Form Validation**: Uses **Formik** and **Yup** for form validation (e.g., checkout, login).
- **Local Storage**: Persists the shopping cart and user authentication state across page reloads.
- **Error Handling**: Includes basic error handling and validation feedback for forms and actions.
- **Cart Management**: Modify product quantities in the cart.
- **Simple Checkout Flow**: Ready for integration with payment systems (Stripe, PayPal, etc.).

## Tech Stack

- **Frontend**: React.js, React Router, Formik, Yup, CSS Modules, JavaScript
- **State Management**: React `useState`, `useContext`, and local storage
- **CSS**: CSS Modules for scoped styling
- **Build Tool**: Create React App

## Installation and Setup

### 1. Clone the repository

Clone the repository to your local machine using Git.

```bash
git clone https://github.com/yourusername/ecommerce-react-webapp.git
```

### 2. Install dependencies

Navigate to the project folder and install the necessary dependencies using npm or yarn.

```bash
cd ecommerce-react-webapp
npm install
```
or if you use yarn:
```bash
cd ecommerce-react-webapp
yarn install
```

### 3. Run the application locally

Once the dependencies are installed, you can start the development server:

```bash
npm start
```

or if you use yarn:
```bash
yarn start
```

This will run the app on `http://localhost:3000`. You can open this URL in your browser to see the app in action.

### 4. Build the application

To create a production build of the app, use the following command:

```bash
npm run build
```

This will generate an optimized version of your app in the `build` folder, which you can deploy to any static hosting service like GitHub Pages, Netlify, or Vercel.

## Usage

- **Browse Products**: Browse the catalog and click on product cards to view detailed information.
- **Add to Cart**: Add products to the cart by clicking the product image or "Add to Cart" button.
- **View Cart**: Access the shopping cart to modify quantities, remove items, or proceed to checkout.
- **Checkout**: Form validation ensures that users input valid data when completing the checkout form.

## Design Decisions

- **Formik & Yup**: The app uses **Formik** for handling form state and **Yup** for schema-based validation, ensuring that the forms are filled out correctly and providing clear error messages.
- **State Management**: The app uses **localStorage** to persist the shopping cart and user authentication state across page reloads, offering a more persistent experience.
- **Component Structure**: The app is built using reusable components to maintain a scalable and clean codebase (e.g., `ProductCard`, `CartModal`, `ProductList`, `Navbar`).
- **Styling**: CSS Modules ensure that styles are scoped to individual components, preventing global style conflicts.
- **Responsive Design**: The app is built with a mobile-first approach and utilizes media queries to adjust the layout for different screen sizes.

## Special Features

- **Popup Cart**: Clicking on a product image or "View Details" opens a modal displaying more product information, including price, description, and availability.
- **Local Storage**: Cart contents and user login states are saved in **localStorage**, so your cart persists even when the page is reloaded.
- **Formik & Yup Validation**: The checkout form uses **Formik** for managing form state and **Yup** for validation, providing immediate feedback to users when validation fails.
- **Error Handling**: Basic error handling and feedback are included for actions like form submission, login, and cart updates.
  
## Deployment

The app can be deployed using services like [GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/), or [Vercel](https://vercel.com/).

### GitHub Pages Deployment

1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Update your `package.json` file with the following:
   ```json
   "homepage": "http://yourusername.github.io/ecommerce-react-webapp",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Contributing

Feel free to contribute to this project by opening an issue or submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the React community and Formik for making form handling easier.
- Special thanks to the open-source libraries that make this project possible, like React, Create React App, and Yup.

---

### Additional Notes

- **Formik & Yup**: These libraries provide form management and validation. Formik handles form state, while Yup provides schema-based validation to ensure that all user inputs are correct. You'll see validation feedback, such as error messages for invalid input, when filling out the forms (e.g., checkout).
  
- **Local Storage**: The cart's state and user authentication are stored in **localStorage**, ensuring that users don’t lose their cart contents if they refresh the page.

---
