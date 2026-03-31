---
parent: Tools
layout: tool
title: HapticGen
year: '2025'
platform:
    - Python
availability: Available
license: Open Source (MIT)
venue:
    - ACM CHI
use_case:
    - Prototyping
body_position:
    - N/A
haptic_category:
    - Vibrotactile
device_template: 'No'
hardware_abstraction: Consumer
device_names:
    - Meta Quest
driving_feature:
    - Time
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - Procedural
    - Description
interaction_metaphors:
    - None
storage:
    - WAV
connectivity:
    - None
image: /assets/tools/hapticgen.jpg
---
HapticGen uses a modified version of Meta's AudioCraft project to generate haptic waveforms from user-specified prompts.
The AudioCraft model was fine-tuned using a haptic dataset created automatically from an existing text-to-audio dataset that was then curated by expert participants.
In the design interface, the duration of a desired effect can be specified by the user, but other aspects of it are left entirely to the model.

For more information, consult the [CHI'25 paper](https://dl.acm.org/doi/10.1145/3706598.3713609) and the [GitHub repository](https://github.com/HapticGen/HapticGen).
