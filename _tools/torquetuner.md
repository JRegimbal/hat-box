---
parent: Tools
layout: tool
title: TorqueTuner
year: '2020'
platform:
    - libmapper
availability: Available
license: Open Source (MIT)
haptic_category:
    - Force Feedback
hardware_abstraction: Bespoke (TorqueTuner)
driving_feature:
    - Action
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - Process
    - Library
interaction_metaphors:
    - N/A
image: /assets/tools/torquetuner.png
---
TorqueTuner is a standalone 1-DoF haptic module that can be used as a standalone device or connected to a digital musical instrument such as the T-Stick.
It contains a set of embedded effects that can be modified through inputs sent using OSC through [libmapper](https://libmapper.github.io/).
TorqueTuner also sends information about its own state back through OSC that can be used as inputs to another process running elsewhere.

For more information on the TorqueTuner hardware or software environment, please consult the [NIME'20 paper](https://zenodo.org/record/4813359) or the [GitHub repository](https://github.com/IDMIL/TorqueTuner).
The photograph of the TorqueTuner by M. Kirkegaard, M. Bredholt, C. Frisson, and M.M. Wanderley is licensed under CC BY 4.0.
