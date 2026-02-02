// import Link from "next/link";

// const SubserviceCard = ({subservice, idx}) => {
//     const {title, desc, id, data, url} = subservice || {};
//     const isValidUrl = url?.trim().length > 0 && url?.trim() !== '#';
//     return (
//         <div className="blog-item style-4">
//             <Link href={url}
//                   style={{
//                       color: 'black',
//                       cursor: isValidUrl ? 'pointer' : 'default',
//                       pointerEvents: isValidUrl ? 'auto' : 'none',
//                   }}>
//                 <div className="blog-content-mod">
//                     <div className="title-area">
//                         <div className="project-text">
//                             <h4 className="title">
//                                 {title}
//                             </h4>
//                             {url?.trim().length > 0 && url?.trim() !== '#' && (
//                                 <Link className="tji-icon-btn-mod" href={url}>
//                                     <i className="tji-arrow-right-long"></i>
//                                 </Link>
//                             )}
//                         </div>
//                         <p className="desc  wow fadeInUp" data-wow-delay=".8s">
//                             {desc}
//                         </p>
//                         <div className="desc blog-text-mod wow fadeInUp" data-wow-delay=".8s">
//                             <ul className="wow fadeInUp">
//                                 {data?.length
//                                     ? data?.map((d, idx) => (
//                                         <li key={idx}><span><i className="tji-list"></i></span>{d.value}</li>
//                                     ))
//                                     : ""}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     );
// };

// export default SubserviceCard;


import Link from "next/link";

const SubserviceCard = ({ subservice }) => {
  const { title, desc, data, url } = subservice || {};

  // URL validation
  const isValidUrl = !!url && url.trim() !== "" && url.trim() !== "#";

  // Card inner content (UNCHANGED design)
  const CardContent = (
    <div className="blog-content-mod">
      <div className="title-area">
        <div className="project-text">
          <h4 className="title">{title}</h4>

          {/* Button visible ONLY when URL is valid */}
          {isValidUrl && (
            <span className="tji-icon-btn-mod">
              <i className="tji-arrow-right-long"></i>
            </span>
          )}
        </div>

        <p className="desc wow fadeInUp" data-wow-delay=".8s">
          {desc}
        </p>

        <div className="desc blog-text-mod wow fadeInUp" data-wow-delay=".8s">
          <ul className="wow fadeInUp">
            {data?.length
              ? data.map((d, idx) => (
                  <li key={idx}>
                    <span>
                      <i className="tji-list"></i>
                    </span>
                    {d.value}
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="blog-item style-4">
      {isValidUrl ? (
        // Whole card clickable
        <Link
          href={url}
          style={{
            color: "black",
            cursor: "pointer",
            pointerEvents: "auto",
          }}
        >
          {CardContent}
        </Link>
      ) : (
        // Not clickable when URL invalid
        CardContent
      )}
    </div>
  );
};

export default SubserviceCard;
