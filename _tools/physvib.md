---
parent: Tools
layout: tool
title: PhysVib
year: '2016'
platform:
    - Android
availability: Available
license: Unknown
venue: IEEE ToH
use_case:
    - Simulation
haptic_category:
    - Vibrotactile
hardware_abstraction: Class
device_names:
    - Voice Coil
driving_feature:
    - Action
effect_localization: Target-centric
body_position:
    - N/A
media_support:
    - None
iterative_playback: 'N/A'
design_approaches:
    - Process
interaction_metaphors:
    - 'N/A'
image: /assets/tools/physvib.jpg
connectivity: API
storage: None
---
PhysVib is an extension to the Android-based AndEngine physics engine.
Certain objects in the engine are treated as being manipulated by the user (in the "haptic camera"), and collisions involving these objects generate vibrotactile feedback.
This feedback is passed through audio output to an actuator attached to the Android device.

For more information, consult the [2016 Transactions on Haptics paper](https://doi.org/10.1109/TOH.2016.2614804)
and the [GitHub repository](https://github.com/maharaga/PhysVib).
