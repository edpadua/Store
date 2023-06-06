# Store

<h1>
    <a href=""><img src="public/store-capture.gif"></a>
</h1>

# Summary

- [About](#about)
- [Demo](#-demo)
- [Technologies](#technologies)
- [Setup](#setup)
- [License](#license)
- [Contact](#contact)
 
## About

This project consists of a part of the functionalities of a virtual store, more specifically, list of products, categories and shopping cart. The store's product categories are shown on the home page, the user clicks on one of the options and opens the page with the list of products in that category, in each of which there is the option to like the product and add it to the shopping cart. In the navigation bar there is a search field where the list of products will be filtered according to the keyword typed, beside a cart icon that, when clicked, will take the user to the shopping cart page with the products already added. In the shopping cart, a list of all products added is shown, with the possibility of changing the quantity of each item, at the bottom of the page, the subtotal is shown with the sum of the prices of all products and, just below, a button to complete the purchase, which in this example resets the shopping cart.

The main objective of this project is the use of Redux (react-redux) to manage global states, implement the Redux Thunk middleware which is also part of the library and is used to take the responsibility of asynchronous calls from the components. Another fundamental library in this application is the json-server to create a .json file, which will imitate a server with categories and products to be consumed as a REST API by the other Axios library. Among other libraries and technologies used are react-multi-carousel to display the product list, react-hook-form on the new product registration page and the styles part with Sass.

### Screeshot - Homepage

![image](https://github.com/edpadua/Store/assets/4975360/19bea32e-bb84-477f-9937-11058150680e)

### Screeshot - Category

![image](https://github.com/edpadua/Store/assets/4975360/0d0c1a9e-b27e-4c88-8cb4-fd93ee0ed3e6)

### Screeshot - Shop Cart

![image](https://github.com/edpadua/Store/assets/4975360/a96bb182-cc1a-4d12-9024-4dbe7fbb809b)


### Technologies

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev/guide/)
- [Redux](https://www.npmjs.com/package/react-redux))
- [JSON Server](https://www.npmjs.com/package/json-server)
- [Axios](https://www.npmjs.com/package/axios)
- [React Mult Carousel](https://www.npmjs.com/package/react-multi-carousel)
- [React Router](https://www.npmjs.com/package/react-router-dom)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Hook Form](https://www.npmjs.com/package/react-hook-form)

## Setup

```bash
git clone https://github.com/edpadua/Store

cd todolist
npm i
npm run dev
```


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


## Contact

Eduardo de Pádua: ed.padua@gmail.com

Project Link: [https://github.com/edpadua/Store/](https://github.com/edpadua/Store) 
