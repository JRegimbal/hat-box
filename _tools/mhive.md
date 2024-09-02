---
parent: Tools
layout: tool
title: mHIVE
year: '2014'
platform:
    - Android
availability: Available
license: Open Source (BSD 3-Clause)
venue: IEEE Haptics Symposium
use_case:
    - Collaboration
    - Prototyping
haptic_category:
    - Vibrotactile
hardware_abstraction: Class
device_names:
    - Voice Coil
driving_feature:
    - Time
effect_localization: Device-centric
body_position:
    - N/A
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Process
interaction_metaphors:
    - Keyframe
    - Demonstration
image: /assets/tools/mHIVE.png
storage: Internal
connectivity: None
---
mHIVE is a haptic instrument where the user interacts with a tablet's touchscreen to create vibrotactile output over audio.
Most of the screen is devoted to a region where frequency is mapped to the touch along the x-axis and amplitude is mapped to the y-axis.
Sine, square, sawtooth, and triangle waveforms can be selected in a menu below this.
An attack-decay-sustain-release (ADSR) envelope can be modified by dragging the different points of its visualization.
Effects created with mHIVE can be recorded and played back later.

For more information, consult the [2014 Haptics Symposium paper](https://doi.org/10.1109/HAPTICS.2014.6775476)
and the [GitHub repository](https://github.com/ubcspin/mHIVE).
