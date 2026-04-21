$(document).ready(function(){

    const quizQuestions=[
        {
            id:1,
            topic:"setup-basics",
            learnLink:"learn.html#tank-size",
            question:"What size tank are you planning to keep your betta in?",
            answers:[
                {text:"Under 3 gallons / under about 11 litres", value:0},
                {text:"Around 3 to 4 gallons / about 11 to 15 litres", value:1},
                {text:"5 gallons / about 19 to 20 litres", value:2},
                {text:"More than 5 gallons / more than about 20 litres", value:3},
                {text:"More than 10 gallons / more than about 38 litres", value:4},
                {text:"I am not sure yet", value:0}
            ]
        },
        {
            id:2,
            topic:"setup-basics",
            learnLink:"learn.html#equipment-checklist",
            question:"Which setup sounds most like what you already have or plan to have?",
            answers:[
                {text:"Just a tank and food for now", value:0},
                {text:"Tank, some decor, and a lid", value:1},
                {text:"Tank, lid, and either a filter or heater", value:2},
                {text:"Tank, lid, filter, heater, thermometer, water conditioner, and testing supplies", value:3},
                {text:"Everything listed above and more", value:4}
            ]
        },
        {
            id:3,
            topic:"setup-basics",
            learnLink:"learn.html#budget",
            question:"What kind of budget do you have set aside for your betta setup and care?",
            answers:[
                {text:"I do not really have a budget yet", value:0},
                {text:"I only want to spend as little as possible, even if I have to skip some things", value:0},
                {text:"I have some money set aside, but I am hoping to buy only the basics for now", value:2},
                {text:"I understand that a proper setup and ongoing care cost money and am prepared for both the starter costs and regular supplies", value:3}
            ]
        },
        {
            id:4,
            topic:"temperature",
            learnLink:"learn.html#temperature",
            question:"How are you planning to keep the water at a safe temperature?",
            answers:[
                {text:"I was just going to use room temperature", value:0},
                {text:"I thought putting the tank near a warm room or window would be enough", value:0},
                {text:"I have a heater set at 78-80°F / 25-27°C, but I am not planning to use a thermometer", value:2},
                {text:"I have a heater and thermometer so I can keep the temperature stable at 78-80°F / 25-27°C and check it regularly", value:3}
            ]
        },
        {
            id:5,
            topic:"water-care",
            learnLink:"learn.html#water-conditioner",
            question:"What is your plan for making tap water safe before it goes into the tank?",
            answers:[
                {text:"I was just going to use tap water as is", value:0},
                {text:"I thought letting water sit out for a while would be enough", value:0},
                {text:"I have water conditioner, but I am still learning when and how much to use", value:2},
                {text:"I have water conditioner and know I need to treat new water before adding it", value:3}
            ]
        },
        {
            id:6,
            topic:"water-care",
            learnLink:"learn.html#cycling",
            question:"What best describes where you are with cycling the tank?",
            answers:[
                {text:"I have not looked into cycling yet", value:0},
                {text:"I want to get a betta and then cycle", value:0},
                {text:"I have heard of cycling, but I am still confused about it", value:1},
                {text:"I know the tank should be cycled before adding a fish, but I have not started yet", value:2},
                {text:"I understand cycling and plan to do a fishless cycle", value:3}
            ]
        },
        {
            id:7,
            topic:"water-care",
            learnLink:"learn.html#water-testing",
            question:"How are you planning to test your water?",
            answers:[
                {text:"I was not planning to test it", value:0},
                {text:"I was going to judge by whether the water looks clean", value:0},
                {text:"I have test strips", value:2},
                {text:"I have a liquid test kit", value:3}
            ]
        },
        {
            id:8,
            topic:"water-care",
            learnLink:"learn.html#monitoring-water-problems",
            question:"If your tank water had a problem, how confident would you be in noticing it?",
            answers:[
                {text:"I probably would not know unless the fish looked sick", value:0},
                {text:"I would wait until something seemed wrong", value:0},
                {text:"I would probably catch some issues with basic testing", value:2},
                {text:"I would be able to monitor ammonia, nitrite, nitrate, and other basics before things got serious", value:3}
            ]
        },
        {
            id:9,
            topic:"maintenance",
            learnLink:"learn.html#maintenance-routine",
            question:"What kind of regular maintenance are you realistically prepared for?",
            answers:[
                {text:"Only cleaning when the tank looks dirty", value:0},
                {text:"Occasional water changes when I remember", value:1},
                {text:"Water changes every couple of weeks", value:2},
                {text:"Weekly partial water changes, testing, and checking the equipment", value:3}
            ]
        },
        {
            id:10,
            topic:"maintenance",
            learnLink:"learn.html#water-changes",
            question:"What sounds most like your plan for water changes?",
            answers:[
                {text:"I would probably replace all the water at once", value:0},
                {text:"I would change water sometimes, but I do not really know how much", value:1},
                {text:"I know partial water changes are better, but I still need to learn the steps", value:2},
                {text:"I am prepared to do partial water changes, treat the new water, and make sure the temperature matches closely", value:3}
            ]
        },
        {
            id:11,
            topic:"environment-enrichment",
            learnLink:"learn.html#substrate",
            question:"What kind of substrate are you planning to use?",
            answers:[
                {text:"I was not planning to use any substrate", value:0},
                {text:"Something that is colourful or glow-in-the-dark", value:0},
                {text:"I have not really thought about it yet and was just going to pick whatever looks nicest", value:1},
                {text:"I am planning to use basic gravel or sand, but I am still learning what works best", value:2},
                {text:"I am planning to use aquasoil, an active substrate, or a mix of that with sand or gravel depending on the plants and setup I want", value:3}
            ]
        },
        {
            id:12,
            topic:"environment-enrichment",
            learnLink:"learn.html#plants",
            question:"What kind of plants or decorations would you choose?",
            answers:[
                {text:"Mostly based on what looks cute or fun", value:0},
                {text:"Whatever matches my aesthetic", value:0},
                {text:"I have some ideas, but I have not looked too much into what is safest for bettas yet", value:1},
                {text:"Plastic plants and small decorations, whatever is easiest to find", value:0},
                {text:"Things like aquatic plants or silk plants, and other decorations that allow for hiding, resting, and moving around comfortably", value:3}
            ]
        },
        {
            id:13,
            topic:"environment-enrichment",
            learnLink:"learn.html#filter-choice",
            question:"What kind of filter are you planning to use?",
            answers:[
                {text:"I was not planning to use a filter, I will change the water when needed", value:0},
                {text:"I was just going to use whatever filter comes with the tank", value:1},
                {text:"I am planning to use a filter, but I have not really looked into what is best for a betta yet", value:2},
                {text:"I am planning to use a sponge filter", value:3}
            ]
        },
        {
            id:14,
            topic:"feeding-health",
            learnLink:"learn.html#feeding",
            question:"What is your plan for feeding?",
            answers:[
                {text:"I would just grab whichever fish food is cheapest or easiest", value:0},
                {text:"Bread flakes or peas", value:0},
                {text:"I know bettas need specific food, but I have not chosen one yet", value:2},
                {text:"I am planning a high-protein staple food made for bettas, with some variety like frozen or freeze dried food", value:3}
            ]
        },
        {
            id:15,
            topic:"feeding-health",
            learnLink:"learn.html#basic-response",
            question:"If your betta seemed sick, injured or started acting unusual, what would you most likely do?",
            answers:[
                {text:"I would not really know what to do", value:0},
                {text:"I would do research and get supplies only once it happened", value:1},
                {text:"I have thought about it, but I am still not fully prepared", value:2},
                {text:"I am already prepared and have medicine, a hospital or quarantine tank, and a basic plan in case my betta gets sick", value:3}
            ]
        },
        {
            id:16,
            topic:"maintenance",
            learnLink:"learn.html#emergency-supplies",
            question:"How prepared are you with extra supplies in case something goes wrong with the tank?",
            answers:[
                {text:"I do not really have any extra supplies planned", value:0},
                {text:"I would probably just buy things if a problem came up", value:1},
                {text:"I would try to DIY / manually fix whatever issue appears using tape or glue", value:0},
                {text:"I have extra supplies and plan to keep extra basics like conditioner, buckets, or a temporary container in case of emergencies", value:3}
            ]
        },
        {
            id:17,
            topic:"environment-enrichment",
            learnLink:"learn.html#tannins-catappa",
            question:"Are you planning to use catappa leaves or tannins in your betta tank?",
            answers:[
                {text:"I have not heard of them before", value:0},
                {text:"I have heard of them, but I do not really know what they do", value:1},
                {text:"I know they can be used in betta tanks, but I don't want the water to look brown", value:2},
                {text:"I know about the benefits of catappa leaves / tannins and I have looked into how to use them properly", value:3}
            ]
        },
        {
            id:18,
            topic:"responsibility-motivation",
            learnLink:"learn.html#why-you-want-a-betta",
            question:"Why do you want to get a betta fish?",
            answers:[
                {text:"They seem low-maintenance and like a good beginner pet", value:0},
                {text:"They are pretty and look good as decor", value:0},
                {text:"They are accessible and I can always get another one if something happens", value:0},
                {text:"I am interested in them and am willing to provide real effort, proper care, and a setup that helps them thrive", value:3}
            ]
        }
    ];

    let currentQuestionIndex=0;
    let userAnswers=[];

    $("#quiz-section").hide();
    $("#required-message").hide();
    $("#back-button").hide();
    $("#submit-button").hide();

    $("#start-quiz-button").on("click", function(){

        $("#quiz-intro").hide();
        $("#quiz-section").show();

        currentQuestionIndex=0;
        renderQuestion();

    });

    $("#next-button").on("click", function(){

        if(!currentQuestionIsAnswered()){
            $("#required-message").show();
            return;
        }

        if(currentQuestionIndex<quizQuestions.length-1){
            currentQuestionIndex++;
            renderQuestion();
        }

    });

    $("#back-button").on("click", function(){

        if(currentQuestionIndex>0){
            currentQuestionIndex--;
            renderQuestion();
        }

    });

    $("#quiz-form").on("submit", function(event){

        event.preventDefault();

        if(!currentQuestionIsAnswered()){
            $("#required-message").show();
            return;
        }

        const resultData=calculateResults();

        localStorage.setItem("bettaQuizResults", JSON.stringify(resultData));
        window.location.href="results.html";

    });

    $(document).on("change", 'input[name="current-question"]', function(){

        userAnswers[currentQuestionIndex]=Number($(this).val());
        $("#required-message").hide();

    });

    function renderQuestion(){

        const currentQuestion=quizQuestions[currentQuestionIndex];

        $("#quiz-progress").text(`Question ${currentQuestionIndex+1} of ${quizQuestions.length}`);
        $("#question-heading").text(`Question ${currentQuestionIndex+1}`);
        $("#question-text").text(currentQuestion.question);

        $("#answer-choices").empty();

        currentQuestion.answers.forEach(function(answer, index){

            const answerTemplate=$("#answer-choice-template").html();
            const $answerElement=$(answerTemplate);

            $answerElement.find("input")
                .attr("value", index)
                .prop("checked", userAnswers[currentQuestionIndex]===index);

            $answerElement.find("span").text(answer.text);

            $("#answer-choices").append($answerElement);

        });

        updateButtons();
        $("#required-message").hide();

    }

    function updateButtons(){

        if(currentQuestionIndex===0){
            $("#back-button").hide();
            $("#exit-quiz-link").show();
        }else{
            $("#back-button").show();
            $("#exit-quiz-link").hide();
        }

        if(currentQuestionIndex===quizQuestions.length-1){
            $("#next-button").hide();
            $("#submit-button").show();
        }else{
            $("#next-button").show();
            $("#submit-button").hide();
        }

    }

    function currentQuestionIsAnswered(){

        return userAnswers[currentQuestionIndex]!==undefined;

    }

    function calculateResults(){

        let totalScore=0;
        let maxScore=0;

        const topicScores={};
        const topicMaximums={};
        const weakTopics=[];

        quizQuestions.forEach(function(question, questionIndex){

            const selectedAnswerIndex=userAnswers[questionIndex];
            const selectedAnswer=question.answers[selectedAnswerIndex];

            totalScore+=selectedAnswer.value;

            const highestQuestionValue=Math.max(...question.answers.map(function(answer){
                return answer.value;
            }));

            maxScore+=highestQuestionValue;

            if(topicScores[question.topic]===undefined){
                topicScores[question.topic]=0;
                topicMaximums[question.topic]=0;
            }

            topicScores[question.topic]+=selectedAnswer.value;
            topicMaximums[question.topic]+=highestQuestionValue;

        });

        for(const topic in topicScores){

            const topicPercent=topicScores[topic]/topicMaximums[topic];

            if(topicPercent<0.6){
                weakTopics.push(topic);
            }

        }

        const overallPercent=totalScore/maxScore;

        let readinessLabel="Not quite yet";
        let resultSummary="You still have some important betta care areas to review before you are ready. Use the recommended next steps to strengthen the parts that need more planning.";

        if(overallPercent>=0.7){
            readinessLabel="You're good to go";
            resultSummary="You seem to have a solid foundation for betta fish care. Keep reviewing the support material and make sure your setup is fully prepared before bringing a betta home.";
        }

        return{
            readinessLabel:readinessLabel,
            resultSummary:resultSummary,
            totalScore:totalScore,
            maxScore:maxScore,
            weakTopics:weakTopics,
            answers:userAnswers
        };

    }

});