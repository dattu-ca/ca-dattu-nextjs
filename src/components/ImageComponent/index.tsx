import {IBodyImage} from "~/models";
import {ImageComponent} from "./imageComponent";
import clsx from "clsx";

interface IProps {
    image: IBodyImage
}

const ImageComponentWrapper = ({image}: IProps) => {

    return <div className={clsx(
        'flex',
        {
            ['justify-start']: image.align === 'left',
            ['justify-center']: image.align === 'center',
            ['justify-end']: image.align === 'right',
        }
    )}>
        <div className={clsx(
            'max-w-full',
            'max-h-full',
        )} style={{
            width: image.maxWidth,
            height: image.maxHeight,
        }}>
            <ImageComponent image={image}/>
        </div>
    </div>
}

export {
    ImageComponentWrapper
};


/**
 <Image
 src={`https:${banner.desktopImage?.url}?fm=avif`}
 className={clsx(
                                                'w-full object-cover object-center aspect-[8/2]'
                                            )}
 alt={banner.desktopImage?.alt as string}
 width={400}
 height={400}
 sizes="100vw"
 />*/

/**
 <img alt="A person standing in front of objects that look like machines." loading="lazy" width="400"
 height="400"
 decoding="async" data-nimg="1" className="w-full object-cover object-center aspect-[8/2]"
 style="color:transparent"
 sizes="100vw"
 srcSet="w=640&amp;q=75 640w,
 w=750&amp;q=75 750w,
 w=828&amp;q=75 828w,
 w=1080&amp;q=75 1080w,
 w=1200&amp;q=75 1200w,
 w=1920&amp;q=75 1920w,
 w=2048&amp;q=75 2048w,
 w=3840&amp;q=75 3840w"
 src="w=3840&amp;q=75">

 */


// return (
//     <picture className={clsx(
//         'transition-all',
//         'block w-auto h-[30px]',
//         classes.flip
//     )}>
//         <source
//             media="(max-width: 768px)"
//             srcSet={`${logo?.mobileImage?.url} 768w`}
//             sizes="768px"
//             className='w-auto h-[40px]'
//         />
//         <source
//             srcSet={`${logo?.desktopImage?.url} 1280w`}
//             sizes="1280px"
//         />
//         <img src={logo?.desktopImage?.url}
//              alt={logo?.desktopImage?.alt}
//              className='h-[40px] max-w-none w-auto'
//              width={40}
//              height={40}
//         />
//     </picture>
// )