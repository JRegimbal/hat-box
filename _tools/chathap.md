---
parent: Tools
layout: tool
title: ChatHAP
year: '2025'
platform:
    - Python
availability: Available
license: Open Source (AGPL v3)
venue:
    - ACM CHI
use_case:
    - Prototyping
body_position:
    - N/A
haptic_category:
    - Vibrotactile
device_template: 'No'
hardware_abstraction: Class
device_names:
    - Voice Coil
    - HapCoil-One
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
    - None
connectivity:
    - None
image: /assets/tools/chathap.jpg
---
ChatHAP allows users to have a conversation with an LLM to create vibrotactile effects.
Based on the user's requests, ChatHAP will control the parameters of a vibrotactile synthesizer to produce an effect that is visually shown on screen and can be played back on a connected device.
Further instructions can be given to the LLM to modify it, although the parameters of the effect are not exposed to the user.

For more information, consult the [CHI'25 paper](https://doi.org/10.1145/3706598.3713441) and the [GitHub repository](https://github.com/ChatHAP/ChatHAP).
