import "./css/speakers.css"
import sp1 from '../assets/hero/oloye.svg'
import sp2 from '../assets/hero/speaker2.svg'
import sp3 from '../assets/hero/speaker3.svg'
import sp4 from '../assets/hero/lerry.svg'
import sp5 from '../assets/hero/speaker4.svg'
import sp6 from '../assets/hero/speaker4.svg'


const Speakers = () => {

        // const speakers = [
        //   { id: 1, name: 'Speaker 1', image: '' },
        //   { id: 2, name: 'Speaker 2', image: '' },
        //   { id: 3, name: 'Speaker 3', image: '' },
        // ];
      
        // const [activeImage, setActiveImage] = useState(null);
      // const [activeImage, setActiveImage] = useState(null);W
        // const handleImageHover = (index) => {
        //   setActiveImage(index);
        // };

    return (
        <div className='h-full bg-background mt-14'>
          <section style={{}} className='container mx-auto h-full'>
            <section className='flex justify-between pt-3 font-primary text-primary items-center border-b-2 border-secondary'>
                    <h1 className=' sm:text-4xl lg:text-7xl font-extrabold'>SPEAKERS</h1>
                    <p className='text-xs font-medium'>VIEW ALL SPEAKER </p> 
                    {/* <span> <img src={arrow} alt="" /></span> */}
                </section>

                <div className="grid grid-rows-2 grid-flow-col pt-12 mx-auto gap-2">
                    <div className=" sm:w-full md:w-full lg:w-full h-full"> 
                      <img className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={sp1} alt="speaker1" />
                        <div className=" font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
                          <h1 className=" font-medium text-3xl pt-4"> Hon. Akin Alabi </h1>
                          <p>Honorable member, Fed House of representatives</p>
                        </div>
                    </div>

                    <div className=" sm:w-full md:w-full lg:w-full h-full"> 
                      <img className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={sp2} alt="speaker1" />
                        <div className=" font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
                          <h1 className=" font-medium text-3xl pt-4"> Sam Aiyesoro </h1>
                          <p> C.E.O, Wiseki Technologies </p>
                        </div>
                    </div>

                    <div className=" sm:w-full md:w-full lg:w-full h-full">
                      <img className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={sp3} alt="speaker2" />
                        <div className=" font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
                          <h1 className=" font-medium text-3xl pt-4"> Oluseun Onigbinde </h1>
                          <p>Nigerian Entrepreneur</p>
                        </div>
                    </div>

                    <div className=" sm:w-full md:w-full lg:w-full h-full">
                      <img  className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={sp6} alt="speaker4" />
                        <div className=" font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
                          <h1 className=" font-medium text-3xl pt-4"> Rilwan Akeyewale </h1>
                          <p>Entrepreneur</p>
                        </div>
                    </div>

                    <div className=" sm:w-full md:w-full lg:w-full h-full">
                      <img  className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={sp4} alt="speaker5" />
                      <div className=" font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
                          <h1 className=" font-medium text-3xl pt-4"> Asiwaju Larry </h1>
                          <p> Social Media Influencer</p>
                        </div>
                    </div>

                    <div className=" sm:w-full md:w-full lg:w-full h-full">
                      <img  className='w-80 h-82 lg:w-full mx-auto bg-secondary rounded-lg' src={sp5} alt="speaker6" />
                      <div className=" font-primary text-white relative w-full px-8 bottom-1/4 right-0 left-0 bg-green-600 h-1/4">
                          <h1 className=" font-medium text-3xl pt-4"> Asiwaju Larry </h1>
                          <p> Social Media Influencer</p>
                        </div>
                    </div>
                </div>
                {/*{speakers.map((speaker, index) => (
        <div
          key={speaker.id}
          className={`relative ${activeImage === index ? 'scale-150' : 'scale-100'} transform transition-transform duration-300 ease-in-out`}
          onMouseEnter={() => handleImageHover(index)}
          onMouseLeave={() => handleImageHover(null)}
        >
          <img src={speaker.image} alt={speaker.name} className="w-full" />
          {activeImage === index && (
            <div className="absolute bottom-0 left-0 w-full bg-black text-white p-2 text-center">
              {speaker.name}
            </div>
          )}*/}
          </section>
        </div>

    )
}

export default Speakers
