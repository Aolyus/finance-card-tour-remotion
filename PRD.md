# 财务卡片巡游

Recreate MotionFace recording `029698a2-50d4-4a4e-be7f-25eb67f76d90` as editable Remotion components.

## Scope and acceptance

- Portrait 720×1280, 60 fps, 360 frames; reference audio is silent.
- Dark forest-green background with soft olive light patches, off-white finance cards, lime titles and progress bars.
- Opening wide view → income close-up → invoice close-up → transactions close-up → wide business overview.
- Match the reference wording and example figures; retain the partial peripheral cards and spatial camera transitions.
- Include reproducible dependencies, documentation and render command in a public GitHub repository.
- Verify the public repository's latest commit and bind its root URL to the supplied recording through the authorized API.

## Known limits

- The reference does not identify its original font or 3D scene; typeface and card geometry must be reconstructed from frames.
- Source recording and authorization material are deliberately excluded from the public repository.

## Progress

- Reference downloaded and inspected: six seconds of video, 60 fps, silent AAC track.
- Implemented all five finance cards, curved vector surfaces, title reveals and spatial transitions.
- Local TypeScript check and full 360-frame render passed; keyframes inspected against the reference.
- Publishing and repository binding are delivery operations; their live status is reported separately.
