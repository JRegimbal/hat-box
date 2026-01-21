---
parent: Tools
layout: tool
title: vibrAteRial
year: '2020'
platform:
    - NodeJS
availability: Available
license: Open Source (GPL 3)
venue:
    - ACM UIST
use_case:
    - Virtual Reality
    - Hardware Control
haptic_category:
    - Vibrotactile
hardware_abstraction: Bespoke
device_template: 'No'
device_names:
    - bARefoot
driving_feature:
    - Action
body_position:
    - Foot
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - Direct
    - Procedural
    - Library
interaction_metaphors:
    - None
image: /assets/tools/vibraterial.png
connectivity:
    - None
storage:
    - Custom JSON
---
VibrAteRial is designed to create underfoot material effects in VR for the bARefoot shoe system.
Each bARefoot contains a pressure sensor and vibrotactile actuators.
Using the authoring tool, designers create virtual materials by controlling vibration grains that trigger as the bARefoot wearer steps down on the shoe.
Users can control the distribution of these grains as a function of pressure, and the frequency and amplitude of each grain.
These can be sent to a bARefoot so that the material can be tested and refined.

For more information on this or bARefoot, consult the [UIST'20 paper](https://doi.org/10.1145/3379337.3415828)
and the [Git repository](https://gitlab.cs.uni-saarland.de/fruchard/hapticexperiencegenerator).
