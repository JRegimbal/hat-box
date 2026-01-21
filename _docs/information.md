---
layout: home
title: Tool Information
nav_order: 1
---

# {{ page.title }}

Each tool has information recorded in three different broad categories: General Purpose, Hardware Control, and Interaction and Interface.

## Metadata

General purpose information describes how the authoring tool was released and how it can be run.
This includes:

* <span id="year">**Release Year**</span>: The first year the tool was publicly released as a product or discussed in an academic paper.
* <span id="platform">**Platform**</span>: The software platform required to run the tool. This can range from an operating system to a specific software framework.
* <span id="availability">**Availability**</span>: If the tool can be obtained by the public.
* <span id="license">**License**</span>: The kind of license this tool is or was available to be used under, if one could be found.
When an [open source license](https://opensource.org/osd) is applied, the kind is specified (e.g., "Open Source (MIT)").
Note that open source does not imply a tool is gratis!
* <span id="venue">**Venue**</span>: The academic venues where publications presented the tool.
Note that this will be "N/A" for theses and commercial products that were not included in a journal or conference proceeding.
* <span id="use-case">**Intended Use Case**</span>: The primary purposes for which the tool was developed based on publications and documentation.
Note that "Prototyping" in this context refers to prototyping and evaluating authoring tools themselves.

## Hardware Information

Hardware control information describes what kinds of hardware is able to be controlled by the tool.
Since there is so much variation in supported hardware, there is no attempt to determine a level of performance.
This information includes:

* <span id="category">**Haptic Category**</span>: Which haptic submodalities are controllable by the tool. Specifically: vibrotactile, force-feedback, skin stretch/compression, and temperature.
* <span id="abstraction">**Hardware Abstraction**</span>: How generic the hardware is, ranging from a class of available device, to specific consumer products, to custom-built devices.
For tools that support multiple Haptic Categories, the overall Hardware Abstraction is assigned with Bespoke before Consumer before Class.
For example, a tool that uses both a Novint Falcon and any audio-driven vibrotactile actuator would be labeled "Consumer" rather than "Class".
Note that unless commercialized, open hardware devices are counted as "custom".
* <span id="devices">**Device Names**</span>: The names of the hardware devices supported by the tool and used to determine the "Hardware Abstraction" field.
* <span id="device-template">**Device Template**</span>: Whether support can be easily extended to new types of devices, particularly a templating system.
* <span id="body-position">**Body Position**</span>: If the tool or supported hardware is usable only on specific parts of the body (e.g., the tool uses egocentric authoring, is for a wearable), a list of these parts.

## Interaction Information

Interaction and interface information are broadly concerned with how a user (i.e., a designer) uses the tool.
Some fields are limited to tools that have a reasonably fixed user interface.
For example, most SDKs offer little out of the box, but are in an environment where new interfaces and interactions can be programmed with some effort.
Fields that are followed by an \* are not applicable to tools like SDKs or APIs.
This information includes:

* <span id="driving-feature">**Driving Feature**</span>: What parameter drives the changes in haptic output. Options include time, where output is solely a function of time, and action, where another input can change the output.
* <span id="effect-localization">**Effect Localization**</span>: In creating spatially distributed haptic stimuli, how locations of the stimuli on the skin are handled in the tool.
    * Device-centric - Control is leveraged directly over the actuators with no abstraction to spatial location. The tool has no information about where an effect will be felt.
    * Location-aware - The desired location of an effect is taken into account to some extent.
    * Target-centric - Where the effect is to be experienced, whether on a specific part of the body or through interaction with a virtual object, is the primary choice about effect location presented in the tool. How the device will create the stimuli is abstracted away.
* <span id="media-support">**Non-Haptic Media**</span>: Support for non-haptic media. The bar for this is to load the media into the workspace, but not allow it to be modified or use it for any automatic process. Often this involves loading audio or visual media and allowing a file to be played back so haptic effects can be synchronized with it.
* <span id="iterative-playback">**Iterative Playback\***</span>: Support for iteratively rendering effects within the tool's environment as part of testing and development.
* <span id="design-approaches">**Design Approaches**</span>: Broadly, the methods available to create a desired effect.
    * Direct - the low-level parameters can be directly manipulated.
    * Procedure - low-level parameters are controlled by some abstract process.
    * Additive - reusable effects can be ordered in time to create larger effects.
    * Library - a library of pre-existing effects is available for use or re-use. Users may be able to contribute to this library.
    * Description - a natural language description of the perceived experience can be transformed into an effect with those properties, either by searching through an indexed library of effects or creating a new one.
* <span id="interaction-metaphors">**UI Metaphors\***</span>: Common UI metaphors that define how the user interacts with the tool.
    * Track - a timeline is used to represent an interactive channel containing effects, similar to those in audio or video editing.
    * Keyframe - key points for the effect are set and behavior between them is interpolated.
    * Music Notation - an adaptation of a musical score or other music notation is used to represent haptic effects.
    * Dataflow - a dataflow programming model is used to control haptic output.
    * Demonstration - physical actions or other input data are mapped to features or output effects. This mapping is able to be simply understood by the person using the tool. E.g., tapping a screen or button to indicate a pattern of vibration.
* <span id="storage">**Storage**</span>: Storage formats that can be imported to or exported by the tool.
In cases where effects are saved in a way where they are not provided to the user as a file (e.g., in a server), the label "Internal" is applied.
If import/export functions are described, but no information on the format is provided, the label "Unknown" is applied.
* <span id="connectivity">**Connectivity**</span>: Ways in which the tool can be extended to support connections to new data, software, and devices at *runtime*.
This may take a variety of forms, such as an API that can be called by other software and templates to extend support to new devices.
