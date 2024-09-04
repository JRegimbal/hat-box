---
parent: Tools
layout: tool
title: Neosensory SDK
year: '2020'
platform:
    - Android
availability: Available
venue:
    - N/A
use_case:
    - Hardware Control
license: Open Source (Apache 2.0)
haptic_category:
    - Vibrotactile
hardware_abstraction: Consumer
device_names:
    - Neosensory Buzz
body_position:
    - Arm
driving_feature:
    - Time
effect_localization: Location-aware
media_support:
    - Audio
iterative_playback: 'N/A'
design_approaches:
    - DPC
    - Process
interaction_metaphors:
    - 'N/A'
connectivity:
    - API
storage:
    - None
---
The NeoSensory SDK allows control of the four motors embedded in the Neosensory Buzz wristband.
Vibrations can be called by either setting the desired amplitude value of each motor directly, which will persist until an update is sent, or by using another class to trigger a single point of vibration interpolated between the physical actuators.

For more information, consult the [Neoseonsory SDK documentation](https://neosensory.com/blog/neosensory-sdk-android/).
