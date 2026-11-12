---
title: BSL fingerspelling generation
org: University of Surrey · CVSSP
period: 2026 – 2027
summary: Final year project. Type a word, and a 3D avatar fingerspells it in British Sign Language with natural transitions between letters.
tags: [PyTorch, Transformers, Sign Language, 3D Avatars]
order: 4
---

**The idea.** Fingerspelling is how BSL signers spell names and words without a sign. Generating it convincingly is hard because the movement *between* letters matters as much as the letters themselves.

**Approach.** Using about 23,000 fingerspelled words from BBC broadcast data, I'm building a stitching baseline and a Transformer that predicts the transitions between letters, producing continuous signing on a 3D avatar.

**Status.** In progress, due spring 2027. <!-- TODO(Eva): update as results come in. -->
