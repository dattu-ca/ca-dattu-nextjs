import {YoutubeIFrameComponent} from '../';
import {render, screen} from "@testing-library/react";

const mockYouTubeData = {
    youTubeUrl: '',
    videoId: 'testVideoId',
    displayName: 'mock display name'
}

describe('<YoutubeIFrameComponent', () => {
    it('should render', () => {
        render(<YoutubeIFrameComponent data={mockYouTubeData}/>)
        const {getByRole, getByTestId} = screen;
        expect(getByTestId('YouYube-iframe-component')).toBeInTheDocument();
        expect(getByTestId('YouYube-iframe-component')).toHaveAttribute('src', `https://www.youtube.com/embed/${mockYouTubeData.videoId}`)
    });
})