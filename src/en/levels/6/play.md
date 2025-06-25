---
lang: en
layout: levels/level-kokervisie.pug
index: 6
title: Tunnel Vision
back_button_text: Go back

# tekst

brand_title: Janssen Furniture
brand_subtitle: Live in Luxury

button_text_next: Read more
button_text_back: Back

order_text: Order
order_confirm_text: Place order

# meubulair lijst:
furniture:
  - title: Övrigt
    subtitle: Shines bright
    image: lamp.jpg
    options:
      - label: Colour
        choices: 
          - label: Cobblestone
            color: '#CECED7'
          - label: Basalt
            color: '#303038'
  - title: Störtade
    subtitle: Relaxation after a hard day
    image: leather-sofa.jpg
    options:
      - label: Size
        choices: 
          - label: 'Grande: 1.75m'
          - label: 'Royal: 2.5m'
  - title: Fjorgen
    subtitle: The active chair for every dining room
    image: interior.jpg
    options:
      - label: Colour
        choices:
          - label: Ocean
            color: '#8FAEC2'
          - label: Sand
            color: '#D9D0CB'
          - label: Air
            color: '#A8D6E3'
          - label: Cobblestone
            color: '#CECED7'
      - label: Size
        choices:
          - label: 'M: 35cm'
          - label: 'L: 45cm'

#correct:
correct_options: {Colour: 'Cobblestone', Size: 'M: 35cm'}

#popup
popup_title: 'Shopping list:'
popup_text: A small, light grey chair.
popup_button_text: Start

# score popup tekst en knoppen
level_score_win: Level passed!
level_score_fail: Level failed...
level_score_bad: Too bad, please try again.
level_score_good: Well done, but you can do better!
level_score_perfect: Perfect! Very good.

level_score_retry: Try again
level_score_next: Continue

---