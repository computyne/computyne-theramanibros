import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const BenifitsCard = ({ feature, idx }) => {
	const { icon, title, desc } = feature ? feature : {};
	return (
		<div className="choose-box style-2 right-swipe">
			<div className="choose-content">
				<div className="choose-icon">
					<i className={icon}></i>
				</div>
				<h4 className="title">{title}</h4>
				<p className="desc">{desc}</p>
				{/*<ButtonPrimary text={"Read More"} url={"/about"} isTextBtn={true} />*/}
			</div>
		</div>
	);
};

export default BenifitsCard;
