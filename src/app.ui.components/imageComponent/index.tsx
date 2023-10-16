import { useMemo } from "react";
import clsx from "clsx";
import { BodyImage } from "~/models";

interface IProps {
    image: BodyImage,
}

const ImageComponent = ({ image }: IProps) => {

    const srcSet = useMemo(() => {
        const srcSet = [];
        if (image) {
            if (image.mobileImage?.url) {
                srcSet.push(`${image.mobileImage?.url}`) //?fm=avif&w=640&q=75 640w
            } else {
                srcSet.push(`${image.desktopImage?.url}`) //?fm=avif&w=640&q=75 640w
            }
            // const sizes = [750, 828, 1080, 1200, 1920, 2048, 3840]
            // sizes.forEach(size => {
            //     srcSet.push(`${image.desktopImage?.url}`) // ?fm=avif&w=${size}&q=75 ${size}w
            // })
        }
        return srcSet;
    }, [image]);

    return <div className={clsx(
        'flex',
        {
            ['justify-start']: image.align === 'left',
            ['justify-center']: image.align === 'center',
            ['justify-end']: image.align === 'right'
        }
    )}>
        <img alt={image?.desktopImage?.alt}
            loading="lazy"
            width={image.maxWidth || 250}
            height={image.maxHeight || 10}
            decoding="async"
            data-nimg="1"
            className={clsx(
                'w-full',
                'h-full',
                {
                    ['border bg-white p-1 dark:border-neutral-700 dark:bg-neutral-800']: image.border,
                    ['shadow-lg dark:shadow-black/30']: image.shadow
                }
            )}
            style={{
                maxWidth: image.maxWidth || 'auto',
                maxHeight: image.maxHeight || 'auto'
            }}
            sizes="100vw"
            srcSet={srcSet.join(', ')}
            src={srcSet.length > 1 ? srcSet[1] : srcSet[0]} />
    </div>
}

export {
    ImageComponent
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