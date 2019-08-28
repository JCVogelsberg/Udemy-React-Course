// CSS Modules
// -----------------------------------

   Resources:
//
//   CSS Modules Documentation:
//   github.com/css-modules/css-modules
//
//   Using CSS Modules in create-react-app projects: 
//   medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2

// -------------------------------------------------------
//
//  CSS Modules TL;DR
//   CSS Modules auto-generates a unique hash key on the class name, so even if two elements
//   have the same class name on them, their styles will only affect them
//
// -------------------------------------------------------

- CSS Modules are a relatively new concept 

- With CSS modules, you can write normal CSS code and make sure, that it only applies to a 
given component.

- It automatically generates unique CSS classNames for you. 

- The imported JS object simply exposes some properties which hold the generated CSS class names 
as values.

// -----------------------------------

- Access as properties on a class:

EX:
  // In Post.css File
  .Post {
    color: red;
  }


  // In Post Component File
  import classes from './Post.css';
   
  const post = () => (
    <div className={classes.Post}>
      ...
    </div>
  );

//////

- Here, "classes.Post" refers to an auto-generated "Post" property on the imported classes object.

- That property will in the end simply hold a value like "Post__Post__ah5_1".

- So your ".Post" class was auto-transformed to a different class ("Post__Post__ah5_1") which is
 unique across the app. 

- You can only access it through the classes object.

- You can't use it accidentally in other components because you don't know the generated 
string!  

- If you import the CSS file (in the same way) in another component, the classes  object there 
will hold a "Post" property which yields a different (!) CSS class name. 

... Hence it's scoped to a given component.               '///


// -----------------------------------


- If you want to define a global (ie un-transformed) CSS class in such a .css file, you can 
prefix the selector with ":global".

EX:
  :global .Post { ... } 

- Now you can use className="Post" anywhere in your app & receive that styling.




By the way, if you somehow also want to define a global (i.e. un-transformed) CSS class in such a .css  file, you can prefix the selector with :global .