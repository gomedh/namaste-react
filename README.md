# namaste-react

# Parcel
- HMR = Hot Module Replacement (For refereshing the host when the code change) uses File watching alog (C++)
- Caching = FOr faster builds
- Image Optimisation
- Differential bundling  = support for older browsers
- Error Handling
- HTTPs
- Compress
- Bundling
- Tree Shaking



# Routing in Web Application
- Client side routing - eg SPA
- Server side routing - gets html from server and refreshes whole page


# Redux toolkit
- Toolkit is different which makes the redux easier to use and covers the drawbacks of the redux
- It is a global store which is a very big object
- We use slices to avoid getting the object too large and complex
- Different types of slices for different functionality like cart slice
- Info about theme, colors, can be stored in different slice
- We cant directly modify the slice,have to dispatch the action

-  Flow example to write data
    click menu add button -> dispatch (action) -> call the function (reducer function)-> modify the cart internally.

- The function is known as reducer function

- Flow example to read data from store
    - We use selector to read the data from the store and this selector will modify the react component.

    - This is known as Subscibing to the store rg cart component is subscribed to the store using selector - it is a hook inside the react

    - click add button -> dispatch (action) -> call the function (reducer function) -> modify the sto

- Steps to follow

    - Install Libraries - @reduxjs/toolkit and react-redux
    - Build own store
    - Connect our store to app 
    - Create a slice(cart) to add items to the cart
    - Disaptch action 
    - Read data using selector
    - 



