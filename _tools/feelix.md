---
parent: Tools
layout: tool
title: Feelix
year: '2020'
venue:
    - ACM ICMI
    - ACM NordiCHI
    - ACM TEI
platform:
    - Windows
    - macOS
availability: Available
license: Open Source (MIT)
haptic_category:
    - Force Feedback
use_case:
    - Prototyping
hardware_abstraction: Class
device_names:
    - Brushless Motors
device_template: 'No'
driving_feature:
    - Time
    - Action
body_position:
    - N/A
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
storage:
    - Feelix Effect File
connectivity:
    - API
---
Feelix supports the creation of effects on a 1 DoF motor through two main interfaces.
The first allows for force-feedback effects to be sketched out over either motor position or time.
For time-based effects, user-created and pre-existing effects can be sequenced in a timeline.
The second interface provides a dataflow programming environment to directly control the connected motor.
Parameters of these effects can be connected to different inputs to support real-time adjustment of the haptic interaction.

For more information, consult the [2020 ICMI paper](https://doi.org/10.1145/3382507.3418819), the [NordiCHI'22 tutorial](https://doi.org/10.1145/3547522.3558900), and the [TEI'23 studio](https://doi.org/10.1145/3569009.3571842).
and the [Feelix documentation](https://docs.feelix.xyz/).
