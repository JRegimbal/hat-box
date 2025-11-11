---
parent: Tools
layout: tool
title: ViviTouch
year: '2014'
platform:
    - Unknown
availability: Unavailable
license: Unknown
venue:
    - IEEE Haptics Symposium
use_case:
    - Haptic Augmentation
    - Prototyping
haptic_category:
    - Vibrotactile
hardware_abstraction: Class
device_names:
    - Voice Coil
body_position:
    - N/A
device_template: 'No'
driving_feature:
    - Time
effect_localization: Device-centric
media_support:
    - Audio
    - Visual
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Process
    - Sequencing
    - Library
interaction_metaphors:
    - Track
    - Keyframe
storage:
    - MKV
    - Custom XML
connectivity:
    - None
image: /assets/tools/vivitouch.png
---
Vivitouch is meant to support prototyping of vibrotactile haptics aligned to audio-visual content.
Haptic media is created through the use of waveforms and filters mapping the audio content at that moment of time to the vibrotactile channel.
These filters, such as a low-pass filter, are meant to aid in synchronizing audio and haptic content.
Effects and filters are assigned to different output channels, representing each actuator, and to different haptic tracks.
Using multiple tracks allows for layering effects and filters on the same actuator at the same time.

For more information, consult the [2014 World Haptics Conference paper](https://doi.org/10.1109/HAPTICS.2014.6775509).
