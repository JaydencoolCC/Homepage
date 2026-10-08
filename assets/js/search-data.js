// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/Homepage/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Homepage/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected research and benchmark projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Homepage/projects/";
          },
        },{id: "nav-blogs",
          title: "Blogs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Homepage/blog/";
          },
        },{id: "post-from-agent-learning-to-scalable-agent-training-data",
        
          title: "From Agent Learning to Scalable Agent Training Data",
        
        description: "A survey of scalable trajectory construction methods for training language-model agents.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/Homepage/blog/2026/scaling-training-data-for-agent-learning/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/Homepage/books/the_godfather/";
            },},{id: "news-our-paper-on-pretraining-data-detection-for-llms-has-been-accepted-for-publication-at-iclr2025",
          title: 'Our paper on pretraining data detection for LLMs has been accepted for publication...',
          description: "",
          section: "News",},{id: "news-i-have-passed-the-qualifying-exam-for-the-ph-d-program",
          title: 'I have passed the Qualifying Exam for the Ph.D. program !',
          description: "",
          section: "News",},{id: "projects-automatic-dataset-construction",
          title: 'Automatic Dataset Construction',
          description: "Innovative automated dataset creation and open-source software for label error detection, robust learning under noisy data",
          section: "Projects",handler: () => {
              window.location.href = "/Homepage/projects/automatic-dataset-construction/";
            },},{id: "projects-chinesesafe-benchmark",
          title: 'ChineseSafe Benchmark',
          description: "A Chinese Benchmark for Evaluating Safety in Large Language Models",
          section: "Projects",handler: () => {
              window.location.href = "/Homepage/projects/chinesesafe-benchmark/";
            },},{id: "projects-marketpilot",
          title: 'MarketPilot',
          description: "A dashboard for tracking financial assets of interest",
          section: "Projects",handler: () => {
              window.location.href = "/Homepage/projects/marketpilot/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/Homepage/assets/pdf/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/Homepage/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
