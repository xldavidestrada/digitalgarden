---
applyTo: '**'
---
Coding standards, domain knowledge, and preferences that AI should follow.

# Resume Code Instructions

When generating or modifying code, please adhere to the following guidelines:
1. **File Structure**: Ensure that the resume PDF is placed in the `static` directory of the Quartz site. This allows it to be served correctly.
2. **use shadcn/ui**: If the site uses the `shadcn/ui` library, please utilize its components for styling the download button. This ensures consistency with the site's design.
3. **Button Styling**: The download button should be styled to match the overall theme of the site. Use appropriate classes and styles to ensure it looks appealing and is easily noticeable.
4. **Accessibility**: Ensure that the button is accessible, with appropriate `aria` labels if necessary, to enhance usability for all visitors.
5. **Linking**: The button should link directly to the resume PDF file, allowing users to download it with a single click.
6. **Testing**: After adding the button, test it to ensure that it functions correctly and that the PDF downloads as expected.
7. **Fontawesome Icon**: Use the Font Awesome for icons in buttons. Ensure that the icon is properly integrated and displays correctly.
