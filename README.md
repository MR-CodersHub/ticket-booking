# Eventora — Ticket Booking Website

A responsive, multi-page event discovery and ticket booking website built with HTML, CSS, Bootstrap 5, and vanilla JavaScript.

## Pages

| File | Description |
| --- | --- |
| `home.html` | Main landing page |
| `home2.html` | Alternate landing page |
| `index-nav.html` | Navigation showcase |
| `about.html` | About the platform |
| `services.html` | Services overview |
| `service-details.html` | Service detail page |
| `blog.html` | Blog listing |
| `blog-details.html` | Blog article |
| `contact.html` | Contact page |
| `login.html` | Login / sign-up |
| `user-dashboard.html` | Attendee dashboard |
| `admin-dashboard.html` | Admin dashboard |
| `coming-soon.html` | Coming soon page |
| `404.html` | Not found page |

## Project Structure

```
.
├── assets/
│   ├── css/style.css       # Shared styles and theme variables
│   ├── js/theme.js         # Theme toggle and shared scripts
│   └── images/             # Logos and favicon
├── *.html                  # Site pages
└── README.md
```

## Getting Started

No build step is required. Open `home.html` in a browser, or serve the folder locally:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000/home.html>.

## Tech Stack

- HTML5
- CSS3 (custom properties, responsive layout)
- Bootstrap 5.3
- Bootstrap Icons
- Vanilla JavaScript (light/dark theme toggle)
