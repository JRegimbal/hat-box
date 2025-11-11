---
parent: Tools
layout: tool
title: Beadbox
year: '2015'
platform:
    - Windows
availability: Available
license: Open Source (MIT)
venue:
    - UAHCI
use_case:
    - Accessibility
haptic_category:
    - Vibrotactile
hardware_abstraction: Class
device_names:
    - EmotiChair
    - Voice Coil
device_template: 'No'
body_position:
    - N/A
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
    - Score
image: /assets/tools/beadbox.jpg
connectivity:
    - None
storage:
    - MIDI
---
Beadbox allows users to place and connect beads across different tracks, representing different physical actuators.
Each bead provides a visual representation of vibration frequency and intensity.
Duration can be controlled by forming a connection across two beads.
If actuator, duration, or frequency changes between the beads, Beadbox will move between these values during playback.

For more information about Beadbox, consult the [UAHCI 2016 paper](https://doi.org/10.1007/978-3-319-40244-4_5) and the [GitHub repository](https://github.com/somang/TheBeadbox).
