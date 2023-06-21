'use client';

import Container from "./Container";

// import Container from "./Container";

const Footer = () => {
    return (

        <div className="bg-gradient-to-r from-yellow-200 via-cyan-200 to-sky-500 w-full flex md:flex-row flex-col justify-around items-start p-20 block">
            <Container>
				<div className="pr-2 inline-block">
                    &copy; Casas 2023
                </div>
                <div className="inline-block">
                    Saara Bilyour, Williams Mache Kemgni, Hicham Oulkourri & Beatrice Trudel
                </div>
            </Container>
        </div>
    );
}

export default Footer;