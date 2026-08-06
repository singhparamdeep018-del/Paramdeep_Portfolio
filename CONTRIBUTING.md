# Contributing to Paramdeep Singh's Portfolio

Thanks for your interest in contributing! This is a personal portfolio project, but bug reports, accessibility fixes, and small enhancements are welcome.

## How to Contribute

1. **Fork** the repository.
2. **Create a branch** for your change:
   ```bash
   git checkout -b fix/short-description
   ```
3. **Make your changes.** Since this project has no build step, you can preview them by opening `index.html` in a browser or running a local server (see the README's Installation Guide).
4. **Keep changes focused.** Prefer small, single-purpose pull requests over large rewrites.
5. **Test in a browser** to confirm nothing is visually broken and that JavaScript behavior (navigation, helix animation, copy-email, back-to-top) still works.
6. **Commit** with a clear, descriptive message:
   ```bash
   git commit -m "Fix: correct alt text on project screenshots"
   ```
7. **Push and open a Pull Request** describing what changed and why.

## Guidelines

- Match the existing code style (indentation, naming conventions already used in `style.css` and `script.js`).
- Avoid introducing build tools, frameworks, or dependencies unless discussed first in an issue.
- Preserve accessibility features (skip link, `aria-*` attributes, reduced-motion handling) — don't remove them as a side effect of other changes.
- For visual changes, briefly describe the before/after in your PR description.

## Reporting Issues

If you spot a bug, broken link, or accessibility issue, please [open an issue](../../issues) with:
- A clear description of the problem
- Steps to reproduce (if applicable)
- Browser/OS, if relevant

Thanks for helping improve this project!
