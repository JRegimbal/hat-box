---
parent: Tools
layout: tool
title: TactJam
year: '2021'
platform:
    - Electron
availability: Available
license: Open Source (MIT, CC-BY-4.0)
venue: ACM TEI
use_case:
    - Collaboration
    - Prototyping
haptic_category:
    - Vibrotactile
hardware_abstraction: Bespoke
device_names:
    - TactJam Hardware
body_position:
    - Various
driving_feature:
    - Time
effect_localization: Location-aware
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Library
interaction_metaphors:
    - Demonstration
image: /assets/tools/tactjam.png
connectivity: None
storage: Internal
---
TactJam consists of a hardware component, client software component, and server component.
The hardware includes eight ERM motors each connected to a board with push buttons corresponding to each.
In the client, users can create effects by arranging dots representing the motors on a 3D model of a human.
With the hardware connected over USB, patterns can be recorded into the client as they are played on the device itself.
When a pattern is ready, a user can upload it to the TactJam server so that others may download and reuse it.

For more information about TactJam, consult the [TEI'21 abstract](https://doi.org/10.1145/3430524.3442699),
the [TEI'22 paper](https://doi.org/10.1145/3490149.3501307),
and the [main GitHub repository](https://github.com/TactileVision/TactJam).
