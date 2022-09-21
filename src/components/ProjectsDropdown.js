
// import React, { useState } from 'react';
// import { ProjectsMenuItems } from './ProjectsMenuItems';
// import './Dropdown.css';
// import { Link } from 'react-router-dom';

// function ProjectsDropdown() {
//     const [pClick, setPClick] = useState(false);

//     const pHandleClick = () => setPClick(!pClick);

//     return (
//         <>
//             <ul
//                 onClick={pHandleClick}
//                 className={pClick ? 'dropdown-menu clicked' : 'dropdown-menu'}
//             >
//                 {ProjectsMenuItems.map((item, index) => {
//                     return (
//                         <li key={index}>
//                             <Link
//                                 className={item.cName}
//                                 to={item.path}
//                                 onClick={() => setPClick(false)}
//                             >
//                                 {item.title}
//                             </Link>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </>
//     );
// }

// export default ProjectsDropdown;