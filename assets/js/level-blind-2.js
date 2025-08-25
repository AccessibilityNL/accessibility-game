/*

    Blind level script
    for Accessibility Game

*/


var blind = {
    // Vars
    $content: $('#content'),

    // keep track of focussed element
    $focusElem: undefined,

    // score and timer
    score: 400,
    timer: new Timer(),

    // Methods
    // Init
    init() {
        // for each in content
        this.$content.find('*').each( (_, elem) => { 

            const $elem = $(elem);

            // make focussable and attach handler
            // checks if just text or html element parent
            if ($elem.children().length === 0)  {
                $elem.attr('tabindex', '0');
                $elem.focus(() => blind.onFocus($elem));
            }
            else {
                const child = $elem.children().eq(0);
                child.attr('tabindex', '0');
                child.focus(() => blind.onFocus(child));
                // add Enter click handler
            }

        });

        // attach onKey function
        $(document).on('keydown', this.onKey);

        // TODO: detect swipes on mobile
        // for now:
        if ($(window).width() < 400) {
            if (confirm("Dit level werkt nog niet op mobiel, omdat een toetsenbord nodig is. \nWil je dit level overslaan?")) {
                showScore('100');
            }
        }

        // welcome player
    },

    // Handle focus
    onFocus(elem) {
        // speak
        // if no html content, read title attribute
        speechSynthesis.cancel();
        if (elem.html() !== "") {
            this.speak(elem.html());
        }
        else {
            // if input, also read value
            if (elem.prop('tagName') === 'INPUT')
                this.speak(elem.attr('title') + '' + elem.val())
            else
                this.speak(elem.attr('title'));
        }
        // set current elem
        this.$focusElem = $(elem);
        console.log(this.$focusElem);
    },

    // speak every key pressed
    onKey(key) {
        // speak
        let keyName = key.key;
        switch(keyName) {
            case 'Tab': keyName =  '';       break
            case ' ': keyName = 'Spatie';    break
            case '.': keyName = 'punt';      break
            case ',': keyName = 'comma';     break
            case ';': keyName = 'puntcomma'; break
        }
        blind.speak(String(keyName));

        // check for Enter input handler and exec
        if (keyName === "Enter" && blind.$focusElem.attr('data-confirm')) {
            eval( blind.$focusElem.attr('data-confirm') );
        }
    },

    // Speaks string using SpeechSynthesis
    speak(str) {
        const utterance = new SpeechSynthesisUtterance(str);
        speechSynthesis.speak(utterance);
    },

    // calculate score
    calcScore() {
        return this.score - (this.timer.stopAndGet() * 50);
    }
};

blind.init();

function unload() {
    $(document).off('keydown');
    blind = undefined;
}