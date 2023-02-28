# Social-Networking-API

# **Table of Contents**
1. [Description](#description)
2. [Testing](#testing)
3. [Technology Used and Credits](#technology-used-and-credits)
4. [About the Author](#about-the-author)
5. [License](#license)

Demonstration Video:

https://app.vidcast.io/share/389a656c-43b7-413b-a53f-785153f47d23



# **Description**

The goal of this project was to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I used Express.js for routing, a MongoDB database, and the Mongoose ODM. Additionally, I used format-date npm to format the date stamp on the creation of a thought and reaction.  

# **Highlighted Code Example**

The following is code that I created that I would like to highlight.  

In this  block I created the though model which uses a virtual to create a formatted date field that was formatted in mm-dd-yyyy.  I used the format-date NPM for this. 

```
// Create a new instance of the Mongoose schema to define each document
const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: format('MM-dd-yyyy',new Date())
    },
    username: {
        type: String, 
        required: true,
    },
    reactions: [
        {
        reactionBody: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
            
        },
        username: {
            type: String,
            required: true
        } 
    }]
}, 
{
collection: 'Thought',
versionKey: false,
toJSON: {
    virtuals: true,
     },
     id: false,
      }

);

thoughtSchema
    .virtual('createdAtFormatted')
    // Getter
    .get(function (){
        return format('MM-dd-yyyy', this.createdAt)
    })


```

# **Testing** 

To test to ensure the code rendered the desired output I iterated a series of tests to ensure that all acceptance criteria were met and documented completion below:

| User Acceptance Criteria | Test Result | 
| ------------- |:-------------| 
|1. WHEN I enter the command to invoke the application THEN my server is started and the Mongoose models are synced to the MongoDB database |**Completed**.  When I invoke node server.js the server starts and the DB is synced.   |
|2. WHEN I open API GET routes in Insomnia for users and thoughts THEN the data for each of these routes is displayed in a formatted JSON |**Completed**.  API GET routes all work.   |
|3. WHEN I test API POST, PUT, and DELETE routes in Insomnia THEN I am able to successfully create, update, and delete users and thoughts in my database |**Completed**.  API POST, PUT AND DELETE work for the users and thoughts models.  |
|4. WHEN I test API POST and DELETE routes in Insomnia THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list|**Completed**.  API POST, PUT AND DELETE work for the friends list.   |



# **Technology Used and Credits**

I used many useful references in completing this project including the following.  In particular, I found the layout of the w3schools reference materials to be extremely intuitive and helpful.  They even have a "try me" feature where elements of code can be reviewed and tested. 


| Technology Used | Resource URL | 
| ------------- |:-------------| 
| <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> | [https://git-scm.com/](https://git-scm.com/) | 
| <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> | [https://developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) |
| <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> | [https://nodejs.org/en/](https://nodejs.org/en/) |
| <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"> | [https://www.mongodb.com/](https://www.mongodb.com/) |
| <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"> | [https://www.mongodb.com/](https://www.mongodb.com/) |



# **About the Author**

My name is Brad Coleman. I am fairly new to web development but have considered it a hobby for several years and have hacked my way through learning various aspects including php, html and mysql.  I am currently enrolled in the Cal Berkeley Extension Web Development Boot camp and am excited to learn web development more holistically.  I have spent my earlier career working as a corporate controller / CPA.

- [Linkedin Profile](https://www.linkedin.com/in/brad-coleman-109529/)
- [GitHub Repos](https://github.com/bradcoleman60?tab=repositories)


# **License**

MIT License

Copyright (c) 2022 Brad Coleman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

