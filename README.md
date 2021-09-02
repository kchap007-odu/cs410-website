This is the website repo for Team Crystal's CS 410 project.

# Manual Website Update Instructions

1.  Log in with the 410crystal account
2.  Create a secure_html directory using mkdir ~/secure_html
3.  Set directory permissions using chmod a+rx secure_html
4.  Set individual file permissions using chmod a+r ${the_file}

If you need to set a permissions for multiple files and directories... use the find command:

- Directories - find /home/410crystal/secure_html -type d | xargs chmod a+rx

- Files - find /home/410crystal/secure_html -type f | xargs chmod a+r

# Necessary Information

- [x] Problem Description
- [x] Team Biographies
- [x] Presentations
- [x] Process Flow Diagrams
- [x] Solution Characteristics
- [x] Competition Matrix
- [x] Risk Matrix
- [x] MFCD
- [x] Algorithms
- [x] User Stories
- [x] References
- [x] Glossary
- [x] Link to https://www.odu.edu
- [x] Link to https://www.cs.odu.edu

# Site Structure

- Everything is located on the home page.
- A navigation bar is used to go to certain parts of the webpage.

# Known Bugs

- [x] The presentation does not scale for smaller screens.
- [x] When scrolling down to the footer while the page is loading, the footer will sometimes briefly appear above the bottom of the screen before correcting itself. (Happens fairly consistently in Google Chrome but only rarely in Firefox).
- [x] Scrollspy stops working when every element has slid in.
- [x] Scrollspy only works with the links in the dropdown menus.
- [x] Scrollspy does not work properly for the process flow when they are side-by-side.
- [x] The reference superscripts are not displaying correctly and appear somewhat glitchy.
- [x] The size change of the carousels is delayed by half a second.
- [x] The border around the lab outline is broken in Chrome (Works properly in Firefox)
- [x] The dropdowns in the navbar break when going from the collapsible version to the non-collapsible version if the navbar is expanded in the collapsible version.
- [ ] The links in the references of the lab1 outline do not properly wrap when inserted into the iframe.
