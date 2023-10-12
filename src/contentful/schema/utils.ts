import {mapContentful as mapBodyImagesContentful} from "~/contentful/schema/bodyImages.schema";
import {mapContentful as mapBodyYoutubeContentful} from "~/contentful/schema/bodyYoutube.schema";
import {BodyImage, BodyYouTube} from "~/models";
import {IBodyImages, IBodyYouTube} from "~/contentful/schema/generated";

export const mapBanners = (banners: (IBodyImages | IBodyYouTube)[]) => {
    const result = banners.map(banner => {
        const contentType = banner.sys.contentType.sys.id;
        if (contentType === 'bodyImages') {
            return mapBodyImagesContentful(banner)
        } else if (contentType === 'bodyYouTube') {
            return mapBodyYoutubeContentful(banner);
        }
        return undefined;
    });
    return result.filter(item => Boolean(item)) as (BodyYouTube | BodyImage)[];
}

export const mapFeaturedBanner = (banner: (IBodyImages | IBodyYouTube)) => {
    const contentType = banner.sys.contentType.sys.id;
    if (contentType === 'bodyImages') {
        return mapBodyImagesContentful(banner)
    } else if (contentType === 'bodyYouTube') {
        return mapBodyYoutubeContentful(banner);
    }
    return undefined;
}