---
parent: Tools
layout: tool
title: VibViz
year: '2015'
platform:
    - Web
availability: Available
license: Open Source (BSD 3-Clause)
venue:
    - IEEE WHC
use_case:
    - Prototyping
haptic_category:
    - Vibrotactile
hardware_abstraction: Class
device_template: 'No'
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
    - Library
    - Description
interaction_metaphors:
    - None
image: /assets/tools/vibviz.png
connectivity:
    - None
storage:
    - WAV
---
VibViz is a library of vibrotactile effects and associated filtering and visualization tools to find elements within it.
Each effect is associated with various tags representing emotions ("angry"), metaphors ("heartbeat"), and possible uses ("alarm") that can be used to filter the library.
Two chart visualizations lay out the effects by duration and signal RMS, and by pleasantness and urgency.
Additional filters are available for selecting effects with a specific tempo, rhythm structure, and roughness.
A complete list of the effects in the library is present showing each one's metaphor and usage tags along with a visualization of intensity over time.
Selected effects are played as audio outputs, allowing them to be displayed on a connected actuator.

For more information on VibViz, consult the [2015 World Haptics Conference paper](https://doi.org/10.1109/WHC.2015.7177722),
[the VibViz website](https://www.cs.ubc.ca/~seifi/VibViz/main.html),
and [the GitHub repository](https://github.com/hastiseifi/VibViz---Open-Source).
