import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";

const ProcessCard = ({processSingle, idx}) => {
    const {title, img, desc, id, day} = processSingle ? processSingle : {};
    return (
        <div
            className="process-item-mod wow fadeInLeft"
            data-wow-delay={makeWowDelay(idx, 0.3)}
        >
            <div className="process-step">
                <span>{modifyNumber(idx + 1)}</span>
            </div>
            <div className="process-content">
                <h4 className="title">{title}</h4>
                <p className="desc">{desc}</p>
                <div className="process-timeline">
                    <span className="timeline-badge" style={{
                        backgroundColor: 'transparent',
                        color: '#ff6b35',
                        border: '1px solid #ff6b35',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: '600',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        marginTop: '8px'
                    }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {day}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProcessCard;
