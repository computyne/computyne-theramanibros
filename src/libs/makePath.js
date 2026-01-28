// const makePath = (text) => {
//   const pathMakeAbleText = text
//     ? text.toLowerCase()?.split("/").join(" ").split("&").join(" ")
//     : "";
//   const path = pathMakeAbleText ? pathMakeAbleText?.split(" ")?.join("_") : "#";
//   return path;
// };

// export default makePath;

const makePath = (text) => {
    if (!text) return "#";

    // if array → convert to string
    const safeText = Array.isArray(text) ? text.join(" ") : String(text);

    const path = safeText
        .toLowerCase()
        .replace(/[\/&]/g, " ")
        .trim()
        .split(/\s+/)
        .join("_");

    return path;
};

export default makePath;
