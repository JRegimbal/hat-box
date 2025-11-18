---
parent: Tools
layout: tool
title: AdapTics
year: '2024'
platform:
    - Unity
    - Rust
availability: Available
license: Open Source (GPL-3.0 and MPL-2.0)
venue:
    - ACM CHI
body_position:
    - Hand
use_case:
    - Prototyping
    - Haptic Augmentation
haptic_category:
    - Vibrotactile
hardware_abstraction: Consumer
device_names:
    - Ultraleap STRATOS Explore
device_template: 'No'
driving_feature:
    - Time
    - Action
effect_localization: Target-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - Direct
    - Procedural
    - Library
interaction_metaphors:
    - Keyframe
    - Demonstration
    - Track
storage:
    - Custom JSON
connectivity:
    - API
    - WebSockets
image: /assets/tools/adaptics.jpg
---
AdapTics is a toolkit for creating ultrasound tactons whose parameters change in response to other parameters or events.
It consists of two components: the AdapTics Engine and Designer. The Designer, built on Unity, allows for the creation of adaptive tactons using elements commonly found in audio-video editors, and adaptive audio editing in particular. Tactons can be created freely or in relation to a simulated hand. The Designer communicates using WebSockets to the Engine, which is responsible for rendering on the connected hardware. While only Ultraleap devices are supported as of writing, the Engine is designed to support future hardware. The Engine can be used directly through API calls in Rust or C/C++.

To learn more about AdapTics, read the [CHI 2024 paper](https://doi.org/10.1145/3613904.3642090) or consult the
[AdapTics Engine](https://github.com/AdaptiveHaptics/AdapticsEngine) and [AdapTics Designer](https://github.com/AdaptiveHaptics/AdapticsDesigner) GitHub repositories.
