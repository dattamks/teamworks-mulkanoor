import { useEffect, useRef, useState } from 'react';
import founder from './../assets/founder-demo.jpg'
import Founder from '../assets/ourstory/Founder.jpg';
import logo from './../assets/new-logo.png';
import slider_1 from '../assets/anniversary/slide-1-an.webp';
import slider_2 from '../assets/anniversary/slide-2-an.jpg';
import slider_3 from '../assets/anniversary/slide-3-an.webp';
import transform_1 from '../assets/anniversary/transform_1.jpg';
import transform_2 from '../assets/anniversary/transform_2.jpg';
import transform_3 from '../assets/anniversary/transform_3.jpg';
import box_background from '../assets/anniversary/box-background.png';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaHome, FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { title } from 'framer-motion/client';
import impactImg from '../assets/agriinput/ag1.jpg'
import year1956 from '../assets/milestones/1956.jpg';
import year1957 from '../assets/milestones/1956-57.jpg';
import year1958 from '../assets/milestones/1958-59.jpg';
import year1959 from '../assets/milestones/1959-60.jpg';
import year1960 from '../assets/milestones/1960-61.jpg';
import year1961 from '../assets/milestones/1961-62.jpg';
import year1962 from '../assets/milestones/1961-62_two.jpg';
import year1963 from '../assets/milestones/1963-64.jpg';
import year1965 from '../assets/milestones/1965-66.jpg';
import year1966 from '../assets/milestones/1965-66_two.jpg';
import year1967 from '../assets/milestones/1965-66_three.jpg';
import year1968 from '../assets/milestones/1968-69.jpg';
import year1969 from '../assets/milestones/1968-69_two.jpg';
import year1970 from '../assets/milestones/1971-72.jpg';
import year1971 from '../assets/milestones/1972-73.jpg';
import year1972 from '../assets/milestones/1973-74.jpg';
import year1973 from '../assets/milestones/1974-75.jpg';
import year1974 from '../assets/milestones/1974-75_three.jpg';
import year1975 from '../assets/milestones/1974-75_two.jpg';
import year1976 from '../assets/milestones/1975-76.jpg';
import year1977 from '../assets/milestones/1976-77.jpg';
import year1978 from '../assets/milestones/1976-77_two.jpg';
import year1979 from '../assets/milestones/1976-77_three.jpg';
import year1980 from '../assets/milestones/1975-76.jpg';
import year1981 from '../assets/milestones/1976-77.jpg';
import year1982 from '../assets/milestones/1976-77_two.jpg';
import year1983 from '../assets/milestones/1976-77_three.jpg';
import year1984 from '../assets/milestones/1977-78.jpg';
import year1985 from '../assets/milestones/1978-79.jpg';
import year1986 from '../assets/milestones/1980-81.jpg';
import year1987 from '../assets/milestones/1980-81_two.jpg';
import year1988 from '../assets/milestones/1981-82.jpg';
import year1989 from '../assets/milestones/1981-82_two.jpg';
import year1990 from '../assets/milestones/1981-82_three.jpg';
import year1991 from '../assets/milestones/1983-84.jpg';
import year1992 from '../assets/milestones/1983-84_two.jpg';
import year1993 from '../assets/milestones/1984-85.jpg';
import year1994 from '../assets/milestones/1988-89.jpg';
import year1995 from '../assets/milestones/1988-89_two.jpg';
import year1996 from '../assets/milestones/1989-90.jpg';
import year1997 from '../assets/milestones/1992-93.JPG';
import year1998 from '../assets/milestones/1995-96.jpg';
import year1999 from '../assets/milestones/2000-2003.JPG';
import year2000 from '../assets/milestones/2002-03.JPG';
import year2001 from '../assets/milestones/2002-03_two.JPG';
import year2002 from '../assets/milestones/2002-03_three.JPG';
import year2003 from '../assets/milestones/2002-03_four.JPG';
import year2004 from '../assets/milestones/2003-2004.JPG';
import year2005 from '../assets/milestones/2005-06.JPG';
import year2006 from '../assets/milestones/2006-07.jpg';
import year2007 from '../assets/milestones/2006-07_two.JPG';
import year2008 from '../assets/milestones/2013-14.jpg';
import year2009 from '../assets/milestones/2013-14_two.jpg';
import year2010 from '../assets/milestones/2014-15.jpg';
import year2011 from '../assets/milestones/2014-15_two.JPG';
import year2012 from '../assets/milestones/2015-16.JPG';
import year2013 from '../assets/milestones/2015-16_Two.JPG';
import year2014 from '../assets/milestones/2016-17.JPG';
import year2015 from '../assets/milestones/2016-17_three.JPG';
import year2016 from '../assets/milestones/2016-17_two.JPG';
import year2017 from '../assets/milestones/2018-19.JPG';
import year2018 from '../assets/milestones/2018-19_two.JPG';
import year2019 from '../assets/milestones/2019-20.JPG';
import year2020 from '../assets/milestones/2019-20_two.JPG';
import year2021 from '../assets/milestones/2019-20_three.JPG';

import award1 from '../assets/awards/1.JPG'
import award2 from '../assets/awards/2.jpg'
import award3 from '../assets/awards/3.jpg'
import award4 from '../assets/awards/4.JPG'
import award5 from '../assets/awards/5.jpg'
import award6 from '../assets/awards/6.jpeg'
import award7 from '../assets/awards/7.jpeg'
import award11 from '../assets/awards/11.JPG'
import { interactionTargetMap } from 'web-vitals/attribution/onINP.js';



function Anniversary(){

    const topNavData = {
        phone:"+919440800651",
        email:"mcrcms1956@gmail.com",
        facebook:"https://www.facebook.com/profile.php?id=61566000885423",
        twitter:"https://x.com/mulkanoorCoop",
        insta:"https://www.instagram.com/mulkanoor_coop/?hl=en",
        linkedin:"https://www.linkedin.com/company/mulkanoor-cooperative-society/posts/?feedView=all",
        youtube:"https://youtube.com/@mulkanoorcooperative_1?si=3eJSaFOmvCC9sSai",
    }

    const [fixedNav, setFixedNav] = useState(false)

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY >= 10){
                setFixedNav(true)
            }else{
                setFixedNav(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener('scroll',handleScroll)
    },[])

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    const slides = [
        {
            image: slider_1,   // replace with your image path
            text_1: 'Tribute to',
            text_2: 'AligiReddy Vishwanath Reddy',
            text_3: 'Celebrating the Centenary of Our Visionary Founder and 68 Years of Agricultural Excellence, Farmer Empowerment and Rural Transformation.',
        },
        { image: slider_2 },
        { image: slider_3 },
        ];
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        setCurrent((prev) => prev === length - 1 ? 0 : prev + 1)
    }
    const prevSlide = () => {
        setCurrent((prev) => prev === 0 ? length - 1 : prev - 1)
    }
    useEffect(() => {
        const interval = current === 0 ? 12000 : 1000;
        const timer = setInterval(() => {
            nextSlide()
        },interval)
        return () => clearInterval(timer)
    },[current])

    const [heroAnimation, setHeroAnimation] = useState(false)
    const [zoomAnimation, setZoomAnimation] = useState(false)
    useEffect(() => {
        setHeroAnimation(true)
        setZoomAnimation(true)
    },[])


const headRef = useRef(null);
const impactRef = useRef(null);
const successRef = useRef(null);
useEffect(() => {
  const elements = document.querySelectorAll('.head-img, .impact-highlight, .success-img');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('showanimation');
      } else {
        entry.target.classList.remove('showanimation');
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => observer.observe(el));

  return () => {
    elements.forEach(el => observer.unobserve(el));
  };
}, []);




    const glimpse = [
        {
            logo:"🌱",
            title:"Foundation",
            para:"1956 - Vision becomes reality"
        },
        {
            logo:"🏆",
            title:"Recognition",
            para:"11+ National Awards"
        },
        {
            logo:"👥",
            title:"Community",
            para:"25,000+ Members"
        },
        {
            logo:"💰",
            title:"Impact",
            para:"₹300+ Cr Turnover"
        },
    ]

    const transEffects = [
        {
            heading:"Land Transformation",
            img:transform_1,
            before:{
                title:"Barren Land",
                para:"Drought-ridden fields with limited resources."
            },
            after:{
                title:"Green Fields",
                para:"Modern irrigation ensures year-round productivity."
            }
        },
        {
            heading:"Farmer Prosperity",
            img:transform_2,
            before:{
                title:"Poverty",
                para:"Limited access to credit and markets."
            },
            after:{
                title:"Prosperity",
                para:"Stable incomes and modern living standards."
            }
        },
        {
            heading:"Community Growth",
            img:transform_3,
            before:{
                title:"Isolated",
                para:"Disconnected from markets and technology."
            },
            after:{
                title:"Connected",
                para:"Linked to markets with technology access."
            }
        }
    ]
    const [transIndex, setTransIndex] = useState(0)
    const [transVisibleSlide, setTransVisibleSlide] = useState(2)

    const handleTransResize = () => {
        const width = window.innerWidth;
        if(width < 1024){
            setTransVisibleSlide(1)
        }else{
            setTransVisibleSlide(2)
        }
    }
    useEffect(() => {
        handleTransResize();
        window.addEventListener('resize',handleTransResize)
        return () => window.removeEventListener('resize',handleTransResize)
    },[])

    const transSlideWidth = 100 / transVisibleSlide;
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTransIndex((prev) => prev >= transEffects.length - transVisibleSlide ? 0 : prev + 1)
        },3000)
        return () => clearInterval(timer)
    },[transVisibleSlide])


    const impacts = [
        {
            logo:"👥",
            title:"25,000+",
            subtitle:"Active Members",
            para:"Farmers and families empowered through our cooperative network."
        },
        {
            logo:"💰",
            title:"₹300 Cr+",
            subtitle:"Annual Turnover",
            para:"Demonstrating sustained economic growth and impact."
        },
        {
            logo:"🏘️",
            title:"14+",
            subtitle:"Villages Served",
            para:"Rural communities across Karimnagar and surrounding districts."
        },
        {
            logo:"🏭",
            title:"15,000 MT",
            subtitle:"Storage Capacity",
            para:"Modern scientific storage ensuring food security and quality."
        },
        {
            logo:"📈",
            title:"98%",
            subtitle:"Loan Recovery",
            para:"Exceptional financial discipline built on trust and transparency."
        },
        {
            logo:"⭐",
            title:"68 Years",
            subtitle:"Legacy of Service",
            para:"Nearly seven decades of unwavering commitment to agricultural prosperity."
        }
    ]
    const [impactIndex, setImpactIndex] = useState(0)
    const [impactVisibleSlide, setImpactVisbleSlide] = useState(3)
    const sizeHandleImpact = () => {
        const width = window.innerWidth;
        if(width < 768){
            setImpactVisbleSlide(1)
        }else if(width < 1024){
            setImpactVisbleSlide(2)
        }else {
            setImpactVisbleSlide(3)
        }
    }
    useEffect(() => {
        sizeHandleImpact()
        window.addEventListener('resize',sizeHandleImpact)
        return () => window.removeEventListener('resize', sizeHandleImpact)
    },[])
    const impactSlideWidth = 100 / impactVisibleSlide;
    useEffect(() => {
        const timer = setInterval(() => {
            setImpactIndex((prev) => prev >= impacts.length - impactVisibleSlide ? 0 : prev + 1)
        }, 4000)
    },[])

    const services = [
        {
            logo:"💳",
            title:"Agricultural Credit",
            para:"Providing easy access to agricultural loans with competitive interest rates and flexible repayment options for farmers.",
            point:["Low interest rates","Quick processing"]
        },
        {
            logo:"🌾",
            title:"Crop Procurement",
            para:"Fair price procurement of various crops ensuring farmers get the best market rates for their produce.",
            point:["Fair pricing","Quality testing"]
        },
        {
            logo:"🏭",
            title:"Storage Facilities",
            para:"Modern warehousing and storage solutions to preserve crop quality and reduce post-harvest losses.",
            point:["Pest management","Quality preservation"]
        },
        {
            logo:"🌱",
            title:"Input Supply",
            para:"High-quality seeds, fertilizers, and farming equipment at subsidized rates for our members.",
            point:["Quality assured","Subsidized rates"]
        },
        {
            logo:"⚙️",
            title:"Value-added Services",
            para:"Comprehensive support services including processing facilities, marketing assistance, and technology adoption guidance for farmers.",
            point:["Processing support","Market linkages"]
        },
        {
            logo:"📚",
            title:"Training Programs",
            para:"Regular workshops and training sessions on modern farming techniques and sustainable agriculture.",
            point:["Expert trainers","Modern techniques"]
        },
    ]

    const historyYear = [
        {
            year: "1956-60",
            title: "Foundation & Early Growth",
            description: "Formation of the society with 373 members and ₹2,300 share capital. Introduced electrification and pump sets for agricultural development.",
            image: year1956,
            achievements: [
                "Society registered with 373 founding members",
                "Initial share capital of ₹2,300",
                "First electric pump sets introduced",
                "Started short-term loans for farmers",
                "Built first fertilizer godown"
            ],
            details: "The foundational years saw farmers uniting to create a cooperative that would transform agriculture in the region through collective effort and financial support."
        },
        {
            year: "1961-65",
            title: "Innovation & Diversification",
            description: "Introduced hybrid seeds, pledge loans, and expanded into rice milling. Member deposits crossed ₹1 lakh milestone.",
            image: year1963,
            achievements: [
                "First hybrid maize seeds introduced",
                "Pledge loan scheme implemented",
                "Member deposits exceeded ₹1.00 lakh",
                "Rice mill installation began",
                "Crop loan system established"
            ],
            details: "This period marked significant agricultural innovation with the introduction of modern farming techniques and diversified financial services."
        },
        {
            year: "1966-70",
            title: "Processing & Infrastructure",
            description: "Major expansion in agro-processing with rice and oil mills. Enhanced staff mobility and irrigation infrastructure development.",
            image: year1968,
            achievements: [
                "Rice mill and oil mill established",
                "100% loan recovery incentive program",
                "First motorcycle for staff mobility",
                "Drilling machine for irrigation wells",
                "Transition to SBH loan services"
            ],
            details: "Focused on building robust infrastructure for processing and expanding reach to better serve farming communities."
        },
        {
            year: "1971-75",
            title: "Mechanization & Diversification",
            description: "Comprehensive agricultural mechanization with tractors, lathe machines, and expansion into dairy and poultry sectors.",
            image: year1972,
            achievements: [
                "Agricultural graduate appointed",
                "NCDC-supported mechanization program",
                "All 14 villages electrified",
                "Dairy and poultry development schemes",
                "Feed mixing plant installed",
                "Six godowns constructed (3000 MT capacity)"
            ],
            details: "Revolutionary period that brought modern machinery and livestock development to transform rural agriculture comprehensively."
        },
        {
            year: "1976-80",
            title: "Technology & Welfare Expansion",
            description: "Advanced seed processing technology from Germany, livestock breeding, and expansion into insurance services.",
            image: year1977,
            achievements: [
                "Imported Petkus seed cleaner from East Germany",
                "New maize and jowar varieties introduced",
                "Sheep rearing and breeding bulls program",
                "LIC and GIC agency services",
                "Rural electrification funding support",
                "Cement stockist operations"
            ],
            details: "Period of technological advancement and welfare expansion, establishing the cooperative as a comprehensive rural development agency."
        },
        {
            year: "1981-85",
            title: "Silver Jubilee & Infrastructure Boom",
            description: "25th anniversary celebrations with major infrastructure development including parboiled rice mill and expanded storage facilities.",
            image: year1984,
            achievements: [
                "Silver Jubilee celebrations conducted",
                "BBC documentation of cooperative activities",
                "Parboiled rice mill installation",
                "Community irrigation wells projects",
                "Warehouses in multiple villages",
                "Drinking water facilities for four villages"
            ],
            details: "Milestone period celebrating 25 years of success while significantly expanding infrastructure and community services."
        },
        {
            year: "1986-90",
            title: "Modernization & Community Welfare",
            description: "Generator installation, welfare schemes introduction, and expansion into fruit marketing with community health initiatives.",
            image: year1989,
            achievements: [
                "125 KVA generator for rice mill",
                "Welfare schemes including funeral expenses",
                "Merit scholarships for members",
                "Eye camp and health services",
                "Citrus fruit marketing initiated",
                "Founder president statue unveiled"
            ],
            details: "Focus shifted to community welfare and health while expanding market operations and honoring leadership legacy."
        },
        {
            year: "1991-95",
            title: "Financial Innovation & Storage Expansion",
            description: "Financial year restructuring, comprehensive insurance coverage, and advanced irrigation technology implementation.",
            image: year1995,
            achievements: [
                "Financial year changed to April-March",
                "Janatha Accidental Insurance Policy",
                "Drip irrigation system introduction",
                "Award from Peddireddy Thimmareddy Foundation",
                "Multiple godowns construction (4000+ MT capacity)",
                "Cotton ginning plant with 12 gins"
            ],
            details: "Period of financial restructuring and technological advancement in irrigation, significantly expanding storage and processing capabilities."
        },
        {
            year: "1996-2000",
            title: "Regulatory Transition & Modernization",
            description: "Transition to new cooperative act, computerization beginning, and comprehensive member insurance coverage.",
            image: year1999,
            achievements: [
                "Transition to A.P. Mutually Aided Cooperative Societies Act",
                "Binny Rice Mill installation (2 tons/hour)",
                "Computerization of operations initiated",
                "Group Insurance Policy (₹25,000 coverage)",
                "3rd seed processing plant at Kothapally",
                "Enhanced storage network across villages"
            ],
            details: "Major regulatory and technological transformation period, embracing modern governance and digital operations."
        },
        {
            year: "2001-05",
            title: "Education & Sustainable Development",
            description: "Established educational institutions, promoted renewable energy, and received national recognition for cooperative excellence.",
            image: year2004,
            achievements: [
                "AKV Reddy Rural Development Society founded",
                "Intermediate Junior College established",
                "Degree college establishment",
                "Solar lanterns promotion",
                "Women's cooperative dairy development",
                "Best Cooperator award to A. Praveen Reddy"
            ],
            details: "Comprehensive rural development through education, sustainable energy, and women's empowerment initiatives."
        },
        {
            year: "2006-10",
            title: "Golden Jubilee & Quality Certification",
            description: "50th anniversary celebrations with ISO certification, digital transformation, and enhanced healthcare services.",
            image: year2006,
            achievements: [
                "ISO 1900:2001 Certification achieved",
                "Society website launched",
                "Farmers Training Centre established",
                "Free cataract surgeries (423+ operations)",
                "Soil Testing Laboratory setup",
                "Defluoride water plant installation"
            ],
            details: "Golden jubilee marked by quality certification, digital presence, and significant community health contributions."
        },
        {
            year: "2011-15",
            title: "Global Recognition & Solar Innovation",
            description: "World Agriculture Forum keynote, NCDC National Award, and pioneering solar power adoption in cooperative sector.",
            image: year2014,
            achievements: [
                "Keynote at World Agriculture Forum 2013",
                "NCDC National Award for Cooperative Excellence",
                "7.5 Kwp rooftop solar power system",
                "Enhanced ginning capacity (11 machines)",
                "Advanced agricultural machinery loans",
                "Health camps for specialized treatments"
            ],
            details: "Period of global recognition and leadership in sustainable energy adoption within the cooperative movement."
        },
        {
            year: "2016-20",
            title: "Large-Scale Solar & Infrastructure",
            description: "Major solar power plant installation, modern rice mill setup, and expanded retail operations with elderly welfare programs.",
            image: year2019,
            achievements: [
                "500 Kwp solar power plant for mills",
                "4 TPH paddy/maize seed processing plant",
                "Rice Retail Outlets network",
                "Modern Raw Rice Mill installation",
                "60 Ton weigh bridge installation",
                "AKVR Old Age Pension scheme"
            ],
            details: "Large-scale infrastructure development with renewable energy focus and comprehensive elderly care programs."
        },
        {
            year: "2021-Present",
            title: "Modern Technology & Future Vision",
            description: "Latest sorting technology, enhanced processing capacity, and continued expansion of storage facilities for future growth.",
            image: year2021,
            achievements: [
                "Cotton Bales Godown construction",
                "Modern Raw Rice Mill upgrades",
                "Enhanced storage infrastructure",
                "Technology modernization programs"
            ],
            details: "Current focus on cutting-edge technology and infrastructure to meet future agricultural challenges and opportunities."
        }
    ];

    const [hyearIndex,setHyearIndex] = useState(0);
    const [hyearActiveIndex,setHyearActiveIndex] = useState(0);
    const [visibleHyear,setVisibleHyear] = useState(4);
    const handleHyearResize = () => {
        const width = window.innerWidth;
        if(width < 768){
            setVisibleHyear(2)
        }else if(width < 1040){
            setVisibleHyear(3)
        }else{
            setVisibleHyear(4)
        }
    }
    useEffect(() => {
        handleHyearResize();
        window.addEventListener('resize',handleHyearResize);
        return () => window.removeEventListener('resize', handleHyearResize)
    },[])
    const HyearSlideWidth = 100 / visibleHyear;


    const nextHyear = () => {
        setHyearIndex((prev) =>  prev < historyYear.length - visibleHyear ? prev + 1 : prev)
        setHyearActiveIndex((prev) =>  prev < historyYear.length - 1 ? prev + 1 : prev)
    }
    const prevHyear = () => {
        setHyearIndex((prev) => prev == 0 ? 0 : prev - 1)
        setHyearActiveIndex((prev) => prev == 0 ? 0 : prev - 1)
    }
    const currentyear = (index) => {
        setHyearActiveIndex(index)
    }

    const [historyListFade, setHistoryListFade] = useState(false)
    useEffect(() => {
        setHistoryListFade(true)
        const timer = setTimeout(() => {
            setHistoryListFade(false)
        },700)
        return () => clearTimeout(timer)
    },[hyearActiveIndex])
    const awards = [
        {
            img:award4,
            name:"Best Primary Farmers Cooperative Society",
            year:2023,
            type:"Excellence"
        },
        {
            img:award11,
            name:"Jyothirgamai Award",
            year:2022,
            type:"Leadership"
        },
        {
            img:award3,
            name:"NCDC National Award for Cooperative Excellence",
            year:2021,
            type:"National"
        },
        {
            img:award1,
            name:"Manager of the Year",
            year:2020,
            type:"Leadership"
        },
        {
            img:award2,
            name:"Best Cooperator Award",
            year:2019,
            type:"Special Recognition"
        },
        {
            img:award5,
            name:"Sahakaritha Vibhusan Award",
            year:2018,
            type:"Excellence"
        },
        {
            img:award6,
            name:"Sakshi Excellence Award",
            year:2017,
            type:"Media Recognition"
        },
        {
            img:award7,
            name:"SahakaraBharathi - Annasaheb Godbole Memorial Award",
            year:2016,
            type:"Memorial"
        }
        
    ]
  const [awardIndex, setAwardIndex] = useState(0);
  const [visibleSlide, setVisbleSlide] = useState(4)
    const handleResize = () => {
        const width = window.innerWidth;
        if(width < 768){
            setVisbleSlide(1)
        }else if(width < 1024){
            setVisbleSlide(2)
        }else{
            setVisbleSlide(4)
        }
    }
    useEffect(() => {
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    }, []); // only once for resize listener

  useEffect(() => {
    const timer = setInterval(() => {
      setAwardIndex(prev =>
        prev >= awards.length - visibleSlide ? 0 : prev + 1
      );
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(timer);
  }, []);
 const slideWidth = 100 / visibleSlide; // width of one slide in %


    return(
        <>
        {/* <style>
        {`
          .slider-container{
              width:100%;
              overflow:hidden;
              margin: 50px auto;
          }
          .award-wrapper{
              display:flex;
              transition: transform 0.5s ease-in-out;
          }
          .award-slide{
              flex: 0 0 ${slideWidth}%;
              padding: 10px;
          }
          .slide img {
              width:100%;
              height:300px;
              object-fit:cover;
              border-radius: 10px;
          }
        `}
      </style>
      <div className="slider-container">
        <div
          className="award-wrapper"
          style={{ transform: `translateX(-${awardIndex * slideWidth}%)` }}
        >
          {awards.map((award, index) => (
            <div className="award-slide" key={index}>
              <img src={award.img} alt={award.name} />
            </div>
          ))}
        </div>
      </div> */}
        <style>
            {
                `
                #top-nav{
                background:#0b4e24;
                padding:10px 20px;
                padding-top:13px;
                color:white;
                font-size:14px;
                }
                .top-nav-list{
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-between;
                    margin:0 auto;
                }
                .top-nav-box{
                    display:flex;
                    flex-wrap:wrap;
                    gap:25px;
                }
                .top-nav-item{
                    display:flex;
                    flex-wrap:wrap;
                    gap:5px;
                    align-items:center;
                }
                    @media(max-width:480px){
                        #top-nav{
                            display:none;
                        }
                    }
                `
            }
        </style>
        <section id="top-nav">
            <div className='container'>
                <div className='top-nav-list'>
                    <div className='top-nav-box'>
                        <a href={`mailto:${topNavData.email}`}>
                            <div className='top-nav-item'>
                            <FaEnvelope /><span>{topNavData.email}</span>
                        </div></a>
                        <a href={`tel:${topNavData.phone}`}>
                            <div className='top-nav-item'>
                            <FaPhone /><span>{topNavData.phone}</span>
                            </div>
                        </a>
                    </div>
                    <div className='top-nav-box'>
                        <a href={topNavData.facebook}><p><FaFacebook /></p></a>
                        <a href={topNavData.twitter}><p><FaTwitter /></p></a>
                        <a href={topNavData.insta}><p><FaInstagram /></p></a>
                        <a href={topNavData.linkedin}><p><FaLinkedin /></p></a>
                    </div>
                </div>
            </div>
        </section>
        <style>
            {
                `
                #nav{
                    padding:10px 10px;
                    background:#f2f3f5;
                    position: ${fixedNav ? "fixed" : "relative"};
                    z-index: 8;
                    width:100%;
                    top:0;
                }
                .nav-list{
                    display:flex;
                    flex-wrap:wrap;
                    gap:20px;
                    justify-content:space-between;
                }
                .nav-box {
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-between;
                    align-items:center;
                    gap:20px;
                    color:#0b4e24;
                }
                .nav-box img {
                    width:60px;
                }
                .logo{
                    font-weight:bold;
                    font-size:23px;
                    font-family:Arial, Helvetica, sans-serif;
                    margin-left:-5px;
                }
                .nav-box ul{
                    display:flex;
                    list-style:none;
                }
                .nav-box li{
                    padding:10px 10px;
                }
                #nav button {
                    padding:7px 25px;
                    background:#0b4e24;
                    color:white;
                    font-weight:bold;
                }
                .humburg{
                    font-size:24px;
                    display:none;
                }
                
                @media(max-width:768px){
                    .nav-box ul{
                        display:none;
                    }
                    #nav button {
                        display:none;
                    }
                    .humburg{
                        display:flex;
                    }
                }
                `
            }
        </style>
        <section id="nav">
            <div className='container'>
                <div className='nav-list'>
                    <div className='nav-box'>
                        <img src={logo} alt="" />
                        <p className='logo'>MCRCMS Coop</p>
                    </div>
                    <div className='nav-box'>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#impact">Impact</a></li>
                            <li><a href="#history">History</a></li>
                            <li><a href="#awards">Awards</a></li>
                        </ul>
                        <a href="#contact"><button>Contact</button></a>
                        <span className='humburg' onClick={toggle}>
                            {!isOpen ? <FaBars /> : <FaTimes /> }
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <style>
            {
                `
                #model-menu{
                    width:100%;
                    display:flex;
                    justify-content:flex-end;
                    background:rgba(0,0,0,0.3);
                    position:fixed;
                    top:0px;
                    z-index:10;
                    height:100vh;
                }
                .right-side{
                    width:70%;
                    background:white;
                    border:1px solid black;
                    color:#0b4e24;
                    box-shadow:0px 10px 10px #0b4e24;
                }
                .menu-head{
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-between;
                    padding:15px 10px;
                    font-weight:bold;
                    border-bottom:1px solid #0b4e24;
                }
                .menu-item {
                    flex:1;
                    overflow-y:auto;
                    min-height:0;
                }
                .menu-item ul {
                    list-style:none;
                }
                .menu-item li {
                    padding:10px;
                    border-bottom: 1px solid #ccc;
                }
                    
                .menu-footer{
                    color:#aaa;
                    font-size:14px;
                    padding:15px 10px;
                    position:fixed;
                    bottom:0;
                    border-top:1px solid #0b4e24;
                    width:100%;
                }

                `
            }
        </style>
         {isOpen &&
        <section id="model-menu" onClick={toggle}>
            <div className='right-side' onClick={(e) => e.stopPropagation()}>
                <div className='menu-list'>
                    <div className='menu-head'>
                        <span>Menu</span>
                        <span onClick={toggle}><FaTimes /></span>
                    </div>
                    <div className='menu-item'>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="#about" onClick={toggle}>About</a></li>
                            <li><a href="#services" onClick={toggle}>Services</a></li>
                            <li><a href="#impact" onClick={toggle}>Impact</a></li>
                            <li><a href="#history" onClick={toggle}>History</a></li>
                            <li><a href="#awards" onClick={toggle}>Awards</a></li>
                            <li><a href="#contact" onClick={toggle}>Contact</a></li>
                        </ul>
                    </div>
                    <div className='menu-footer'>
                        © 2025 Mulkanoor Cooperative 
                    </div>
                </div>
            </div>
        </section> }
        <style>
            {
                `
                #hero{
                    width:100%;
                    height:700px;
                    position:relative;
                }
                .overlay{
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    background:rgba(0,0,0,0.5);
                    z-index:2;
                }
                .slider{
                    width:100%;
                    overflow:hidden;
                    height:700px;
                }
                .slider-wrapper{
                    width:100%;
                    height:100%;
                    overflow:hidden;
                    background:rgba(0,0,0,0.5);

                }
                .slide {
                width: 100%;
                height:100%;
                object-fit: cover; /* image fully visible */
                 object-position: center; 
                 display: block;
                 background:rgba(0,0,0,0.5);
                }
                .slide-text{
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    background:rgba(0,0,0,0.3);
                    z-index:3;
                    display:flex;
                    flex-direction: column; 
                    justify-content:center;
                    align-items:center;
                    padding: 20px;
                }
                .slide-text h2{
                    color:white;
                    font-size:70px;
                    font-weight:bold;
                    margin-top:-20px;
                }
                .slide-text h1{
                    color:#ffbf00;
                    font-size:80px;
                    font-weight:bold;
                    margin-top:-25px;
                    text-align:center;
                }
                .slide-text p{
                    color:white;
                    font-size:20px;
                    text-align:center;
                    max-width:900px;
                    line-height:1.8;
                }
                .slide-text button{
                    color:white;
                    font-size:20px;
                    margin-top:30px;
                    padding:13px 35px;
                    background:linear-gradient(to left, #0c9740, #db500b);
                    box-shadow:0px 0px 5px #ffbf00;
                }
                @keyframes slideDown {
                    0% {
                        opacity: 0;
                        transform: translateY(-50px); /* start above */
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0); /* final position */
                    }
                }

                .animate-slide-text-h2 {
                    animation: slideDown 3s ease forwards; /* run once */
                }
                @media(max-width:1024px){
                    .slide-text h2{
                        font-size:50px;
                        line-height:2.4;
                    }
                    .slide-text h1{
                        font-size:60px;
                    }
                    .slide-text p{
                        font-size:18px;
                    }
                }
                @media(max-width:768px){
                
                    #hero{
                        height:500px;
                    }
                    .slider{
                        height:500px;
                    }
                    .slide-text h2{
                        font-size:42px;
                        line-height:2.4;
                    }
                    .slide-text h1{
                        font-size:48px;
                    }
                    .slide-text p{
                        font-size:18px;
                    }
                }
                @media(max-width:568px){
                    .slide-text{
                        padding: 10px;
                    }
                    .slide-text h2{
                        font-size:28px;
                        line-height: 3.4;
                    }
                    .slide-text h1{
                        font-size:30px;
                    }
                }
                .animated-text {
                    display: inline-block;
                    white-space: pre-wrap; /* allow wrapping at normal spaces only */
                    word-break: normal;    /* do not break words */
                }

            .animated-text span {
                opacity: 0;
                display: inline-block;
                transform: translateY(20px);
                animation: fadeUp 0.5s forwards;
            }

            @keyframes fadeUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            @keyframes rightLeft{
                0%{
                    opacity:0;
                    transform:translateX(-100px)
                }
                100%{
                    opacity:1;
                    transform:translateX(0)
                }
            }
            .animate-rightleft{
                opacity:0;
                animation: rightLeft 3s ease forwards;
                animation-delay: 3s; /* start after 10 seconds */
            }
            @keyframes downUp{
                0%{
                    opacity:0;
                    transform:translateY(+100px);
                }
                100%{
                    opacity:1;
                    transform:translateY(0)
                }
            }
            .animate-downup{
                opacity:0;
                animation:downUp 3s ease forwards;
                animation-delay:4s;
            }
                `
            }
        </style>
        <section id="hero">
            <div className='slider'>
                {/* <button className='arrow left' onClick={prevSlide}><FaLessThan /></button> */}
                <div className='slider-wrapper'>
                    <img src={slides[current].image} alt="" className='slide'/>
                    <div className="overlay"></div>
                    {current === 0 
                    ? 
                    <div className='slide-text'>
                        <h2 className={heroAnimation ? 'animate-slide-text-h2' : ''}>{slides[current].text_1}</h2>
                            <h1 className="animated-text">
                            {slides[current].text_2.split(" ").map((word, wordIndex, arr) => {
                                // Count total chars before this word
                                const charsBefore = arr
                                .slice(0, wordIndex)
                                .reduce((sum, w) => sum + w.length, 0) + wordIndex; // + wordIndex for spaces

                                return (
                                <span key={wordIndex} style={{ display: "inline-block", marginRight: "0.25em" }}>
                                    {word.split("").map((char, charIndex) => (
                                    <span
                                        key={charIndex}
                                        style={{ animationDelay: `${(charsBefore + charIndex) * 0.2}s` }}
                                    >
                                        {char}
                                    </span>
                                    ))}
                                </span>
                                );
                            })}
                            </h1>


                        <p className='animate-rightleft'>{slides[current].text_3}</p>
                        <button className='animate-downup'>68 Years of Imapact</button>
                    </div>
                    : ''}
                </div>
                {/* <button className='arrow right' onClick={nextSlide}><FaGreaterThan /></button> */}
            </div>
        </section>
        <style>
            {
                `
                #about {
                    background: white;
                    padding: 30px 10px;
                    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
                }
                .main-list{
                    display:flex;
                    flex-wrap:wrap;
                    gap:20px;
                }
                .main-img{    
                    flex: 1 1 40%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .founder-img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                }
                .main-text{
                    flex:1 1 58%;
                    padding:20px 20px;
                    text-align:left;
                    
                }
                .main-text p{
                    margin-bottom:10px;
                }
                @keyframes zoomIn{
                    0%{
                        opacity:0;
                        transform:scale(0.3);
                    }
                    100%{
                        opacity:1;
                        transform:scale(1)
                    }
                }
                .head-img.showanimation {
                     animation: zoomIn 2s ease forwards; /*
                }
                `
            }
        </style>
        <section id="about">
            <div className="container">
                <h2 className="heading" style={{fontSize:"54px"}}>Our Founder</h2>
                <p className="subheading" style={{marginTop:"-10px"}}>
                    Journey begins Here by his dream
                </p>
                <div className="main-list">
                    <div className="main-img">
                        <img src={Founder} alt={Founder} className='head-img' ref={headRef}/>
                    </div>
                    <div className="main-text">
                        <h1 className="heading">AligiReddy Vishwanath Reddy</h1>
                        <p>
                            Mulkanoor cooperative rural bank was established in 1956 by esteemed visionary founder Late sri A.K Vishwanatha Reddy with the primary objective of uplifting socio-economic status of farmers. The society was initially registered under the Hyderabad cooperative societies act 1952. later, automatically deemed into A.P cooperative societies act 1964. After the enactment of Mutually aided cooperative societies act 1995 the cooperative transitioned under this new enactment.
                        </p>
                        <p>
                            The cooperative operates in its catchment of 14 revenue villages with a total of 18 gram panchayats. These villages then were in the drought prone region characterized by uplands and hillocks. There were conditions of lack of irrigation facilities,power supply, finance, agri-inputs, remunerative price for their produce. These situations made our ancestors build a temple of trust with a primary objective of countering these challenges and hardships faced by farmers.
                        </p>
                        <p>
                            Initially founded with 373 members and a share capital of RS 2300/- today society is 7629 active members strong with share capital of 17.96 crores and thrift deposits of 45.90 crores creating impact in the lives of 35000-40000 people. The present admission number of the society is 14908. The annual turnover is around 352 crores which displays the humongous success achieved and much more to come along. The society initially started operating from the founders' residence for 14 years until it moved to its own office premise in 1970.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <style>
            {
                `
                #glimpse{
                    background:white;
                    padding:30px 10px;
                    font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
                }
                .glimpse-list{
                    display:flex;
                    flex-wrap:wrap;
                    gap:20px;
                }
                .glimpse-box{
                    flex:1 1 23%;
                    background:white;
                    padding:15px 20px;
                    text-align:center;
                    border:1px solid #d5d7d6;
                    transition:transform 0.5s ease;
                    border-bottom:2px solid green;
                }
                .glimpse-box:hover{
                    transform:scale(1.01);
                    box-shadow:0px 10px 10px #d8e3dc;
                    border-left:2px solid green;
                    border-bottom:2px solid green;
                    border-top-right-radius: 30px;
                }
                    
                .glimpse-box h4{
                    font-size:22px;
                    color:#0b4e24;
                    margin-bottom:7px;
                }
                .glimpse-box p{
                    font-size: 16px;
                    color: #29322c;
                }
                @media(max-width:768px){
                    .glimpse-list{
                        gap:2px;
                    }
                    .glimpse-box{
                        flex:1 1 40%;
                    }
                }
                    

                `
            }
        </style>
        <section id="glimpse">
            <div className="container">
                <div className="glimpse-list">
                    {glimpse.map((glim,index) => (

                    <div className="glimpse-box">
                        <h5>{glim.logo}</h5>
                        <h4>{glim.title}</h4>
                        <p>{glim.para}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        <style>
            {
                `
                #change{
                    width:100%;
                }
                .change-list{
                    height:100%;
                    display:flex;
                    flex-wrap: nowrap;
                    transition:transform 0.5s ease;
                    align-items: stretch;
                }
                .change-box{
                    flex:0 0 50%;
                    border-right:1px solid white;
                    display:flex;
                    flex-wrap:wrap;
                }
                .box-head{
                    flex:0 0 50%;
                    position:relative;
                    height:100%;
                    align-items:stretch;
                }
                .box-head img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                }
                .box-head .overlay{
                    width:100%;
                    height:100%;
                    position:absolute;
                    background:rgba(11, 78, 36, 0.4);
                    top:0;
                    left:0;
                    z-index:1;
                }
                .box-head .overlay-h3 {
                    display:flex; 
                    justify-content:center; 
                    align-items:center;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    z-index: 2;
                    font-size:25px;
                    font-weight:bold;
                    text-align:center;
                    background:#db500b;
                    padding:15px 20px;
                    border-radius:10px;
                }
                .box-body{
                    flex:0 0 50%;
                    display:flex;
                    flex-direction:column;
                    flex-wrap:wrap;
                    padding:20px;
                    align-items:center;
                    justify-content:center;
                    background:#e5f9ec;
                }
                .body-top{
                    margin-bottom:30px;
                    width:80%;
                }
                .body-bottom{
                    width:80%;
                }
                .before-text h5{
                    font-weight:17px;
                    color:#f32424;
                    margin-bottom:10px;
                }
                .before-text p{
                    font-weight:15px;
                    color:#a33f3f;
                }
                .before-text{
                    background:white;
                    padding:50px 20px;
                    border-radius:20px;
                    border-left:5px solid red;
                    border-right:5px solid red;

                }
                .after-text h5{
                    font-weight:17px;
                    color:#15803d;
                    margin-bottom:10px;
                }
                .after-text p{
                    font-weight:15px;
                    color:#34661c;
                }
                .after-text{
                    background:white;
                    padding:50px 20px;
                    border-radius:20px;
                    border-left:5px solid green;
                    border-right:5px solid green;

                }
                .change-box img{
                    width:100%;
                    object-fit:cover;
                }
                @media(max-width:768px){
                    .change-box{
                        flex:0 0 100%;
                    }
                }
                @media(max-width:568px){
                    .change-box{
                        height:100%;
                    }
                    .box-head{
                        flex:0 0 100%;
                    }
                    .box-body{
                        flex:0 0 100%;
                    }
                    .change-box img
                    {
                        height: 65px;
                    }
                    .box-head .overlay-h3 {
                        border-radius: 0px;
                        width: 100%;
                        background:#0b4e24;
                    }

                }
                `
            }
        </style>
        <section id="change">
            <div className='change-list' style={{
      transform: `translateX(-${transIndex * transSlideWidth}%)`
    }}>
                {transEffects.map((transArr, index) => (
                    <div className='change-box'>
                        <div className='box-head'>
                            <img src={transArr.img} alt="" />
                            <div className='overlay'></div>
                            <h3 className='overlay-h3'>{transArr.heading}</h3>
                        </div>
                        <div className='box-body'>
                            <div className='body-top'>
                                <div className="before-text">
                                    <h5>Before: {transArr.before.title}</h5>
                                    <p>{transArr.before.para}</p>
                                </div>
                            </div>
                            <div className='body-bottom'>
                                <div className="after-text">
                                    <h5>After: {transArr.after.title}</h5>
                                    <p>{transArr.after.para}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <style>
            {
                `
                #services{
                    background:white;
                    padding:30px 10px;
                    font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
                }
                .services-list{
                    display:flex;
                    flex-wrap:wrap;
                    gap:20px;
                }
                .services-box{
                    flex:1 1 30%;
                    background:white;
                    padding:15px 20px;
                    text-align:left;
                    border:1px solid #d5d7d6;
                    transition:transform 0.5s ease;
                    position:relative;
                    overflow:hidden;
                    min-height:200px;
                }
                .services-box:hover{
                    transform:scale(1.01);
                    box-shadow:0px 10px 10px #d8e3dc;
                    border-left:2px solid green;
                    border-bottom:2px solid green;
                    border-top-right-radius: 30px;
                }
                    
                .services-box h4{
                    font-size:22px;
                    color:#0b4e24;
                    margin-bottom:7px;
                    
                }
                .services-box p{
                    font-size: 16px;
                    color: #29322c;
                }
                .services-box ul{
                    list-style:disc;
                    padding-left:15px;
                }
                .services-box li{
                    font-size:14px;
                    color:black;
                    padding:2px 0px;
                }
                .services-box li::marker {
                    color: green; 
                }
                .side-circle{
                    width:150px;
                    height:150px;
                    background:#0b4e24;
                    position:absolute;
                    bottom:-75px;
                    right:-75px;
                    z-index:3;
                    border-radius:50%;
                    overflow:hidden;
                }
                .side-icon{
                    position:absolute;
                    bottom:18px;
                    right:25px;
                    z-index:5;
                    font-size:50px;
                }
                @media(max-width:768px){
                    .services-box{
                        flex:1 1 48%;
                    }
                }
                `
            }
        </style>
        
        <section id="services">
            <div className="container">
                    <h2 className="heading">Our Services</h2>
                    <p className="sub-heading">Century of Excellence</p>
                    <p className="subheading">
                        Providing end-to-end agricultural services, staying true to our core mission of farmer welfare.
                    </p>
                <div className="services-list">
                    {services.map((service,index) => (
                    <div className="services-box" key={index}>
                        <h4>{service.title}</h4>
                        <div className='box-details'>
                            <p>{service.para}</p>
                            <ul>
                                {service.point.map((p,i) => (
                                <li key={i}>{p}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='side-circle'></div>
                        <div className='side-icon'>{service.logo}</div>
                    </div>
                    ))}

                </div>
            </div>
        </section>
        <style>
            {
                `
                #impact{
                    background:#0b4e24;
                    padding:30px 10px;
                    font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
                }
                .impact-list{
                    display:flex;
                    flex-wrap:wrap;
                    gap:30px;
                    align-items: stretch; 

                }
                .impact-box-1{
                    flex: 1 1 30%;
                    overflow:hidden;
                }
                .impact-box-1 img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    max-height:250px;
                }
                .impact-box-2{
                     flex: 1 1 60%;
                     overflow:hidden;
                }
                .impact-box-slider{
                     display:flex;
                     flex-wrap:nowrap;
                     gap:2%;
                    height: 100%; 
                     align-items: stretch;
                     transition:transform 0.5s ease;
                }
                .impact-box{
                    flex: 0 0 32%;
                    background:white;
                    border:1px solid #b9dbc5;
                    padding:30px;
                    text-align:center;
                    transition: transform 0.5s ease;
                    align-items:stretch;
                }
                .impact-box:hover{
                    transform: scale(1.03);
                    border:1px solid green;
                }
                .impact-box h4{
                    font-size:22px;
                    color:#0b4e24;
                    font-weight:bold;
                }
                .impact-box h5{
                    font-size: 18px;
                    color: black;
                    font-weight:bold;
                    margin-bottom:5px;
                }
                .impact-box p{
                    font-size: 16px;
                    color: #29322c;
                }
                .impact-highlight{
                    margin-top:20px;
                    padding:60px 10px;
                    background:linear-gradient(to left, #0b4e24, #db500b);
                    border:2px solid #db500b;
                }
                .impact-highlight h3{
                    font-size:30px;
                    line-height:1.2;
                    color:white;
                    font-weight:bold;
                }
                .impact-highlight p{
                    font-size:18px;
                    line-height:1.6;
                    color:white;
                    margin-top:20px;
                }
                    
                .impact-highlight.showanimation {
                     animation: zoomIn 2s ease forwards; 
                }
                @media(max-width:768px){
                    .impact-box-1{
                        flex:1 1 98%;
                    }
                    .impact-box{
                        flex: 0 0 48%;
                    }
                }
                @media(max-width:425px){
                    .impact-box{
                        flex: 0 0 98%;
                    }
                    
                    .impact-highlight h3{
                        display:none;
                    }
                    .impact-highlight h3:nth-child(3){
                        display:block;
                    }
                }
                `
            }
        </style>
        <section id="impact">
            <div className="container">
                <h2 className="heading" style={{color:"white"}}>Our Impact Today</h2>
                <p className="subheading" style={{color:"#ffbf00"}}>
                    Transforming Rural Telangana for 68 Years
                </p>
                <div className="impact-list">
                    <div className='impact-box-1'>
                        <img src={impactImg} alt="" />
                    </div>
                    <div className='impact-box-2'>
                        <div className='impact-box-slider' style={{transform:`translateX(-${impactIndex * impactSlideWidth}%)`}}>
                            {impacts.map((impact,index) => (
                            <div className="impact-box">
                                <h5>{impact.logo}</h5>
                                <h4>{impact.title}</h4>
                                <h5>{impact.subtitle}</h5>
                                <p>{impact.para}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="impact-highlight"  ref={impactRef}>
                    <h3>Centenary Celebration</h3> 
                    <h3>of</h3> 
                    <h3>AligiReddy Vishwanath Reddy 🎉</h3>
                    <p>Honoring 100 years of visionary leadership (1926-2026) and celebrating 68 years of institutional excellence</p>
                </div>
            </div>
        </section>

        {/* <style>
            {
                `#trans{
                    background:#00000008;
                    padding:30px 10px;
                    font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";
                }
                .trans-list{
                    display:flex;
                    flex-wrap:wrap;
                    gap:20px;
                }
                .trans-box
                {
                    flex: 1 1 30%;
                    border: 1px solid #d5d7d6;
                    padding: 15px;
                    background: white;
                    text-align: left;
                    border-radius: 10px;
                }
                .trans-box:hover
                {
                box-shadow:0px 10px 20px #c3e1ce;
                }
                .trans-box h4{
                    font-size:22px;
                    color:#0b4e24;
                    margin-bottom:10px;
                    padding:7px 5px;
                }
                .trans-before{
                    background:#f9d9d9;
                    padding:10px 10px;
                    border-left:4px solid red;
                    border-radius:10px;
                    margin-bottom:10px;
                }
                .trans-after{
                    background:#bcffd5;
                    padding:7px 10px;
                    border-left:4px solid green;
                    border-radius:10px;
                }
                
                .trans-before h5{
                    color:#f32424;
                    font-size:12px
                    line-height:1.8;
                    margin-bottom:3px;
                }
                .trans-before p{
                    font-size:10px
                    line-height:1.5;
                    color:#5a4848;
                }
                .trans-after h5{
                    color:#15803d;
                    font-size:12px
                    line-height:1.8;
                    margin-bottom:3px;
                }
                .trans-after p{
                    font-size:10px
                    line-height:1.5;
                    color:#5a4848;
                }
                `
            }
        </style>
        <section id="trans">
            <div className="container">
                <h2 className="heading">Transforming Lives, Transforming Land</h2>
                <p className="subheading">
                    Through 68 years of dedicated service, Mulkanoor Cooperative Society has transformed the landscape and lives of thousands of farming families.
                </p>
                <div className="trans-list">
                    <div className="trans-box">
                        <h4>Land Transformation</h4>
                        <div className="trans-before">
                            <h5>BEFORE: Barren Land</h5>
                            <p>Drought-ridden fields with limited resources.</p>
                        </div>
                        <div className="trans-after">
                            <h5>After: Barren Land</h5>
                            <p>Drought-ridden fields with limited resources.</p>
                        </div>
                    </div>
                    <div className="trans-box">
                        <h4>Land Transformation</h4>
                        <div className="trans-before">
                            <h5>BEFORE: Barren Land</h5>
                            <p>Drought-ridden fields with limited resources.</p>
                        </div>
                        <div className="trans-after">
                            <h5>After: Barren Land</h5>
                            <p>Drought-ridden fields with limited resources.</p>
                        </div>
                    </div>
                    <div className="trans-box">
                        <h4>Land Transformation</h4>
                        <div className="trans-before">
                            <h5>BEFORE: Barren Land</h5>
                            <p>Drought-ridden fields with limited resources.</p>
                        </div>
                        <div className="trans-after">
                            <h5>After: Barren Land</h5>
                            <p>Drought-ridden fields with limited resources.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        <style>
            {
                `
                #history{
                    background: #e5f9ec;
                    padding: 30px 10px;
                    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
                }
                .year-block{
                    position:relative;
                }
                .year-list{
                    display:flex;
                    flex-wrap:nowrap;
                    position:relative;
                    z-index:2;
                }
                .year-box{
                    flex:0 0 25%;
                }
                .year-block .year-box.active p {
                    background:#0b4e24;
                }

                .year-block .year-box.active h3 {
                    color: #0b4e24;
                }
                .year-block .year-box.active .triangle {
                    display:block;
                }

                .year-box p {
                    background:red;
                    padding:20px;
                    border-radius:50%;
                    display:inline-block;
                    
                }
                .year-box h3 {
                    color:#db500b;
                    margin-bottom:6px;
                    font-size:17px;
                }
                
                .year-block .line{
                    width:100%;
                    padding:2px 15px;
                    position:absolute;
                    background:green;
                    top:55%;
                    left:0px;
                    z-index:1;
                }
                .year-block .arrow-left{
                    position: absolute;
                    top: 31%;
                    left: 0px;
                    z-index: 1;
                    padding: 10px 15px;
                    border-radius: 50%;
                    color: white;
                    background: green;
                    font-size: 20px;
                    border: 2px solid red;
                    z-index:5;
                    cursor:pointer;
                }
                .year-block .arrow-right{
                    position: absolute;
                    top: 31%;
                    right: 0px;
                    z-index: 1;
                    padding: 10px 15px;
                    border-radius: 50%;
                    color: white;
                    background: green;
                    font-size: 20px;
                    border: 2px solid red;
                    z-index:5;
                    cursor:pointer;
                }
                .triangle{
                    width:10px;
                    height:20px;
                    border-left:10px solid transparent;
                    border-right:10px solid transparent;
                    border-bottom:10px solid #0b4e24;
                    margin:0 auto;
                    display:none;
                }
                @media(max-width:768px){
                    .year-box{
                        flex:0 0 33.333%;
                    }
                }
                @media(max-width:568px){
                    .year-box{
                        flex:0 0 50%;
                    }
                }
                `
            }
        </style>

        <section id="history">
            <div className='container'>
                <h2 className="heading">Our Journey of Growth</h2>
                <p className="subheading">
                    Seven decades of empowering farmers and building communities through cooperative excellence
                </p>
                <div className='year-block'>
                    <div className='year-list' style={{transform:`translateX(-${hyearIndex * HyearSlideWidth}%)`}}>
                        {historyYear.map((historyYear,index) =>(
                        <div className={`year-box ${index === hyearActiveIndex ? 'active' : ''}`} onClick={() => currentyear(index)}>
                            <h3>{historyYear.year}</h3>
                            <p>🌱</p>
                            <div className='triangle'></div>
                        </div>
                        ))}
                    </div>
                    <div className='line'></div>
                    <div className='arrow-left' onClick={prevHyear}>&lt; </div>
                    <div className='arrow-right' onClick={nextHyear}>&gt;</div>
                </div>
                <style>
                    {
                        `
                        .history-list{
                            border:1px solid #25b55a;
                            border-top:1px solid #0b4e24;
                            opacity: 1;
                            transition: opacity 0.7s ease-in-out;
                            
                        }
                        .history-list.fade-out{
                            opacity: 0;
                        }
                            
                        .history-header{
                            padding:12px 15px;
                            background:#0b4e24;
                            display:flex;
                            flex-wrap:wrap;
                            justify-content:space-between;
                            align-items:center;
                        }
                        .history-item h3{
                            font-size:18px;
                            color:white;
                        }
                        .history-item button{
                            font-size:18px;
                            color:white;
                            background:linear-gradient(to left, #0b4e24, #db500b);
                            border:2px solid #db500b;
                            padding:5px 20px;
                            font-weight:bold;

                        }
                        .history-box{
                            display:flex;
                            flex-wrap:wrap;
                            align-items: stretch;  
                            max-height:550px;
                            background:white;
                        }
                        .history-box-left{
                            flex:1 1 40%;
                            text-align:left;
                            padding:30px 20px;
                        }
                        .history-box-right{
                            flex:1 1 50%;
                            overflow:hidden;
                        }
                        .history-box-right img{
                            width:100%;
                            height:100%;
                            object-fit:cover;
                        }
                        
                        .history-box-left p{
                            font-size: 16px;
                            color: #29322c;
                        }
                        .history-box-left h3{
                            font-size: 18px;
                            color: #db500b;
                            font-weight:bold;
                            line-height:2.4;
                        }
                        .history-box-left h4{
                            font-size: 16px;
                            color: #29322c;
                            font-weight:bold;
                        }
                        .history-box-left ul{
                            margin-bottom: 20px;
                        }
                        .history-box-left li{
                            font-size: 16px;
                            color: #29322c;
                            line-height: 2.5;
                            border-bottom: 1px solid #25b55a;
                            margin-left: 10px;
                        }
                        @media(max-width:768px){
                        
                            .history-header{
                                flex-direction:column;
                            }
                            .history-item h3{
                                order:2;
                            }
                            .history-item button{
                                order:1;
                                margin-bottom:10px;
                            }
                            .history-box{
                                max-height:none;
                            }
                            .history-box-left{
                                flex:1 1 98%;
                                order:2;
                            }
                            .history-box-right{
                                flex:1 1 98%;
                                order:1;
                            }
                        }
                        `
                    }
                </style>

                <div className={`history-list ${historyListFade ? 'fade-out' : ''}`}>
                    <div className='history-item'>
                        <div className='history-header'>
                            <h3>🌱 {historyYear[hyearActiveIndex].title}</h3>
                            <button>{historyYear[hyearActiveIndex].year}</button>
                        </div>

                        <div className='history-box'>
                            <div className='history-box-left'>
                                <h3>🌱 Milestone</h3>
                                <p>{historyYear[hyearActiveIndex].description}</p>
                                <h4>Key Achievements</h4>
                                <ul>
                                    {historyYear[hyearActiveIndex].achievements.map((achieve,index) => (
                                        <li key={index}>{achieve}</li>
                                    ))}
                                    
                                </ul>
                                <p>{historyYear[hyearActiveIndex].details}</p>
                            </div>
                            <div className='history-box-right'>
                                <img src={historyYear[hyearActiveIndex].image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <style>
            {
                `
                #success{
                    background: linear-gradient(to bottom, #e5f9ec 0% 45%, #0b4e24 45% 100%);
                    padding: 30px 10px;
                    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
                }
                .success-box{
                    text-align:center;
                    align-items:center;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                }
                .success-box img{
                    width:100%;
                    max-width:400px;
                    border-radius:50%;
                    border:5px solid #db500b;
                    aspect-ratio: 1/1;
                }
                .success-img.showanimation {
                     animation: zoomIn 2s ease forwards; 
                }
                @media(max-width:568px){
                    background: linear-gradient(to bottom, #e5f9ec 0% 40%, #0b4e24 40% 100%);
                }
                `
            }
        </style>

        <section id="success">
            <div className='success-box'>
                <img src={Founder} alt="" className='success-img' ref={successRef}/>
                <h2 class="heading" style={{color: "white"}}>Empowering Farmers Through Comprehensive Support</h2>
                <p class="subheading" style={{color: "rgb(255, 191, 0)",maxWidth:"900px"}}>These prestigious awards reflect our dedication to farmer empowerment and transparent governance.</p>
            </div>
        </section>
        <style>
            {
                `
                .container{
                    width:100%;
                    max-width:1200px;
                    text-align:center;
                    margin:0 auto;
                    overflow: hidden;
                }
                .heading{
                    font-size:24px;
                    color:#0b4e24;
                    line-height:1.9;
                    font-weight:bold;

                }
                .subheading {
                    font-size: 16px;
                    color: #29322c;
                    max-width: 700px;
                    margin: 0 auto;
                    margin-bottom: 20px;
                }
                #awards {
                    background: white;
                    padding: 30px 10px;
                    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
                }
                .sub-heading{
                    color:#db500b;
                    font-size: 18px;
                    max-width: 700px;
                    margin: 0 auto;
                    font-weight:bold;
                }
                .awards-list{
                    display:flex;
                    gap:2%;
                    flex-wrap: nowrap;    /* prevent wrapping */
                    transition: transform 0.5s ease-in-out;
                }
                .awards-box{
                    flex: 0 0 23%; /* 4 slides visible at a time */
                    box-sizing: border-box;
                    background:white;
                    border:1px solid #b9dbc5;
                    text-align:left;
                }
                .head{
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-between;
                    position:relative;
                    height:400px;
                }
                .top-left{
                    position:absolute;
                    top:0;
                    left:0;
                    padding:7px 18px;
                    background:#0b4e24;
                    color:white;
                    border:1px solid white;
                }
                .bottom-right{
                    position:absolute;
                    bottom:10px;
                    right:0;
                    padding:10px 15px;
                    background:#db500b;
                    color:white;
                    width:95%;
                    text-align:center;
                    margin-left:1%;
                    margin-right:2%;
                }
                .awards-box h4{
                    text-align:center;
                    font-weight:bold;
                    padding:10px;
                    color:#0b4e24;
                    font-size:14px;
                }
                @media(max-width:768px){
                    .awards-box{
                        flex: 0 0 48%;
                    }
                }
                @media(max-width:425px){
                    .awards-box{
                        flex: 0 0 98%;
                    }
                }
                `
            }
        </style>
        <section id="awards">
            <div className="container">
                <h2 className="heading">Recognition & Awards</h2>
                <p className="sub-heading">Century of Excellence</p>
                <p className="subheading">
                    Providing end-to-end agricultural services, staying true to our core mission of farmer welfare.
                </p>
                <div className="awards-list" style={{ transform: `translateX(-${awardIndex * slideWidth}%)` }}>
                    {awards.map((award,index) => (
                    <div className="awards-box">
                        <div className="head">
                            <img src={award.img} alt={founder} className='founder-img'/>
                            <div class="top-left">{award.year}</div>
                            <div class="bottom-right">{award.type}</div>
                        </div>
                        <h4>{award.name}</h4>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        <style>
            {
                `
                #contact{
                    background: #0b4e24;
                    padding: 30px 10px;
                    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
                }
                .footer-item{
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    border-bottom:2px solid white;
                    padding-bottom:10px;
                }
                
                .footer-item p{
                    text-align:left;
                    color:#ffbf00;
                    padding-left:5px;
                }
                .footer-list{
                    display:flex;
                    flex-wrap:wrap;
                }
                .footer-box:nth-child(1){
                    flex:1 1 45%;
                    text-align:left;
                    padding:10px 20px;
                }
                .footer-box{
                    flex:1 1 25%;
                    text-align:left;
                    padding:10px 20px;
                }
                .footer-box h4{
                    color:#db500b;
                    font-size:22px;
                    font-weight:bold;
                    margin-bottom:10px;
                }
                .flex-box{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    margin-bottom:10px;
                }
                .flex-box img{
                    width:48px;
                    border-radius:50%;
                }
                .flex-box h3{
                    color:white;
                    padding-left:10px;
                    font-size:22px;
                    font-weight:bold;
                }
                .footer-box ul{
                    list-style:none;
                }
                .footer-box li{
                    color:white;
                }
                .flex{
                    color:white;
                    font-size:20px;
                    padding-right:10px;
                }
                .social-logo{
                    font-size:20px;
                    margin-right:15px;
                    border-radius: 50%;
                    border:1px solid #0b4e24;
                    padding:10px;
                    color:#0b4e24;
                    background:white;
                    transition: all 0.6s ease;
                }
                .social-logo:hover{
                    color:white;
                    background:#0b4e24;
                    border:1px solid white;
                    transform: rotate(360deg);
                }
                @media(max-width:768px){
                    .footer-box{
                        flex:1 1 48%;
                    }
                }
                @media(max-width:468px){
                    .footer-box{
                        flex:1 1 98%;
                    }
                }
                `
            }
        </style>
        <section id="contact">
            <div className='container'>
                <div className='footer-item'>
                    <div className='flex-box'>
                        <img src={logo} alt=""/>
                        <h3>MCRCMS Coop Society</h3>
                    </div>
                    <p>Elevating Lives Together From Cooperation to Prosperity</p>
                </div>
                <div className='footer-list'>
                    <div className='footer-box'>
                        <h4>Contact Us</h4>
                        <ul>
                            <li><a href={`tel:${topNavData.phone}`}><div className='top-nav-item'><FaPhone /><span>{topNavData.phone}</span></div></a></li>
                            <li><a href={`mailto:${topNavData.email}`}><div className='top-nav-item'><FaEnvelope /><span>{topNavData.email}</span></div></a></li>
                            <li><div className='top-nav-item'><span>Mulkanoor Cooperative Rural Credit and Marketing Society Ltd., Mulkanoor Village, Bheemadevarapally Mandal, Hanumakonda District-505471</span></div></li>
                        </ul>
                    </div>
                    <div className='footer-box'>
                        <h4>Discover</h4>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#impact">Impact</a></li>
                            <li><a href="#history">History</a></li>
                            <li><a href="#awards">Awards</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='footer-box'>
                        <h4>Social Media</h4>
                        <div className='flex'>
                            <a href={topNavData.facebook}><p className='social-logo'><FaFacebook /></p></a>
                            <a href={topNavData.twitter}><p  className='social-logo'><FaTwitter /></p></a>
                            <a href={topNavData.insta}><p  className='social-logo'><FaInstagram /></p></a>
                            <a href={topNavData.linkedin}><p  className='social-logo'><FaLinkedin /></p></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Anniversary;