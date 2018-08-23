// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import WayOfTheTiger from './components/WayOfTheTiger';

const BOOKMARK_KEY = 'bookmarks';

const container = document.createElement('div');
document.body && document.body.appendChild(container);

type Bookmark = {
    section: string,
    time: string,
    data: Object,
};

function loadBookmarks(): Bookmark[] {
    return JSON.parse(localStorage.getItem(BOOKMARK_KEY) || '[]');
}

function saveBookmarks(bookmarks: Bookmark[]) {
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
}

function gotoBookmark(idx) {
    const bookmark = loadBookmarks()[idx];
    if (confirm(`Really load bookmark to section ${bookmark.section}?`)) {
        return bookmark.data;
    }
    return null;
}

function addBookmark(data) {
    const section: ?string = prompt('Enter section to bookmark');
    if (typeof section === 'string') {
        const time = new Date()
            .toISOString()
            .split('.')[0]
            .replace('T', ' ');

        saveBookmarks([
            ...loadBookmarks(),
            { section, time, data: JSON.parse(JSON.stringify(data)) },
        ]);
        render();
    }
}

function render() {
    ReactDOM.render(
        <WayOfTheTiger
            bookmarks={loadBookmarks().map(({ section, time }) => ({ section, time }))}
            addBookmark={addBookmark}
            gotoBookmark={gotoBookmark}
        />,
        container,
    );
}

render();
