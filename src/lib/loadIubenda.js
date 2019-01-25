import partial from 'ramda/src/partial';

export default (typeof window !== 'undefined')
    ? partial((w, d) => {
        const loader = () => {
            const s = d.createElement('script');
            const tag = d.getElementsByTagName('script')[0];
            s.src = 'https://cdn.iubenda.com/iubenda.js';

            tag.parentNode.insertBefore(s, tag);
        };

        if (w.addEventListener) {
            w.addEventListener('load', loader, false);
        } else if (w.attachEvent) {
            w.attachEvent('onload', loader);
        } else {
            w.onload = loader; //eslint-disable-line
        }
    }, [window, document])
    : () => {};
