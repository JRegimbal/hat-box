---
parent: Tools
layout: tool
title: H-Studio
year: '2013'
platform:
    - Unknown
use_case:
    - Haptic Augmentation
availability: Unavailable
license: Unknown
venue:
    - ACM UIST
haptic_category:
    - Force Feedback
    - Vibrotactile
hardware_abstraction: Consumer
device_names:
    - Novint Falcon
body_position:
    - N/A
driving_feature:
    - Time
device_template: 'No'
effect_localization: Location-aware
media_support:
    - Audio
    - Visual
iterative_playback: 'Yes'
design_approaches:
    - Direct
    - Procedural
    - Additive
interaction_metaphors:
    - Track
    - Keyframe
    - Demonstration
image: /assets/tools/hstudio.png
connectivity:
    - IMU Sensor
storage:
    - Unknown
---
H-Studio is a tool meant to add haptic effects, primarily motion effects, to a pre-existing video file.
Its primary interface provides a preview of the original audio-visual content, tracks of the different parameters that can be edited in H-Studio, and a visual preview of a selected motion effect.
Data to drive a motion effect can be input from a force-feedback device directly or from another source (e.g., an IMU), and motion effects can be played back in the tool to aid in further refinement.

For more information, consult the [UIST'13 poster](https://doi.org/10.1145/2508468.2514721).
