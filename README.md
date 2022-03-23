# Availity Homework Assignment

This is my (Maxwell Spiegelman's) response to Availity fullstack homework assignment.

## Usage

Clone this package and navigate into its directory. Then run:

```bash
npm install
npm start
```
Your browser should automatically open with to a page with the app running. If not, look for the "Loopback" url in the console output, and manually navigate there in your browser. It should be `http://localhost:8080/`, if you don't already have something running on that port.

## Answers

In lieu of running the application, here's a more concise record of my answers:

1. My proudest professional achievement was successfully designing and implementing a user management portal for
                the application I've been working on for the past couple of years. Since I was given free reign to develop
                this new app, I took the opportunity to break free from the legacy frameworks that our team had been working
                within for years, and I designed a tech stack utilizing the latest tools. Even though I had no experience
                with any of these new tools, I learned as I went, and the app was ready and deployed to production ahead of 
                schedule. Furthermore, after it's completion, when I switched to working on a different app, another team took over
                maintaining it, and I've only gotten a handful of questions from them since. I tried to make the code as simple 
                and easy to understand as possible, so it's nice to see that it paid off.

2. Recently, I read "How to Have Impossible Conversations" by Peter Boghossian and James Lindsay. It's a collection of 
                strategies for how to have successful conversations with someone on a topic or issue on which you don't see eye to eye.
                In this time of extreme polarization, conversations too often and too quickly turn into debates in which each party is
                just talking past the other. This book demonstrates that the only way to come to a mutual understanding, is to truly
                listen to the other person in order to understand the best version of their stance, and to be willing to change your own mind.

3. My grandmother probably wouldn't understand any explanation, considering the fact that she isn't alive.
                But if she were, I would tell her that Availity simplifies the communication between healthcare providers 
                and insurance companies. Each insurance company has their own way of doing things, so managing communications 
                with each one directly is hard to do. Instead, healthcare providers can always come to Availity when they need to 
                talk with any insurance company for any reason, and Availity handles the hard part.

4. Parentheses Validator
   * ```
      const validateParentheses = (str = '') => {
          let openParenthesesCount = 0;

          for (var i = 0; i < str.length; i++) {
              if (str[i] === '(') {
                  openParenthesesCount += 1;
              } else if (str[i] === ')') {
                  openParenthesesCount -= 1;
                  
                  if (openParenthesesCount < 0) {
                      return false;
                  }
              }
          }

          return openParenthesesCount === 0;
      };
    
5. Run the application to view. See `src/pages/Question5.jsx`
6. Run the application to view. See `src/pages/Question6.jsx`
