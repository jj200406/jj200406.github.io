// Add future projects by copying one object in this array.
// The homepage automatically creates the project card and the detail modal.
const projects = [
  {
    id:'madar', number:'01', title:'Madar', category:'HCI / UI/UX / MOBILE APP',
    description:'A smart nursery management app designed to simplify daycare management for parents, teachers, and administrators.',
    tags:['Flutter','Dart','UI/UX','HCI','Figma'], image:'assets/madar-cover-actual.png',
    tagline:'TECHNOLOGY FOR EVERY LITTLE STEP.',
    links:[
      {label:'VIEW CODE',url:'https://drive.google.com/drive/folders/1q_8N9jSbrNCW2lmXDsxYD3vppDaNQpnc?usp=share_link'},
      {label:'FULL REPORT',url:'assets/madar/Madar-Final-Report.pdf'}
    ],
    gallery:[],
    stats:[['ROLE','HCI / UI/UX'],['STACK','Flutter · Dart · Figma'],['TESTING','35 participants'],['SATISFACTION','4.88 / 5']],
    note:'All Madar visuals shown here are the original interface screenshots supplied for the project. No redesigned or AI-generated app screens are used. The full report is available separately.'
  },

  {
    id:'pokemon', number:'02', title:'Pokémon Card Recognition', category:'COMPUTER VISION / PYTHON / CNN',
    description:'A computer vision project that identifies Pokémon cards using image classification with a Convolutional Neural Network.',
    tags:['Python','CNN','TensorFlow/Keras','Google Colab'], image:'assets/pokemon-slides/slide-1.jpg',
    tagline:'TURNING IMAGES INTO INFORMATION.',
    links:[
      {label:'VIEW COLAB',url:'https://colab.research.google.com/drive/1i4B74Cy1GG-_Z91UlkT_gsAcMVPxHGQV?usp=sharing'},
      {label:'FULL SLIDES',url:'assets/pokemon-slides/Pokemon-Project-Slides.pdf'}
    ],
    gallery:[],
    stats:[['MODEL','Standard CNN'],['INPUT','Card image'],['OUTPUT','Card name'],['DATASET','PokémonTCGImagesDataset']],
    note:'The current prototype focuses on card-name recognition. The project slides describe future connections to card details such as set, rarity, type, HP, and price. No validated accuracy metric is claimed.'
  },
  {
    id:'car-classification', number:'03', title:'Car vs Not Car', category:'IMAGE CLASSIFICATION / AZURE CUSTOM VISION',
    description:'An image classification model using Azure Custom Vision to detect whether an image contains a car.',
    tags:['Azure','Custom Vision','Image Classification'], image:null,
    tagline:'REAL-WORLD VISION FOR A SMARTER WORLD.',
    links:[
      {label:'LIVE DEMO',url:'https://car-classification-demo-l5f59beujsp9mkarr3bstd.streamlit.app/'},
      {label:'GITHUB',url:'https://github.com/jj200406/car-classification-demo'}
    ],
    gallery:[],
    stats:[['MODEL','Azure Custom Vision'],['CAR TEST','99.97%'],['NOT-CAR TEST','99.25%'],['TYPE','Multiclass · single tag']],
    note:'The visual on this card is a UI treatment of the project, not a replacement for the live Streamlit demo.'
  },
  {
    id:'car-price', number:'04', title:'Car Price Prediction', category:'MACHINE LEARNING / REGRESSION / DATA ANALYSIS',
    description:'A machine learning project to predict car prices using data analysis and regression models on Azure ML.',
    tags:['Azure ML','Regression','Data Analysis','Linear Regression'], image:'assets/car-price-pipeline.jpeg',
    tagline:'DATA DRIVES BETTER DECISIONS.',
    links:[],
    gallery:[
      {src:'assets/car-price-pipeline.jpeg',label:'Azure ML Designer pipeline'},
      {src:'assets/car-price-train.jpeg',label:'Train Model configuration'},
      {src:'assets/car-price-regression.jpeg',label:'Linear Regression model'}
    ],
    stats:[['R²','0.8682'],['MAE','1,773.63'],['RMSE','2,461.70'],['MODEL','Linear Regression']],
    note:'The training and inference workflow was completed in Azure ML Designer. No working public endpoint is claimed here.'
  }
];
