---
parent: Tools
layout: tool
title: Mango
year: '2015'
platform:
    - Unknown
availability: Unavailable
license: Unknown
haptic_category:
    - Vibrotactile
hardware_abstraction: Consumer (C-2 Tactors)
driving_feature:
    - Time
effect_localization: Location-aware
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Process
    - Sequencing
interaction_metaphors:
    - Track
    - Keyframe
    - Demonstration
image: /assets/tools/mango.png
---
Mango is a graphical tool for creating effects on vibrotactile arrays.
A visualization of the layout of the actuators in the array is present in the editor.
Users can create "animation objects" with different positions and intensities, and create paths to define the motion of these objects over time.
Parameters can be adjusted over time as well through the use of keyframes.
A rendering algorithm is used to transform these tactile animations into actuator signals so that the authored vibrotactile experience is perceived by the user.

For more information, consult the [UIST'15 paper](https://doi.org/10.1145/2807442.2807470).
