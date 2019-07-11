Using a Build Workflow
------------------------

- Not many browsers support ALL next-gen JS features, so a build workflow that compiles these features is necessary.


- Productivity:
  * Automatically adding CSS-prefixes for browser compatibility
  * Also, linters


- Dependency management tool
  * How we acheive such a workflow
  ---> Node Package Manager (NPM): what we're using
  * Yarn: another choice


- Bundler:
  * Write modular code, split it up over multi files that each have a clear purpose
  * Older browsers don't support split-up files
  * Lots of requests to multi-files slows things down
  ---> Webpack: what we're using
  * Gulp: another choice
  
  
- Compiler:
  * Translates from Next-gen JS to stuff browsers understand
  ---> Babel + presets: what we're using


- Development Server
  * Run it locally (Like Mamp!)


