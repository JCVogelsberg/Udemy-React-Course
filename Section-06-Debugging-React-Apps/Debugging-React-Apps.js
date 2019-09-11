// Debugging React Apps
// -----------------------------------

// Normal Errors
- Check the line number in the error message


// Logic Errors
- Debug logical errors w/ source maps and chrome dev tools, using break points
- Chrome dev tools > Sources tab > find 'src' folder
- Select a line in your code
- Use debugger tools (top right corner)

  * * * DO MORE RESEARCH ON DEBUGGING IN CHROME * * *


// React Developer Tools
- React Developer Tools is a Chrome Extension
- In Chrome Dev Tools, "Components" & "Profiler" Tabs
- Click on element, see props in side bar
- Click "Rendered by: App" underneath to see state, context, etc.


// Custom Error Messages
- Wrap Error boundary method around code that:
  * Might fail at runtime
  * you can't prevent from failing
  * and then show a custom error msg, fallback page/content
- Only use error boundaries where you KNOW there is a chance your code might fail 
(the rest of the React app keeps working)



