import { GifRoomPage } from './app.po';

describe('gif-room App', function() {
  let page: GifRoomPage;

  beforeEach(() => {
    page = new GifRoomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
