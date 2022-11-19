---
parent: Tools
layout: tool
title: VibScoreEditor
year: '2009'
platform:
    - Windows
availability: Unavailable
license: Unknown
haptic_category:
    - Vibrotactile
hardware_abstraction: Consumer (Brüel & Kjaer Model 4810, Samsung Voice Coil, Unspecified vibration motor)
driving_feature:
    - Time
effect_localization: Device-centric
media_support:
    - None
iterative_playback: 'Yes'
design_approaches:
    - DPC
    - Process
    - Sequencing
interaction_metaphors:
    - Keyframe
    - Score
image: /assets/tools/vibscoreeditor.png
---
VibScoreEditor applies uses music notation as a metaphor for vibrotactile editing.
In this system, a "vibrotactile clef" determines the frequency and waveform assigned to each "pitch" occupying a position on the staff.
Notes have a pitch by virtue of this position, an intensity indicated by a number inside the note head, and a duration set by the shape of the note.
Two dynamics, crescendo and decrescendo, allow for gradual increasing and decreasing of note intensity respectively.
By switching between different clefs and arranging a series of vibrotactile notes, rests, and dynamic markings, users can create complex time-varying vibration patterns.

For more information, consult the [2009 World Haptics Conference paper](https://doi.org/10.1109/WHC.2009.4810816).
