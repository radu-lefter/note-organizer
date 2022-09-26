



Contemporary Web Applications

Note Organizer Application Report

Radu Lefter

Student number 10117503

Site hosted at:  <https://orgeton-fc535.web.app/home>

Git found at: <https://github.com/radu-lefter/note-organizer>

27/09/2022











**Introduction**

The Note Organizer SPA built with React.js is a program that tries to help students retain more information from their lectures. It does that by encouraging them to take notes and then revise them later. While notes can be easily taken by traditional paper and pen methods, the use of technology makes it easier, more efficient, and can add extra functionality to the process. The notes can be organized, edited, and stored more easily. In the note-taking stage, during the lecture, the users can only record the notes, they can’t edit or delete them, so they must focus on jotting down as much information as they can. Once the note-taking session is finished and saved, the students can go back and modify the notes, delete them, or organize them under topics. They can also write a short summary of the lecture based on the notes taken. The application has sign-up and login functionality, and every user can only see their own sessions, once they are logged in.  Authorization and authentication, data persistence and hosting have all been implemented with the help of Firebase and the underlying technology. 

**Methodology**

Extreme Programming is a type of agile development that aims to produce the best results in the smallest amount of time by applying a set of principles, practices, and values, such as simplicity, feedback, and courage, to constantly shifting requirements. It qualifies itself by the word “extreme” because it aims to take good practices that produce high-quality results to the extreme, while maintaining a steady pace. Some of its distinguishing features are programmers working in pairs, a constant expectation of changing customer needs, as little hierarchy as possible in the management, simple and clear code, continuous testing, and clear communication. 

A subset of this methodology is Personal Extreme Programming, which takes the spirit and the core practices of the methodology described above and tweaks them for when the team consists of one developer who is the project manager, the consultant, designer, the programmer, the tester, the marketer and even the customer at the same time. It also draws upon the benefits of Personal Software Process to educate lone programmers on how to improve their performance, instil discipline and predict their output.    

I chose this programming methodology for the development of my project because I am developing the application on my own, based on the design that I created for the previous assignment. Also, it is a methodology that focuses on code quality and personal performance, which I strive to improve as an aspiring professional specialized in web development. It is also suitable because communication with the customer can be easily assumed, as I am also a customer of the application since the application is meant to help students such as myself. The core practices that I have followed are detailed below.



**Planning**

Since the application is useful to me too as a student, I had no problems putting myself in the shoes of a typical user and writing user-stories, such as:

- As a student out of many, I want to only see my notes, so I can focus on my work.
- As a user, I want to be prompted if my notes are too long, so I can write succinct, manageable notes.
- As a user, I want to be able to easily edit and delete notes, so I can eliminate unnecessary information.

I have also estimated the development process to take about one month, so I divided my time and my resources accordingly. I used the Jira Kanban board to prioritize my tasks and track my progress. 


**Small releases**

I have hosted my application early in the process and reuploaded the code every time a major improvement was made to it. 

**Simple design**

The design of the whole application is simple enough, but I also focused on getting the simplest version of the application working as soon as possible and deploying it, adding more complex functionality in subsequent versions. 

**Testing**

I tested my code after adding a new feature and made sure all the other parts of the system still worked as well.

**Refactoring**

I refactored code as soon as I found a bug or a better implementation solution. I paired refactoring with testing to fix a problem as soon as possible, sometimes going as far as recreating whole modules that were not fit for purpose. 

**Pair programming**

Although I did not have another programmer to consult with about the quality of my code, I have used the feedback of a friend willing to continuously test the program itself and help detect bugs and inconsistencies. 

**Continuous integration**

I have organized my code in branches so that I could implement every new feature separately from the main code, merging it with the master branch only once I was sure the whole program was working fine. 


**Evaluation methods**

The final application was tested by a group of four volunteers. No personal data was recorded from them, only the answers to the questions and their performance on using the application.

First, they were given 10 minutes to familiarize themselves with the application. They were asked to read the written instructions found in the about page and play around with the app. They were then asked to grade the application with scores ranging from lowest 1 to highest 5 by answering the following questions:

|Question|Average score|
| :- | :- |
|How easy was it to login/signup?|5|
|Did you find the design pleasing?|5|
|How intuitive is the app?|3|
|How easy is it to organize the notes?|4|
Table 1 Testers survey

` `Secondly, the testers were asked to watch two instructional videos and explain what they were about. For the first video, the users were asked to use pen and paper to record notes or nothing at all, relying on memory to then write a summary of the video. For the second video, they were asked to use the application. At the end, the summaries were compared.

**Conclusion**

The Note Organizer Application proved to be an adequate solution for the problem proposed. Although taking notes is nothing new, and it’s a technique that people learn since the early school years, it does not mean that technology cannot contribute to it and make it more pleasant, if not more efficient. The fact that people were familiar with notetaking contributed to the adoption of the application since they don’t need to be convinced of its usefulness. 

The users who tested the application gave favourable reviews, finding it easy to organize notes, with a nice design and with straightforward login/signup functionality. However, they did not find it intuitive enough, which open opportunities for further improvement. 

More interesting was the second phase of the test, where the comparison was made between summaries written using the app and using traditional methods or no notetaking at all. The summaries made without any notetaking at all were inferior in quality, as they missed out on important information. The summaries made based on the notes looked very similar, whether the application was used or not. However, the users reported a more pleasant and more interactive experience when using the application. Also, the ability to use their mobile phones to do it meant that they could do it anywhere, without having to worry about finding a pen and paper. 

The development journey proved challenging because it was a one-person operation and could not benefit from the experience and the expertise of a team or from the feedback of a fellow programmer. However, the Personal Extreme Programming methodology pushed forward the development process and quality results were obtained in a very short span of time. The project remains open to improvements, with more testing, more functionality and more refactoring waiting to be added. Nonetheless, it has achieved the main goals that were set out. 
