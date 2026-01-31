import Link from "next/link";
import FunfactSingle from "./FunfactSingle";

const TeamCard2 = ({ teamMember, activeMember, handleClick }) => {
	const {
		id,
		name,
		desig,
		imgLarge = "/images/team/team-1-big.webp",
	} = teamMember || {};
	return (
		<div
			className={`team-item 
				${
				id === activeMember?.id ? "active" : ""
			}
			 wow fadeInUp`}
			data-wow-delay=".3s"
			// onMouseEnter={() => handleMouseEnter(teamMember)}
			onClick={() => handleClick(teamMember)}
			role="button"
			tabIndex={0}
			onKeyDown={(e) => e.key === "Enter" && handleClick(teamMember)}
		>
			<div className="team-item-inner">
				<div className="team-content">
					<h3 className="title">
						{" "}
						{name}
					</h3>
					<span className="designation">{desig}</span>
				</div>
			</div>
			<div className="team-img-wrap">
				<div className="team-img">
					<div className="row row-gap-4">

						<div className="col-lg-6 col-md-6 order-lg-4 order-4">
							<div
								className="countup-item style-2 wow fadeInUp"
								data-wow-delay=".5s"
							>
								<span className="count-icon">
									<i className="tji-worldwide"></i>
								</span>
								<span className="steps">02.</span>
								<div className="count-inner">
									<span className="count-text">Reach Worldwide</span>
									<FunfactSingle currentValue={20} symbol="M" />
								</div>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 order-lg-5 order-5">
							<div
								className="countup-item style-2 wow fadeInUp"
								data-wow-delay=".7s"
							>
								<span className="count-icon">
									<i className="tji-growth"></i>
								</span>
								<span className="steps">03.</span>
								<div className="count-inner">
									<span className="count-text">Faster Growth</span>
									<FunfactSingle currentValue={8.5} symbol="X" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamCard2;
