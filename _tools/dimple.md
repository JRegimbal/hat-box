---
parent: Tools
layout: tool
title: DIMPLE
year: '2007'
platform:
    - Windows
    - macOS
    - Linux
availability: Available
license: Open Source (GPL 2)
venue:
    - NIME
    - Interacting with Computers
haptic_category:
    - Force Feedback
use_case:
    - Simulation
    - Music
hardware_abstraction: Consumer
body_position:
    - N/A
device_names:
    - omega.x
    - delta.x
    - sigma.x
    - Phantom
    - Novint Falcon
    - Razer Hydra
driving_feature:
    - Action
effect_localization: Location-aware
media_support:
    - Visual
    - Audio
iterative_playback: 'N/A'
design_approaches:
    - DPC
    - Process
interaction_metaphors:
    - N/A
image: /assets/tools/dimple.jpg
storage:
    - None
connectivity:
    - Open Sound Control
---
DIMPLE is a framework to connect visual, audio, and haptic simulations of a scene using OSC.
Haptics support is provided via [CHAI3D](./chai3d.html).
DIMPLE allows for scenes to be constructed by a client, such as Pure Data, over OSC, and creates corresponding graphical and haptic representations of it using CHAI3D, ODE, and GLUT.
The user can then connect data from events in these scenes (e.g., an object's motion) to the audio synthesis environment of their choice.

For more information on DIMPLE, please consult the [NIME'07 paper](https://doi.org/10.5281/zenodo.1177245), the [2009 Interacting with Computers article](https://doi.org/10.1016/j.intcom.2008.10.012), and the [GitHub repository](https://github.com/IDMIL/dimple).
