// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Download my latest CV or view the details below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-graduated-from-culver-military-academies-with-a-high-school-diploma",
          title: 'Graduated from Culver Military Academies with a High School Diploma',
          description: "",
          section: "News",},{id: "news-participated-in-junior-achievement-korea-internship-during-gap-year",
          title: 'Participated in Junior Achievement Korea Internship during Gap Year',
          description: "",
          section: "News",},{id: "news-joined-university-of-california-san-diego-as-a-cognitive-science-major",
          title: 'Joined University of California, San Diego as a Cognitive Science major',
          description: "",
          section: "News",},{id: "news-served-in-the-republic-of-korea-army-as-an-active-duty-soldier-until-july-2022",
          title: 'Served in the Republic of Korea Army as an active-duty soldier until July...',
          description: "",
          section: "News",},{id: "news-joined-shang-data-lab-ucsd-as-a-independent-researcher",
          title: 'Joined Shang Data Lab, UCSD as a Independent Researcher',
          description: "",
          section: "News",},{id: "news-graduated-from-university-of-california-san-diego-with-a-b-s-in-cognitive-science-specialization-in-machine-learning-and-neural-computation",
          title: 'Graduated from University of California San Diego with a B.S. in Cognitive Science...',
          description: "",
          section: "News",},{id: "news-joined-georgia-institute-of-technology-as-a-m-s-student-in-computer-science-specializing-in-interactive-intelligence",
          title: 'Joined Georgia Institute of Technology as a M.S. student in Computer Science specializing...',
          description: "",
          section: "News",},{id: "news-joined-popsign-ml-models-team-through-vip-program-at-georgia-institute-of-technology",
          title: 'Joined PopSign ML Models Team through VIP program at Georgia Institute of Technology...',
          description: "",
          section: "News",},{id: "news-submitted-fswordspell-an-isolated-word-american-sign-language-fingerspelling-dataset-to-imwut-2026-conference-as-coauthor-under-review",
          title: 'Submitted “FSWordSpell: An Isolated Word American Sign Language Fingerspelling Dataset” to IMWUT 2026...',
          description: "",
          section: "News",},{id: "projects-ddpm-pytorch",
          title: 'DDPM_PyTorch',
          description: "Reimplementing Denoising Diffusion Probabilistic Models paper from scratch in PyTorch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-ragaurant",
          title: 'RAGaurant',
          description: "A RAG-Powered LLM for Personalized Restaurant Recommendation in Atlanta",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-nlp-kiss-korean-intelligent-spacing-solver",
          title: 'NLP-KISS, Korean Intelligent Spacing Solver',
          description: "Exploring effectiveness of deep neural nets for solving Korean word spacing problem",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-mice-mouse-input-for-contextual-estimation",
          title: 'MICE, Mouse Input for Contextual Estimation',
          description: "Detecting User Actions from Mouse Events",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-ai-tutor",
          title: 'AI Tutor',
          description: "Creating Viable AI Tutor Powered by GPT-4 API",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-personalized-ai-author",
          title: 'Personalized AI Author',
          description: "User tailored writer using GPT-5 nano agent repetition and RAG with ReAct Prompting",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-soccertwo-rl-agent",
          title: 'SoccerTwo RL Agent',
          description: "Curriculum-trained reinforcement learning agent for the Soccer-Twos Unity environment using Ray RLlib PPO, staged environment randomization, and self-play checkpointing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-in-progress",
          title: 'In progress',
          description: "Empty",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-in-progress",
          title: 'In progress',
          description: "Empty",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%6A%77%30%34%31%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pjw0417", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jungwoo-park-02581b210", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
