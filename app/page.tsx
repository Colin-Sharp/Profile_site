import { TextHoverEffect } from "./components/TextHoverEffect";
import { SkillLevelEnum, SkillPropsInterface } from "./modals/skills";
import Skill from "./components/Skill";
import CardSection from "./components/CardSection";
import { CardSectionInterface } from "./modals/card";

const skills: Array<SkillPropsInterface> = [
  {
    text: "JavaScript",
    imageSrc: "/js.svg",
    skillLevel: SkillLevelEnum.HIGHTLY_SKILLED,
  },
  {
    text: "TypeScript",
    imageSrc: "/typescript.svg",
    skillLevel: SkillLevelEnum.HIGHTLY_SKILLED,
  },
  {
    text: "Vue.js",
    imageSrc: "/vuejs.svg",
    skillLevel: SkillLevelEnum.HIGHTLY_SKILLED,
  },
  { text: "Nuxt.js", imageSrc: "/nuxt.svg", skillLevel: SkillLevelEnum.PRO },
  { text: "React.js", imageSrc: "/react.svg", skillLevel: SkillLevelEnum.PRO },
  { text: "Next.js", imageSrc: "/next.svg", skillLevel: SkillLevelEnum.PRO },
  {
    text: "Angular",
    imageSrc: "/angular.svg",
    skillLevel: SkillLevelEnum.INTERMEDIATE,
  },
  {
    text: "HTML5",
    imageSrc: "/html5.svg",
    skillLevel: SkillLevelEnum.HIGHTLY_SKILLED,
  },
  {
    text: "CSS",
    imageSrc: "/css.svg",
    skillLevel: SkillLevelEnum.HIGHTLY_SKILLED,
  },
  {
    text: "SASS",
    imageSrc: "/sass.svg",
    skillLevel: SkillLevelEnum.HIGHTLY_SKILLED,
  },
  {
    text: "Tailwind",
    imageSrc: "/tailwindcss.svg",
    skillLevel: SkillLevelEnum.HIGHTLY_SKILLED,
  },
  { text: "Node.js", imageSrc: "/node.svg", skillLevel: SkillLevelEnum.PRO },
  {
    text: "Golang",
    imageSrc: "/golang.svg",
    skillLevel: SkillLevelEnum.INTERMEDIATE,
  },
  {
    text: "C#",
    imageSrc: "/c-sharp.svg",
    skillLevel: SkillLevelEnum.INTERMEDIATE,
  },
  {
    text: "SEO",
    imageSrc: "/seo.svg",
    skillLevel: SkillLevelEnum.HIGHTLY_SKILLED,
  },
  { text: "Figma", imageSrc: "/figma.svg", skillLevel: SkillLevelEnum.PRO },
  {
    text: "InDesign",
    imageSrc: "/indesign.svg",
    skillLevel: SkillLevelEnum.PRO,
  },
  { text: "AWS", imageSrc: "/aws.svg", skillLevel: SkillLevelEnum.FOUNDATION },
  {
    text: "Strapi",
    imageSrc: "/strapi.svg",
    skillLevel: SkillLevelEnum.HIGHTLY_SKILLED,
  },
];

const experience: Array<CardSectionInterface> = [
  {
    title: "Frontend Developer",
    subtitle: "MYNDUP (Wellbeing solutions)",
    skillList: [
      "Vue.js version 3, with TypeScript, Pinia.",
      "SASS, ITCSS, Tailwind are all styling libraries, structures and pre-processors that I have a lot of experience using.",
      "Building full web applications from scratch, I have helped create several Vue web applications in my time working at MYNDUP.",
      "Strapi CMS, I have created a CMS system using Strapi for our wellbeing library for our marketing team to use. This involved overcoming a few custom issues like creating a proxy on the backend of our Strapi project, in order to use the client`s IP address on the server side for geo location to protect our API key, to name one.",
      "Mentoring and providing guidance, I have had the opportunity to help progress an individual that wants to become a Frontend Developer.",
      "Golang, I have also been picking up some tasks on our backend that in Golang. I have found it an interesting and rewarding experience.",
    ],
    content:
      "Current role at MYNDUP is primarily working as a Frontend Developer with Vue.js. I have gained experience working in a greenfield environment. I have created new projects from scratch in the latest version of  Vue.js with Typescript along with creating a CMS using Strapi for our marketing team to add new articles/videos/etc. In addition to the frontend work, I have also picked up some backend work in Golang. I am always excited  to learn new things and take on new challenges. Here at MYNDUP I have also had the opportunity to mentor and I have found it very enjoyable to help others to develop their skills and approach to solving problems.",
  },
  {
    title: "Vue.js Developer",
    subtitle: "Infigo (Web to print sas)",
    skillList: [
      "Vue.js version 3, with TypeScript, Pinia.",
      "SASS, Bulma, are all styling libraries and pre-processors that I used at Infigo.",
      "InDesign, I have extensive experience with InDesign as I was working on our own InDesign plugin.",
      "C#, I completed task on the backend at Infigo using C# MVC, which I enjoyed the opportunity to expand my learning.",
    ],
    content:
      "Added new features, integrated UI/UX, fixed bugs and kept up-to-date our InDesign plugin (which allows you to do so much more, including adding logic to the fields you export), written with Vue, Vuex, Vue Composition API and Typescript. I also work on our main product's front end and our editor, written in a mixture of Vue.js, jQuery and Angular.js. Most of the work involves adding new features, fixing bugs, improving styling, and improving the structure. I also work on some backend tasks (C#) and have completed a C# course. Even though my main strengths are still on the front end with JavaScript, TypeScript, CSS, and HTML, I am work on .Net and C#, as I enjoy expanding my knowledge. In addition, I work on old parts of the product, fixing any problems that we may have there. I solve problems for customers that are having an issue with their web-to-print storefront or any issue with InDesign/our plugin. The last project I  created was a tool to help find problems with our InDesign files and restore lost data in the files. This is a stand alone app that I made with Vue.js and Node.js.",
  },
  {
    title: "Frontend Developer",
    subtitle: "Leadstream (Lead finding company)",
    skillList: [
      "Vue.js version 2, Nuxt.",
      "SASS, ITCSS, Tailwind are all styling libraries, structures and pre-processors that I have a lot of experience using.",
      "Strapi, we created a CMS with Strapi as a headless CMS with Nuxt, enabling our marketing team to easily update the content of our landing pages.",
      "SEO, accessibility and performance here I really got to grips with the importance of SEO and everything from good quality content using the best HTML tags to using schemes. Also making sure that we are following best practices for accessibility and performance using tools like Lighthouse to ensure this is being adhered to.",
      "Figma, as Leadstream I work closely with designers that use Figma to create responsive web pages.",
    ],
    content:
      "Working at Leadstream I have advanced my knowledge working a Vue.js with a C# backend to create landing pages for the sale of leads. I have been working closely with graphic designers and use their spec designs made on Figma to create high quality pages with good performance, accessibility, following best practices and utilising SEO. I have very much enjoyed learning new skills, completing a course Vue as well as courses on JavaScript to reinforce my cord knowledge (e.g. JavaScript Understanding the Weird Parts) and CSS learning flexbox, Inverted triangle CSS and Tailwind CSS. I have had the opportunity to convert a code base that was using Jekyll and Storyblok (headless CMS) to use Nuxt and Storyblok (headless CMS). In my own time I created an app with Nuxt.js to progress my skills. It has a login/register, you can share ideas and vote on other ideas and see the results of the popularity of the ideas. I used Airtable as my backend to make all REST API requests. I have pushed myself to learn as much as possible,not just with JavaScript, CSS or HTML but also using SEO tools, Schemas, using headless CMS’s like Storyblok and Strapi. I am always working on expanding my skill and knowledge.",
  },
  {
    title: "Frontend Developer",
    subtitle: "Loadbalancer.org (Load balancing company)",
    skillList: [
      "Angular 1",
      "SASS",
      "Network+, I completed the Network + Certification course which greatly improved my knowledge of how the web operates.",
    ],
    content:
      "In my time working at loadbalancer.org, I have had the opportunity to really push my skills and problem-solving abilities. Working with Angular on their load balancing app, I became comfortable with utilizing Angular awesome OOP functionality. I am familiar with using Angular: components, services, directives, enums, resolvers, models, pipes, making api calls to name some of the parts of Angular I often work with. I have also been working with forms both template driven and reactive. Another aspect that I have really enjoyed working with is SCSS, as I have been working on converting the app from CSS to its super seed SCSS. Working with SCSS: variables, mixins, nesting and more, massively reducing repetitive code. On top of always pushing myself to improve my coding abilities, I have also learnt a lot about networking and have been taking a Network+ Certification course, where I have learnt all about the OSI model and how data is sent and received. I also work on the server side with php, performing small tasks.",
  },
  {
    title: "Frontend Developer",
    subtitle: "CrowdComms (Event company)",
    skillList: ["Angular.js, Angular."],
    content:
      "When I was working in CrowdComms as a junior front-end developer, I got the chance to work on a very large and complex projects. I gained a great experience in a company that is thriving and fast moving.",
  },
  {
    title: "Commercial Diver",
    subtitle: "AKVA Group Marine Services and Techno Dive",
    skillList: [],
    content:
      "In my time working as a diver, I have gained a wealth of experience within the fish farm industry. I have had the opportunity to do many dives. I have also completed many dives doing various jobs working in a small team including experience with larger projects on oil rigs. When I was working for Techno Dive, I was again working in small teams. There were always new problems to overcome like using an array of different equipment underwater, fixing problems with boat engines, fixing ROV’s and setting up OS. Concurrently to working as a diver, I was studying web development. Learning the basics of logic and computational thinking, HTML, CSS, JavaScript. I finished the Complete Web Development Bootcamp course. Then completed the Modern React with Redux course. I also have worked with static site generators, Jekyll, Gatsby.js and Next.js.",
  },
  {
    title: "Paratrooper",
    subtitle: "The first Battalion Parachute Regiment (12 years)",
    skillList: [],
    content:
      "During my time in the military, I completed several courses which have honed my skills in leadership and teaching, effective communication and decision making in high stress situations as well as navigation and weapon handling. I have extensive experience of commanding groups of people, from small groups of four to groups of twenty and applying risk assessment in combat situations and health and safety in everyday work. I have worked closely with people from different nationalities. I possess strong communication and interpersonal skills developed while working in groups for extended periods. I have carried out seven operational tours, one in Northern Ireland and six in Afghanistan.",
  },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-4xl my-2">Frontend Developer</h2>
      <TextHoverEffect text="Colin" />
      <section className="mb-8 mt-8">
        <div className="flex flex-wrap justify-between gap-6">
          {skills.map(function (skill) {
            return (
              <Skill
                key={skill.text}
                skillLevel={skill.skillLevel}
                text={skill.text}
                imageSrc={skill.imageSrc}
              ></Skill>
            );
          })}
        </div>
      </section>
      <div className="my-10">
        {experience.map((work) => {
          return (
            <CardSection
              key={work.subtitle}
              title={work.title}
              subtitle={work.subtitle}
              skillList={work.skillList}
              content={work.content}
            ></CardSection>
          );
        })}
      </div>
    </div>
  );
}
