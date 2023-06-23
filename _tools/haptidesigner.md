---
parent: Tools
layout: tool
title: HaptiDesigner
year: '2022'
platform:
    - Windows
availability: Available
license: Unknown
haptic_category:
    - Vibrotactile
hardware_abstraction: Bespoke (HaptiBoard and Motors)
driving_feature:
    - Time
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Sequencing
interaction_metaphors:
    - Generic Menu
image: /assets/tools/haptidesigner.jpg
---
HaptiDesigner is a toolkit to create vibrotactile patterns or *Haptograms* on multiple actuators.
Each Haptogram is composed of multiple frames that each specify which actuators are activated in that frame ,the intensity of vibration, the duration, and the pause between the end of that frame and the following one.
These patterns are stored in a local database so they can be modified and reused.

For more information, please consult the [2022 Universal Access in Human-Computer Interaction paper](https://doi.org/10.1007/978-3-031-05028-2_33) or the [GitHub repository](https://github.com/NasrineOlson/HaptiDesignerToolkit).
