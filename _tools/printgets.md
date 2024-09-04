---
parent: Tools
layout: tool
title: Printgets
year: '2020'
platform:
    - Pure Data
    - Raspberry Pi
availability: Available
license: Open Source (LGPL 3)
venue:
    - HAID
use_case:
    - Hardware Control
haptic_category:
    - Vibrotactile
hardware_abstraction: Class
device_names:
    - Electroactive Polymer
body_position:
    - N/A
driving_feature:
    - Action
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Process
interaction_metaphors:
    - Dataflow
image: /assets/tools/printgets.jpg
connectivity:
    - API
storage:
    - None
---
Printgets is a library to develop printed vibrotactile widgets for piezoelectric actuators that are triggered by capacitive input devices.
Input and output devices are connected to a computer, such as a Raspberry Pi, and parameters mapping inputs to outputs can be controlled using Purr Data, a fork of Pure Data.
This interface is meant to support the development of tactile widgets.

For more information on Printgets, please consult the [HAID 2020 paper](https://lilloa.univ-lille.fr/handle/20.500.12210/56770) or the [GitLab repository](https://gitlab.inria.fr/Loki/happiness/libhappiness).
