# About
Read about this blog [here](https://eillanrt.github.io/posts/what-is-this).

# Open Source
- Source Code is licensed under the MIT License. 
- Original content in this blog (e.g., text, images, and audio) located in the [content/posts](https://github.com/eillanrt/eillanrt.github.io/tree/main/content/posts) and [static](https://github.com/eillanrt/eillanrt.github.io/tree/main/static) directories is **All Rights Reserved**, unless otherwise stated.

# Customization
I want to make as few customizations as possible. Keeping only the necessary ones.

## Shortcode: Callout   
### Arguments:
- type (string, optional): Specifies the icon and visual style of the callout.
    - Options: `"info"` (default), `"warning"`, `"danger"`, `"success"`
- title (string, optional): Heading displayed at the top of the callout box.

### Example:
A `warning callout` with a title `"Deprecation Notice"`.
```markdown
{{< callout type="warning" title="Deprecation Notice" >}}
This feature will be removed in version 2.0. Please migrate your configuration to the new format:

- Old: `auto_save: true`
- New: `autosave: { enabled: true }`
{{< /callout >}}
```

## Support for KaTeX rendering
I can write [KaTeX](https://katex.org/) syntax on markdown for math formulas.

### In front matter, add:
```yaml
math: true
```
Then start writing KaTeX. 
- `$` for inline mode math.
- `$$` for display mode math.

### Example:
#### Inline Mode
```markdown
The Pythagorean Theorem formula is $ a^2 + b^2 = c^2 $
```
#### Display Mode
```markdown
# The Quadratic Formula:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```

---
# Quick Links
- [Hugo](https://gohugo.io)
- [PaperMod](https://github.com/adityatelange/hugo-PaperMod)
- [KaTeX](https://katex.org/)