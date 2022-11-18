---
parent: Tools
layout: tool
title: vibrAteRial
year: '2020'
platform:
    - NodeJS
availability: Open Source (GPL 3)
haptic_category:
    - Vibrotactile
hardware_abstraction: Bespoke (bARefoot)
driving_feature:
    - Action
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Process
    - Library
interaction_metaphors:
    - Generic Menu
image: /assets/tools/vibraterial.png
---
VibrAteRial is designed to create underfoot material effects in VR for the bARefoot shoe system.
Each bARefoot contains a pressure sensor and vibrotactile actuators.
Using the authoring tool, designers create virtual materials by controlling vibration grains that trigger as the bARefoot wearer steps down on the shoe.
Users can control the distribution of these grains as a function of pressure, and the frequency and amplitude of each grain.
These can be sent to a bARefoot so that the material can be tested and refined.

For more information on this or bARefoot, consult the [UIST'20 paper](https://doi.org/10.1145/3379337.3415828)
and the [Git repository](https://gitlab.cs.uni-saarland.de/fruchard/hapticexperiencegenerator).
