---
parent: Tools
layout: tool
title: Android API
year: '2008'
platform:
    - Android
availability: Available
license: Open Source (Apache 2.0)
haptic_category:
    - Vibrotactile
venue: N/A
use_case:
    - Mobile
hardware_abstraction: Consumer
device_names:
    - Android
body_position:
    - N/A
driving_feature:
    - Time
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'N/A'
design_approaches:
    - DPC
    - Process
    - Sequencing
    - Library
interaction_metaphors:
    - 'N/A'
storage: None
connectivity: API
---
The Android API consists of preset `VibrationEffect` assets and developer-added compositions of the "click" and "tick" effects.
Waveforms can also be created by specifying periods a sequence of vibration durations or durations and associated amplitudes.
Audio-coupled effects can also be generated using the `HapticGenerator`.
There are significant differences in hardware and software support across different Android devices and OS versions, including basic features such as amplitude control.

For more information, consult the [Android API documentation](https://source.android.com/devices/input/haptics/haptics-implement) and [Android Open Source Project (AOSP)](https://source.android.com/).
