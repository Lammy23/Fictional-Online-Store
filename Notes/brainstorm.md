Phone magazine / view website

Main idea: Online store

We sell:
* phones
* laptops
* consoles


# A New Challenge.
I'll task myself with seeing how much I can replicate the given wireframe (since it's very complete).
It's about adhering to design and not going off a tangent.
Design idea: [wireframe](https://www.behance.net/gallery/195130389/Comfort-Online-Shop-Wireframe-Design)

## Taking a project management approach
* It seems we'll need a product card. I'll make that early.
* Also we'd need many other components, (like button, image holders, carousel). So I'll get to making each piece first

## State Management
Most components will have their own loading states.
Some will have their own error states or will accept it as a prop.

```javascript
if (loading) {
    return (

    )
}
```

```javascript
if (error) {
    return (

    )
}
```

There will likely be a cart context wrapping the entire app
Perhaps the search bar will need a similar context

## Styling
Styles will follow the above wireframe
Where necessary, % will be used instead of px (to automate a responsive design).


Favicons and logos to be replaced