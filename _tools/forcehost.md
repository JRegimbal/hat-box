---
parent: Tools
layout: tool
title: ForceHost
year: '2022'
venue:
    - NIME
use_case:
    - Music
platform:
    - Web
    - Faust
availability: Available
license: Open Source (GPL 3)
haptic_category:
    - Force Feedback
hardware_abstraction: Bespoke
device_names:
    - TorqueTuner
body_position:
    - N/A
driving_feature:
    - Action
effect_localization: Location-aware
media_support:
    - Audio
iterative_playback: 'Yes'
design_approaches:
    - Process
interaction_metaphors:
    - Demonstration
storage:
    - None
connectivity:
    - OSC
image: /assets/tools/forcehost.png
---
ForceHost is a toolchain for embedded physical modelling of audio-haptic effects for digital musical instruments.
It primarily supports the [TorqueTuner](./torquetuner.html) device, but can optionally be used with ESP32 boards supporting audio I/O, a 1-DoF servo, and network connectivity. Network connectivity is necessary so that it can be connected to other audio synthesis programs and so users can access the editor GUI through a web application.
This application allows users to create haptic effects at runtime by sketching and manipulating curves representing transfer functions.
Based on [Faust](https://faust.grame.fr), ForceHost is also supported by a fork of Synth-a-Modeler and can be controlled with a lower-level API called haptic1D.

For more information, please consult the [NIME'22 paper](https://doi.org/10.21428/92fbeb44.76cfc96e) or visit the [GitLab repositories](https://gitlab.com/ForceHost).
