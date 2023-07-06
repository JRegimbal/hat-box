---
parent: Tools
layout: tool
title: DOLPHIN
year: '2021'
platform:
    - Qt
availability: Available
license: Open Source (GPL 3)
haptic_category:
    - Vibrotactile
hardware_abstraction: Consumer (Ultraleap STRATOS Explore)
driving_feature:
    - Time
effect_localization: Location-aware
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Process
interaction_metaphors:
    - Generic Menu
image: /assets/tools/dolphin.png
---
DOLPHIN is a framework with a design tool for creating ultrasound mid-air tactile renderings for perceptual studies.
Users can create new classes to represent the geometries of shapes and the sampling strategies used to display them.
Parameters of the shape and sampling strategy can be modified in the tool with the help of pressure and position visualizations.
DOLPHIN also includes an interface to PsychoPy to aid in studies.
While the framework currently only supports the STRATOS, the software is written so that support for new devices can be added in the future.
A "reader" module is also available that can be included in other software to play back the renderings designed in DOLPHIN.

For more information, please consult the [SAP'21 paper](https://doi.org/10.1145/3474451.3476232) or the [GitLab repository](https://gitlab.com/h-reality/dolphin/).
