


export const questions = [
    {
      question: "What is the HTML syntax for adding an external Javascript file?",
      answers: [
        { text: "<script myJS.js></script", correct: false },
        { text: "<script src='myJS.js'></script", correct: true },
        { text: "add.myJS.js'>", correct: false },
        { text: "It can't be done in HTML", correct: false },
      ],
    },
    {
      question: "Can you run JavaScript in the browser?",
      answers: [
        { text: "Yes", correct: false },
        { text: "No", correct: true },
        { text: "Sometimes", correct: false },
        { text: "Yes, under some conditions", correct: false },
      ],
    },
    {
      question: "How do you write a multiple-line comment in Javascript",
      answers: [
        { text: "By opening and closing it with /* and */", correct: true },
        { text: "By opening and closing it with 'command/control plus /' keys", correct: false },
        { text: "By opening and closing it with '/ and /' keys", correct: false },
        { text: "You can't do a multiple-line comment in Javascript", correct: false },
      ],
    },
    {
      question: "What is the best way to remove a line of code from running that you might want to keep as you debug?",
      answers: [
        { text: "Delete the code and then rewrite it when you are through debugging.", correct: false },
        { text: "Just work around the code because you will need it later", correct: false },
        { text: "You can't do anything about the code.", correct: false },
        { text: "Comment out the line with //", correct: true },
      ],
    },
    {
      question: "What data type is the following variable in Javascript? ,const c = '5'?",
      answers: [
        { text: "Number", correct: false },
        { text: "String", correct: true },
        { text: "NAN", correct: false },
        { text: "undefined", correct: false },
      ],
    },
    {
      question: "What data type is the following variable in Javascript? ,'const c = 5 ?",
      answers: [
        { text: "String", correct: false },
        { text: "null", correct: false },
        { text: "undefined", correct: false },
        { text: "Number", correct: true },
      ],
    }
  ];
  