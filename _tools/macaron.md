---
parent: Tools
layout: tool
title: Macaron
year: '2016'
platform:
    - Web
availability: Available
license: Unknown
venue:
    - IEEE Haptics Symposium
use_case:
    - Prototyping
haptic_category:
    - Vibrotactile
hardware_abstraction: Class
device_template: 'No'
device_names:
    - Voice Coil
driving_feature:
    - Time
effect_localization: Device-centric
body_position:
    - N/A
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - Direct
    - Procedural
    - Library
interaction_metaphors:
    - Track
    - Keyframe
image: /assets/tools/macaron.png
storage:
    - Custom JSON
    - WAV
connectivity:
    - None
---
Macaron uses web audio to drive an actuator connected to the user's computer.
A library of vibrotactile effects are available for playback that are visualized as waveforms expressing amplitude and frequency over time.
These presets can be loaded into the editor pane where keyframes can be added to the waveforms and modified.
Alternatively, effects can be created from scratch without the use of a preset.
Preset and custom effects can be played back over audio output to support an iterative design process.

For more information about Macaron, consult the [Haptics Symposium paper](https://doi.org/10.1109/HAPTICS.2016.7463155)
and the [GitHub repository](https://github.com/hapticdesign/hapticdesign.github.io).
