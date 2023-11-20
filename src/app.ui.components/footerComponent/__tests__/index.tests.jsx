import {FooterComponent} from '../';
import {render, screen} from "@testing-library/react";


const mockData = {
    "cmsSource": "Sanity",
    "contentType": "SiteFooter",
    "sysId": "siteFooter",
    "slug": "siteFooter",
    "links": {
        "cmsSource": "Sanity",
        "contentType": "BodyLinks",
        "sysId": "1f5b4223-fe1a-40aa-a173-b3c1008c0f39",
        "links": [
            {
                "id": "5",
                "url": "/",
                "label": "Home",
                "target": "_self",
                "links": []
            },
            {
                "id": "1",
                "url": "/posts",
                "label": "Articles",
                "target": "_self",
                "links": []
            },
            {
                "id": "3",
                "url": "/categories",
                "label": "All Categories",
                "target": "_self",
                "links": []
            },
            {
                "id": "4",
                "url": "/tags",
                "label": "All Tags",
                "target": "_self",
                "links": []
            },
            {
                "id": "2",
                "url": "/page/contact",
                "label": "Contact",
                "target": "_self",
                "links": []
            }
        ]
    },
    "copyright": "© 2023 Dattu Patel.  All rights reserved."
}

describe('<FooterComponent />', () => {
    it('should render', () => {
        render(<FooterComponent footer={mockData}/>)
        const {getByText, getAllByRole} = screen;
        expect(getAllByRole('link').length).toBe(5);
        expect(getByText(/2023 Dattu Patel. All rights reserved./i)).toBeInTheDocument();
    });
})