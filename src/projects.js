const projectsList = [
  {
    id: 1,
    name: "ToDo List",
    description:
      "ToDo list application built on React.\nUses localStorage to persist data after refresh. Built to solidify core React hooks such as useState() and useEffect().",
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
    description:
      "Business card demonstrating core AWS services.\nStatic website that uses Amazon S3 and CloudFront and utilized Route 53 to generate a domain name. Also calls a Lambda function via an API Gateway on refresh to update and fetch from a DynamoDB table.",
    skills: "AWS, React",
    thumbnail: "/thumbnails/business-card.png",
    sourceCode: "https://github.com/jayhons99/business-card",
    liveDemo: "https://www.jhonresumesite.com/",
    completed: true,
  },
];

export default projectsList;
