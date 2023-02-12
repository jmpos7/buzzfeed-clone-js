const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')


// Quiz Questions
const questions = [
    {
        id: 0,
        text: "How do you spend the night before your big advenutre?",
        answers: [
            {
                option: "1A",
                text: "Gather supplies and plan my strategy",
                image: "https://images.unsplash.com/photo-1524834671419-aa7d41c1c657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
                alt: "Three silhouettes of people carrying various supplies",
                credit: "Stephane Yaich"
            },
            {
                option: "1B",
                text: "Meditate and focus my mind",
                image: "https://images.unsplash.com/uploads/1413395496082cbc91228/43e39040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                alt: "Silhouette of a person medidating over a landscape",
                credit: "Christopher Sardegna"
            },
            {
                option: "1C",
                text: "Inspire my companions with a rousing speech",
                image: "https://images.unsplash.com/photo-1515191107209-c28698631303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                alt: "Silhouette of a person holding their fist in the air",
                credit: "Miguel Bruna"
            },
            {
                option: "1D",
                text: "Train and hone my combat skills",
                image: "https://images.unsplash.com/photo-1476525223214-c31ff100e1ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Silhouette of a person practicing combat skills on a beach",
                credit: "Jason Briscoe"
            },
            {
                option: "1E",
                text: "Study ancient texts and perform ritualistic preparations",
                image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
                alt: "Silhouette of a child reading",
                credit: "Aaron Burden"
            },
            {
                option: "1F",
                text: "Sing songs or tell tales to anyone who will listen",
                image: "https://images.unsplash.com/photo-1495837174058-628aafc7d610?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                alt: "Silhouette of women dancing",
                credit: "Levi Guzman"
            }
        ]
    },
    {
        id: 1,
        text: "Now you've set out on this journey, what do you do?",
        answers: [
            {
                option: "2A",
                text: "Scout the area and look for signs of danger",
                image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                alt: "Armored person carrying a torch under an archway",
                credit: "Linus Sandvide"
            },
            {
                option: "2B",
                text: "Consult my deity for guidance",
                image: "https://images.unsplash.com/photo-1485559131919-ba21c3a6a5ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                alt: "Woman with hands clasped looking toward the sky",
                credit: "Diana Simumpande"
            },
            {
                option: "2C",
                text: "Use magic to uncover hidden secrets",
                image: "https://images.unsplash.com/photo-1526584720376-57b19fffff13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                alt: "Man wearing glasses holding sparkling light",
                credit: "Aditya Saxena"
            },
            {
                option: "2D",
                text: "Charge into the unknown, weapons at the ready",
                image: "https://images.unsplash.com/photo-1600385546605-536b691202df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
                alt: "Woman in red shirt holding a sword",
                credit: "Some Tale"
            },
            {
                option: "2E",
                text: "Experiment with magic or tinker with arcane devices",
                image: "https://images.unsplash.com/photo-1620376646220-16f711893d48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
                alt: "Arcane components, vials, and flowers",
                credit: "Dagmara Dombrovska"
            },
            {
                option: "2F",
                text: "Harmonize with the world and let its rhythm be my guide",
                image: "https://images.unsplash.com/photo-1527380992061-b126c88cbb41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFyZCUyMG1hZ2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60",
                alt: "Feather hovering above a person's palm",
                credit: "Javardh"
            }
        ]
    },
    {
        id: 2,
        text: "You've encountered an obstacle, how do you deal with it?",
        answers: [
            {
                option: "3A",
                text: "Outsmart it with my cunning or ingenuity",
                image: "https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                alt: "Woman looking upwards thoughtfully",
                credit: "Tachina Lee"
            },
            {
                option: "3B",
                text: "Draw upon my divine power to overcome it",
                image: "https://images.unsplash.com/photo-1498019559366-a1cbd07b5160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80",
                alt: "Man sitting in a field manipulating smoke with his hands",
                credit: "Aziz Achkari"
            },
            {
                option: "3C",
                text: "Unleash devastating magic and power",
                image: "https://images.unsplash.com/photo-1531574749638-a25b3507b7ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80",
                alt: "Woman holding a sparkler with bokeh effect",
                credit: "Ethan Hoover"
            },
            {
                option: "3D",
                text: "Meet it head-on with unyielding force and discipline",
                image: "https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Knight with steel and chainmail armor holding sword",
                credit: "Henry Hustava"
            },
            {
                option: "3E",
                text: "Stealthily avoid or bypass it",
                image: "https://images.unsplash.com/photo-1483706600674-e0c87d3fe85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2107&q=80",
                alt: "Woman holding a finger to pursed lips saying shh",
                credit: "Kristina Flour"
            },
            {
                option: "3F",
                text: "Harness the power of the wild to overcome it",
                image: "https://images.unsplash.com/photo-1431440869543-efaf3388c585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Lightning storm",
                credit: "Breno Machado"
            }
        ]
    },
    {
      id: 3,
      text: "When you close your eyes and dream, what do you see?",
      answers: [
            {
                option: "4A",
                text: "Visions of victory and heroism",
                image: "https://images.unsplash.com/photo-1560339788-c1fd31736074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
                alt: "Statue of a man resting his arm on a lion",
                credit: "Jansen Yang"
            },
            {
                option: "4B",
                text: "Scenes of deception and fame, or infamy",
                image: "https://images.unsplash.com/photo-1536283865487-627ae241d1b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                alt: "A person's hands offering a bejeweled crown",
                credit: "Jared Subia"
            },
            {
                option: "4C",
                text: "Peace and harmony in the natural world",
                image: "https://images.unsplash.com/photo-1454425064867-5ba516caf601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                alt: "Ladybudy on a mushroom",
                credit: "Benjamin Balazs"
            },
            {
                option: "4D",
                text: "Perfecting my physical and mental abilities",
                image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Woman with tattoos lifting a large barbell",
                credit: "Alora Griffiths"
            },
            {
                option: "4E",
                text: "Discovering new knowledge and ideas",
                image: "https://images.unsplash.com/photo-1508666709797-f0bb3d96324d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=80",
                alt: "Open book with lightbulb",
                credit: "Clever Visuals"
            },
            {
                option: "4F",
                text: "Heavenly revelations and divine truths",
                image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                alt: "Silhouette of a person in front of a starry sky",
                credit: "Greg Rakozy"
            }
        ]  
    }
];

// Quiz Answers
const answers = [
    {
        combination: [], // 1st result only if other results tie
        text: "Multi-class",
        desc: "You're a unique blend of more than one class, combining the strengths of each to make a one-of-a-kind adventurer! Your versatility and mastery of multiple skills make you a truly unstoppable force in the world of DND!",
        image: "https://images.unsplash.com/photo-1499540633125-484965b60031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        alt: "Silhoutte group on top of hill waving",
        credit: "Natalie Pedigo"
    },
    {
        combination: ["1A", "2E", "3A", "4E"],
        text: "Artificer",
        desc: "You're the master of mechanics, infusing magic into everyday objects to make them work wonders! Your cunning intellect and creativity make you a valuable asset in any adventure.",
        image: "https://images.unsplash.com/photo-1547809397-e2c7eea071fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "Bearded man pouring ingredients",
        credit: "JJ Jordan"
    },
    {
        combination: ["1D", "2D", "3F", "4A"],
        text: "Barbarian",
        desc: "You're a force to be reckoned with, tapping into your inner rage to unleash devastating attacks! Your raw power and fearless spirit make you a formidable opponent on the battlefield.",
        image: "https://images.unsplash.com/photo-1615672969026-ceaca023bc3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Man wearing a furry shirt holding an ax and yelling lit by bisexual lighting",
        credit: "Gioele Fazzeri"
    },
    {
        combination: ["1F", "2F", "3A", "4B"],
        text: "Bard",
        desc: "You're the life of the party, using music and magic to inspire and entertain your allies! Your charisma and charm make you a natural leader, guiding your friends to victory.",
        image: "https://images.unsplash.com/photo-1602111480335-70cef92d95b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxnUWZVaDk0Y1VDQXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60",
        alt: "Woman plaing a stringed instrument",
        credit: "Ali Karimiboroujeni"
    },
    {
        combination: ["1B", "2B", "3B", "4F"],
        text: "Cleric",
        desc: "You're a holy warrior, using your faith to heal and protect those in need! Your devotion and unwavering spirit make you a beacon of hope in even the darkest of times.",
        image: "https://images.unsplash.com/photo-1610924444969-39cf702e09cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        alt: "Woman with hands together wearing a spiked halo crown",
        credit: "Alice Alinari"
    },
    {
        combination: ["1B", "2F", "3F", "4C"],
        text: "Druid",
        desc: "You're one with nature, harnessing the power of the elements to defend the wilderness! Your connection to the land and animals makes you a fierce defender of the natural world.",
        image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
        alt: "Silhouette of a deer with horns in a magical forest",
        credit: "OMK"
    },
    {
        combination: ["1C", "2D", "3D", "4A"],
        text: "Fighter",
        desc: "You're a seasoned warrior, honing your skills with every battle! Your discipline and strength make you a dependable ally in combat, and a true master of arms.",
        image: "https://images.unsplash.com/photo-1600081523138-0bae23488dea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "Sword and armor",
        credit: "Jonathan Kemper"
    },
    {
        combination: ["1B", "2F", "3B", "4D"],
        text: "Monk",
        desc: "You're a martial artist, using your mastery of the body to defeat your enemies! Your agility and precision make you a fearsome fighter, capable of taking on multiple foes at once.",
        image: "https://images.unsplash.com/photo-1476525223214-c31ff100e1ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Silhouette of a person practicing combat skills on a beach",
        credit: "Jason Briscoe"
    },
    {
        combination: ["1B", "2B", "3B", "4F"],
        text: "Paladin",
        desc: "You're a holy knight, using your divine powers to smite evil and defend the innocent! Your unwavering morality and bravery make you a shining example of what it means to be a hero.",
        image: "https://images.unsplash.com/photo-1587187174606-2cf853e2f00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Man with angel wings wielding sword",
        credit: "Duncan Sanchez"
    },
    {
        combination: ["1A", "2A", "3E", "4C"],
        text: "Ranger",
        desc: "You're a master of the wild, using your tracking skills and archery prowess to take down your enemies! Your knowledge of the wilderness and survival make you a formidable adventurer, capable of taking on any challenge.",
        image: "https://images.unsplash.com/photo-1522089061856-ef40544fb3ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        alt: "Woman in red cloak with husky dog in foreground",
        credit: "Šárka Jonášová"
    },
    {
        combination: ["1F", "2A", "3E", "4B"],
        text: "Rogue",
        desc: "You're a cunning thief, using your stealth and wit to outsmart your enemies! Your quick reflexes and resourcefulness make you a valuable asset in any heist, or sneaky adventure.",
        image: "https://images.unsplash.com/photo-1627811269913-c0d964da1eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        alt: "Figure wearing a black cape that covers their face except the mouth",
        credit: "Petr Sidorov"
    },
    {
        combination: ["1D", "2E", "3C", "4B"],
        text: "Sorceror",
        desc: "You're a spellcasting prodigy, wielding magic with effortless ease! Your innate talent and intuition make you a force to be reckoned with, capable of unleashing devastating spells at a moment's notice.",
        image: "https://images.unsplash.com/photo-1508378817913-43c62adcdd59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
        alt: "Woman kneeling with spiral fire effect",
        credit: "Jacob Avanzato"
    },
    {
        combination: ["1E", "2C", "3C", "4A"],
        text: "Warlock",
        desc: "You've made a pact with a powerful entity, granting you dark magic to command! Your ambition and thirst for power make you a fearsome opponent, capable of bending reality to your will.",
        image: "https://images.unsplash.com/photo-1519235624215-85175d5eb36e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        alt: "Person with a demonic red halo",
        credit:"name_gravity"
    },
    {
        combination: ["1E", "2E", "3D", "4E"],
        text: "Wizard",
        desc: "You're a master of the arcane, dedicating your life to the study of magic! Your knowledge and mastery of spells make you a powerful wizard, capable of weilding the rarest and most powerful forms of magic.",
        image: "https://images.unsplash.com/photo-1668640450699-b2e7d5b6740d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
        alt: "Wizard pointing his wand at the viewer",
        credit: "Nice M Nshuti"
    },
    
]

const unansweredQuestions = []
const chosenAnswers = []

// Create questions
const populateQuestions = () => {
    // Loop thru all questions
    questions.forEach(question => {
        // Create div to hold question title
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        // H2 for title heading 
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)
        // Create div to hold answer options
        const answersBlock = document.createElement('div')
        // Assign question's id concat with -questions
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')
        // Push question's id to unansweredQuestions array
        unansweredQuestions.push(question.id)

// Add answer elements for each answer in question
question.answers.forEach(answer => {
    // Create answerBlock
    const answerBlock = document.createElement('div')
    answerBlock.classList.add('answer-block')
    // Click event to handle answer selection with answer.option
    answerBlock.addEventListener('click', () => handleClick(question.id, answer.option))
    // Create answer Image element
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', answer.image)
    answerImage.setAttribute('alt', answer.alt)
    // answerTitle element to contain answer text
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = answer.text
    // answerInfo element
    const answerInfo = document.createElement('p')
    // imageLink to contain image source info 
    const imageLink = document.createElement('a')
    imageLink.setAttribute('href', answer.image)
    imageLink.textContent = answer.credit
    // Link to unsplash for image credit
    const sourceLink = document.createElement('a')
    sourceLink.textContent = 'Unsplash'
    sourceLink.setAttribute('src', 'https://www.unsplash.com')
    answerInfo.append(imageLink, ' via ', sourceLink)
    // append elements to answerBlock
    answerBlock.append(answerImage, answerTitle, answerInfo)
    answersBlock.append(answerBlock)
})

questionDisplay.append(answersBlock)

})
}

populateQuestions()

// Select Answers
const handleClick = (questionId, chosenOption) => {
    // Check if the current question has not been answered yet
    if (unansweredQuestions.includes(questionId)) {
      // Add the selected answer's option to the chosenAnswers array
      chosenAnswers.push(chosenOption)
      // Remove the current question from the unansweredQuestions array
      const itemToRemove = unansweredQuestions.indexOf(questionId)
      if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
      }
  
      // Log chosen answers for debugging purposes
      console.log(chosenAnswers)
      console.log(unansweredQuestions)
      // Disable the current question block to indicate it has been answered
      disableQuestionBlock(questionId, chosenOption)
  
      // Scroll to next unanswered question or to the answer section if all questions are answered
      const lowestQuestionId = Math.min(...unansweredQuestions)
      location.href = '#' + lowestQuestionId
      if (!unansweredQuestions.length) {
        location.href = '#answer'
        showAnswer()
      }
    }
  }
  
// Result selection logic
  const showAnswer = () => {
    let result = null;
    let maxMatchCount = 0;
  
    // Iterate of all the answers
    answers.forEach(res => {
      // Keep track of the number of matching options
      let matchCount = 0;
      res.combination.forEach(combOption => {
        if (chosenAnswers.includes(combOption)) {
          matchCount++;
        }
      });
      // If current answer has at least 2 matching options set it as result
      if (matchCount > 2) {
        result = res;
        maxMatchCount = matchCount;
      }
    });
    // If answer has less matching options, set first answer (Multiclass) as the result
    if (maxMatchCount === 0) {
      result = answers[0];
    }
  
    // Quiz result
    // Create div to hold result
    const answerBlock = document.createElement("div");
    answerBlock.classList.add("result-block");
    // Result heading
    const answerTitle = document.createElement("h3");
    answerTitle.textContent = result.text;
    // Result description
    const answerDescription = document.createElement("p");
    answerDescription.textContent = result.desc;
   
    // Result Credit
    const answerInfo = document.createElement('p')
    const imageLink = document.createElement('a')
    imageLink.setAttribute('href', result.image)
    imageLink.textContent = result.credit
    const sourceLink = document.createElement('a')
    sourceLink.textContent = 'Unsplash'
    sourceLink.setAttribute('src', 'https://www.unsplash.com')
    answerInfo.append(imageLink, ' via ', sourceLink)

     // Result image
     const answerImage = document.createElement("img");
     answerImage.setAttribute("src", result.image);
     answerImage.setAttribute("alt", result.alt);

     // Append result elements
     answerBlock.append(answerTitle, answerDescription, answerImage, answerInfo);
     answerDisplay.append(answerBlock);
  };

// Disable question block when answered
const disableQuestionBlock = (questionId, chosenAnswer) => {
    // Get current question block by id
    const currentQuestionBlock = document.getElementById(questionId + "-questions")
    // Convert the children of the current question block to an array and loop through each
    Array.from(currentQuestionBlock.children).forEach(block => {
        // Check if the inner text of the block's second child (answer title) does not match the chosen answer
        if (block.children.item(1).innerText !== chosenAnswer) {
            // If not, set the opacity of the block to 50%
            block.style.opacity = "50%"
        }
    })
}
