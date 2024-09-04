---
parent: Tools
layout: tool
title: Tactile Brush
year: '2011'
platform:
    - Pure Data
venue:
    - ACM CHI
use_case:
    - Hardware Control
availability: Unavailable
license: Unknown
haptic_category:
    - Vibrotactile
hardware_abstraction: Consumer
device_names:
    - C-2 Tactor
driving_feature:
    - Time
effect_localization: Location-aware
body_position:
    - N/A
media_support:
    - None
iterative_playback: 'N/A'
design_approaches:
    - Process
interaction_metaphors:
    - 'N/A'
image: /assets/tools/tactile-brush.jpg
storage:
    - None
connectivity:
    - Tactile Brush UDP
---
The Tactile Brush is an algorithm to create tactile animations on discrete vibrotactile arrays.
The algorithm allows for the creation of stationary or moving tactile objects within the limits of a tactile array.
Their motion paths and vibration intensities are used to calculate which actuators should be triggered to produce the intended effect, the intensity at which each should vibrate, and the onset time of and duration of vibration for each.
A version of it was implemented in a Pure Data application.

For more information, consult the [CHI'11 paper](https://doi.org/10.1145/1978942.1979235).
