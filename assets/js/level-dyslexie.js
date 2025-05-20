/* 

    Dyslexie level script
    for Accessibility Game

*/

var dyslexie = {

    // jquery vars
    $text: undefined,
    $content: undefined,
    $questions: undefined,

    // interval object
    updateTextInterval: undefined,

    // score vars
    timer: new Timer(),
    score: 400,

    init() {
        this.$text = $('#text');
        this.$content = $('#content');
        this.$questions = $('#questions');

        this.setupText();
    },

    // make a <span> out of each character to allow transformations
    setupText() {
        // change each charater to it's own element
        this.$content.children().each((_, elem) => {
            let charArray = elem.innerHTML.split('');
            elem.innerHTML = '';
            charArray.forEach(c => {
                elem.innerHTML += '<span>' + c + '</span>';
            });

            // save original text in data attribute
            $(elem).children().each((_, e) => {

                $(e).attr('data-original-text', e.innerHTML);

            })

            // randomly add transform
            $(elem).children().each((_, e) => {
                if (Math.random() < 0.2 && e.innerHTML !== ' ') {
                        $(e).addClass('flip')
                }
            });
        });

        // trigger update every x ms
        this.updateTextInterval = setInterval(this.updateText, 700);
    },

    // do dyslexia to the text
    updateText() {
        const CHANCE = 0.03;
        const CHANCE_FLIP = 0.2;

        // in each element in #content
        dyslexie.$content.children().each((_, elem) => {
            // for each character
            $(elem).children().each((index, c) => {

                // first reset
                const originalText = $(c).attr('data-original-text');
                        $(c).removeClass('flip');
                        if (originalText && c.innerHTML !== originalText) 
                            c.innerHTML = originalText;

                if (c.innerHTML !== ' ') {
                    if (Math.random() < CHANCE) { // change char order

                        if (Math.random() < 0.5) {
                            c.innerHTML = $(elem).children().eq(index+1).html();
                        } else {
                            c.innerHTML = $(elem).children().eq(index-1).html();
                        }

                        if (c.innerHTML == 'undefined') c.innerHTML = originalText;

                    } else if (Math.random() < CHANCE_FLIP) { // add flip class
                        $(c).addClass('flip');
                    }
                }

            });
        })
    },

    // change page between questions and text
    changePage() {
        console.log('clicked');

        const $dyslexie = $('#dyslexie');
        // transition
        const isOnQuestions = $dyslexie.hasClass('on-questions');
        // fade in and out
        fadeOut(isOnQuestions ? '#questions' : '#text', () => {
            fadeIn(isOnQuestions ? '#text' : '#questions');
            // remove class
            $dyslexie.toggleClass('on-questions');
        });
    },

    amountIncorrect: 0,

    // check correctness of questions
    checkQuestions() {
        let correct = true;
        // for each input field
        $('#questions input[type=field]').each((_, q) => {

            const checkA = this.filterText(q.value);
            const checkB = this.filterText(reverse($(q).attr('data-correct')));
            
            console.log(checkA, checkB);

            if (checkA !== checkB) {  // incorrect

                correct = false;
                $(q).addClass('incorrect');

                // decrease score
                this.score -= 10;

                // add incorrect class to corresponding label
                $('#questions label[for=' + $(q).attr('id') + ']').addClass('incorrect');

            } else { // correct

                // remove incorrect class
                $(q).removeClass('incorrect');
                // remove incorrect class from corresponding label
                $('#questions label[for=' + $(q).attr('id') + ']').removeClass('incorrect');

            }

        });

        // if all questions are correct: calc score and end level
        if (correct || this.amountIncorrect > 2) {
            this.calcScore();
        } else {
            this.amountIncorrect++;
            //play incorrect buzzer sound
            globalSounds.incorrect.play();
        }
    },

    // filter out characters and capitalisation
    filterText(str) {
        str = str.toLowerCase();
        str = str.replace(" en ", "");
        // filter out non letters
        if ( str!=="" ) str = str.match(/\w/g).join('');
        return str;
    },

    // calculate score at end of level
    calcScore() {
        const time = this.timer.stopAndGet();
        this.score -= time * 100; // remove 100 points per minute taken

        // push popup
        showScore(this.score);
    }

}

// Delete after level is complete
function unload() {;
    clearInterval(dyslexie.updateTextInterval);
    dyslexie = undefined;
}

// GO
dyslexie.init();