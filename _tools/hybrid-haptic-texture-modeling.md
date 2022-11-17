---
parent: Tools
layout: tool
title: Hybrid Haptic Texture Modeling
year: '2020'
platform:
    - Unknown
availability: Unavailable
haptic_category:
    - Force Feedback
    - Vibrotactile
hardware_abstraction: Consumer (Omega.3 and Haptuator)
driving_feature:
    - Action
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'N/A'
design_approaches:
    - Process
interaction_metaphors:
    - 'N/A'
image: /assets/tools/hybrid.jpg
---
This framework uses both force feedback and vibration to render various textures.
The surface's geometry, stiffness, and friction are measured so that 3D force and contact acceleration can be calculated during synthesis.
Low-frequency components are displayed using a force-feedback device, while high-frequency components are displayed using a voice coil attached to the device.

For more information, consult the [2020 IEEE Acess paper](https://doi.org/10.1109/ACCESS.2020.3015861).
