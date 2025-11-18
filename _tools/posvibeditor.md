---
parent: Tools
layout: tool
title: posVibEditor
year: '2008'
platform:
    - Windows
availability: Unavailable
license: Unknown
venue:
    - IEEE HAVE
    - IEEE WHC
use_case:
    - Prototyping
    - Hardware Control
haptic_category:
    - Vibrotactile
hardware_abstraction: Class
device_names:
    - ERM
device_template: 'No'
body_position:
    - N/A
driving_feature:
    - Time
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - Direct
    - Procedural
    - Additive
    - Library
interaction_metaphors:
    - Track
    - Keyframe
image: /assets/tools/posVibEditor.png
connectivity:
    - None
storage:
    - Custom XML
---
The posVibEditor supports the creation of vibration patterns across multiple ERM motors.
Vibration assets can be created by manipulating keyframes in a vibration intensity over time visualization.
These assets, or provided templates, can be copied into a track interface to decide which motor each will be displayed on and at what time.
A "perceptually transparent rendering" mode is included to adjust the mapping of asset amplitude values to output voltage values so that the authored effect is felt as intended.

For more information, consult the [2008 Workshop on Haptic Audio Visual Environments and Games paper](https://doi.org/10.1109/HAVE.2008.4685310) and the [2009 WHC paper](https://doi.org/10.1109/WHC.2009.4810912).
