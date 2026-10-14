# Prompt 05 — Asset, Font, and Media Review

## 1. Verified Production Asset Inventory
All real assets have been extracted from the reference site and stored locally at:
`c:/Users/Nishant/Desktop/construction/raw-structure-construction-engineering.assets.Woblo/`

The complete catalogue is documented in:
- `raw_structure_integrity_playbook/ASSET_REGISTER.csv` (39 exact verified entries)
- `raw_structure_integrity_playbook/docs/ASSET_MANIFEST.md` (detailed visual and component mapping)

## 2. Mandatory Asset Rules
1. **Zero External CDN Dependencies:** All 21 JPEGs, 27 SVGs, and 20 WOFF2 fonts reside locally on disk.
2. **Zero AI-Generated Placeholders:** Do not use Midjourney, DALL-E, Unsplash, or placeholder images. Use ONLY the user-provided assets.
3. **Exact Filename Integrity:** Retain exact hash filenames (e.g. `mUdMPbzNFGwgVSZnu6VXATDtkPs.jpg`, `eqrLSETPpkJONqFnCfAZhUsKem0.jpg`) when copying into `public/images/`.
4. **Resolution & Aspect Ratios:** All dimensions are documented in `ASSET_MANIFEST.md`. Always provide explicit `width` and `height` attributes to avoid Cumulative Layout Shift (CLS).
5. **Study & Educational Scope:** Assets are utilized strictly for local offline architecture study and technical reconstruction benchmarking.

