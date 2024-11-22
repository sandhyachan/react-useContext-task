# React Shopping Cart with Context API

This project demonstrates how to build a shopping cart using **React** and **Context API**. The cart allows users to:

- View a list of products with their price, description, and image.
- Add or remove items from the cart.
- See the total quantity and subtotal of the cart.
- Automatically update the cart details when the quantity of any item changes.

## Features

- **Add/Remove Items**: Users can increase or decrease the quantity of each product.
- **Automatic Updates**: The total quantity of items and the subtotal price are automatically updated when items are added or removed from the cart.
- **Context API**: Data is managed globally using the React Context API, which allows state to be shared across components without prop-drilling.
- **Bootstrap**: Styled using **Bootstrap** to create a responsive and modern layout.

## Demo

You can view a live demo of this project in action by following the instructions below.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

You need to have **Node.js** installed on your machine. You can download it from [here](https://nodejs.org/).

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/sandhyachan/react-useContext-task.git
    ```

2. **Install dependencies**:
    ```bash
    cd contextapi
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) in your browser.


## Technologies Used

- **React**: For building the user interface and managing state.
- **Context API**: For managing global state across components.
- **Vite**: A fast development build tool for modern web projects.
- **Bootstrap**: For responsive design and UI components.
- **JavaScript (ES6+)**: For the app's functionality and logic.

## How It Works

### Initial Data Load
The product data is loaded into the state of the `ProductContext` using a `useEffect` hook, which fetches the data from a JSON file (hosted on GitHub).

### State Management
- The `data` array holds the list of products.
- Each product has a `quantity` property that is updated when the user clicks the "+" or "-" buttons.
- The `subtotal` is calculated by multiplying the price of each product by its quantity.
- The total number of items in the cart (`items`) is also updated whenever an item is added or removed.

### Reactivity
When the quantity of a product is modified, React automatically re-renders the affected components, keeping the UI and state in sync.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
