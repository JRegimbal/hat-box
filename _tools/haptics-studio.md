---
parent: Tools
layout: tool
title: Haptics Studio
year: '2020'
platform:
    - Windows
    - macOS
availability: Available
license: Open Source (MIT)
venue:
    - N/A
use_case:
    - Haptic Augmentation
    - Collaboration
haptic_category:
    - Vibrotactile
hardware_abstraction: Consumer
device_template: 'No'
device_names:
    - iPhone
    - Android
    - Meta Quest
body_position:
    - N/A
driving_feature:
    - Time
effect_localization: Device-centric
media_support:
    - Audio
iterative_playback: 'Yes'
design_approaches:
    - Direct
    - Procedural
    - Additive
interaction_metaphors:
    - Keyframe
    - Demonstration
image: /assets/tools/lofelt.png
connectivity: API
storage:
    - WAV
    - Apple Core Haptics
    - .haptic
connectivity:
    - API
---
Haptics Studio, formerly Lofelt Studio, allows users to load an audio file into the tool.
This automatically creates an initial vibrotactile experience.
This can be refined through controls in the editor itself, such as menus controlling global parameters and using keyframes to control the waveforms directly.
These editing processes can also be used to create effects from scratch.
Vibrotactile effects can be sent to iOS and Android devices with a corresponding app installed.
Files created with the application can be played back using [Meta's Haptics SDK](https://developers.meta.com/horizon/documentation/unity/unity-haptics-sdk-integrate/).

For more information, consult the [GitHub page for the open-source project](https://github.com/facebook/haptics-studio), the [Meta Haptics Studio distribution](https://developers.meta.com/horizon/resources/haptics-studio/), and the [Lofelt website as archived on the Wayback Machine](https://web.archive.org/web/20220526171057/lofelt.com).
