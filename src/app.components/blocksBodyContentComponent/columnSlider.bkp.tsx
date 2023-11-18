// 'use client';
// import './columnSlider.css';
// import {useMemo, useRef, useState} from 'react';
// import clsx from "clsx";
// import {motion, AnimatePresence} from "framer-motion";
// import {wrap} from "popmotion";
// import {BlocksBodyContent_ContentType} from "~/models";
// import {BlocksBodyContentBlock} from "./block";
// import * as React from "react";
// import {useWindowDimensions} from "~/hooks/useWindowDimensions";
//
// interface IProps {
//     blocks: BlocksBodyContent_ContentType[];
// }
//
//
// const images = [
//     "http://local.dattu.ca:3000/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fm37z4qd8%2Fdevelopment%2F652e95d3d898101a57f21c06764d8a34ec58bfeb-2176x544.png&w=3840&q=75",
//     "http://local.dattu.ca:3000/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fm37z4qd8%2Fdevelopment%2Feee6a625dab0b4f4939b718dfd6c85f93f993615-1792x672.png&w=640&q=75",
// ];
//
//
// const ColumnSlider = ({blocks}: IProps) => {
//     // @ts-ignore
//     const ref = useRef<HTMLDivElement>(null)
//     const {width} = useWindowDimensions();
//
//     const [[page, direction], setPage] = useState([0, 0]);
//     const imageIndex = wrap(0, blocks.length, page);
//
//     const paginate = (newDirection: number) => {
//         setPage([page + newDirection, newDirection]);
//     };
//
//     const translateX = useMemo(() => {
//         if (ref.current && width >= 0) {
//             const offsetWidth = ref.current.offsetWidth;
//             return ((imageIndex * offsetWidth) * -1);
//         }
//         return 0;
//     }, [imageIndex, ref, width])
//
//     return <div ref={ref}
//                 className={clsx(
//                     'relative',
//                     'overflow-hidden',
//                     'h-auto',
//                     'pb-2',
//                     'bg-zinc-800/10',
//                     'dark:bg-zinc-800/90',
//                 )}
//         // whileTap={{cursor: 'grabbing'}}
//     >
//         {/*<AnimatePresence initial={false} custom={direction}>*/}
//         <div
//             className={clsx(
//                 'transition-all',
//                 'flex flex-row flex-nowrap',
//             )}
//             // animate={{x: translateX}}
//             // transition={{
//             //     x: {type: "spring", bounce: 60, stiffness: 300, damping: 30},
//             // }}
//             // drag
//             // dragConstraints={{ left: -(width * blocks.length), right: 0 }}
//         >
//             {
//                 blocks.map((block, index) => (
//                     <div
//                         key={block.sysId}
//                         className={clsx(
//                             'grow',
//                             'shrink-0',
//                             'basis-full',
//                         )}>
//                         {/*<BlocksBodyContentBlock block={block}/>*/}
//                         <img src={images[index]} alt={"AAA"}
//                             // whileTap={{cursor: 'grabbing'}}
//                         />
//                     </div>
//                 ))
//             }
//         </div>
//         {/*</AnimatePresence>*/}
//         <div className="next" onClick={() => paginate(1)}>
//             {"‣"}
//         </div>
//         <div className="prev" onClick={() => paginate(-1)}>
//             {"‣"}
//         </div>
//     </div>
// }
//
// export {
//     ColumnSlider
// }