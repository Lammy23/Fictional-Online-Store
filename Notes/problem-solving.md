How to generate lipsum?

### Why is imageURL not working?
- The imageURL in your ProductCard component is currently hardcoded to "../images/camera-photo.jpg". This path is relative to the current file, but when your app is built, the structure of your project changes and this path may no longer be correct.
- Instead, you should import the image directly in your JavaScript file. This will ensure that the image is included in the build and the correct path is used. Here's how you can do it

### The Carousel Issue
I ended up using the Swiper React Library and this [YT Video](https://www.youtube.com/watch?v=OtqxDT0IlHI)

# TODO
* Add bouncing/colorful like buttons
* Generate doc comments for each component
* Carousel will have a state variable that it will map to product cards. The variable will stand for 'featured' items