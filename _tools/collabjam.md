---
parent: Tools
layout: tool
title: CollabJam
year: '2025'
platform:
    - Electron
availability: Available
license: Open Source (MIT, CC-BY-4.0)
venue:
    - ACM CHI
use_case:
    - Real-time Collaboration
    - Prototyping
haptic_category:
    - Vibrotactile
hardware_abstraction: Bespoke
device_template: 'No'
device_names:
    - CollabJam Hardware
    - CollabJam Harness
body_position:
    - Head
    - Arm
    - Hand
    - Torso
    - Leg
    - Foot
driving_feature:
    - Time
effect_localization: Location-aware
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - Direct
    - Library
interaction_metaphors:
    - Track
    - Demonstration
image: /assets/tools/collabjam.png
connectivity:
    - None
storage:
    - Internal
---

CollabJam is an open-source collaborative prototyping suite, designed to support the synchronous design of on-body vibrotactile experiences in remote or co-located scenarios.
Its primary purpose is to facilitate communication between designers by enabling them to express haptic intentions through shared tactile controls.

Technically, CollabJam consists of a cross-platform desktop client application that communicates via a central server.
This software connects wirelessly through Bluetooth Low Energy (BLE) to custom tactile displays capable of driving four independent actuators (compatible with ERMs, LRAs, or VCAs).
These actuators can be freely attached to the skin using a modular harness.
To control the actuation, users utilize gamepads for fine-grained intensity modulation or keyboards for standard actuation.
Users connect within virtual rooms to share real-time control over actuators, effectively "jamming" together to test ideas before recording and refining them.

For more information about CollabJam, consult the [CHI'25 paper](https://doi.org/10.1145/3706598.3713469)
and the [main GitHub repository](https://github.com/TactileVision/CollabJam).


