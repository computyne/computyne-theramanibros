import Link from "next/link";

const ButtonPrimaryLoading = ({className, text, isTextBtn, url, type, iconName, loading = false}) => {
    return (
        <>
            {type ? (
                <button
                    type={type ? type : "submit"}
                    className={`tj-primary-btn ${className ? className : ""}`}
                >
					<span className="btn-text">
						<span>{loading ? "Submitting..." : text}</span>
					</span>
                    <span className="btn-icon">
                        {loading ? (
                            <span className="loader" />
                        ) : (
                            <i className="tji-arrow-right-long"></i>
                        )}
                    </span>
                </button>
            ) : (
                <Link
                    href={url ? url : "/"}
                    className={`${isTextBtn ? "text-btn" : "tj-primary-btn"} ${
                        className ? className : ""
                    }`}
                >
					<span className="btn-text">
						<span>{text}</span>
					</span>
                    <span className="btn-icon">
						<i className="tji-arrow-right-long"></i>
					</span>
                </Link>
            )}
        </>
    );
};

export default ButtonPrimaryLoading;
