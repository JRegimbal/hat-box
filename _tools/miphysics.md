---
parent: Tools
layout: tool
title: miPhysics
year: '2019'
platform:
    - Processing
availability: Available
license: Open Source (GPL 3)
venue:
    - HAID
use_case:
    - Music
    - Simulation
haptic_category:
    - Force Feedback
hardware_abstraction: Consumer
device_names:
    - Haply 2DIY
body_position:
    - N/A
driving_feature:
    - Action
effect_localization: Target-centric
media_support:
    - Audio
    - Visual
iterative_playback: 'N/A'
design_approaches:
    - Process
    - Library
interaction_metaphors:
    - N/A
image: /assets/tools/miphysics.png
storage:
    - None
connectivity:
    - API
---
miPhysics is a physical modelling framework built on [Processing](https://www.processing.org).
Users can specify a mass-interaction system in the code and interact with it using a Haply 2DIY or other [hAPI](https://hapi.haply.co/docs/)-compatible device.
The avatar representing the end effector and the physical elements in the simulation are visualized in the sketch window and sound synthesis is possible through [Minim](https://code.compartmental.net/minim/index.html).

Example code is available on the [miPhysics GitHub repository](https://github.com/mi-creative/miPhysics_Processing) and more information on it is available in the [HAID 2019 paper](https://hal.science/hal-02015740).
