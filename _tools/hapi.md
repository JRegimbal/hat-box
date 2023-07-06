---
parent: Tools
layout: tool
title: hAPI
year: '2018'
platform:
    - Java
    - C#
availability: Available
license: Open Source (GPL 3)
haptic_category:
    - Force Feedback
hardware_abstraction: Consumer (Haply 2DIY)
driving_feature:
    - Action
effect_localization: Location-aware
media_support:
    - None
iterative_playback: 'N/A'
design_approaches:
    - DPC
interaction_metaphors:
    - N/A
#image: /assets/tools/hapi.png
---
hAPI is a low-level API for controlling the Haply 2DIY device.
In its basic form, it handles communication between the host and device and mapping between positions and forces within the device's workspace and angles and torques used by the hardwware itself.
hAPI can also be combined with physics engines such as Fisica for convenience.

For more information on hAPI, please consult the [GitLab repository](https://gitlab.com/Haply/hAPI), [the 2DIY development kit page](https://2diy.haply.co), and [the hAPI/Fisica repository](https://gitlab.com/Haply/hapi-fisica).
