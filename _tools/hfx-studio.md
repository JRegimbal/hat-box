---
parent: Tools
layout: tool
title: HFX Studio
year: '2018'
platform:
    - Unity
availability: Unavailable
license: Unknown
venue:
    - ACM VRST
use_case:
    - Virtual Reality
haptic_category:
    - Force Feedback
    - Vibrotactile
    - Temperature
hardware_abstraction: Consumer
device_names:
    - Thalmic Myo
    - Subpack M2
    - Oculus Touch
    - Dyson Pure Cool Link
body_position:
    - Head
    - Torso
    - Arm
    - Leg
    - Foot
driving_feature:
    - Time
    - Action
effect_localization: Target-centric
media_support:
    - Audio
    - Visual
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Process
    - Sequencing
    - Library
interaction_metaphors:
    - Track
    - Demonstration
image: /assets/tools/hfx-studio.png
connectivity:
    - None
storage:
    - Unknown
---
HFX studio allows for authoring haptic effects directly on the body or attaching them to objects in a VR environment.
Perceptual models are used to encode and render the desired effects to the extent supported by the connected hardware.
This intermediate perceptual layer is intended to separate the design of haptic effects from the devices used to display them.

For more information, consult the [VRST'18 paper](https://doi.org/10.1145/3281505.3281518).
