export const CHANGE_URL = 'CHANGE_URL';

export function changeUrl(videoId) {
    return {
        type: CHANGE_URL,
        payload: videoId
    }
}