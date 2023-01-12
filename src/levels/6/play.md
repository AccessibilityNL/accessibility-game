---

layout: levels/level-kokervisie.pug
index: 6
title: Kokervisus

# tekst

brand_title: Janssen Furniture
brand_subtitle: Live in Luxury

button_text_next: Lees meer
button_text_back: Terug

order_text: Bestellen
order_confirm_text: Plaats bestelling

# meubulair lijst:
furniture:
  - title: Övrigt
    subtitle: Verlichtend
    image: lamp.jpg
    options:
      - label: Kleur
        choices: 
          - label: Kiezel
            color: '#CECED7'
          - label: Basalt
            color: '#303038'
  - title: Störtade
    subtitle: Ontspanning na een drukke dag
    image: leather-sofa.jpg
    options:
      - label: Maat
        choices: 
          - label: 'Groots: 1.75m'
          - label: 'Royaal: 2.5m'
  - title: Fjorgen
    subtitle: De active stoel voor elke eetkamer
    image: interior.jpg
    options:
      - label: Kleur
        choices:
          - label: Zee
            color: '#8FAEC2'
          - label: Zand
            color: '#D9D0CB'
          - label: Lucht
            color: '#A8D6E3'
          - label: Kiezel
            color: '#CECED7'
      - label: Maat
        choices:
          - label: 'M: 35cm'
          - label: 'L: 45cm'

#correct:
correct_options: {Kleur: 'Kiezel', Maat: 'M: 35cm'}

#popup
popup_title: 'Boodschappenlijstje:'
popup_text: Een kleine, lichtgrijze stoel.
popup_button_text: Begin

# score popup tekst en knoppen
level_score_win: Level behaald!
level_score_fail: Level gefaald...
level_score_bad: Helaas, probeer het nog een keer.
level_score_good: Goed gedaan, maar probeer het nog sneller te doen!
level_score_perfect: Perfect! Heel goed.

level_score_retry: Probeer opnieuw
level_score_next: Ga verder

---
