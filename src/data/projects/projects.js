import pizza_img from '../../img/pizza-img.png';
import csc_web_img from '../../img/csc-web-img.png';
import ht6_24_web_img from '../../img/ht6-24-web-img.png';
import mnist_img from '../../img/mnist-img.png';
import rewind_img from '../../img/rewind-img.png';
import skinhance_img from '../../img/skinhance-img.png';
import umg_clarify_img from '../../img/umg-clarify-img.png';
import umg_carrx_img from '../../img/umg-carrx-img.png';
import umg_honda_img from '../../img/umg-honda-img.png';
import umg_vivi_img from '../../img/umg-vivi-img.png';
import airate_img from '../../img/airate-img.png';
import csc_graphic_img from '../../img/csc-graphic-img.png';
import ht6_24_graphic_img from '../../img/ht6-24-graphic-img.png';


const projects = [
    {
      id: 1,
      title: 'pizza studio [technova\'24 winner]',
      points: [
        'developed an audio recording and alert-sending mobile application disguised as a pizza ordering app.',
        'assessed situation risk level by transcribing recordings and detecting emotions through AI processing, then determining the risk level using OpenAI, and Hume AI, Deepgram AI.',
      ],
      tools: "[typescript, react native, python, flask, mongodb, figma, aws, openai, hume ai, deepgram ai, twilio]",
      imageUrl: pizza_img,
    },
    {
        id: 2,
        title: 'class profile 2024 [uwaterloo graduating cs class statistics]',
        points: [
          'led the annual redesign of the class profile, a faculty-wide website initiative achieving 5,000+ monthly visits.',
          'as the web design lead, set project objectives, identified key features + deliverables, developed reusable design system components, and conducted regular design reviews.',
        ],
        tools: "[figma, adobe illustrator]",
        imageUrl: csc_web_img,
      },
      {
        id: 3,
        title: 'hack the 6ix 2024 landing page + dashboard',
        points: [
          'designed the landing page and dashboard ux/ui for hack the 6ix, a hackathon that hosts 2,000+ applicants and 500+ hackers annually.',
          'conducted ux research through competitive analysis, interviews, card sorting, and A/B testing.',
          'redesigned key landing page components to improve CTA effectiveness.'
        ],
        tools: "[figma, adobe creative cloud, google analytics]",
        imageUrl: ht6_24_web_img,
      },
      {
        id: 4,
        title: 'neural network development [using mnist dataset]',
        points: [
          'developed and trained a two-layer neural network using gradient descent with forward and backward propagation to classify images from the MNIST training set of 60,000 images.',
          'achieved a test set classification accuracy of 94% for MNIST numerical dataset and 85% for the MNIST fashion dataset using Adam optimization algorithm.',
        ],
        tools: "[python, jupyter notebook, numpy, pandas, matplotlib]",
        imageUrl: mnist_img,
      },
      {
        id: 5,
        title: 're:wind [uofthacks\'24 submission]',
        points: [
          'built a machine learning powered video editor that automates sound effect insertion through google cloud transcription and training cohere ai to analyze emotions and identify timestamps to insert sound effects.',
          'developed a REST API to streamline data processing and manage client-server communication to ensure efficient data storage and retrieval from postgresql database.',
        ],
        tools: "[react, python, flask, postgresql, google cloud api, cohere api]",
        imageUrl: rewind_img,
      },
      {
        id: 6,
        title: 'skinhance [machine learning skincare recommender system]',
        points: [
          'developed a machine learning skincare recommender system that suggests similar asian skincare products related to the selected product based on a database of 350+ items scraped from yesstyle.',
          'implemented a knn algorithm with cosine similarity to evaluate product similarities based on item description and ingredient list.',
        ],
        tools: "[python, jupyter notebook, streamlit, pandas, scikit-learn, beautifulsoup, requests]",
        imageUrl: skinhance_img,
      },
      {
        id: 7,
        title: 'clarify website redesign + development [universus media group]',
        points: [
          'enhancing scalability and maintainability through designing and implementing a responsive design featuring reusable components for the redesign of the clarify website.',
        ],
        tools: "[html, css, javascript, php, sql, figma, adobe creative cloud]",
        imageUrl: umg_clarify_img,
      },
      {
        id: 8,
        title: 'carrx website design + development [universus media group]',
        points: [
          'designed and developed a seamless single-page landing page for carrx’s canada page, establishing a cohesive design system aligned with brand guidelines and integrating a built-in contact form.',
        ],
        tools: "[html, css, javascript, php, figma, adobe illustrator]",
        imageUrl: umg_carrx_img,
      },
      {
        id: 9,
        title: 'honda studio project enquiry website design + development [universus media group]',
        points: [
          'designed and developed a standalone project inquiry webpage with an integrated form, as part of a collaboration between honda and universus media group to facilitate corporate outreach.',
        ],
        tools: "[html, css, javascript, php, figma, adobe photoshop, adobe illustrator]",
        imageUrl: umg_honda_img,
      },
      {
        id: 10,
        title: 'vivi e-learning website design + development [universus media group]',
        points: [
          'designed and developed a landing page for an e-learning startup project, featuring a seamless single-page design and an integrated contact form.',
        ],
        tools: "[html, css, javascript, php, figma, adobe illustrator]",
        imageUrl: umg_vivi_img,
      },
      {
        id: 11,
        title: 'airate [hack the 6ix\'23 submission]',
        points: [
          'designed and developed a community-focused air quality rating application in light of the forest fires occurring during june 2023.',
          'pinpointed user\'s location on the map to visually display the geographical distribution of air quality ratings, using google maps api.',
        ],
        tools: "[typescript, react native, python, flask, mongodb]",
        imageUrl: airate_img,
      },
      {
        id: 12,
        title: 'uwaterloo computer science club swag + marketing posts',
        points: [
            'improved the efficiency of design and marketing post production by 28% by developing a unified design and marketing requests board on notion, streamlining internal requests for several teams.',
            'managed the design and procurement of 4 cycles of swag production, including merchandise such as sweaters, t-shirts, hats, keychains, blind boxes, stickers, and more!',
        ],
        tools: "[figma, adobe creative cloud, notion]",
        imageUrl: csc_graphic_img,
      },
      {
        id: 13,
        title: 'hack the 6ix 2024 swag + marketing posts',
        points: [
          'designed various graphic assets on figma, including several website assets, 3 sticker designs, and 3 variations of t-shirts for the hack the 6ix event to be distributed to hackers, organizers, and volunteers.',
          'created various marketing posts for the hack the 6ix event to be posted on various social media platforms such as instagram, discord, and linkedin.'
        ],
        tools: "[figma, adobe creative cloud]",
        imageUrl: ht6_24_graphic_img,
      },
  ];
  
  export default projects;