
$(document).ready(function(){

    const storedResults=localStorage.getItem("bettaQuizResults");

    if(!storedResults){
        $("#result-label").text("No Results Found");
        $("#result-summary").text("You have not completed the quiz yet.");
        $("#next-steps-text").text("Please return to the quiz page and complete the quiz first.");
        $("#print-summary").text("Please return to the quiz page and complete the quiz first.");
        $(".review-card").show();
        return;
    }

    const resultData=JSON.parse(storedResults);

    populateResults(resultData);
    showRecommendedCards(resultData.weakTopics);
    setPrintSummary(resultData);

    $("#redo-quiz-button").on("click", function(event){

        event.preventDefault();
        localStorage.removeItem("bettaQuizResults");
        window.location.href="quiz.html";

    });

    $("#save-pdf-button").on("click", function(){

        window.print();

    });

    function populateResults(resultData){

        $("#result-label").text(resultData.readinessLabel);
        $("#result-summary").text(resultData.resultSummary);

        if(resultData.readinessLabel==="You're good to go"){
            $("#next-steps-text").text("You have a strong starting foundation. Review any weaker areas below, and make sure your tank setup is completely ready before bringing your betta home.");
        }else{
            $("#next-steps-text").text("You are not quite ready yet. Focus on the review areas below first, then come back and try the quiz again once your plan is stronger.");
        }

    }

    function showRecommendedCards(weakTopics){

        $(".review-card").hide();

        if(!weakTopics || weakTopics.length===0){
            $(".review-card").show();
            return;
        }

        weakTopics.forEach(function(topic){

            $(`.review-card[data-topic="${topic}"]`).show();

        });

    }

    function setPrintSummary(resultData){

        let weakTopicText="None identified.";

        if(resultData.weakTopics && resultData.weakTopics.length>0){
            weakTopicText=formatTopicList(resultData.weakTopics);
        }

        const printText=`Result: ${resultData.readinessLabel}
Summary: ${resultData.resultSummary}
Score: ${resultData.totalScore} out of ${resultData.maxScore}
Topics to review: ${weakTopicText}`;

        $("#print-summary").text(printText);

    }

    function formatTopicList(topics){

        const topicNames={
            "setup-basics":"Tank size and basic setup",
            "water-care":"Water quality and cycling",
            "temperature":"Temperature and heating",
            "maintenance":"Maintenance and water changes",
            "environment-enrichment":"Environment, substrate, plants, and decor",
            "feeding-health":"Feeding, health, and emergency care",
            "responsibility-motivation":"Responsibility and readiness mindset"
        };

        return topics.map(function(topic){
            return topicNames[topic] || topic;
        }).join(", ");

    }

});