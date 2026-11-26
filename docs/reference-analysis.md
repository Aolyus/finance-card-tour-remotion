# Reference analysis

## Measured source properties

- Picture: H.264, 720 × 1280, 60 fps, 6.000 seconds.
- Container: 6.058667 seconds, due to AAC padding.
- Audio: decoded maximum and mean volume both approximately −91 dBFS; no audible program content.
- Reference was downloaded locally before its temporary URL expired. No signed URL is retained in this repository.

## Composition, typography and palette

- Forest-green full-bleed background, with broad olive-green pools of light. There is no hard scene cut or black interstitial.
- Off-white rounded cards occupy different apparent depths. Some peripheral cards intentionally extend outside the portrait crop.
- Main labels are heavy sans-serif, bright yellow-green, with a soft luminous halo; interface labels use a smaller neutral sans-serif. Original typeface unknown; the bundled Inter family is the reconstruction choice.
- Approximate reconstructed colors: background `#032c20`, olive light `#527d1d`, card `#fffffb`, dark ink `#17201b`, title `#d5fb76`, income bar `#89d718`. Blue and orange are confined to peripheral expense graphics.
- Card planes show shallow bowing and perspective. The reconstruction uses subdivided SVG surfaces plus CSS perspective, so the underlying card labels remain editable.

## Motion beats

| Time | Dominant action |
| --- | --- |
| 0.00–0.50 s | Wide card field; small luminous capsule crosses the empty center |
| 0.50–1.10 s | Push toward the income panel and move it into the center |
| 1.02–1.97 s | “Track Income” reveals word by word; income remains readable |
| 1.97–2.39 s | Camera travels down to the invoice; income leaves through the top |
| 2.40–3.09 s | “Manage Invoices” reveals; the invoice fills most of the portrait width |
| 3.09–3.52 s | Horizontal sweep brings recent transactions into focus |
| 3.40–4.13 s | “Organize Transactions”; expense donut is partially visible above |
| 4.13–4.70 s | Pull back and redistribute the five panels around the center |
| 4.43–6.00 s | Two-line “Understand Business” reveal and final wide hold |

Times are hand-matched from frame inspection. Scale, tilt and movement are reconstructed rather than recovered from the original scene. The source's render/compression blur is not treated as recoverable geometry.

## Validation approach

- TypeScript check for all authored components.
- Complete 360-frame H.264 render, then probe output dimensions, frame count, frame rate and duration.
- Inspect opening, income, invoice, transactions and overview frames alongside the reference.
- Verify Studio loads the composition without an error overlay.
- Before publishing, inspect Git-tracked files for credential or signed-address patterns; keep local reference media and binding records outside the repository.
