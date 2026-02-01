import { TimelineItem } from "@/types/timeline";

export const careerTimeline: TimelineItem[] = [
  {
    id: "aws-sde-deployments",
    type: "work",
    company: "Amazon Web Services",
    title: "Software Development Engineer, ECS Deployments",
    location: "New York, NY",
    startDate: "June 2024",
    endDate: "Present",
    description:
      "[Placeholder: Add a brief description about your role and impact on the ECS Deployments team]",
    achievements: [
      "Owned the end-to-end implementation of orchestration logic to resolve service revision and deployment integrations with load balancers and Service Connect services to enable Blue/Green Deployments.",
      "Led a small team of engineers to secure communication between the team's three core Java microservices and the rest of ECS with action-based authorization as part of an org-wide initiative.",
      "Reduced team's operational overhead by developing Amazon Q scripts that, given a ticket ID, referenced the runbook, federated into the correct AWS account, retrieved logs, and recommended next steps.",
    ],
  },
  {
    id: "aws-frontend-console",
    type: "work",
    company: "Amazon Web Services",
    title: "Frontend Engineer, ECS Console",
    location: "New York, NY",
    startDate: "May 2022",
    endDate: "June 2024",
    description:
      "[Placeholder: Add a brief description about your frontend work on the ECS Console and key initiatives]",
    achievements: [
      "Led a small team of engineers to design and implement a large redesign of one of our key workflows.",
      "Collaborated with UX and product teams to design features, taking ownership from planning through to successful implementation.",
      "Shipped test stages and other improvements to our continuous deployment pipeline that cut down the amount of time it took our team to build new AWS regions by days.",
    ],
  },
  {
    id: "bread-backend",
    type: "work",
    company: "Bread",
    title: "Backend Engineer",
    location: "New York, NY",
    startDate: "September 2021",
    endDate: "May 2022",
    description:
      "[Placeholder: Add a brief description about your backend engineering work at Bread and the fintech domain]",
    achievements: [
      "Developed, maintained, and improved Go backend APIs in a microservice architecture responsible for serving millions of requests.",
      "Took leadership of my team's daily standups and sprint retrospectives.",
      "Implemented database schema changes, ran migrations, and wrote seed scripts for our service's PostgreSQL database.",
    ],
  },
  {
    id: "ana-luisa-frontend",
    type: "work",
    company: "Ana Luisa",
    title: "Frontend Developer",
    location: "Brooklyn, NY",
    startDate: "June 2020",
    endDate: "September 2021",
    description:
      "[Placeholder: Add a brief description about your frontend development work and the headless e-commerce migration]",
    achievements: [
      "Engaged in a massive, green-field project to migrate our legacy Shopify store to a headless React/Gatsby/Netlify implementation.",
      "Worked cross-team with designers to develop pixel-perfect implementations of detailed wireframes.",
      "Generated weekly website performance reports and implemented numerous optimization and accessibility improvement strategies based on these reports.",
    ],
  },
  {
    id: "hack-reactor",
    type: "education",
    company: "Hack Reactor",
    title: "Advanced Software Engineering Immersive Program",
    location: "Remote",
    startDate: "2019",
    endDate: "2020",
    description:
      "[Placeholder: Add a brief description about your experience at Hack Reactor and key takeaways]",
  },
];
