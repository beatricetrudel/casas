'use client';
import Typewriter from 'typewriter-effect';

const Typo = () => {
    const colors = ['black', '#F472B6', '#3B82F6'];
    const strings = ["save money!", "explore the world!"]; 
    return (
        <div
        className="w-full md:w-auto py-2 block"
        >
        <div className='inline-block pr-1'>
        <span style={{ color: colors[0] }}>Book now and get ready to </span> 
        </div>
        <div className='inline-block'>
            <Typewriter 
            options={{
                strings: strings.map((text, index) => `<span style="color: ${colors[(index + 1) % colors.length]};">${text}</span>`),
                autoStart: true,
                loop: true,
                wrapperClassName: "typewriter-wrapper"
              }}
            
             />
        </div>
        </div>
    );
}

export default Typo;

