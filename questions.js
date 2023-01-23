export const questions = [
  {
    question: "Are you ready to commit ?",
    answers: [
      {
        answer: "No, let's keep it casual",
        keyword: "movie",
      },
      {
        answer : "Yes, I am!", 
        keyword : "tv", 
      },
    ],
  },
  {
    question: "How are you feeling today?",
    answers:  [{
      answer: "I feel good!",
    },
    {
      answer : "I had a bad day...", 
    },
    {
      answer : "It could be  better, but it could be worse", 
    },]
  },
  {
    question: "and what are you looking for ?",
    answers: [{
        answer : "I want to feel adventurous", 
        ids : {
            movie : [28, 12], 
            tv : [10759]
        }
    }, {
        answer : "I want to laught", 
        ids : {
            movie : [35], 
            tv : [35]
        }
    }, 
    {
        answer : "I want to see people suffer", 
        ids : {
            movie : [80], 
            tv : [80]
        }
    }, {
        answer : "I want to be scared", 
        ids : {
            movie : [27], 
            tv : [9648]
        }
    }
],
  },{
    question : "in what kind  of world would you rather be right now ?", 
    answers : [{
        answer: "A magical one", 
        ids : {
            movie : [14], 
            tv : [10765]
        }}, 
        {
        answer : "This one is fine", 
        }
    ]
  }, 
  {
    question : "Any preference regarding the realease date ?", 
    answers : [
        {
            answer : 1980
        }, 
        {
            answer : 1990
        }, 
        {
            answer : 2000
        }, 
        {
            answer : 2010
        }, 
        {
            answer : 2020
        }, 
    ]
  }
];
