# TwoD Studio for Android

**A touch-first 2D and 2.5D animation studio for Android.**

> A separate Windows public release is being prepared and is expected soon. This README covers the Android release only.

## Download

**Android release:** TwoD Studio **1.6.2** (build **29**)


[Download the latest Android APK](https://github.com/WickedDarko/TwoD-Studio/releases)

The APK is shared free of charge. TwoD Studio is a personal project still under development; this is not an open-source release, and no source-code license is granted.

## About

TwoD Studio is a mobile animation workspace for building or importing 2D characters, creating skeletal rigs, posing artwork, animating over time, and exporting finished scenes. It combines a touch-operated stage, rig and sprite tools, a multi-track timeline, and 2.5D effects in one Android app.

The app is designed to be used in landscape orientation. It supports Android 7.0 (API 24) and later. The published APK includes ARM64, ARMv7, and x86_64 native binaries.

## What you can do

### Build a scene and rig characters

- Start with a humanoid rig, a blank stage, a bundled character, or a supported character ZIP pack.
- Create your own skeleton from scratch or select a preset from the **Humanoid**, **Quadruped**, **Tendril / Chain**, **Winged Biped**, **T-Rex**, and **Winged Dragon** presets.
- Add your own artworks or select from studio bundled characters, props, and backgrounds to a scene; organize and protect scene elements with visibility and lock controls.
- Attach artwork to bones, fit sprites to their bones, adjust pivots, and use the paint tools to prepare or refine character parts.
- For supported character packs, choose a full rig with a static head, a full rig with an animated facial sub-rig, or a head-and-face-only setup.
- Import images and audio through Android's file or media picker when you choose to use them; the app does not ask for broad storage access at startup.

### Pose and animate

- Work in **Setup**, **Animate**, and **Professional** modes.
- Pose characters with touch-friendly selection and transform tools, forward-kinematics rotation, inverse-kinematics pins, and on-stage controls.
- Add keyframes to bone transforms, sprite properties, and mesh deformations. Edit poses at later frames without changing earlier animation.
- Split a project into multiple clips, assemble clips into a sequence, and use the pose library to reuse poses.
- Apply procedural motion cycles, scope them to a character or bone, and bake motion into timeline keyframes when desired.
- Use Smart Bone dials for corrective poses, spline chains for bendy bone motion, and spring settings for follow-through.
- Animate facial or alternate-part sub-rigs with Vitruvian switching where the rig supports it.
- Attach or detach props at chosen frames, animate a camera bone, and use time remapping for shot timing.

### Shape artwork in 2.5D

- Draw and edit sprite artwork with the integrated paint tools, including cutout, flip, rotation, and pivot adjustment workflows.
- Build and deform skinned 2.5D meshes, edit vertex weights, and use **Contour Fit** for meshes that follow the visible sprite silhouette.
- Set up clipping masks for layered facial and character artwork, including alpha-based and contour-based clipping.
- Use camera depth and parallax controls to give scene layers a sense of distance.
- Apply non-destructive **Glass Plate** effects to a scene, character, bone group, or sprite. Effects include options such as melt, ripple, glitch, dissolve, warp, pixelate, and glow.

### Direct movement and audio on the timeline

- Draw and bake motion trajectories for characters, including paths designed to follow a ground surface.
- Add **Background** and **Voice-Over** audio lanes. Set a track's start frame, trim its in/out points, adjust volume, mute it, and add fades; preview audio with the scene.
- Mix the timeline audio into MP4 exports.

### Export and continue projects

Export a scene in one of these formats:

- **MP4 video** for a rendered animation.
- **PNG sequence ZIP** for individual rendered frames.
- **Sprite sheet** with frame data.
- **`.k2d.json` project** for saving or moving an editable project.

For rendered output, choose a preset size such as **720p**, **1080p**, **1080-square**, or **512-square**, or set a custom width and height. Choose a background color and whether to include a bone-rig overlay. PNG sequences can retain transparency. Exports are saved to the **Download/TwoD Studio Export** folder. Editable projects and drafts are stored locally on the device unless you choose to export or move them.

## A typical animation workflow

1. Start a blank project or add a bundled character to the stage.
2. In Setup, fit or adjust artwork and bones; add facial parts or a mesh if the character needs them.
3. Switch to Animate, pose with FK or IK, and add keyframes on the timeline. Use a cycle or trajectory when it helps create repeated or path-based movement.
4. Add audio or effects if needed, scrub and play the timeline to review the scene, then export an MP4, PNG sequence, sprite sheet, or editable project.

The in-app **Literature** page opens the practical User Guide, with step-by-step workflows for features including Smart Bone dials, sub-rigs, trajectories, mesh deformation, and effects.

## Install the APK

1. Download the APK from the release link above or directly navigating to the releases from the repo.
2. Open the downloaded APK. If Android asks, allow your browser or file manager to install apps from that source, then return to the installer.
3. Review the Android install prompt and install TwoD Studio.
4. Open the app and rotate the device to landscape if needed.

This direct-download APK is signed with the project's debug key, not a Play Store signing key. It is intended for direct APK distribution.

## Privacy

TwoD Studio has no account sign-in, advertising, analytics, or cloud sync. Files are accessed when you choose an import or open action through Android's system picker; audio playback does not record sound and does not require microphone access.

Read the [Android privacy policy](PRIVACY.md) for details.

## Support

For questions or feedback, contact **twod_studio@proton.me**.

If TwoD Studio has helped you bring your imaginations onto a screen, you can [Buy me a coffee](https://buymeacoffee.com/kannanlukom).
