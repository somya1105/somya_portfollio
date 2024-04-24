import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'VARCGAN (VARIATIONAL CYCLIC GENERATIVE ADVERSARIAL NETWORK)FORMUSICGENRESTYLETRANSFER',
        description: "Proposed a novel hybrid generative model for style transferring a song from one genre to another while retaining the inherent stylistic properties.",
        tools: ['GAN'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'VISUAL RELATIONSHIP OF OBJECTS DETECTED IN IMAGE',
        description: 'Evaluated various models for object detection and predicting the relations by proposing a hybrid of R-CNN and YOLO for faster preview and prediction.',
               tools: ["TENSORFLOW", "NLP", "ML"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'HEALTHCARE ML CHATBOT',
        description: 'Developed a chatbot to predict possible diseases based on the symptoms along with mental health chat feature that suggests activities by predicting person’s mood based on facial expression and tone.',
                tools: ["PYTHON","NLTK","API"],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'AUTO IRRIGATION SYSTEM',
        description: "Designed and created a micro-controller drip irrigation system which will help in watering plants automatically based on soil moisture under Rs.500.",
               tools: ["ARDUINO","SOIL SENSOR"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },