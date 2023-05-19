const mockData = {
    generalInfo:{
        firstName:"Vehera",
        secondName:"Andrew",
        profileTitle:"Frontend Developer",
        description:"Andriy, 19 years old, ready to learn new things, sociable, stress-resistant, loves new things\n" +
            "                        acquaintances, I want to become a Junior developer in Frontend development and develop in this direction."
    },
    skills:[
        "HTML","CSS","JavaScript","React","Git"
    ],
    languages:[
        "Ukrainian","English"
    ],
    education:[
        {
            educationYear:"September 2009 - May 2018",
            educationText:"Vinnychky gymnasium of Davydivska village council of Lviv district"
        },
        {
            educationYear:"September 2018 - June 2023",
            educationText:"Technical College of the National University \"Lviv Polytechnic"
        },
    ],
    courses: {
        coursesYear: "September 2022 - May 2023",
        coursesList: "Frontend developer - Logos"
    },
    personalData:{
        address:"Village of Vynnychki, Lviv region 81150",
        phoneNumber:"+380631894170",
        dateOfBrh:"07-12-2003",
        email:"vegeraandrij@gmail.com"
    },
    interests:[
        "Football","Computer games", "Volleyball"
    ],
    socialNetworks:[
        "Instagram","Telegram","Steam","Viber","Twitch","Discord","TikTok"
    ],
    experience:[
        {
            experienceYear:"April 2023",
            experienceText:"No work experience"
        }
    ]
}
const userReducer = (store= mockData)=>{
    return store;
}
export default userReducer;