

const AboutUs = () => {
    return (
        <div>
        <div className="flex flex-col md:flex-row lg:flex-row  justify-center items-center">
         <div className="w-4/5 m-0 p-2">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold p-3">About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium praesentium eius dolorem veniam voluptates assumenda ab soluta cumque, repellendus doloremque!</p>
         </div>
         <div className="grid grid-rows-3 grid-flow-col gap-4">
  <div className="row-span-3 ..."> <img src="https://i.ibb.co/rxC8Q38/beautiful-wedding-flower-arrangement-seats-along-aisle.jpg" className="w-full md:w-[600px] h-full  md:h-[400px]" alt="" /></div>
  <div className="col-span-2 ..."> <img src="https://i.ibb.co/rxC8Q38/beautiful-wedding-flower-arrangement-seats-along-aisle.jpg" className="w-full md:w-[600px] h-full  md:h-400px]" alt="" /></div>
  <div className="row-span-2 col-span-2 ..."> <img src="https://i.ibb.co/rxC8Q38/beautiful-wedding-flower-arrangement-seats-along-aisle.jpg" className="w-full md:w-[600px] h-full  md:h-[400px]" alt="" /></div>
</div>
</div>
      
            
        </div>
    );
};

export default AboutUs;