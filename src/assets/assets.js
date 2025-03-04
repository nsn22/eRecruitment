import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import indonesian_map from './Indonesian_map.svg'
import coal_mine_img from './coal_mine_img.jpg'
import location_on from './location_on.svg'
import time from './time.svg'
import artic_img from './artic_truck.jpg'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    left_arrow,
    right_arrow,
    indonesian_map,
    coal_mine_img,
    location_on,
    time,
    artic_img,
}


  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Foreman Safety",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
        name: "Richard Nelson",
        title: "IT Staff",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
        name: "James Washington",
        title: "Data Processing",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    }
];

export const projects_Data = [
  {
    proejectName: "KDC - AKG",
    location: "Muara Badak, Kaltim",
    client: "PT. Alam Karya Gemilang",
    comodity: "Thermal Coal",
    image: coal_mine_img
  },
  {
    proejectName: "KDC - BJE",
    location: "Berau, Kaltim",
    client: "PT. Berau Jaya Energi",
    comodity: "Thermal Coal",
    image: coal_mine_img
  },
  {
    proejectName: "KDC - SMU",
    location: "Tarakan, Kaltara",
    client: "PT. SMU",
    comodity: "Thermal Coal",
    image: coal_mine_img
  },
  {
    proejectName: "KDC - PDI",
    location: "Barito Utara, Kalteng",
    client: "PT. PADA - IDI",
    comodity: "Thermal Coal",
    image: coal_mine_img
  },
  {
    proejectName: "KDC - AAE",
    location: "Pali, Sumsel",
    client: "PT. Abani Andalus Energy",
    comodity: "Road Construction",
    image: coal_mine_img
  },
  
];

export const vacancyData = [
  {
    image: coal_mine_img,
    position: "Foreman Civil",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    hiringType: "Experience Hire",
    site: "Muara Badak",  
    type: "All In"
  },
  {
    image: coal_mine_img,
    position: "Supervisor HCGS",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    hiringType: "Experience Hire",
    site: "Sumatra",
    type: "All In"
  },
  {
    image: coal_mine_img,
    position: "MT Engineering",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    hiringType: "Fresh Graduate",
    site: "Sumatra",
    type: "All In"
  },
  {
    image: artic_img,
    position: "MT SCM",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    hiringType: "Fresh Graduate",
    site: "Sumatra",
    type: "All In"
  },
  {
    image: artic_img,
    position: "Senior Planner",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    hiringType: "Experience Hire",
    site: "Sumatra",
    type: "All In"
  },
  {
    image: artic_img,
    position: "Operator Bulldozer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    hiringType: "Experience Hire",
    site: "Muara Teweh",
    type: "Overtime",
    status: "Active"
  }
  
];

export const Menus = [
  {
    title: 'Dashboard',
    icon: 'house',
    link: '/'
  },
  { 
    title: 'Master Data',
    icon: 'layers',
    submenu: true,
    link: '#',
    submenuItems: [
      { title: 'Company' },
      { title: 'Department' },
      { title: 'Users' }
    ]
  },
  { title: 'Vacancy',
    icon: 'id-card',
    link: '/',
  },
  { title: 'Applicant',
    icon: 'book-user',
    link: '/',
  },
  { title: 'Settings',
    icon:'square-terminal',
    link: '/'
  },
]

export const howtoapply = [
  {
    step: 'Find The Job',
    explanation: 'Select the job vacancies available on the KDC-Group web page. Open the job detail and make sure you match the minium requirements. Apply the selected job by clicking "Apply"'
  },
  {
    step: 'Input Data',
    explanation: 'Apply the job you selected. Fill in the requested data and attach your applicant files (not exceeding 2 MB).'
  },
  {
    step: "Follow the Recruitment Flow",
    explanation: 'Wait until KDC-Group contact you'
  },
]