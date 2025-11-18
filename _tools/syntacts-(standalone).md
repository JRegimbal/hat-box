---
parent: Tools
layout: tool
title: Syntacts (Standalone)
year: '2020'
platform:
    - Windows
    - macOS
    - Linux
availability: Available
license: Open Source (MIT)
venue:
    - IEEE ToH
use_case:
    - Hardware Control
haptic_category:
    - Vibrotactile
hardware_abstraction: Class
device_names:
    - Voice Coil
device_template: 'No'
body_position:
    - N/A
driving_feature:
    - Time
effect_localization: Location-aware
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - Direct
    - Procedural
    - Additive
interaction_metaphors:
    - Track
    - Keyframe
image: /assets/tools/syntacts.png
connectivity:
    - API
storage:
    - WAV
    - AIFF
    - CSV
    - Syntacts Signal File
---
Syntacts is an API and graphical tool for creating audio-driven vibrotactile arrays.
Vibrotactile "signals" can be created using common waveforms and combined using operations such as sequencing and multiplication.
Complex envelopes can also be applied to these different signals.
The Syntacts GUI includes a spatializer for mapping desired signals to the correct virtual location on an array and a track-based sequencer to aid in performing these signal operations.

For more information, consult the [2020 Transactions on Haptics paper](https://doi.org/10.1109/TOH.2020.3002696)
and the [GitHub repository](https://github.com/mahilab/Syntacts).
