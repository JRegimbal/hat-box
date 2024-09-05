---
parent: Tools
layout: tool
title: FeelCraft
year: '2014'
venue:
    - ACM UIST
    - AsiaHaptics
platform:
    - Java
    - Python
availability: Unavailable
license: Unknown
haptic_category:
    - Vibrotactile
body_position:
    - N/A
use_case:
    - Collaboration
    - Haptic Augmentation
hardware_abstraction: Consumer
device_names:
    - Vybe Haptic Gaming Pad
driving_feature:
    - Action
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Library
    - Description
interaction_metaphors:
    - Generic Menu
image: /assets/tools/feelcraft.jpg
connectivity:
    - API
storage:
    - Custom JSON
---
FeelCraft is a technical architecture where libraries of haptic effects (feel effects) are triggered by events in pre-existing media applications through the use of the FeelCraft plugin.
The implemented example connects to the event system of a Minecraft server.
Families of feel effects are expressed in software and controllable through sets of parmeters that are made available to users through a menu interface.
In this example, as in-game events occur (e.g., it begins to rain), an associated feel effect with the selected parameters will be displayed to the person playing the game.

For more information on FeelCraft, consult the [UIST'14 demo](https://doi.org/10.1145/2658779.2659109) and [the relevant chapter of *Haptic Interaction*](https://doi.org/10.1007/978-4-431-55690-9_47).
