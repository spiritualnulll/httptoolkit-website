const { posthog } = require('posthog-js');

const POSTHOG_KEY = process.env.GATSBY_POSTHOG_KEY;

if (POSTHOG_KEY) {
    posthog.init(POSTHOG_KEY, {
        api_host: 'https://events.httptoolkit.tech',
        autocapture: false, // We don't need events here - just page views is fine.
        persistence: "memory" // No cookies/local storage please
    });
}

exports.onRouteUpdate = () => {
    if (POSTHOG_KEY) {
        posthog.capture('$pageview');
    }
};