---
parent: Tools
layout: tool
title: Synth-A-Modeler Designer
year: '2012'
venue:
    - Linux Audio Conference
    - EuroHaptics
use_case:
    - Simulation
    - Music
platform:
    - Windows
    - macOS
    - Linux
availability: Available
license: Open Source (GPL 2)
haptic_category:
    - Force Feedback
hardware_abstraction: Class
device_template: 'No'
device_names:
    - Novint Falcon
    - FireFader
body_position:
    - N/A
driving_feature:
    - Action
effect_localization: Device-centric
media_support:
    - Audio
iterative_playback: 'No'
design_approaches:
    - Procedural
interaction_metaphors:
    - Dataflow
image: /assets/tools/synth-a-modeler.jpg
storage:
    - Faust DSP File
    - SAM Model File
connectivity:
    - None
---
The Synth-A-Modeler Designer is designed for physical modeling for sound synthesis and can be connected to force-feedback devices as inputs.
Models can be constructed using mass-interaction and waveguide modeling through graphical elements.
A special "port" object provides 1 DoF of input through a supported haptic device to allow physical control over the model.
When a model is complete, the Designer can export it to a Faust DSP file that can be compiled to run on various targets, such as on the Web, mobile devices, and desktop computers.

For more information, consult the [2012 Linux Audio Conference paper](https://hal.archives-ouvertes.fr/hal-03162970),
the [2016 EuroHaptics paper](https://doi.org/10.1007/978-3-319-42324-1_48),
and the both the [GitHub repository for the designer](https://github.com/ptrv/SaM-Designer) and [the one for the compiler](https://github.com/eberdahl/SaM).
