---
parent: Tools
layout: tool
title: HapticPilot
year: '2023'
platform:
    - Unity
availability: Unavailable
license: Unknown
venue:
    - ACM IMWUT
body_position:
    - Hand
use_case:
    - Virtual Reality
haptic_category:
    - Vibrotactile
hardware_abstraction: Bespoke
device_template: 'No'
device_names:
    - HapticPilot Glove
driving_feature:
    - Time
effect_localization: Target-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Process
interaction_metaphors:
    - Demonstration
storage:
    - Unknown
connectivity:
    - None
image: /assets/tools/hapticpilot.webp
---
HapticPilot allows for users to sketch haptic patterns on their hands in virtual reality. When patterns are played back, an algorithm that accounts for differences in hand posture is used so that patterns feel the same even as the user moves. A glove containing 12 actuators and 13 accelerometers is used to track hand movement and render recorded patterns.

For more information about HapticPilot, consult the [2023 Proceedings of the ACM on Interactive, Mobile, Wearable, and Ubiquitous Technology paper](https://doi.org/10.1145/3631453).
