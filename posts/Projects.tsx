// Oldest to newest projects

export const projects = [
  {
    id: 1,
    title: 'Pixel Painter',
    description:
      'A simple pixel art editor where users can create pixel art on a customizable grid and export their creations as PNG files.',
    link: 'https://github.com/SashaDC/Pixel-Painter',
    liveLink: 'https://pixel-painter-hdvt.onrender.com/',
    content: (
      <>
        <h2 className="text-xl font-semibold">Technologies Used</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>React</li>
          <li>TypeScript</li>
          <li>CSS Grid</li>
          <li>html2canvas</li>
        </ul>

        <h2 className="text-xl font-semibold">Why I Built This</h2>
        <p className="mb-4">
          I built this project to practice React component architecture and
          state management while creating something fun and interactive. It was
          also a great way to learn about CSS Grid and canvas manipulation.
        </p>

        <h2 className="text-xl font-semibold">Reflection</h2>
        <p className="mb-4">
          This was one of my first React projects, and it taught me a lot about
          managing state across components. I learned how to handle user
          interactions efficiently and how to implement file download
          functionality. Looking back, I would add features like an undo/redo
          system and color palette saving.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'MC Server Manager',
    description:
      'An Electron-based desktop application for managing Minecraft servers, allowing users to start, stop, and configure servers through a user-friendly interface.',
    link: 'https://github.com/SashaDC/MC-Server-Manager',
    liveLink: null,
    content: (
      <>
        <h2 className="text-xl font-semibold">Technologies Used</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Electron</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Node.js</li>
        </ul>

        <h2 className="text-xl font-semibold">Why I Built This</h2>
        <p className="mb-4">
          I wanted to create a tool that would make managing Minecraft servers
          easier for people who aren't comfortable with command-line interfaces.
          This project also gave me an opportunity to learn Electron and desktop
          application development.
        </p>

        <h2 className="text-xl font-semibold">Reflection</h2>
        <p className="mb-4">
          Currently a work in progress. This project has been challenging but
          rewarding, teaching me about cross-platform desktop development and
          process management. The biggest challenge has been handling server
          logs and making the UI responsive while the server is running.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: 'Chrome Multiplayer Game',
    description:
      'A web-based multiplayer social game inspired by Club Penguin, where players can move around a shared map, interact with each other, and chat in real-time.',
    link: 'https://github.com/SashaDC/Chrome-Multiplayer-Game',
    liveLink: null,
    content: (
      <>
        <h2 className="text-xl font-semibold">Technologies Used</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>React</li>
          <li>TypeScript</li>
          <li>WebSockets</li>
          <li>Node.js</li>
          <li>Canvas API</li>
        </ul>

        <h2 className="text-xl font-semibold">Why I Built This</h2>
        <p className="mb-4">
          I've always loved social multiplayer games and wanted to understand
          how they work behind the scenes. This project combines real-time
          communication, game state synchronization, and interactive graphics.
        </p>

        <h2 className="text-xl font-semibold">Reflection</h2>
        <p className="mb-4">
          Work in progress. This has been my most ambitious project yet,
          teaching me about real-time game networking, collision detection, and
          multiplayer state management. The biggest challenge is keeping all
          players synchronized while maintaining smooth gameplay.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: 'Vibing Violet - Messaging App',
    description:
      'A Discord-inspired real-time messaging application where users can create accounts, add friends, and send messages instantly using WebSocket technology. This was my final group project at Dev Academy.',
    link: 'https://github.com/SashaDC/Messaging-App',
    liveLink: 'https://vibing-violet.onrender.com/',
    content: (
      <>
        <h2 className="text-xl font-semibold">Technologies Used</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>React</li>
          <li>TypeScript</li>
          <li>WebSockets</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>SQLite</li>
          <li>Knex</li>
          <li>Auth0</li>
          <li>Tailwind CSS</li>
        </ul>

        <h2 className="text-xl font-semibold">Why I Built This</h2>
        <p className="mb-4">
          As the Product Owner for this group project, I wanted to challenge
          myself by implementing WebSockets for real-time messaging—a technology
          that was new to all of us. This project demonstrated our ability to
          work as a team and deliver a full-stack application under a deadline.
        </p>

        <h2 className="text-xl font-semibold">Reflection</h2>
        <p className="mb-4">
          This project taught me invaluable lessons about team collaboration,
          feature prioritization, and real-time communication systems. I learned
          how to implement WebSockets from scratch, deploy a full-stack
          application, and manage a project timeline. If I could do it again, I
          would focus more on mobile responsiveness and add message
          editing/deletion features.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: 'Personal Portfolio Website',
    description:
      'My personal portfolio website showcasing my projects, blog posts, and contact information. Built from scratch in 4 days to replace my original GitHub Pages site.',
    link: 'https://github.com/SashaDC/Personal-Website',
    liveLink: 'https://sashachambers.dev',
    content: (
      <>
        <h2 className="text-xl font-semibold">Technologies Used</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>React</li>
          <li>TypeScript</li>
          <li>React Router</li>
          <li>Tailwind CSS</li>
          <li>Vite</li>
        </ul>

        <h2 className="text-xl font-semibold">Why I Built This</h2>
        <p className="mb-4">
          I wanted a modern, professional portfolio that better represented my
          current skills and included features like blog post modals and project
          showcases. This was also a chance to practice rapid development and
          modern React patterns.
        </p>

        <h2 className="text-xl font-semibold">Reflection</h2>
        <p className="mb-4">
          Building this site in just 4 days was intense but rewarding. I learned
          how to quickly scaffold a React application, implement routing, and
          create reusable components. The biggest challenge was designing a
          cohesive visual identity while balancing functionality and aesthetics.
          I'm proud of how it turned out and plan to continue refining it as I
          grow as a developer.
        </p>
      </>
    ),
  },
  // Add more projects as needed
]
