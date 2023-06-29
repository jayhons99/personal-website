const projectsList = [
  {
    id: 1,
    name: "ToDo List",
    description: "ToDo list application built on React.",
    skills: "React",
    thumbnail: "/thumbnails/todo-list-thumb.png",
    sourceCode: "https://github.com/jayhons99/todo-app",
    liveDemo:
      "http://todo-list-bucket-jhon.s3-website-us-east-1.amazonaws.com/",
    completed: true,
  },
  {
    id: 2,
    name: "Business Card",
    description: "Business card demonstrating core AWS services.",
    skills: "AWS, React",
    thumbnail: "/thumbnails/business-card.png",
    sourceCode: "https://github.com/jayhons99/business-card",
    liveDemo: "https://www.jhonresumesite.com/",
    completed: true,
  },
  {
    id: 3,
    name: "Shopaholic",
    description: "Ecommerce site with cart and checkout functionality.",
    skills: "React, React Context, Stripe, AWS",
    sourceCode: "https://github.com/jayhons99/ecommerce-demo",
    thumbnail: "/thumbnails/shopaholic.png",
    liveDemo: "https://main.d3klsfakt69u7r.amplifyapp.com/",
    completed: true,
  },
];

const techIcons = [
  {
    path: "/assets/aws.svg",
    link: "https://aws.amazon.com/",
  },
  {
    path: "/assets/git.svg",
    link: "https://git-scm.com/",
  },
  {
    path: "/assets/html5.svg",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    path: "/assets/java.svg",
    link: "https://www.java.com/en/",
  },
  {
    path: "/assets/js.svg",
    link: "https://www.javascript.com/",
  },
  {
    path: "/assets/nextjs.svg",
    link: "https://nextjs.org/",
  },
  {
    path: "/assets/nodejs.svg",
    link: "https://nodejs.org/en",
  },
  {
    path: "/assets/reactjs.svg",
    link: "https://react.dev/",
  },
  {
    path: "/assets/spring.svg",
    link: "https://spring.io/projects/spring-boot",
  },
  {
    path: "/assets/tailwind.svg",
    link: "https://tailwindcss.com/",
  },
  {
    path: "/assets/mysql.svg",
    link: "https://www.mysql.com/",
  },
];

export { projectsList, techIcons };
