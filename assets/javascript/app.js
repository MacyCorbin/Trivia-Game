//==============  Wild about Animals  ==============//

$(document).ready(function () {


    //==============  Sticky Header  ==============//


    // The stick header will scroll down with the page so that the countdown will
    // be visible at all times.
    window.onscroll = function () { myFunction() };

    //Gets the id at the animalHeader in HTML
    var header = document.getElementById("animalHeader");

    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("stickyHeader");
        } else {
            header.classList.remove("stickyHeader");
        }
    }


    //==============  Countdown  ==============//


    //this starts the timer and sets up the values of the measurement of time
    function startTimer(duration, display) {
       var timer = duration, minutes, seconds;
       var timerId = setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
                clearInterval(timerId);
                showResults();
            }

        }, 1000);
    }

    //This function starts the timer at 5 minutes. Since there are 60 seconds in a minute 
    //the equation is  60*5
    jQuery(function ($) {
        var fiveMinutes = 60 * 5,
            display = $('#time');
        startTimer(fiveMinutes, display);
    });


    //==============  Animal Quiz  ==============//

    // Get the elements to be in the HTML
    const quizContainer = document.getElementById("animalQuiz");
    const resultsContainer = document.getElementById("quizResults");
    
    // This will hold all the animal questions, possible answers, and correct answers.
    const animalQuestions = [
        {
            question: "1. What is the largest animal on earth?",
            answers: {
                a: "Elephant",
                b: "Humpback Whale",
                c: "Colossal Squid",
                d: "Blue Whale",
            },
            correctAnswer: "d",
            imageUrl: "assets/images/blue-whale.jpg"
        },
        {
            question: "2. Which animal is the only relative of a giraffe?",
            answers: {
                a: "Antalope",
                b: "Okapi",
                c: "Duiker",
                d: "Horse",

            },
            correctAnswer: "b",
            imageUrl: "assets/images/okapi.jpg"
        },

        {
            question: "3. Which cat can purr?",
            answers: {
                a: "Cheetah",
                b: "Lion",
                c: "Snow Leopard",
                d: "Tiger",
            },
            correctAnswer: "a"
        },

        {
            question: "4. Elephants are afraid of what animal?",
            answers: {
                a: "Sparrows",
                b: "Meerkats",
                c: "African Bullfrog",
                d: "Bees",
            },
            correctAnswer: "d",
            imageUrl: "assets/images/blue-whale.jpg"
        },

        {
            question: "5. How large is a giant flying fox's wingspan?",
            answers: {
                a: "8 feet",
                b: "3 feet",
                c: "6 feet",
                d: "2 feet",
        
            },
            correctAnswer: "c"
        },

        {
            question: "6. Which subspecies of tiger is the smallest?",
            answers: {
                a: "Amur (Siberian) ",
                b: "Bengal",
                c: "Sumatran ",
                d: "Malayan ",
            },
            correctAnswer: "c"
        },

        {
            question: "7. Which bird is named after the mythological Greek giant known for having many eyes?",
            answers: {
                a: "Argus Pheasant",
                b: "Java Green Peafowl",
                c: "Common Goldeneye",
                d: "Dark-eyed Junco",

            },
            correctAnswer: "a"
        },

        {
            question: "8. What is a group of meerkats called?",
            answers: {
                a: "Muster",
                b: "Mob",
                c: "Village",
                d: "b and c",
            },
            correctAnswer: "b"
        },

        {
            question: "9. A Hippopotamus is what kind of eater?",
            answers: {
                a: "Carnivore",
                b: "Herbivore",
                c: "Omnivore",
                d: "Fungivore",
            },
            correctAnswer: "b"
        },

        {
            question: "10. Which statement is true for the Bar-Headed Goose?",
            answers: {
                a: "This goose is the highest flying bird on earth",
                b: "They have a 'roller coaster' flight pattern",
                c: "They migrate from Mongolia to India",
                d: "All of the above",
            },
            correctAnswer: "d"
        }
    ];

    //Holds the information of the animals and the pictures
    var animalList = {

        "Blue Whale": {
            name: "Blue Whale",
            imageUrl: "assets/images/blue-whale.jpg",
            animalFacts: "Blue Whales are the largest animals on earth",
        },

        "Okapi": {
            name: "Okapi",
            imageUrl: "assets/images/okapi.jpg",
            animalFacts: "Okapi are the closest relatives to the giraffe. Because Okapi are solitary animals, they were not found in the wild until 1901.",
        },

        "Cheetah": {
            name: "Cheetah",
            imageUrl: "assets/images/cheetah.jpg",
            animalFacts: "Cheetah's can purr! They are not considered big cats like lions, tigers, and leopards.",
        },

        "Elephant": {
            name: "Elephant",
            imageUrl: "assets/images/elephant.jpeg",
            animalFacts: "Elephants do not like bees! Farmers have created bee-hive fences to keep elephants from trampling crops.",
        },

        "Flying Fox": {
            name: "Flying Fox",
            imageUrl: "assets/images/flying-fox.jpg",
            animalFacts: "Flying foxes are a type of fruit bat native to southeast Asia and Australia.",
        },

        "Sumatran Tiger": {
            name: "Sumatran Tiger",
            imageUrl: "assets/images/Sumatran-Tiger.jpg",
            animalFacts: "Sumatran tigers are the smallest of the 6 sub-species of tiger.",
        },

        "Great Argus Pheasant": {
            name: "Great Argus Pheasant",
            imageUrl: "assets/images/argus-pheasant.jpg",
            animalFacts: "The Argus Pheasant is native to Sumatra.",
        },

        "Meerkat": {
            name: "Meerkat",
            imageUrl: "assets/images/meerkats.jpg",
            animalFacts: "Meerkats live in family groups called 'mobs'. These burrowing animals are closely related to mongooses.",
        },

        "Hippopotamus": {
            name: "Hippopotamus",
            imageUrl: "assets/images/hippo.jpg",
            animalFacts: "Hippos are nocturnal herbrivores that spend most of the daylight hours underwater.",
        },

        "Bar-Headed Goose": {
            name: "Bar-Headed Goose",
            imageUrl: "assets/images/bar-headed-goose.jpg",
            animalFacts: "Bar-Headed Geese can fly as high as an airplane at approximately 30,000 feet.",
        },

    };



    //Create the quiz.
    function createQuiz() {

        //this will store the HTML output
        const output = [];

        // for each question the code will look at the current question and question number
        // it will store the answer choices and possible answers. => is used to simplify the function
        
        animalQuestions.forEach((currentQuestion, questionNumber) => {
            
            const answers = [];

            for (letter in currentQuestion.answers) {
                
                answers.push(
                    `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter}.  
              ${currentQuestion.answers[letter]}
            </label>`
                );
            }

            // push the currentQuestion and answers to their divs
            output.push(
                "<div class='question'>" + currentQuestion.question+ "</div>",
          "<div class='answers'>" + answers.join("") + "</div>"
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");
       
        // keep track of user's answers
        var userCorrectAnswers= 0;

        // for each question the answers need to be found and evaluated based on the user's choice
        animalQuestions.forEach((currentQuestion, questionNumber) => {
        
            const answerContainer = answerContainers[questionNumber];
            const selector = "input[name=question"+ (questionNumber) +"]:checked";
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        
            // if answer is correct it will be added to the user total and turn green
            if (userAnswer === currentQuestion.correctAnswer) {

                userCorrectAnswers++;
                answerContainers[questionNumber].style.color = "#03ac79";

            } else {
                answerContainers[questionNumber].style.color = "#a83636";
            }

        });

        //creates the information about the animals and their pictures
        var renderAnimals = function (animal, renderArea) {
    
            var animalDiv = $("<div class='animal' data-name='" + animal.name + "'>");
            var animalName = $("<div class='displayName'>").text(animal.name);
            var animalImage = $("<img alt='image' class='animalImage' class = 'column1'>").attr("src", animal.imageUrl);
            var animalFacts = $("<div class = 'animalInfo'>").text(animal.animalFacts);
            animalDiv.append(animalName).append(animalImage).append(animalFacts);
    
            $(renderArea).append(animalDiv);
        }
    
        //ends the quiz and renders the animals
        var endQuiz = function () {
            for (var key in animalList) {
                renderAnimals(animalList[key], "#animalFacts")
            }
        };
        endQuiz();

        //hides the countdown
        $("#time").toggle();

        // show number of correct answers out of total
        resultsContainer.innerHTML = (userCorrectAnswers)+" " + "out of" +" " + (animalQuestions.length) + " " + "correct";
        //displays the animal facts when the result function is called
        $("#animalFacts").css("display", "block");
    }

    // display quiz
    createQuiz();

    // click function for the submit button and show the results
    $("#submit").click(function() {
        showResults();
    });

});

