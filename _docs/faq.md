---
layout: home
title: FAQ
nav_order: 2
---

# Frequently Asked Questions

## What is {{site.title}}?

The {{site.longtitle}} (or "{{site.title}}") is a collection of information on a variety of different haptic authoring tools.
While initial work focused on tools to control vibrotactile device, any haptic authoring tool can be included here.

Each entry has information tagged across [several different categories]({{ site.baseurl }}/docs/information.html) to permit a quick understanding of what the tool can do, how you can get it, and how you would use it.
Extra textual information can be added, including links to other resources like a website, source code repository, or published paper.

{{site.title}} is a collaborative project. If you have tools you would like to see here, including your own, or any other ideas for contributing, please [read the contribution guide](https://github.com/JRegimbal/hat-box/blob/main/CONTRIBUTING.md).
Please note that the information present on HAT Box is through the best efforts of contributors, and we cannot guarantee that pages are complete and accurate.

## What is this trying to solve?

Haptic devices are complicated pieces of equipment that are controlled differently at a low level even if they have the same function (e.g., vibrate).
Hapticians have been making software, from SDKs to complete authoring environments, for a long time both for themselves or for non-experts.
Despite this, it's remarkably difficult to find out what already exists and how it works.

This means that someone trying to find a tool to use may be not know where to look.
Someone planning to make a tool may not know what UX approaches have been tried, or even if there's a base that can be used to start from.
The main goal of this project is to help people find the information they need quickly, whether that's in-depth information on a particular tool or high-level information to compare across many tools.

Secondary goals of this project are to provide some level of documentation of tools that were never or are no longer publicly available, and to encourage designers to produce more documentation and publicly archive their work, especially if a project ends.
Interesting, complex features have been often proposed and prototyped in projects whose source code or binaries could not be located, making the formation of potential standard configuration files, libraries, or anything else difficult.
The further development and use of authoring tools, both by hapticians and non-experts, would likely be aided by more open development and documentation now.

## What counts as a haptic authoring tool for {{site.title}}?

The be counted as a haptic authoring tool, a resource must be a software or hardware/software kit that is intended for designing haptic effects or interactions.
This means software intended for other modalities, such as audio, are *not* included, even if they are very useful for designing haptic effects.

## Isn't this this same as [Haptipedia](https://haptipedia.org)?

Haptipedia is a similar project and an inspiration for this work. This project's aims complement Haptipedia. From the [Haptipedia FAQ](https://haptipedia.org/pages/):

> Haptipedia is an online, open-source, visualization of a growing database of 105+ haptic devices invented since 1992.  Device and experience designers, with backgrounds in haptics or in other design fields, can browse and search the database to track haptic technology evolution and ideate new devices, find devices that fit their project criteria and interests, and access information and resources for obtaining and/or fabricating them. They can contribute to the database by providing or verifying data on existing or new devices.

While Haptipedia exclusively focuses on grounded force-feedback haptic devices, {{site.title}} is concerned with tools to create haptic effects and media.
{{ site.title }} primarily focuses on the vibrotactile submodality, although tools supporting other submodalities are also included. This is often done when tools support multiple submodalities or are influenced by tools targeting a non-vibrotactile submodality.

## I noticed something that's missing/incorrect! What should I do?

Mistakes happen! If you see something that is wrong or can think of a way to improve HAT Box, please check out our
[contribution guide](https://github.com/JRegimbal/hat-box/blob/main/CONTRIBUTING.md) or send an email to <span style="font-style: italic;">{{ site.email }}</span>.
Existing pages include an "Edit this page on GitHub" link at the bottom of the screen for convenience.
