---
parent: Tools
layout: tool
title: Feelix
year: '2020'
platform:
    - Windows
    - macOS
availability: Open Source (MIT)
haptic_category:
    - Force Feedback
hardware_abstraction: Class (1 DoF motor)
driving_feature:
    - Time
    - Action
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Process
    - Sequencing
    - Library
interaction_metaphors:
    - Track
    - Demonstration
    - Dataflow
image: /assets/tools/feelix.jpg
---
Feelix supports the creation of effects on a 1 DoF motor through two main interfaces.
The first allows for force-feedback effects to be sketched out over either motor position or time.
For time-based effects, user-created and pre-existing effects can be sequenced in a timeline.
The second interface provides a dataflow programming environment to directly control the connected motor.
Parameters of these effects can be connected to different inputs to support real-time adjustment of the haptic interaction.

For more information, consult the [2020 ICMI paper](https://doi.org/10.1145/3382507.3418819)
and the [Feelix documentation](https://docs.feelix.xyz/).
