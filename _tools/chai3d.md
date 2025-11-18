---
parent: Tools
layout: tool
title: CHAI3D
year: '2003'
platform:
    - Windows
    - macOS
    - Linux
availability: Available
license: Open Source (BSD 3-Clause)
venue:
    - EuroHaptics
use_case:
    - Simulation
haptic_category:
    - Force Feedback
hardware_abstraction: Consumer
device_names:
    - omega.x
    - delta.x
    - sigma.x
    - Phantom
    - Novint Falcon
    - Razer Hydra
body_position:
    - N/A
device_template: 'Yes'
driving_feature:
    - Action
effect_localization: Target-centric
media_support:
    - Visual
    - Audio
iterative_playback: 'N/A'
design_approaches:
    - Direct
    - Procedural
    - Library
interaction_metaphors:
    - N/A
image: /assets/tools/chai3d.png
connectivity:
    - API
storage:
    - None
---
CHAI3D is a C++ framework for 3D haptics.
Users can initialize a scene, populate it with virtual objects, and set the properties of those objects using built-in haptic effects, such as "viscosity" and "magnet".
It also uses OpenGL for graphics rendering an OpenAL for audio effects.
CHAI3D can be extended to support additional haptic devices using the included device template.

For more information on CHAI3D, please consult [the website](https://www.chai3d.org), [the documentation](https://www.chai3d.org/download/doc/html/), and the [EuroHaptics abstract](http://dmorris.net/publications/chai.eurohaptics.2003.abstract.pdf).
