import React from 'react';

const Blogs = () => {
    return (
        <div className='px-12'>
            <div>
                <h3>
                    Question Number 01:-how will you improve the performance of a react application?
                </h3>
                <p>
                    Answer:- Performance-related problems in web app is not new. Developers have been encountering these issues since a longer period of time. Here's why when any new language originates, developers are bound to face performance issues with it. React is one such example of language. It boasts of a DOM which is very fast. Fast in a way that sometimes, it makes many irrelevant components render the tree. This makes a UI glitch and sometimes developers gets hesitant to continue with the language. However, there are some ways through which developers can solve the performance related problems in React based web app. Let's explore some of these in this article.
React Performance – 13 Ways to Optimize Performance of your React App
React is one such example of UI framework which is considered best in terms of rendering performance. Although, since it’s virtual DOM is famous for effectively rendering components, it’s still possible to run into performance issues in medium to large web applications.

Editor’s note: In this article, Hardik covers different ways and tips for React performance optimization that are extracted from the experience of many programmers and agencies who have faced similar kind of issues in past, and in case you are facing similar scenarios and need expert assistance, consider checking out Simform’s web app development services.
                </p>
            </div>
            <div>
                <h3>
                    Qusetion:-what are the different ways to manage state in a react application?
                </h3>
                <p>
                    Answer:-Are you facing difficulties in making loading spinners or a pop-up appears at the right time? It can be because of an unmanaged state in React. A state is a JavaScript object. It stores a component’s dynamic data and determines the component’s behavior. In other words, it is the interface between any data of changes (backend or local) and the representation of this data with UI elements in the frontend.

The state helps in keeping the data of different components in sync since each state update will re-render all relevant components. It can also act as a medium to communicate between various components. Managing state is one of the hardest parts of any application, and that is why there are so many state management libraries/tools available, including Redux, MobX, Flux, RxJS, and more.

The Problem

Redux, particularly, gives the developer a single place to put all their state that seems great at first. However, it leads to many problems later. For example, when you’re maintaining any state interaction, it involves interacting with reducers, action creators/types, and dispatch calls that require opening many files and tracing through the code to troubleshoot any instance.

The fact is that having one place to put things doesn’t necessarily make them easy to get to. There is a need for a system for putting them in the right place. So, essentially, the state management tools like Redux essentially convert the problem of “managing” a state into the problem of “structuring it.”

The Solution

With a lot of trial and error, pilot programs, and personal observance, it has been proven that React Native apps can be structured into 5 types of state. Each type of state follows a set of defined rules and interacts with one another in a particular manner.

Based on these rules of each state, you can easily store data as per your needs (as long as you follow the rules) without worrying about creating a dynamic data mess.

1 . Communication State

Communication state forms the backbone of your React Native app without you even knowing about it. Remember when you had requested a call back to an HTTP request? That’s when you introduced the communication system in your app.

Communication plays a crucial role in storing information in different states. It covers essential aspects of an application such as loading spinners, error messages, pop-ups, and many others which showcases that a communication link has been formed. Communication state is the “loading phase” of the transactions between different states. It stores the following information when used in a React app:

1. The error messages, given that the request failed or the transaction was not completed.

2. The type, selector, and expected change of operations requested.

3. The type of data requested to access or expect to receive.

With the Communication state, you can now access the state of the request without setting any particular command. For example, you can see where your transaction is moving: retrieving, updating, sending, receiving, failed, etc. without having to set any command to determine the true or false value for a request.

Communication state is accessible from anywhere using Connect. It can be independently stored and managed by Redux.

2. Data State

Data state covers information that your React application stores temporarily for various business functions. Supposedly, you are building a project management app. The information stored in the data state will include the following things – project names, contacts, details about the clients, etc.

The Data state will receive all the information from the outer world. But how will it identify which information is what and whether it needs to be stored in the data state or not?

Well, every piece of information will have an identifier that will help the Data state recognize and request for particular information that it can store.

Every fragment of received data has a type and a selector which specifies the kind of data received. You can design a redux store for your data once you have mapped out a way to identify the type and id of a received object.

After mapping the type of data and storing relevant information, you can easily access the datastore from anywhere via Connect. Since each state of a React app follows a particular set of rules, you can play around with your information as long as it aligns with the pre-defined rules.

For instance, you can change the indexes, custom higher-order components, and do much more with your data state. To receive data from the outer world, you have to request it and then wait until the transaction is failed or completed. This is exactly where the communication state helps.

3. Control State

Contrary to the state mentioned above in a React app, the control state does not represent the application’s environment. Instead, it refers to the state which the user has input into the app. For example, form inputs, selected items, etc. Control state is known to be more diverse and versatile when it comes to storing information.

While form inputs are a huge bundle of information with multiple objects in place, selected items act as a single string of information representing an Id, and the control state efficiently stores both kinds of data without any trouble.

However, it follows a rule which only allows components specific to a single screen, or a container to be stored. If you have a state which has a predictable shape like the data or communication and it needs to be readily available throughout the application at any point in time, use Redux. For other states, like the Control state which doesn’t follow a specific pattern of shape and is not required to be present throughout, you can use setState instead of Redux.

4. Session State

So far, we have discussed the following states:

1. Data/ Communication State- Predictable shaped states which are required application-wide

2. Control State- Unpredictable shaped states which are not required throughout

Now let’s discuss a state which is required to be available throughout the application but has a lesser well-defined shape.

Session state contains information about the user of the application such as user id, permissions, passwords, etc. It may also include information on how the application should work according to a particular user’s preferences.

While Session state can store similar patterned components like Control state, there is a thick difference between both the information stored. For example, you may have a part of a Control state information that represents parts of a tree view, you can find kind of similar data in the Session state, but it will definitely be different from the Control state.

Session states can only be read when a component is mounted, which means that you store a copy of the information already present in the Control state. It stores personal preferences based on the user’s choices to depict the data.

5. Location State

Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them. Also, the HTML5 History API allows you to store states separately from the specific URL.

Unlike Data and Communication state, which follow a particular pattern or a shape to store information, location state instead stores information in a simple string like structure. However, one of the most interesting things about location states is that it typically stores URLs in the forms of string-like structures even when they don’t actually represent strings.

URLs represent a hierarchy of components, overlaid on one top of the other. One can build a location tree using different URLs that represent different parts of your application.

Conclusion

You need to map out identifiers, build hierarchical trees, understand a particular model to sort and identify information in a React app easily. By structuring your app developed in React in the 5 State as discussed above, you can easily sort, select and understand what kind of data will go where and how to manage it efficiently.
                </p>
            </div>
            <div>
                <h3>

                </h3>
                <p>

                </p>
            </div>
            <div>
                <h3>

                </h3>
                <p>

                </p>
            </div>
            <div>
                <h3>

                </h3>
                <p>

                </p>
            </div>
            <div>
                <h3>

                </h3>
                <p>

                </p>
            </div>
        </div>
    );
};

export default Blogs;