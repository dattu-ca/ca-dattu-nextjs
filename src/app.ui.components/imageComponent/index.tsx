import {useMemo} from "react";
import clsx from "clsx";
import Image from 'next/image';
import {BodyImage} from "~/models";

interface IProps {
    image: BodyImage,
}

const ImageComponent = ({image}: IProps) => {

    const srcSet = useMemo(() => {
        const srcSet = [];
        if (image) {
            srcSet.push(`${image.desktopImage?.url}`)
            // if (image.mobileImage?.url) {
            //     srcSet.push(`${image.mobileImage?.url}`) //?fm=avif&w=640&q=75 640w
            // } else {
            //     srcSet.push(`${image.desktopImage?.url}`) //?fm=avif&w=640&q=75 640w
            // }
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
        <Image alt={image?.desktopImage?.alt || ''}
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
               // srcSet={srcSet.join(', ')}
               src={srcSet[0]}/>
    </div>
}

export {
    ImageComponent
};