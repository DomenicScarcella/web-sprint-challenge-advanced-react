# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    Stateful components are keeping track of changing data.  Stateless functional components render what is given to them via props, or they always render the same thing.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    Those are considered unsafe legacy code and should be avoided.

3. Define stateful logic.
    Stateful logic is logic that is built into a component.

4. What are the three step of creating a successful test? What is done in each phase?
    Arrange -- renders a React element into a virtual DOM
    Act -- queries the DOM for specific information
    Assert -- verifies that the render was successful
