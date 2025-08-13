# Rikuto's Portfolio & Blog

This is a personal portfolio and blog website built with Node.js, Express, and EJS. It's a server-side rendered application designed to be simple, fast, and easy to maintain.

## Features

- **Dynamic Blog**: Blog posts are managed from a simple JSON file and rendered dynamically.
- **Portfolio Showcase**: A dedicated section to display portfolio projects, also managed via a JSON file.
- **Contact Form**: A functional contact form that sends emails using Nodemailer and a secure Gmail App Password.
- **Responsive Design**: Styled from scratch using SASS for a clean and responsive layout on all devices.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript templates) for server-side rendering
- **Styling**: SASS/SCSS
- **Email**: Nodemailer
- **Environment Variables**: Dotenv

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed.
- A Gmail account with an [App Password](https://support.google.com/accounts/answer/185833) enabled if you want to use the contact form.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the root of the project and add the following, replacing the values with your own Gmail credentials.
    ```
    # .env
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-google-app-password
    ```

### Running the Application

1.  **Compile SASS to CSS:**
    This command will watch for changes in the `sass` directory and automatically compile them to the `public/css` directory.
    ```sh
    npm run sass
    ```

2.  **Start the server:**
    In a new terminal window, run this command to start the Express server.
    ```sh
    npm start
    ```

3.  Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
/
├── app.js                # Main Express server file
├── data/                 # Contains JSON files for blog and portfolio
│   ├── blogPosts.json
│   └── portfolioItems.json
├── public/               # Static assets
│   ├── css/              # Compiled CSS
│   └── images/
├── sass/                 # SASS source files
│   ├── _partials/
│   └── style.scss
├── views/                # EJS templates
│   ├── layout.ejs        # Main layout
│   ├── partials/         # Header, footer, etc.
│   └── pages/            # Home, blog, contact, etc.
├── .gitignore            # Files to be ignored by Git
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```
