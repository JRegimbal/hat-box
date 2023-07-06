---
parent: Tools
layout: tool
title: CHAI3D
year: '2004'
platform:
    - Windows
    - macOS
    - Linux
availability: Available
license: Open Source (BSD 3-Clause)
haptic_category:
    - Force Feedback
hardware_abstraction: Consumer (Force Dimension, 3DSystems, Novint Falcon, Sixense)
driving_feature:
    - Action
effect_localization: Target-centric
media_support:
    - Visual
    - Audio
iterative_playback: 'N/A'
design_approaches:
    - DPC
    - Process
    - Library
interaction_metaphors:
    - N/A
image: /assets/tools/chai3d.png
---
CHAI3D is a C++ framework for 3D haptics.
Users can initialize a scene, populate it with virtual objects, and set the properties of those objects using built-in haptic effects, such as "viscosity" and "magnet".
It also uses OpenGL for graphics rendering an OpenAL for audio effects.
CHAI3D can be extended to support additional haptic devices using the included device template.

For more information on CHAI3D, please consult [the website](https://www.chai3d.org), [the documentation](https://www.chai3d.org/download/doc/html/), and the [EuroHaptics abstract](http://dmorris.net/publications/chai.eurohaptics.2003.abstract.pdf).
