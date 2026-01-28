import TeamMarqueeSlider from "./TeamMarqueeSlider";

const Team = () => {
    return (
        // h7-team 
        <section className="h7-team-mod section-gap-1 section-gap-x" style={{position: "fixed", bottom: "50px"}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="h7-team-mod-wrapper">
                            <TeamMarqueeSlider/>
                            {/* <TeamMarqueeSlider /> */}
                            {/* <TeamMarqueeSlider isRtl={true} /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-shape-3">
				<img src="/images/shape/h7-testimonial-shape-blur-mod.svg" alt="" />
			</div> */}
        </section>
    );
};

export default Team;
