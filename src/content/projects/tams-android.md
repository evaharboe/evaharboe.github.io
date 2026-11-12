---
title: TAMS Android app
org: Sony Europe × BBC
period: Sep – Dec 2025
summary: A native Android app connecting Sony's professional cameras to the BBC's Time-Addressable Media Store, built as a reference implementation.
tags: [Kotlin, Jetpack Compose, Dagger Hilt, CameraX, WorkManager, Media3]
order: 3
---

## Context

TAMS (Time-Addressable Media Store) is the BBC's open, cloud-first way of storing media by time rather than as files. Media is split into immutable segments, addressed by IDs and timestamps, so you can fetch "this 10 seconds of that camera's audio" over a simple HTTP API without copying whole files around.

Sony had a local copy of the server and a bare-bones proof-of-concept Android app that showed one upload working. It covered the basics but didn't show what TAMS could really do, or what using it would feel like. My job was to turn that into a proper reference app, designed around how the BBC would actually use it.

## What I built

A native Android app for Sony's PDT-FP1, a device that plugs straight into Sony's professional cameras. Native mattered because the app needed low-level access to the device's camera and streaming APIs.

It supports the three main TAMS workflows:

1. **Upload** media from the device to TAMS.
2. **"Stream"** from an external camera to TAMS. True streaming wasn't possible with the hardware and software at the time, so I approximated it by uploading a new segment every few seconds, which was enough to test whether the idea worked.
3. **Download** chosen segments back and reassemble them for playback.

Around those workflows there's sign-in (OpenID Connect), search and filtering, batch actions, list and grid views, and a metadata inspector for recorded files.

## Under the hood

- **Clean Architecture** with separate presentation, domain and data layers, so changes to the server API or local storage never ripple into the UI.
- **Jetpack Compose with unidirectional data flow**, so screens always reflect a single, predictable state.
- **WorkManager for uploads.** It's more complex than a simple upload call, but transfers survive the app being closed or the device restarting, and they report live progress back to the UI.
- **A deliberate trade-off on audio.** Media3's Transformer was the most efficient option but had problems with some audio encodings. I limited input to AAC, which most newer Sony cameras record by default, and documented why.

## Impact

The app went beyond its original goals. It sped up onboarding for people new to TAMS, made conversations about future backend changes much clearer, and closed the gap between what TAMS can do on paper and what it's like to use. It was also my first time writing Kotlin.
