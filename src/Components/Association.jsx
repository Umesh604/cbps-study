import isbm from '../../public/isbm.jpg'
import sikkim from '../../public/sikkim.jpg'
import alpine from '../../public/alpine.jpeg'
import ne_frontier from '../../public/ne_frontier.jpg'
import open_school from '../../public/open_school.jpg'
import subharti from '../../public/subharti.jpeg'
import nios from '../../public/nios.jpeg'
import mahgu from '../../public/mahgu.jpeg'
import muniv from '../../public/muniv.jpeg'
import dhamma from '../../public/dhamma.png'
import arka from '../../public/arka.png'

const Association = () => {

    const cardItem = [
        {
            id:1,
            logo:isbm,
            // name:"ISBM UNIVERSITY",
            liveLink:"https://isbmuniversity.edu.in/",
        },
        {
            id:2,
            logo:sikkim,
            // name:"KALINGA UNIVERSITY",
            liveLink:"https://ssu.ac.in/",
        },
        {
            id:3,
            logo:alpine,
            // name:"MATS UNIVERSITY",
            liveLink:"https://sikkimalpineuniversity.edu.in/",
        },
         {
            id:4,
            logo:muniv,
            // name:"NEF UNIVERSITY",
            liveLink:"https://www.mangalayatan.in/",
        },
        
        {
            id:5,
            logo:ne_frontier,
            // name:"NEF UNIVERSITY",
            liveLink:"https://www.neftu.edu.in/",
        },
        {
            id:6,
            logo:open_school,
            // name:"BOARD OF OPEN SCHOOLING AND SKILL EDUCATION",
            liveLink:"https://www.bosse.ac.in/",
        },
        {
            id:7,
            logo:subharti,
            // name:"BOARD OF OPEN SCHOOLING AND SKILL EDUCATION",
            liveLink:"https://www.subhartidde.com/",
        },
        {
            id:8,
            logo:nios,
            // name:"BOARD OF OPEN SCHOOLING AND SKILL EDUCATION",
            liveLink:"https://www.nios.ac.in/",
        },
        {
            id:9,
            logo:mahgu,
            // name:"BOARD OF OPEN SCHOOLING AND SKILL EDUCATION",
            liveLink:"https://hgu.ac.in/",
        },
        {
            id:10,
            logo:dhamma,
            // name:"Dhamma Dipa International Buddhist University",
            liveLink:"https://www.ddibu.in/",
        },
        {
            id:11,
            logo:arka,
            // name:"ARKA JAIN UNIVERSITY",
            liveLink:"https://arkajainuniversity.ac.in/",
        },
    ]

  return (
    <div name="Association" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
       <div className='mb-5'>
       <h1 className='text-4xl font-bold text-center'>Our Associations</h1>
        <hr className='h-1 bg-black rounded-lg w-[200px] mx-auto my-1'/>
       </div>
        <br />
        <div className='grid grid-cols-2 md:grid-cols-5 gap-3 my-6 '>
            {cardItem.map(({id,logo,name,liveLink})=>(
                <div className='md:w-[200px] md:h-[200px] rounded-lg border-[2px] shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 hover:border hover:border-black' key={id}>
                  <a href={liveLink} target='_blank'><img src={logo} className='w-full h-[100px] md:h-[180px] p-1 border-[2px]' alt="" /></a>
                  <div>
                    <div className='font-bold text-xl mb-2 px-2 text-center'>{name}</div>
                    <p className='px-2 text-gray-700'></p>
                  </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Association
