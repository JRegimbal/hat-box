---
parent: Tools
layout: tool
title: Voodle
year: '2017'
platform:
    - NodeJS
availability: Available
license: Unknown
venue:
    - ACM DIS
use_case:
    - Prototyping
    - Communication
haptic_category:
    - Force Feedback
hardware_abstraction: Bespoke
device_template: 'No'
device_names:
    - CuddleBit
body_position:
    - N/A
driving_feature:
    - Action
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - Procedural
interaction_metaphors:
    - Demonstration
storage:
    - None
connectivity:
    - None
image: /assets/tools/voodle.png
---
While Voodle is primarily meant to control 1 DoF robots called "CuddleBits", it can also be used for haptic prototyping.
The frequency and amplitude of a user's voice is used to drive the output of the system.
Each parameter is normalized and used to create a weighted average with the bias value set by the user.
The user can then add random noise to the system and scale and smooth the resulting output.
The mapping of voice input to motor output occurs in real time.

For more information, consult the [DIS'17 paper](https://doi.org/10.1145/3064663.3064668)
and the [GitHub repository](https://github.com/ubcspin/Voodle).
