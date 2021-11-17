---
layout: home
title: Tool Information
nav_order: 1
---

# {{ page.title }}

Each tool has information in three different categories: General Purpose, Hardware Control, and Interaction and Interface.

## General Purpose Information

General purpose information describes how the authoring tool was released and how it can be run.
This includes:

* *Year of First Release* - The first year the tool was publicly released as either a product or in an academic paper;
* *Platform* - The software platform required to run the tool. This can range from an operating system to a specific software framework; and
* *Availability* - If the tool can be obtained and, if so, if its source code is available under an [open source license](https://opensource.org/osd).

## Hardware Control Information

Hardware control information describes what kinds of hardware is able to be controlled by the tool.
Since the kinds of hardware controlled vary so much, metrics about "level of control" are not attempted.
This information includes:

* *Haptic Category* - Which haptic submodalities are controllable by the tool, specifically vibrotactile, force-feedback, and temperature; and
* *Hardware Abstraction* - How generic the hardware is, ranging from a class of available device, to specific consumer products, to bespoke devices.

## Interaction and Interface Information

Interaction and interface information are broadly concerned with how a user (i.e., a designer) uses the tool.
As some tools have user interfaces while others are SDKs or APIs, not all possible fields may be used. Those in **bold** are not applicable to SDKs or APIs.
This information includes:

* *Driving Feature* - What parameter drives the changes in haptic output. Either time or event.
* *Effect Localization* - In creating spatially distributed haptic stimuli, how location of the stimuli is determined.
    * Device-centric - Control is leveraged directly over the actuators with no abstraction to spatial location.
    * Location-aware - Location of the actuators or their impact on the end effector is taken into account, allowing some degree of automatic abstraction.
    * Target-centric - The location or arrangement of the device is not explicitly taken into account, and the designer simply associates the effect with a virtual object and/or part of the body.
* *Media Support* - Support for at least loading non-haptic media, such as audio or visuals.
* **Iterative Playback** - Support for iteratively rendering effects within the tool's environment as part of testing.
* *Design Approaches* - Broadly, the methods available to create a desired effect.
    * Direct parametric control - the low-level parameters can be directly manipulated.
    * Process - low-level parameters are controlled by some abstract process.
    * Sequencing - effects controlling the parameters can be created by ordering other effects in time.
    * Library - a library of pre-existing effects is available for use or re-use.
    * Description - a high level description of the perceived experienced can be transformed into an effect with those properties.
* **Interaction Metaphors** - Common UI metaphors that define how the user interacts with the tool. Note that Generic Menu is not listed if other metaphors are present.
    * Track - a visual timeline is used to represent a channel similar to in audio or video editing.
    * Keyframe - key points for the effect are set and behavior between them is interpolated.
    * Score - an adaptation of a musical score is used to represent haptic effects.
    * Dataflow - a dataflow programming model is used to control actuator behavior.
    * Demonstration - physical actions or other input data are mapped to features or output effects.
