import {GoogleTagManager} from '@next/third-parties/google'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

const GoogleAnalytics = () => {
    return <GoogleTagManager gtmId={GA_TRACKING_ID}/>
}

export default GoogleAnalytics
